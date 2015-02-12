---
layout: pt
title: Boletos - API do Boleto Simples
en: /en/reference
breadcrumb: Boletos
---

## Boletos

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#criar-boleto">POST /api/v1/bank_billets</a></td>
      <td width='60%'>Criar boleto</td>
    </tr>
    <tr>
      <td><a href="#informaes-do-boleto">GET /api/v1/bank_billets/:id</a></td>
      <td width='60%'>Informações do boleto</td>
    </tr>
    <tr>
      <td><a href="#listar-boletos">GET /api/v1/bank_billets</a></td>
      <td width='60%'>Listar boletos</td>
    </tr>
    <tr>
      <td><a href="#cancelar-boleto">PUT /api/v1/bank_billets/:id/cancel</a></td>
      <td width='60%'>Cancelar boleto</td>
    </tr>
  </tbody>
</table>

### Criar boleto

`POST /api/v1/bank_billets`

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
        <strong> amount </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        Float
      </td>
      <td>
        Quantia (R$) - Formato: 1000,50 ou 1000.5
      </td>
    </tr>

    <tr>
      <td>
        <strong> expire_at </strong><br>
      </td>
      <td>
        Sim
      </td>
      <td>
        Date
      </td>
      <td>
        Data de vencimento - Formato: 31/12/2013 ou 2013-12-31
      </td>
    </tr>

    <tr>
      <td>
        <strong> description </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        Descrição do produto ou serviço
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_person_name </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        <p>Nome ou Razão Social do Pagador</p>
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_cnpj_cpf </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ ou CPF do Pagador
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_zipcode </strong>
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
        <strong> customer_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Cliente Cadastrado. Quando passado os campos <code>customer_person_name</code> e <code>customer_cnpj_cpf</code> não são obrigatórios.
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_email </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        E-mail do Pagador
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address </strong>
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
        <strong> customer_city_name </strong>
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
        <strong> customer_state </strong>
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
        <strong> customer_neighborhood </strong>
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
        <strong> customer_address_number </strong>
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
        <strong> customer_address_complement </strong>
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
        <strong> customer_phone_number </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Telefone (com DDD)
      </td>
    </tr>
    <tr>
      <td>
        <strong> notification_url </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        URL de notificação para onde serão enviadas notificações nas mudanças de status do boleto.
        <a href="/notifications">Leia mais</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong> meta </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Campo Genérico -  Aceita qualquer formato passado. Pode ser usado para salvar dados que não existam dentro do Boleto Simples.
        <br>
        Exemplo JSON: {pedido: 12345}<br>
        Exemplo Array: pedido: 12345
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
-d '{"bank_billet":{}}'
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/bank_billets
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet":["não pode ficar em branco"]}}
</pre>
  </div>

  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>
<pre class="ruby">
BoletoSimples::BankBillet.create(
  {
    "amount" => 19.01,
    "customer_address" => 'Rua quinhentos',
    "customer_address_complement" => 'Sala 4',
    "customer_address_number" => '111',
    "customer_city_name" => 'Rio de Janeiro',
    "customer_cnpj_cpf" => ' ',
    "customer_email" => 'clientebom.com',
    "customer_neighborhood" => 'Sao Francisco',
    "customer_person_name" => 'Joao da Silva',
    "customer_person_type" => 'individual',
    "customer_phone_number" => '113223',
    "customer_state" => 'RJ',
    "customer_zipcode" => '12312-123',
    "description" => 'Despesas do contrato 0012',
    "expire_at" => '2014-01-01',
    "notification_url" => 'http://example.com.br/notify'
  }
)
</pre>

    <small>Resposta:</small>

<pre class="bash">
{
  "errors"=> {
    "customer_cnpj_cpf" => ["não pode ficar em branco"],
    "customer_email" => ["não é válido"],
    "amount"=>["deve ser menor ou igual a 10"]
  }
}

</pre>
  </div>
</div>

