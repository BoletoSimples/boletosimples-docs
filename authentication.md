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

O protocolo [ OAuth2](http://en.wikipedia.org/wiki/OAuth#OAuth_2.0)
permite o acesso parcial ou total por terceiros sem necessidade de
compartilhar sua senha. É mais complexo que acessar por usuário
e senha mas é mais flexível. OAuth2 funciona muito bem para
aplicações web, assim como para desktop e mobile.

Há bibliotecas OAuth2 para quase todas as linguagens visto que é
um protocolo amplamente utilizado na industria
de software e por empresas como like Google e Facebook.

### Registro

Para começar você precisa
[solicitar o cadastro da sua aplicação](http://suporte.boletosimples.com.br)
em nossos servidores. Nós te enviaremos um `client_id`
e `client_secret`.

Você também deverá nos fornecer uma URL de redirecionamento
`redirect_uri` para o seu site. Se você desenvolve
para desktop ou mobile, veja na seção a baixo como configurar a
`redirect_uri`.

OAuth2 requer que o usuário autorize o acesso da sua app à conta dele. Para autenticar o usuário no OAuth2:

*   Use o `client_id` e `client_secret` que você obteve conosco durante o registro para
gerar uma `authorize_url` e redirecionar o usuário para esta url. Opcionalmente inclua o
`scope` para acessar alguma [informação em específico](/docs/api/permissions).
*   Se o usuário autorizar sua app, ele será redirecionado para a `redirect_uri` que você configurou
no registro com o parâmetro `code`.
*   Use o parâmetro `code` na url para gerar um `access_token`
*   Use o `access_token` para fazer as requisições em nome do usuário.

### Exemplos

  <div class="panel">
    <div class="panel-heading">
      <p>OAuth2 em Ruby</p>
    </div>
    <div class="panel-body">
      <div class="highlight" style="">
        <pre><span class="nb">require</span> <span class="s1">'oauth2'</span>
<span class="n">redirect_uri</span> <span class="o">=</span> <span class="s1">'http://www.seusite.com.br/oauth2/callback'</span> <span class="c1"># tem que ser a mesma url do registro</span>
<span class="n">client</span> <span class="o">=</span> <span class="no">OAuth2</span><span class="o">::</span><span class="no">Client</span><span class="o">.</span><span class="n">new</span><span>(</span><span class="no">CLIENT_ID</span><span class="p">,</span> <span class="no">CLIENT_SECRET</span><span class="p">,</span> <span class="ss">site</span><span class="p">:</span> <span class="s1">'https://boletosimples.com.br/api/v1'</span><span class="p">)</span>
<span class="sb">`open "</span><span class="si">#{</span><span class="n">client</span><span class="o">.</span><span class="n">auth_code</span><span class="o">.</span><span class="n">authorize_url</span><span class="p">(</span><span class="n">redirect_uri</span><span class="p">:</span> <span class="n">redirect_uri</span><span class="p">)</span><span class="si">}</span><span class="sb">"`</span>
<span class="nb">print</span> <span class="s2">"Coloque o código retornado na URL: "</span>
<span class="n">code</span> <span class="o">=</span> <span class="no">STDIN</span><span class="o">.</span><span class="n">readline</span><span class="o">.</span><span class="n">chomp</span>
<span class="n">token</span> <span class="o">=</span> <span class="n">client</span><span class="o">.</span><span class="n">auth_code</span><span class="o">.</span><span class="n">get_token</span><span>(</span><span class="n">code</span><span class="p">,</span> <span class="n">redirect_uri</span><span class="p">:</span> <span class="n">redirect_uri</span><span class="p">)</span>
<span class="nb">puts</span> <span class="no">JSON</span><span class="o">.</span><span class="n">parse</span><span class="p">(</span><span class="n">token</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s1">'/api/v1/userinfo'</span><span class="p">)</span><span class="o">.</span><span class="n">body</span><span class="p">)</span>
      </pre>
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="panel-heading">
      <p>OAuth2</p>
    </div>
    <div class="panel-body">
      <small>
        Os seguintes caminhos são usados para gerar tokens (usando um code, email e senha, ou refresh
        token):
      </small>

      <pre>
GET    https://boletosimples.com.br/api/v1/oauth/authorize     mostra form de autorização
POST   https://boletosimples.com.br/api/v1/oauth/token         endpoint para gerar o token
      </pre>

        <small>Aqui um exemplo simples de como talvez a app se comportará:</small>
      <pre>
# Redireciona o usuário para essa página
https://boletosimples.com.br/api/v1/oauth/authorize?response_type=code&amp;client_id=YOUR_CLIENT_ID&amp;redirect_uri=YOUR_CALLBACK_URL

# Se o usuário aceitar, ele vai ser redirecionado para:
YOUR_CALLBACK_URL?code=CODE

# Faça um POST solicitando um access token
https://boletosimples.com.br/api/v1/oauth/token?grant_type=authorization_code&amp;code=CODE&amp;redirect_uri=YOUR_CALLBACK_URL&amp;client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET

# Resposta com o 'access_token'
{
"access_token": "...",
"refresh_token": "...",
"token_type": "bearer",
"scope": "login"
}

# Agora você pode usar o 'access_token' para realizar chamadas a API
http://boletosimples.com.br/api/v1/userinfo?access_token=...

# Resposta
{
  "id":1017,
  "email":"meuecommerce@example.com",
  "account_type":"individual",
  "first_name":"Margret",
  "middle_name":"Simões",
  "last_name":"Gonçalo",
  "full_name":"Margret Simões Gonçalo",
  "cpf":"142.578.243-44",
  "date_of_birth":"1970-03-01",
  "phone_number":"2199999999",
  "address_street_name":"Av. Burkhard Hehn Simões",
  "address_number":"120",
  "address_complement":"709",
  "address_neighborhood":"São Francisco",
  "address_postal_code":"24360-440",
  "address_city_name":"Rio de Janeiro",
  "address_state":"RJ",
  "banking_bank_number":"001",
  "banking_agency_number":"4042",
  "banking_agency_digit":"8",
  "banking_account_number":"8873",
  "banking_account_digit":"0",
  "business_name":"Sebastian Elias Publicidade LTDA.",
  "business_cnpj":"18.174.681/0001-70"
}
      </pre>
    </div>
  </div>

### Desenvolvendo aplicações para Mobile e Desktop

Se você está desenvolvendo para mobile ou desktop, você talvez não tenha uma url de redirecionamento. Nestes
casos você pode configurar a url para: `urn:ietf:wg:oauth:2.0:oob`. Isto faz com que o servidor
mostre uma página em branco com o código de autorização na url e título da página. Você pode ler essa informação
de alguma forma dentro da sua aplicação para poder utilizada mais tarde.

Isso usa a mesma técnica adotada pelo
[Google](https://developers.google.com/accounts/docs/OAuth2InstalledApp).
[Aqui
tem um guia(Em inglês)](http://www.slideshare.net/briandavidcampbell/is-that-a-token-in-your-phone-in-your-pocket-or-are-you-just-glad-to-see-me-oauth-20-and-mobile-devices) com um exemplo para iOS e Android.

## Segurança

#### Salvar credenciais de forma segura

Você deve se preocupar em como guardar as credencias que você consegue de forma segura. Se alguém obtém o
`access_token` com permissões, eles poderão acessar informações particulares suas e dos seus
clientes.

Nunca salve suas credenciais junto ao seu código fonte ou em seu banco de dados à menos que estejam
criptografadas. Separar as credencias do seu código fonte e do banco de dados são excelentes práticas a serem
adotadas.
