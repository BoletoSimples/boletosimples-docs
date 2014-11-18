---
layout: pt
title: Token de Acesso - API do Boleto Simples
en: /en/authentication
---

## Token de Acesso

#### Nós recomendamos essa opção se você precisar acessar apenas os dados da sua conta.

Para poder usar a autenticação via **Token de Acesso**, você precisa pegar o seu `Token` na [página de API (Sandbox)](https://sandbox.boletosimples.com.br/conta/api) da sua conta.

![](/img/api-token.png)

A autenticação usando o `Token de Acesso` é feita via `HTTP Basic`, porém ao invés de passar o login e senha do usuário, como é tradicional, deve-se fornecer o `Token de Acesso` do usuário no campo ‘login’ e nada no campo ‘password’. Alguns clientes HTTP podem reclamar do fato do campo ‘password’ estar vazio, nesse caso pode-se informar ‘X’ como senha, que o sistema irá ignorar.

Exemplo de chamada API autenticada (onde "zjuio96wkixkzy6z98sy" é o Token de Acesso do usuário):

### Exemplo de token válido

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
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
  </div>
  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
client = BoletoSimples::Client.new('ENV['BOLETOSIMPLES_TOKEN']', user_agent: 'Meu e-Commerce (meuecommerce@example.com)')
client.userinfo
</pre>

    <small>Resposta:</small>

<pre class="html">
{ ... json com informações do usuário ... }
</pre>
  </div>
</div>

### Exemplo de token inválido

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
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
  </div>
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
client = BoletoSimples::Client.new('invalidtoken', user_agent: 'Meu e-Commerce (meuecommerce@example.com)')
client.userinfo
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{"error"=>"Email ou senha inválidos."}
</pre>
  </div>
</div>