#### Criando boleto

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
-d '{"bank_billet":{"amount":12.34, "expire_at": "2014-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28", "customer_zipcode": "12312-123"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/bank_billets
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"generating",
  "shorten_url":null,
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":null,
  "customer_state":null,
  "customer_neighborhood":null,
  "customer_zipcode":null,
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "notification_url":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":null,
  "paid_amount":0.0,
  "amount":12.34
}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>
<pre class="ruby">
BoletoSimples::BankBillet.create(
  {
    "amount" => 9.01,
    "customer_address" => 'Rua quinhentos',
    "customer_address_complement" => 'Sala 4',
    "customer_address_number" => '111',
    "customer_city_name" => 'Rio de Janeiro',
    "customer_cnpj_cpf" => '012.345.678-90',
    "customer_email" => 'cliente@example.com',
    "customer_neighborhood" => 'Sao Francisco',
    "customer_person_name" => 'Joao da Silva',
    "customer_person_type" => 'individual',
    "customer_phone_number" => '2112123434',
    "customer_state" => 'RJ',
    "customer_zipcode" => '12312-123',
    "description" => 'Despesas do contrato 0012',
    "expire_at" => '2014-01-01',
    "notification_url" => 'http://example.com.br/notify'
  }
)
</pre>

  <small>Resposta:</small>

<pre class="ruby">
{
  "amount" => 9.01,
  "created_via_api" => true,
  "customer_address" => "Rua quinhentos",
  "customer_address_complement" => "Sala 4",
  "customer_address_number" => "111",
  "customer_city_name" => "Rio de Janeiro",
  "customer_cnpj_cpf" => "012.345.678-90",
  "customer_email" => "cliente@example.com",
  "customer_neighborhood" => "Sao Francisco",
  "customer_person_name" => "Joao da Silva",
  "customer_person_type" => "individual",
  "customer_phone_number" => "2112123434",
  "customer_state" => "RJ",
  "customer_zipcode" => "12312-123",
  "description" => "Despesas do contrato 0012",
  "expire_at" => "2014-01-01",
  "id" => 113,
  "notification_url" => "http://example.com.br/notify",
  "paid_amount" => 0.0,
  "paid_at" => nil,
  "send_email_on_creation" => nil,
  "shorten_url" => nil,
  "status" => "generating"
}
</pre>
  </div>
</div>

### Informações do boleto

`GET /api/v1/bank_billets/:id`

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
-X GET https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
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
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"opened",
  "shorten_url":"http://bole.to/xxxxxxxx",
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":null,
  "customer_state":null,
  "customer_neighborhood":null,
  "customer_zipcode":null,
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "notification_url":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":null,
  "paid_amount":0.0,
  "amount":12.34
}
</pre>
  </div>
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
BoletoSimples::BankBillet.find(113)
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
  "id"=>113,
  "expire_at"=>"2014-01-01",
  "paid_at"=>nil,
  "description"=>"Despesas do contrato 0012",
  "status"=>"opened",
  "shorten_url"=>"http://staging.bole.to/nhhvauui",
  "customer_person_type"=>"individual",
  "customer_person_name"=>"Joao da Silva",
  "customer_cnpj_cpf"=>"012.345.678-90",
  "customer_address"=>"Rua quinhentos",
  "customer_state"=>"RJ",
  "customer_neighborhood"=>"Sao Francisco",
  "customer_zipcode"=>"12312-123",
  "customer_address_number"=>"111",
  "customer_address_complement"=>"Sala 4",
  "customer_phone_number"=>"2112123434",
  "customer_email"=>"cliente@example.com",
  "notification_url"=>"http://example.com.br/notify",
  "send_email_on_creation"=>nil,
  "created_via_api"=>true,
  "customer_city_name"=>"Rio de Janeiro",
  "paid_amount"=>0.0,
  "amount"=>9.01
}
</pre>

  </div>
</div>

### Listar boletos

`GET /api/v1/bank_billets`

