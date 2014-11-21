---
layout: pt
title: Clientes - API do Boleto Simples
en: /en/references
breadcrumb: Clientes
---

## Clientes

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#criar-cliente">POST /api/v1/customers</a></td>
      <td width='60%'>Criar cliente</td>
    </tr>
    <tr>
      <td><a href="#informaes-do-cliente">GET /api/v1/customers/:id</a></td>
      <td width='60%'>Informações do cliente</td>
    </tr>
    <tr>
      <td><a href="#listar-clientes">GET /api/v1/customers</a></td>
      <td width='60%'>Listar clientes</td>
    </tr>
  </tbody>
</table>

### Criar cliente

`POST /api/v1/customers`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obr.</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>customer</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        Hash
      </td>
      <td>
        Informações do Cliente
      </td>
    </tr>

    <tr>
      <td>
        <strong>person_name</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        Nome
      </td>
    </tr>

    <tr>
      <td>
        <strong>cnpj_cpf</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ/CPF
      </td>
    </tr>

    <tr>
      <td>
        <strong>address</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Endereço
      </td>
    </tr>

    <tr>
      <td>
        <strong>city_name</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Cidade
      </td>
    </tr>

    <tr>
      <td>
        <strong>state</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Estado
      </td>
    </tr>

    <tr>
      <td>
        <strong>neighborhood</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Bairro
      </td>
    </tr>

    <tr>
      <td>
        <strong>zipcode</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        CEP
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_number</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Número
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_complement</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Complemento
      </td>
    </tr>

    <tr>
      <td>
        <strong>phone_number</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Telefone
      </td>
    </tr>

    <tr>
      <td>
        <strong>email</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        E-mail
      </td>
    </tr>

    <tr>
      <td>
        <strong>mobile_local_code</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Celular(DDD)
      </td>
    </tr>

    <tr>
      <td>
        <strong>mobile_number</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Celular
      </td>
    </tr>

  </tbody>
</table>

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"customer":{}}'
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/customers
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"customer":["não pode ficar em branco"]}}
</pre>
  </div>
  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
client = BoletoSimples::Client.new(ENV['BOLETOSIMPLES_TOKEN'], user_agent: 'Meu e-Commerce (meuecommerce@example.com)')
client.create_customer({
  "customer" => {
    "person_name" => "Joao da Silva",
    "cnpj_cpf"=> " ",
    "email" => "cliente@example.com",
    "address" => "Rua quinhentos",
    "city_name" => "Rio de Janeiro",
    "state" => "RJ",
    "neighborhood" => "bairro",
    "zipcode" => "12312-123",
    "address_number" => "111",
    "address_complement" => "Sala 4",
    "phone_number" => "213223"
  }
})
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
  "errors" => {
    "cnpj_cpf" => ["não pode ficar em branco"],
    "phone_number" => ["é muito curto (mínimo: 10 caracteres)"]
  }
}
</pre>

  </div>
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"customer":{"person_name":"Nome do Cliente", "cnpj_cpf": "125.812.717-28"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/customers
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/customers/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "city_name":null,
  "person_name":"Nome do Cliente",
  "address":null,
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":null,
  "neighborhood":null,
  "person_type":"individual",
  "phone_number":null,
  "zipcode":null,
  "mobile_local_code":null,
  "state":null
}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
client = BoletoSimples::Client.new(ENV['BOLETOSIMPLES_TOKEN'], user_agent: 'Meu e-Commerce (meuecommerce@example.com)')
client.create_customer({
  "customer" => {
    "person_name" => "Joao da Silva",
    "cnpj_cpf"=> "012.345.678-90",
    "email" => "cliente@example.com",
    "address" => "Rua quinhentos",
    "city_name" => "Rio de Janeiro",
    "state" => "RJ",
    "neighborhood" => "bairro",
    "zipcode" => "12312-123",
    "address_number" => "111",
    "address_complement" => "Sala 4",
    "phone_number" => "2112123434"
  }
})
</pre>
  <small>Resposta:</small>

<pre class="ruby">
{
  "id" => 32,
  "mobile_local_code" => nil,
  "mobile_number" => nil,
  "person_type" => "individual",
  "person_name" => "Joao da Silva",
  "cnpj_cpf"=> "012.345.678-90",
  "email" => "cliente@example.com",
  "address" => "Rua quinhentos",
  "city_name" => "Rio de Janeiro",
  "state" => "RJ",
  "neighborhood" => "bairro",
  "zipcode" => "12312-123",
  "address_number" => "111",
  "address_complement" => "Sala 4",
  "phone_number" => "2112123434"
}
</pre>
  </div>
</div>

### Informações do cliente

`GET /api/v1/customers/:id`

#### Exemplo

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
-X GET https://sandbox.boletosimples.com.br/api/v1/customers/1
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "city_name":null,
  "person_name":"Nome do Cliente",
  "address":null,
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":null,
  "neighborhood":null,
  "person_type":"individual",
  "phone_number":null,
  "zipcode":null,
  "mobile_local_code":null,
  "state":null
}
</pre>
  </div>
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
client = BoletoSimples::Client.new(ENV['BOLETOSIMPLES_TOKEN'], user_agent: 'Meu e-Commerce (meuecommerce@example.com)')
client.customer(32)
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
  "id"=>32,
  "city_name" => "Rio de Janeiro",
  "person_name" => "Joao da Silva",
  "address" => "Rua quinhentos",
  "address_complement" => "Sala 4",
  "address_number" => "111",
  "mobile_number" => nil,
  "cnpj_cpf" => "012.345.678-90",
  "email" => "cliente@example.com",
  "neighborhood" => "bairro",
  "person_type" => "individual",
  "phone_number" => "2112123434",
  "zipcode" => "12312-123",
  "mobile_local_code" => nil,
  "state" => "RJ"
}
</pre>
  </div>
</div>

### Listar clientes

`GET /api/v1/customers`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obr.</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>page </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        Número da Página
      </td>
    </tr>

    <tr>
      <td>
        <strong>per_page </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        Quantidade de registros por página
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/customers?page=1&per_page=50
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Total: 2
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "city_name":null,
    "person_name":"Nome do Cliente",
    "address":null,
    "address_complement":null,
    "address_number":null,
    "mobile_number":null,
    "cnpj_cpf":"125.812.717-28",
    "email":null,
    "neighborhood":null,
    "person_type":"individual",
    "phone_number":null,
    "zipcode":null,
    "mobile_local_code":null,
    "state":null
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
client = BoletoSimples::Client.new(ENV['BOLETOSIMPLES_TOKEN'], user_agent: 'Meu e-Commerce (meuecommerce@example.com)')
client.customers
</pre>

    <small>Resposta:</small>

<pre class="ruby">
[
  {
    "id"=>32,
    "city_name" => "Rio de Janeiro",
    "person_name" => "Joao da Silva",
    "address" => "Rua quinhentos",
    "address_complement" => "Sala 4",
    "address_number" => "111",
    "mobile_number" => nil,
    "cnpj_cpf" => "012.345.678-90",
    "email" => "cliente@example.com",
    "neighborhood" => "bairro",
    "person_type" => "individual",
    "phone_number" => "2112123434",
    "zipcode" => "12312-123",
    "mobile_local_code" => nil,
    "state" => "RJ"
  }
]
</pre>
  </div>
</div>
