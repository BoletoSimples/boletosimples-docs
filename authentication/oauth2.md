---
layout: pt
title: OAuth2 - API do Boleto Simples
en: /en/authentication
---

## OAuth2

#### Nós recomendamos essa opção caso sua app necessite acessar contas de terceiros.

O protocolo [OAuth2](http://en.wikipedia.org/wiki/OAuth#OAuth_2.0) permite o acesso parcial ou total por terceiros sem necessidade de compartilhar sua senha. É mais complexo que acessar por usuário e senha mas é mais flexível. OAuth2 funciona muito bem para aplicações web, assim como para desktop e mobile.

### Bibliotecas

Há bibliotecas OAuth2 para quase todas as linguagens visto que é um protocolo amplamente utilizado na industria de software e por empresas como like Google e Facebook.

[Escolha uma biblioteca antes de começar](http://oauth.net/code/).

### Registro da Aplicação

Para começar você precisa [solicitar o cadastro da sua aplicação](http://suporte.boletosimples.com.br) em nossos servidores. Nós te enviaremos um `client_id` e `client_secret`.

Você também deverá nos fornecer uma URL de redirecionamento `redirect_uri` para o seu site. Se você desenvolve para desktop ou mobile, veja na seção a baixo como configurar a `redirect_uri`.

### Endpoints

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th width='150px'>Sandbox</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Authorize URL</td>
      <td>GET https://sandbox.boletosimples.com.br/api/v1/oauth2/authorize</td>
    </tr>
    <tr>
      <td>Token URL</td>
      <td>POST https://sandbox.boletosimples.com.br/api/v1/oauth2/token</td>
    </tr>
  </tbody>
</table>

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th width='150px'>Produção</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Authorize URL</td>
      <td>GET https://boletosimples.com.br/api/v1/oauth2/authorize</td>
    </tr>
    <tr>
      <td>Token URL</td>
      <td>POST https://boletosimples.com.br/api/v1/oauth2/token</td>
    </tr>
  </tbody>
</table>

### Resumo do funcionamento

OAuth2 requer que o usuário autorize o acesso da sua app à conta dele. Para autenticar o usuário no OAuth2:

*   Use o `client_id` e `client_secret` que você obteve conosco durante o registro para redircionar o usuário para a `Authorize URL`. Opcionalmente inclua o `scope` para acessar alguma [informação em específico](/permissions).
*   Se o usuário autorizar sua app, ele será redirecionado para a `redirect_uri` que você configurou no registro com o parâmetro `code`.
*   Use o parâmetro `code` recebido para gerar um `access_token` fazendo uma requisição no `Token URL`.
*   Use o `access_token` para fazer as requisições em nome do usuário.


### Passo a Passo detalhado

1. Considerando as seguintes informações:

    * **Client ID** -> fc4e525ff3
    * **Client Secret** -> 95ea9a477d
    * **Redirect URL** -> http://seusite.com.br


1. Redirecione o usuário para o endereço abaixo.

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth2/authorize?response_type=code&amp;client_id=fc4e525ff3&amp;redirect_uri=http://seusite.com.br</pre>

1. O usuário verá uma tela solicitando a autorização para a sua aplicação acessar os dados dele e com dois links, um para declinar e outro para autorizar que redirecionam para os seguintes endereços:

    <small>Caso seja declinado</small>

    <pre class="bash">http://seusite.com.br/?error=access_denied&error_description=O+dono+do+recurso+ou+servidor+de+autorização+negou+a+solicitação</pre>

    <small>Caso seja autorizado</small>

    <pre class="bash">http://seusite.com.br/?code=57858ba460</pre>

    `code` é o código para que você possa solicitar o token de acesso.

1. Faça uma requisição `POST` para o endereço abaixo para receber o access token.

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth2/token?grant_type=authorization_code&amp;code=57858ba460&amp;redirect_uri=http://seusite.com.br&amp;client_id=fc4e525ff3&amp;client_secret=95ea9a477d</pre>

    <small>Requisição:</small>

    <pre class="bash">
    curl -i \
    -d 'grant_type=authorization_code&code=57858ba460&redirect_uri=http://seusite.com.br&client_id=fc4e525ff3&client_secret=95ea9a477d' \
    -H 'User-Agent: MyApp (myapp@example.com)' \
    -X POST https://sandbox.boletosimples.com.br/api/v1/oauth2/token
    </pre>

    <small>Resposta em caso de erro:</small>

    <pre class="bash">
    HTTP/1.1 401 Unauthorized
    Date: Fri, 17 Oct 2014 18:39:47 GMT
    Status: 401 Unauthorized
    Content-Type: application/json; charset=utf-8
    ...

    {"error":"invalid_grant","error_description":"A permissão de autorização provida é inválida, está expirada, revogada, não coincide com a URL de redirecionamento usada na requisição de autorização ou foi emitida por outro cliente."}
    </pre>

    <small>Resposta em caso de sucesso:</small>

    <pre class="bash">
    HTTP/1.1 200 OK
    Date: Fri, 17 Oct 2014 18:39:47 GMT
    Status: 200 OK
    Content-Type: application/json; charset=utf-8
    ...

    {"access_token":"ada046e3cc","token_type":"bearer","scope":"login"}
    </pre>

1. Agora você pode usar o `access_token` para realizar chamadas a API. Esse token não expira.

    <small>Requisição:</small>

    <pre class="bash">
    curl -i \
    -u ada046e3cc:x \
    -H 'Content-Type: application/json' \
    -H 'User-Agent: MyApp (myapp@example.com)' \
    -X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
    </pre>

    <small>Resposta:</small>

    <pre class="bash">
    HTTP/1.1 200 OK
    Date: Fri, 17 Oct 2014 18:14:56 GMT
    Status: 200 OK
    ...

    # dados do usuário que autorizou o acesso
    </pre>



### Exemplo em Ruby

<pre class="ruby">
require 'oauth2'

redirect_uri = 'http://www.seusite.com.br/oauth2/callback' # tem que ser a mesma url do registro

client = OAuth2::Client.new(ENV['BOLETOSIMPLES_ID'], ENV['BOLETOSIMPLES_SECRET'], site: 'https://sandbox.boletosimples.com.br/api/v1')

`open "#{client.auth_code.authorize_url(redirect_uri: redirect_uri)}"`
print "Coloque o código retornado na URL: "

code = STDIN.readline.chomp

token = client.auth_code.get_token(code, redirect_uri: redirect_uri)

puts JSON.parse(token.get('/api/v1/userinfo').body)
</pre>

### Desenvolvendo aplicações para Mobile e Desktop

Se você está desenvolvendo para mobile ou desktop, você talvez não tenha uma url de redirecionamento. Nestes
casos você pode configurar a url para: `urn:ietf:wg:oauth:2.0:oob`. Isto faz com que o servidor
mostre uma página em branco com o código de autorização na url e título da página. Você pode ler essa informação
de alguma forma dentro da sua aplicação para poder utilizada mais tarde.

Isso usa a mesma técnica adotada pelo
[Google](https://developers.google.com/accounts/docs/OAuth2InstalledApp).

[Aqui tem um guia (Em inglês)](http://www.slideshare.net/briandavidcampbell/is-that-a-token-in-your-phone-in-your-pocket-or-are-you-just-glad-to-see-me-oauth-20-and-mobile-devices) com um exemplo para iOS e Android.