<table class='table table-bordered features'>
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
        <strong>page</strong>
        <br/>
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
        <strong>per_page</strong>
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
-X GET https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=1&per_page=50
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
    "expire_at":"2014-11-15",
    "paid_at":null,
    "description":"Prestação de Serviço",
    "status":"opened",
    "shorten_url":"http://bole.to/xxxxxxxx",
    "customer_person_type":"individual",
    "customer_person_name":"Nome do Cliente",
    "customer_cnpj_cpf":"125.812.717-28",
    "customer_address":null,
    "customer_state":null,
    "customer_neighborhood":null,
    "customer_zipcode":null,
    "customer_address_number":null,
    "customer_address_complement":null,
    "customer_phone_number":null,
    "customer_email":null,
    "notification_url":null,
    "send_email_on_creation":null,
    "created_via_api":true,
    "customer_city_name":null,
    "paid_amount":0.0,
    "amount":12.34
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição</small>

<pre class="ruby">
BoletoSimples::BankBillet.all(page: 1, per_page: 50)
</pre>

    <small>Resposta:</small>

<pre class="ruby">
[
  {
    "id"=>113,
    "expire_at"=>"2014-01-01",
    "paid_at"=>nil,
    "description"=>"Despesas do contrato 0012",
    "status"=>"opened",
    "shorten_url"=>"http://staging.bole.to/nhhvauui",
    "customer_person_type"=>"individual",
    "customer_person_name"=>"Joao da Silva",
    "customer_cnpj_cpf"=>"012.345.678-90",
    "customer_address"=>"Rua quinhentos",
    "customer_state"=>"RJ",
    "customer_neighborhood"=>"Sao Francisco",
    "customer_zipcode"=>"12312-123",
    "customer_address_number"=>"111",
    "customer_address_complement"=>"Sala 4",
    "customer_phone_number"=>"2112123434",
    "customer_email"=>"cliente@example.com",
    "notification_url"=>"http://example.com.br/notify",
    "send_email_on_creation"=>nil,
    "created_via_api"=>true,
    "customer_city_name"=>"Rio de Janeiro",
    "paid_amount"=>0.0,
    "amount"=>9.01
  }
]
</pre>

  </div>
</div>

### Cancelar boleto

`PUT /api/v1/bank_billets/:id/cancel`

Você pode cancelar boletos nos status de Aberto(`opened`) ou Vencido(`due`)

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby5" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash5">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/cancel
</pre>

    <small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "errors": {
    "status": ["cannot transition via cancel"]
  }
}
</pre>
  </div>
  <div class="tab-pane" id="ruby5">
    <small>Requisição</small>

<pre class="ruby">
@bank_billet = BoletoSimples::BankBillet.find(1)
@bank_billet.status
# => "paid"
@bank_billet.cancel
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
  "errors"=> {
    "status"=> ["cannot transition via cancel"]
  }
}
</pre>

  </div>
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/cancel
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
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"canceled",
  "shorten_url":"http://bole.to/xxxxxxxx",
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":null,
  "customer_state":null,
  "customer_neighborhood":null,
  "customer_zipcode":null,
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "notification_url":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":null,
  "paid_amount":0.0,
  "amount":12.34
}
</pre>
  </div>
  <div class="tab-pane" id="ruby6">
    <small>Requisição</small>

<pre class="ruby">
@bank_billet = BoletoSimples::BankBillet.find(1)
@bank_billet.status
# => "due"
@bank_billet.cancel
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
  "id"=>1,
  "expire_at"=>"2014-01-01",
  "paid_at"=>nil,
  "description"=>"Despesas do contrato 0012",
  "status"=>"canceled",
  "shorten_url"=>"http://staging.bole.to/nhhvauui",
  "customer_person_type"=>"individual",
  "customer_person_name"=>"Joao da Silva",
  "customer_cnpj_cpf"=>"012.345.678-90",
  "customer_address"=>"Rua quinhentos",
  "customer_state"=>"RJ",
  "customer_neighborhood"=>"Sao Francisco",
  "customer_zipcode"=>"12312-123",
  "customer_address_number"=>"111",
  "customer_address_complement"=>"Sala 4",
  "customer_phone_number"=>"2112123434",
  "customer_email"=>"cliente@example.com",
  "notification_url"=>"http://example.com.br/notify",
  "send_email_on_creation"=>nil,
  "created_via_api"=>true,
  "customer_city_name"=>"Rio de Janeiro",
  "paid_amount"=>0.0,
  "amount"=>9.01
}
</pre>

  </div>
</div>
