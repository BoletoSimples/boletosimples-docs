---
title: Transações
position: 10
layout: pt
en: "/en/references"
breadcrumb: Transações
---

## Transações

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [GET /api/v1/transactions/:id](#informações-da-transao) | Informações da transação
| [GET /api/v1/transactions](#listar-transaes)          | Listar transações

### Modelo de Dados

| Parâmetro        | Obrigatório  | Tipo     | Tamanho | Descrição
| ---------------- | ----- | -------- | ------- | ------------------------
| **id**           | N/A   | Integer  |         | ID da transação
| **amount**       | N/A   | Float    |         | Quantia (R$)
| **description**  | N/A   | Text     |         | Descrição na transação.
| **kind**         | N/A   | String   | 255     | Tipo da transação.
| **status**       | N/A   | String   | 20      | Status da transação.
| **processed_at** | N/A   | Date     |         | Data do processamento.
| **sent_at**      | N/A   | Date     |         | Data da transferência para os casos de saque (`kind: withdrawal`).
| **credit_at**    | N/A   | Date     |         | Data de quando a transação entra para o saldo.

### Dicionário de Dados

#### kind

| fee            | Taxa
| credit         | Crédito
| withdrawal     | Saque
| withdrawal_fee | Taxa Saque
| chargeback     | Estorno
| chargeback_fee | Taxa Estorno
| addon_fee      | Addon

#### status

| unprocessed   | Aguardando  |
| processed     | Processado  |
| transferred   | Transferido | Somente para os casos de saque (`kind: withdrawal`)

### Informações da transação

`GET /api/v1/transactions/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/transactions/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "amount":-0.4,
  "created_at":"2014-10-31",
  "description":"Saque manual",
  "kind":"withdrawal",
  "processed_at":"2014-10-31",
  "sent_at":null,
  "status":"processed",
  "credit_at":"2014-10-31"
}
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby3">
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
               "zipcode" => "20071-004",
     "mobile_local_code" => nil,
                 "state" => "RJ",
       "created_via_api" => true,
                    "id" => 67
}
</pre>
  </div> -->
  <!-- <div class="tab-pane" id="php3">
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
    [zipcode] => 20071-004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>

### Listar transações

`GET /api/v1/transactions`

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

  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/transactions?page=1&per_page=2"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2>; rel="next"
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id": 59,
    "amount": 9.01,
    "created_at": "2015-02-10",
    "description": "Boleto Banc\u00e1rio 688",
    "kind": "credit",
    "processed_at": "2015-02-19",
    "sent_at": null,
    "status": "processed",
    "credit_at": "2015-02-19"
  },
  {
    "id": 60,
    "amount": -5,
    "created_at": "2015-02-10",
    "description": "Boleto Banc\u00e1rio 688",
    "kind": "fee",
    "processed_at": "2015-02-19",
    "sent_at": null,
    "status": "processed",
    "credit_at": "2015-02-19"
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
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
  </div>
</div>
