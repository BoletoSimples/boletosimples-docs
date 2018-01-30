---
layout: pt
title: Token de Acesso - API do Boleto Simples
en: /en/authentication
---

## Token de Acesso

#### Nós recomendamos essa opção se você precisar acessar apenas os dados da sua conta.

Para poder usar a autenticação via **Token de Acesso**, você precisa pegar o seu `Token` na [página de API (Sandbox)](https://sandbox.boletosimples.com.br/conta/api) da sua conta.

![](/img/api-access-token.png)

A autenticação usando o `Token de Acesso` é feita via `HTTP Basic`, porém ao invés de passar o login e senha do usuário, como é tradicional, deve-se fornecer o `Token de Acesso` do usuário no campo ‘login’ e nada no campo ‘password’. Alguns clientes HTTP podem reclamar do fato do campo ‘password’ estar vazio, nesse caso pode-se informar ‘X’ como senha, que o sistema irá ignorar.

Exemplo de chamada API autenticada (onde "zjuio96wkixkzy6z98sy" é o Token de Acesso do usuário):

### Exemplo de token válido

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
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

{"id":1,"login_url":"https://sandbox.boletosimples.com.br/welcome?email=user%40example.com\u0026token=xxx","email":"user@example.com","account_type":null,"first_name":null,"middle_name":null,"last_name":null,"full_name":null,"cpf":null,"date_of_birth":null,"mother_name":null,"father_name":null,"account_level":0,"phone_number":null,"address_street_name":null,"address_number":null,"address_complement":null,"address_neighborhood":null,"address_postal_code":null,"address_city_name":null,"address_state":null,"business_name":null,"business_cnpj":null,"business_legal_name":null}
</pre>
  </div>
  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
BoletoSimples.configure do |c|
  c.access_token = 'valid-access-token'
end

BoletoSimples::Extra.userinfo
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
  "id": 1,
  "login_url": "https:\/\/sandbox.boletosimples.com.br\/welcome?email=user%40example.com&token=xxx",
  "email": "user@example.com",
  "account_type": null,
  "first_name": null,
  "middle_name": null,
  "last_name": null,
  "full_name": null,
  "cpf": null,
  "date_of_birth": null,
  "mother_name": null,
  "father_name": null,
  "account_level": 0,
  "phone_number": null,
  "address_street_name": null,
  "address_number": null,
  "address_complement": null,
  "address_neighborhood": null,
  "address_postal_code": null,
  "address_city_name": null,
  "address_state": null,
  "business_name": null,
  "business_cnpj": null,
  "business_legal_name": null
}
</pre>
  </div>
    <div class="tab-pane" id="php">
      <small>Requisição:</small>

  <pre class="php">
BoletoSimples::configure(array(
  "access_token" => 'valid-access-token'
));
BoletoSimples\Extra::userinfo();
  </pre>

      <small>Resposta:</small>

  <pre class="php">
Array
(
    [id] => 1
    [login_url] => https://sandbox.boletosimples.com.br/welcome?email=user%40example.com&token=xxx
    [email] => user@example.com
    [account_type] =>
    [first_name] =>
    [middle_name] =>
    [last_name] =>
    [full_name] =>
    [cpf] =>
    [date_of_birth] =>
    [mother_name] =>
    [father_name] =>
    [account_level] => 0
    [phone_number] =>
    [address_street_name] =>
    [address_number] =>
    [address_complement] =>
    [address_neighborhood] =>
    [address_postal_code] =>
    [address_city_name] =>
    [address_state] =>
    [business_name] =>
    [business_cnpj] =>
    [business_legal_name] =>
)
  </pre>
    </div>
</div>

### Exemplo de token inválido

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u tokeninvalido:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/userinfo'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 401 Unauthorized
Date: Fri, 17 Oct 2014 18:20:18 GMT
Status: 401 Unauthorized
...

{"error":"Email ou senha inválidos."}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
BoletoSimples.configure do |c|
  c.access_token = 'tokeninvalido'
end

BoletoSimples::Extra.userinfo
</pre>

    <small>Resposta:</small>

<pre class="bash">
BoletoSimples::ResponseError: 401 GET https://sandbox.boletosimples.com.br/api/v1/userinfo.json (Você precisa se logar ou registrar antes de prosseguir.)
(See full trace by running task with --trace)
</pre>
  </div>
  <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
BoletoSimples::configure(array(
  "access_token" => 'tokeninvalido'
));
BoletoSimples\Extra::userinfo();
</pre>

    <small>Resposta:</small>

<pre class="bash">
Fatal error: Uncaught exception 'BoletoSimples\ResponseError' with message 'Você precisa se logar ou registrar antes de prosseguir.'
</pre>
  </div>
</div>
