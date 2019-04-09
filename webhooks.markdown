---
title: Webhooks
position: 11
layout: pt
en: "/en/webhooks"
---

## Webhooks

Webhooks permitem que sistemas externos recebam notificações de todos os eventos que ocorrem no sistema. Quando um evento acontece, o sistema envia uma requisição `HTTP POST` para a URL configurada no webhook com as informações relativas ao evento.
Ao receber a notificação, o sistema pode executar diversas tarefas, dependendo do objetivo da integração.

Os webhooks também são chamados de `Callbacks` ou `Reverse API`.

### Funcionamento

Quando um evento é disparado dentro do Boleto Simples, são geradas notificações para cada webhook que esteja configurado para receber o tal evento. Essas notificações geram automaticamente uma requisição que é realizada na URL configurada no webhook. O Boleto Simples mantém o registro de todas as requisições geradas, bem como as informações da requisição (Request) e da resposta do servidor externo (Response).

#### Requisição

Além dos cabeçalhos normais de uma requisição `HTTP POST`, os seguintes cabeçalhos são enviados:

| Cabeçalho                   | Descrição                                          |
|-----------------------------|----------------------------------------------------|
| X-BoletoSimples-Event       | [Código do evento](/webhooks/events) que gerou essa notificação. |
| X-BoletoSimples-Delivery-Id | ID único da notificação, no formato [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). |
| X-BoletoSimples-Environment | Ambiente de onde a notificação<br/> foi disparada (`production` ou `sandbox`). |
| X-Hub-Signature             | [Assinatura de segurança](/webhooks/signature), para você verificar<br/> que a chamada saiu realmente dos servidores<br/> do Boleto Simples. |

Exemplo de requisição:

<pre class="http">
POST /15a0nqn1 HTTP/1.1

Host: requestb.in
X-Boletosimples-Delivery-Id: 94d4eab5-787a-4209-8282-5bc1398575ab
X-Hub-Signature: sha1=bb8ed09391796e2f89b0c42aa0dec9b6d28cafc5
Total-Route-Time: 0
X-Request-Id: 8ed758bd-3351-4724-aaa6-2ad550c3f0c7
User-Agent: BoletoSimples-Robot (sandbox)
Content-Type: application/json
X-Boletosimples-Event: ping
Via: 1.1 vegur
Content-Length: 77
Connect-Time: 1
Connection: close
X-Boletosimples-Environment: sandbox

{
  "event_code": "ping",
  "webhook": {
    "id": 1,
    "url": "http://requestb.in/15a0nqn1"
  }
}
</pre>

#### Resposta

O servidor espera uma resposta positiva, ou seja, com o `Status Code` `2xx`. Caso não esteja familiarizado com isso, leia sobre [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

Todas as outras informações retornadas no cabeçalho ou no conteúdo da resposta são ignoradas, porém são armazenadas. Nós guardamos os cabeçalhos e o conteúdo da resposta. Por esse motivo é importante que nenhuma informação sigilosa seja retornada nas requisições de notificação dos webhooks.

#### Falhas

O Boleto Simples faz a retentativa de entrega caso o seu servidor retorne um erro, ou seja, com o `Status Code` **diferente de** `2xx`. 

Serão feitas 5 tentativas de entrega da notificação. As tentativas são feitas de hora em hora.

Se o seu servidor não responder em até 5 segundos, será considerado uma falha e retornará erro de timeout.
