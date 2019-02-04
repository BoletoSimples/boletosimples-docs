---
title: E-mails enviados
position: 14
layout: pt
en: "/en/email_deliveries"
breadcrumb: E-mails enviados
---

## E-mails enviados

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [GET /api/v1/email_deliveries/:id](#informações-do-e-mail-enviado) | Informações do e-mail enviado
| [GET /api/v1/email_deliveries](#listar-e-mails-enviados) | Listar e-mails enviados
| [PUT /api/v1/email_deliveries/:id/resend](#reenviar-e-mail-enviado) | Reenviar e-mail enviado

### Modelo de Dados

| Parâmetro            | Obrigatório  | Tipo     | Tamanho | Descrição
| -------------------- | ----- | -------- | ------- | ------------------------
| **id**               | N/A   | Integer  |         | ID do e-mail enviado
| **uid**              | N/A   | String   | 36      | UID usado no cabeçalho da requisição
| **delivered_at**     | N/A   | DateTime |         | Data e hora que a entrega foi realizada
| **failed_at**        | N/A   | DateTime |         | Data e hora que a entrega falhou
| **event**            | N/A   | Object   |         | Evento relativo à entrega. [Leia mais](/reference/v1/events/#modelo-de-dados)
| **event_code**       | N/A   | String   | 255     | Código do evento. Ver possíveis valores na [lista de eventos](/webhooks/events)
| **content**          | N/A   | Text     |         | Conteúdo do email
| **sent_error**       | N/A   | String   | 255     | Erro ocorrido no envio
| **bank_billet_id**   | N/A   | Integer  |         | ID do Boleto


### Dicionário de Dados

#### status

| 0 | Pendente
| 1 | Enviado
| 2 | Com falha


### Informações do e-mail enviado

`GET /api/v1/email_deliveries/:id`

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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/email_deliveries/1'
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
  "bank_billet_id":bank_billet1.id,
  "content":"{}",
  "delivered_at":'2015-03-17T03:36:08-03:00',
  "event": {
    "id": 212,
    "code": "bank_billet.generated",
    "data": {
      "object": {
        "id":1,
        "expire_at":"2014-11-15",
        "paid_at":null,
        "description":"Prestação de Serviço",
        "status":"opened",
        "customer_person_type":"individual",
        "customer_person_name":"Nome do Cliente",
        "customer_cnpj_cpf":"125.812.717-28",
        "customer_address":"Rua quinhentos",
        "customer_state":"RJ",
        "customer_neighborhood":"bairro",
        "customer_zipcode":"12312-123",
        "customer_address_number":null,
        "customer_address_complement":null,
        "customer_phone_number":null,
        "customer_email":null,
        "send_email_on_creation":null,
        "created_via_api":true,
        "customer_city_name":null,
        "paid_amount":0.0,
        "amount":12.34
      }
    },
    "occurred_at": "2015-03-16T22:56:05.000-03:00"
  }
  "event_code":'bank_billet.generated',
  "failed_at":nil,
  "sent_error":nil,
  "uid": "2397f7fb-cb15-4bfc-8296-0a973e93e551"
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

### Listar e-mails enviados

`GET /api/v1/email_deliveries`

| Parâmetro            | Obrigatório  | Tipo     | Descrição
| -------------------- | ----- | -------- | -----------------------
| **page**             | Não   | Integer  | Número da Página
| **per_page**         | Não   | Integer  | Quantidade de registros por página
| **bank_billet_id**   | Não   | Integer  | ID do Boleto
| **event_code**       | Não   | String   | Código do evento. Ver possíveis valores na [lista de eventos](/webhooks/events)
| **status**           | Não   | Integer  | Status do e-mail enviado ([possíveis valores](#status))


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
-X GET "https://sandbox.boletosimples.com.br/api/v1/email_deliveries?page=1&per_page=2"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/email_deliveries?page=2&per_page=2>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/email_deliveries?page=2&per_page=2>; rel="next"
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "bank_billet_id":bank_billet1.id,
    "content":"{}",
    "delivered_at":'2015-03-17T03:36:08-03:00',
    "event": {
      "id": 212,
      "code": "bank_billet.generated",
      "data": {
        "object": {
          "id":1,
          "expire_at":"2014-11-15",
          "paid_at":null,
          "description":"Prestação de Serviço",
          "status":"opened",
          "url":"http://bole.to/xxxxxxxx",
          "customer_person_type":"individual",
          "customer_person_name":"Nome do Cliente",
          "customer_cnpj_cpf":"125.812.717-28",
          "customer_address":"Rua quinhentos",
          "customer_state":"RJ",
          "customer_neighborhood":"bairro",
          "customer_zipcode":"12312-123",
          "customer_address_number":null,
          "customer_address_complement":null,
          "customer_phone_number":null,
          "customer_email":null,
          "created_via_api":true,
          "customer_city_name":null,
          "paid_amount":0.0,
          "amount":12.34
        }
      },
      "occurred_at": "2015-03-16T22:56:05.000-03:00"
    }
    "event_code":'bank_billet.generated',
    "failed_at":nil,
    "sent_error":nil,
    "uid": "2397f7fb-cb15-4bfc-8296-0a973e93e551"
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


### Reenviar e-mail enviado

`PUT /api/v1/email_deliveries/:id/resend` ou `PATCH /api/v1/email_deliveries/:id/resend`

Você pode reenviar e-mails enviados.

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
-X GET "https://sandbox.boletosimples.com.br/api/v1/email_deliveries/1/resend"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
Location: https://sandbox.boletosimples.com.br/api/v1/email_deliveries/1
...

</pre>
  </div>
