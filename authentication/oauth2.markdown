---
title: OAuth2
position: 0
layout: pt
en: "/en/authentication"
---

## OAuth2

#### Nós recomendamos essa opção caso sua app necessite acessar contas de terceiros.

O protocolo [OAuth2](http://en.wikipedia.org/wiki/OAuth#OAuth_2.0) permite o acesso parcial ou total por terceiros sem necessidade de compartilhar sua senha. É mais complexo que acessar por usuário e senha mas é mais flexível. OAuth2 funciona muito bem para aplicações web, assim como para desktop e mobile.

### Bibliotecas

Há bibliotecas OAuth2 para quase todas as linguagens visto que é um protocolo amplamente utilizado na industria de software e por empresas como like Google e Facebook.

[Escolha uma biblioteca antes de começar](http://oauth.net/code/).

### Registro da Aplicação

Para começar você precisa [cadastrar a sua aplicação](https://sandbox.boletosimples.com.br/conta/api/aplicacoes). Nós te forneceremos um `client_id` e `client_secret`.

Você também deverá nos fornecer uma URL de Redirecionamento `redirect_uri` para o seu site. Se você desenvolve para desktop ou mobile, veja na seção a baixo como configurar a `redirect_uri`.

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

*   Use o `client_id` e `client_secret` que você obteve conosco durante o registro para redircionar o usuário para a `Authorize URL`. Opcionalmente inclua o `scope` para acessar alguma [informação em específico](/authentication/permissions).
*   Se o usuário autorizar sua app, ele será redirecionado para a `redirect_uri` que você configurou no registro com o parâmetro `code`.
*   Use o parâmetro `code` recebido para gerar um `access_token` fazendo uma requisição no `Token URL`.
*   Use o `access_token` para fazer as requisições em nome do usuário.


### Passo a Passo detalhado

1. Considerando as seguintes informações:

    * **Client ID** -> fc4e525ff3
    * **Client Secret** -> 95ea9a477d
    * **Redirect URL** -> http://seusite.com.br


1. Redirecione o usuário para o endereço abaixo.

    <ul class="nav nav-tabs" role="tablist">
      <li class="active"><a href="#bash1" role="tab" data-toggle="tab">Bash</a></li>
      <li><a href="#ruby1" role="tab" data-toggle="tab">Ruby</a></li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="bash1">
       <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth2/authorize?response_type=code&amp;client_id=fc4e525ff3&amp;redirect_uri=http://seusite.com.br</pre>
      </div>

      <div class="tab-pane" id="ruby1">
        <pre class="ruby">
    client_id = 'fc4e525ff3'
    client_secret = '95ea9a477d'
    redirect_url = 'http://seusite.com.br'

    client = OAuth2::Client.new(client_id, client_secret, site: 'https://sandbox.boletosimples.com.br/api/v1')
    redirect_to client.auth_code.authorize_url(redirect_uri: redirect_url)
        </pre>
      </div>

    </div>

1. O usuário verá uma tela solicitando a autorização para a sua aplicação acessar os dados dele e com dois links, um para declinar e outro para autorizar que redirecionam para os seguintes endereços:

    <small>Caso seja declinado</small>

    <pre class="bash">http://seusite.com.br/?error=access_denied&error_description=O+dono+do+recurso+ou+servidor+de+autorização+negou+a+solicitação</pre>

    <small>Caso seja autorizado</small>

    <pre class="bash">http://seusite.com.br/?code=57858ba460</pre>

    `code` é o código para que você possa solicitar o token de acesso.

1. Faça uma requisição `POST` para o endereço abaixo para receber o access token.

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth2/token?grant_type=authorization_code&amp;code=57858ba460&amp;redirect_uri=http://seusite.com.br&amp;client_id=fc4e525ff3&amp;client_secret=95ea9a477d</pre>

    <ul class="nav nav-tabs" role="tablist">
      <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
      <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="bash2">
        <small>Requisição:</small>

        <pre class="bash">
curl -i \
-d 'grant_type=authorization_code&code=57858ba460&redirect_uri=http://seusite.com.br&client_id=fc4e525ff3&client_secret=95ea9a477d' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/oauth2/token'
        </pre>

        <small>Resposta em caso de erro:</small>

    <pre class="http">
    HTTP/1.1 401 Unauthorized
    Date: Fri, 17 Oct 2014 18:39:47 GMT
    Status: 401 Unauthorized
    Content-Type: application/json; charset=utf-8
    ...

    {"error":"invalid_grant","error_description":"A permissão de autorização provida é inválida, está expirada, revogada, não coincide com a URL de redirecionamento usada na requisição de autorização ou foi emitida por outro cliente."}
    </pre>

        <small>Resposta em caso de sucesso:</small>

    <pre class="http">
    HTTP/1.1 200 OK
    Date: Fri, 17 Oct 2014 18:39:47 GMT
    Status: 200 OK
    Content-Type: application/json; charset=utf-8
    ...

    {"access_token":"ada046e3cc","token_type":"bearer","scope":"login"}
    </pre>
      </div>
      <div class="tab-pane" id="ruby2">
        <pre class="ruby">
    client_id = 'fc4e525ff3'
    client_secret = '95ea9a477d'
    redirect_url = 'http://seusite.com.br'
    code = 'código de autorização retornado'

    client = OAuth2::Client.new(client_id, client_secret, site: 'https://sandbox.boletosimples.com.br/api/v1')
    access_token = client.auth_code.get_token(code, redirect_uri: redirect_uri)
        </pre>
      </div>
    </div>

1. Agora você pode usar o `access_token` para realizar chamadas a API. Esse token não expira.

    <ul class="nav nav-tabs" role="tablist">
      <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
      <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="bash3">
        <small>Requisição:</small>

        <pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/userinfo'
        </pre>

        <small>Resposta:</small>

    <pre class="http">
    HTTP/1.1 200 OK
    Date: Fri, 17 Oct 2014 18:14:56 GMT
    Status: 200 OK
    ...

    # dados do usuário que autorizou o acesso
    </pre>

      </div>
      <div class="tab-pane" id="ruby3">
        <pre class="ruby">
access_token.get('/api/v1/userinfo').body
        </pre>
      </div>
    </div>
    
### Cadastrando contas no Boleto Simples com a API de Parceiro

Para parceiros interessados na criação de novas contas no Boleto Simples a partir do seu produto,
será necessário obter um tipo especial de token de acesso.

Para isso, [cadastre a sua aplicação](https://sandbox.boletosimples.com.br/conta/api/aplicacoes) e obtenha o `client_id` e `client_secret`.

Depois obtenha o token de acesso usando o tipo de permissão `client_credentials`:

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl https://sandbox.boletosimples.com.br/api/v1/oauth2/token \
-d 'grant_type=client_credentials&client_id=seu_client_id&client_secret=seu_client_secret'
</pre>

    <small>Resposta:</small>

<pre class="http">
{
  "access_token":"397946a4ad90110b918c111261c184beb6cb515988688d6db9c31d5dabd03459",
  "token_type":"bearer",
  "scope":"login",
  "created_at":1434463054
}
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
require 'boletosimples'

BoletoSimples.configure do |c|
  c.environment = :sandbox
  c.application_id = 'seu_client_id'
  c.application_secret = 'seu_client_secret'
end

puts BoletoSimples.configuration.client_credentials


</pre>

    <small>Resposta:</small>

<pre class="http">
  {
    :access_token=>"397946a4ad90110b918c111261c184beb6cb515988688d6db9c31d5dabd03459", 
    :token_type=>"bearer", 
    :scope=>"login", 
    :created_at=>1434492337
  }
  </pre>
</div>
  
</div>

Utilize esse token na api de parceiros para criar novas contas no Boleto Simples.


### Desenvolvendo aplicações para Mobile e Desktop

Se você está desenvolvendo para mobile ou desktop, você talvez não tenha uma url de redirecionamento. Nestes
casos você pode configurar a url para: `urn:ietf:wg:oauth:2.0:oob`. Isto faz com que o servidor
mostre uma página em branco com o código de autorização na url e título da página. Você pode ler essa informação
de alguma forma dentro da sua aplicação para poder utilizada mais tarde.

Isso usa a mesma técnica adotada pelo
[Google](https://developers.google.com/accounts/docs/OAuth2InstalledApp).

[Aqui tem um guia (Em inglês)](http://www.slideshare.net/briandavidcampbell/is-that-a-token-in-your-phone-in-your-pocket-or-are-you-just-glad-to-see-me-oauth-20-and-mobile-devices) com um exemplo para iOS e Android.
