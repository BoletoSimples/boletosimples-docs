---
layout: pt
title: Autenticação - API do Boleto Simples
en: /en/authentication
---

## Autenticação

Nós oferecemos duas formas de autenticação para acessar a API do Boleto Simples:

  <table class="table table-bordered features">
    <thead>
    <tr>
      <th>Método</th>
      <th>Melhor para</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><a href="#api-token">Token de Acesso</a></td>
      <td>Acessar sua própria conta.</td>
    </tr>
    <tr>
      <td><a href="#oauth2">OAuth2</a></td>
      <td>Permite conseguir permissões para acessar contas de terceiros.</td>
    </tr>
    </tbody>
  </table>


## Token de Acesso

#### Nós recomendamos essa opção se você precisar acessar apenas os dados da sua conta.

Para poder usar a autenticação via **Token de Acesso**, você precisa pegar o seu `Token` na [página de API (Sandbox)](https://sandbox.boletosimples.com.br/conta/api) da sua conta.

![](/img/api-token.png)

A autenticação usando o `Token de Acesso` é feita via `HTTP Basic`, porém ao invés de passar o login e senha do usuário, como é tradicional, deve-se fornecer o `Token de Acesso` do usuário no campo ‘login’ e nada no campo ‘password’. Alguns clientes HTTP podem reclamar do fato do campo ‘password’ estar vazio, nesse caso pode-se informar ‘X’ como senha, que o sistema irá ignorar.

Exemplo de chamada API autenticada (onde "zjuio96wkixkzy6z98sy" é o Token de Acesso do usuário):

### Exemplo de token válido

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u zjuio96wkixkzy6z98sy:x \
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
</pre>

### Exemplo de token inválido

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u tokeninvalido:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 401 Unauthorized
Date: Fri, 17 Oct 2014 18:20:18 GMT
Status: 401 Unauthorized
...

{"error":"Email ou senha inválidos."}
</pre>

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

1. Redirecione o usuário para o endereço abaixo, substituindo `BOLETOSIMPLES_ID` e `YOUR_CALLBACK_URL`

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth/authorize?response_type=code&amp;client_id=BOLETOSIMPLES_ID&amp;redirect_uri=YOUR_CALLBACK_URL</pre>

1. O usuário verá uma tela solicitando a autorização para a sua aplicação acessar os dados dele. Se ele aceitar, será redirecionado para o endereço abaixo, onde `CODE` é o código para que você possa solicitar o token de acesso.

    <pre class="bash">http://yourcallback.com/?code=CODE</pre>

1. Faça uma requisição POST para o endereço abaixo para receber o access token, substituindo `CODE`, `YOUR_CALLBACK_URL`, `BOLETOSIMPLES_ID` e `BOLETOSIMPLES_SECRET`

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth/token?grant_type=authorization_code&amp;code=CODE&amp;redirect_uri=YOUR_CALLBACK_URL&amp;client_id=BOLETOSIMPLES_ID&amp;client_secret=BOLETOSIMPLES_SECRET</pre>

    <small>Resposta:</small>

    <pre class="json">
    {
      "access_token": "...",
      "refresh_token": "...",
      "token_type": "bearer",
      "scope": "login"
    }
    </pre>

1. Agora você pode usar o `access_token` para realizar chamadas a API. Esse token não expira.

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

## Segurança

#### Salvar credenciais de forma segura!

Você deve se preocupar em como guardar as credencias que você consegue de forma segura. Se alguém obtém o `access_token` com permissões, eles poderão acessar informações particulares suas e dos seus clientes.

Nunca salve suas credenciais junto ao seu código fonte ou em seu banco de dados à menos que estejam criptografadas. Separar as credencias do seu código fonte e do banco de dados são excelentes práticas a serem adotadas.
