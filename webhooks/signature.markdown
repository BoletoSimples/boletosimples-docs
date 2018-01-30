---
title: Assinatura de Segurança
position: 20
layout: pt
en: "/en/webhooks/signature"
---

## Assinatura de Segurança

Ao receber uma requisição de notificação de um evento, é muito importante validar se a requisição realmente saiu do Boleto Simples e não foi forjada por um terceiro.

### Cenário de intrusão

Vamos considerar que a integração que você está desenvolvendo seja do Boleto Simples com um sistema de e-commerce. Ao receber o evento `bank_billet.paid`, que ocorre quando um boleto é pago, o sistema de e-commerce libera o pedido para que a entrega da mercadoria seja feita.

Imagina que um hacker descobre qual a URL do sistema de e-commerce que recebe as notificações e envia uma notificação forjada, como se fosse o Boleto Simples enviando. Nesse caso, o evento do boleto sendo pago não aconteceu, mas o seu sistema irá liberar o pedido da mesma forma.

### Como se proteger

Para se proteger deste tipo de ataque, é necessário implementar uma validação antes do processamento de todas as requisições, que certifica que a requisição foi enviada pelo Boleto Simples.

Todas as requisições feitas pelo Boleto Simples vão com uma assinatura no cabeçalho `X-Hub-Signature`. A assinatura é um string criptografado que é basedo no conteúdo da requisição e na Chave Secreta do webhook.

Para validar se a requisição é real, é necessário gerar a assinatura e comparar com a assinatura que está no cabeçalho da requisição. Caso as assinatura recebida seja igual a assinatura gerada, a requisição é válida e segura.

Um hacker, sem ter acesso a Chave Secreta, não consegue gerar a assinatura e por consequência não consegue forjar a requisição.

É muito relevante manter a Chave Secreta segura, ou seja, não colocando no código fonte do sistema. É recomendável armazenar como variável de ambiente no servidor de produção ou sistema de configuração que seja seguro e criptografado.

Qualquer pessoa com acesso à Chave Secreta é capaz de forjar requisições como sendo vindas do Boleto Simples. Se você acredita que a Chave Secreta vazou de alguma forma, é aconselhável renovar a chave na página de exibição dos dados do webhook.

### Chave Secreta do webhook

Para pegar a chave secreta do webhook vá até a página dos webhooks [Minha Conta > API > Webhooks](https://boletosimples.com.br/conta/api/webhooks) e selecione o webhook em questão.

![](/img/webhook-show.png)

### Exemplo de código

#### Ruby

O exemplo abaixo está usando o framework minimalista em Ruby, chamado [Sinatra](http://www.sinatrarb.com/).

<pre class="ruby">
# -*- encoding : utf-8 -*-
require 'sinatra'
require 'json'

post '/callbacks/boletosimples' do
  verify_signature

  payload = JSON.parse(request_body)
  "Event Code: #{payload['event_code']}"
end

def request_body
  @request_body ||= request.body.read.to_s
end

def secret_key
  ENV['WEBHOOK_SECRET_KEY']
end

def signature_from_request
  request.env['HTTP_X_HUB_SIGNATURE']
end

def generated_signature
  'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), secret_key, request_body)
end

def verify_signature
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature_from_request, generated_signature)
end
</pre>

Algumas observações são importantes:

* A assinatura sempre começa com `sha1=` e deve ser gerada usando a Chave Secreta do webhook e o conteúdo da requisição (`request.body`)
* A Chave Secreta não deve ser colocada *hard-coded* no código fonte e é recomendável que seja armazenada em uma variável de ambiente.
* Não é recomendável usar o operador `==` para comparar a assinatura recebida e a assinatura gerada. O método como `Rack::Utils.secure_compare` executa uma comparação segura contra alguns tipos de *[timing attacks](https://en.wikipedia.org/wiki/Timing_attack)*.

#### Projeto no Github

Para fins de testes e debug você pode baixar esse código para rodar em sua máquina em:
[https://github.com/BoletoSimples/boletosimples-webhook-test](https://github.com/BoletoSimples/boletosimples-webhook-test)

#### PHP

<pre class="ruby">

define('WEBHOOK_SECRET_KEY', 'my_shared_secret');

function verify_webhook($data, $hmac_header)
{
  $calculated_hmac = hash_hmac('sha1', $data, WEBHOOK_SECRET_KEY, true);
  return ($hmac_header == $calculated_hmac);
}

$hmac_header = $_SERVER['HTTP_X_HUB_SIGNATURE'];
$data = file_get_contents('php://input');
$verified = verify_webhook($data, $hmac_header);
error_log('Webhook verified: '.var_export($verified, true)); //check error.log to see the result

</pre>