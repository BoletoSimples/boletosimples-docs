---
title: Eventos
position: 7
en: "/en/events"
breadcrumb: Eventos
layout: pt
---

## Eventos

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [GET /api/v1/events/:id](#informações-do-evento) | Informações do evento
| [GET /api/v1/events](#listar-eventos) | Listar eventos

### Modelo de Dados

| Parâmetro       | Obrigatório  | Tipo     | Tamanho | Descrição
| --------------- | ----- | -------- | ------- | ------------------------
| **id**          | N/A   | Integer  |         | ID do evento
| **code**        | N/A   | String   | 255     | Código do evento. Ver possíveis valores na [lista de eventos](/webhooks/events)
| **data**        | N/A   | Hash     |         | Mais informações relativas ao evento. Ver possíveis valores em [Payloads](/webhooks/payloads)
| **occurred_at** | N/A   | DateTime |         | Data e hora de quando o evento ocorreu.
| **bank_billet_account_id**   | N/A   | Integer |         | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/).

### Informações do evento

`GET /api/v1/events/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!--li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/events/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id": 223,
  "code": "transaction.created",
  "bank_billet_account_id": 2
  "data": {
    "object": {
      "id": 68,
      "amount": -5,
      "created_at": "2015-03-17",
      "description": "Boleto Banc\u00e1rio 862",
      "kind": "fee",
      "processed_at": null,
      "sent_at": null,
      "status": "unprocessed",
      "credit_at": "2015-03-26"
    }
  },
  "occurred_at": "2015-03-17T21:37:27.000-03:00",
}
</pre>
  </div>
  <!--div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@customer = BoletoSimples::Customer.find(67)
puts @customer.attributes
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
             "city_name" => "Rio de Janeiro",
           "person_name" => "Joao da Silva",
               "address" => "Rua quinhentos",
    "address_complement" => "Sala 4",
        "address_number" => "111",
         "mobile_number" => nil,
              "cnpj_cpf" => "782.661.177-64",
                 "email" => "cliente@bom.com",
          "neighborhood" => "bairro",
           "person_type" => "individual",
          "phone_number" => "2112123434",
               "zipcode" => "12312-123",
     "mobile_local_code" => nil,
                 "state" => "RJ",
       "created_via_api" => true,
                    "id" => 67
}
</pre>
  </div>
  <div class="tab-pane" id="php3">
    <small>Requisição:</small>

<pre class="php">
$customer = BoletoSimples\Customer::find(66);
print_r($customer->attributes());
</pre>

    <small>Resposta:</small>

<pre class="php">
Array
(
    [id] => 66
    [city_name] => Rio de Janeiro
    [person_name] => Joao da Silva
    [address] => Rua quinhentos
    [address_complement] => Sala 4
    [address_number] => 111
    [mobile_number] =>
    [cnpj_cpf] => 860.196.915-19
    [email] => cliente@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 12312-123
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div-->
</div>

### Listar eventos

`GET /api/v1/events`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obrigatório</th>
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
<tr>
      <td>
        <strong>object_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do objeto que gerou o evento. Ex. ID do boleto.
      </td>
    </tr>
<tr>
      <td>
        <strong>code </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Código do evento
      </td>
    </tr>
<tr>
      <td>
        <strong>occurred_at_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Início da data de ocorrência do evento.
      </td>
    </tr>
<tr>
      <td>
        <strong>occurred_at_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Fim da data de ocorrência do evento.
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <!--li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/events?page=1&per_page=2"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/events?page=2&per_page=2>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/events?page=2&per_page=2>; rel="next"
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id": 224,
    "code": "customer.updated",
    "bank_billet_account_id": null,
    "data": {
      "object": {
        "id": 67,
        "city_name": "Rio de Janeiro",
        "person_name": "Joao da Silva",
        "address": "Rua quinhentos",
        "address_complement": "Sala 4",
        "address_number": "111",
        "mobile_number": "",
        "cnpj_cpf": "782.661.177-64",
        "email": "novo@example.com",
        "neighborhood": "bairro",
        "person_type": "individual",
        "phone_number": "2112123434",
        "zipcode": "12312-123",
        "mobile_local_code": "",
        "state": "RJ",
        "created_via_api": true
      },
      "changes": {
        "email": [
          "antigo@example.com",
          "novo@example.com"
        ],
        "mobile_local_code": [
          null,
          ""
        ],
        "mobile_number": [
          null,
          ""
        ],
        "updated_at": [
          "2015-03-08 19:27:36 -0300",
          "2015-03-17 21:37:53 -0300"
        ]
      }
    },
    "occurred_at": "2015-03-17T21:37:53.000-03:00"
  },
  {
    "id": 223,
    "code": "transaction.created",
    "bank_billet_account_id": null,
    "data": {
      "object": {
        "id": 68,
        "amount": -5,
        "created_at": "2015-03-17",
        "description": "Boleto Banc\u00e1rio 862",
        "kind": "fee",
        "processed_at": null,
        "sent_at": null,
        "status": "unprocessed",
        "credit_at": "2015-03-26"
      }
    },
    "occurred_at": "2015-03-17T21:37:27.000-03:00"
  }
]
</pre>
  </div>
  <!--div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@transactions = BoletoSimples::Transaction.all(page: 1, per_page: 2)
puts "Transações Retornadas: #{@transactions.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Transações Retornadas: 2
Total: 4
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
</pre>
  </div>
  <div class="tab-pane" id="php4">
    <small>Requisição:</small>

<pre class="php">
$transactions = BoletoSimples\Transaction::all(['page' => 1, 'per_page' => 2]);
echo "Transações Retornadas: " . sizeof($transactions) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
Transações Retornadas: 2
Total: 4
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
</pre>
  </div-->
</div>
