---
title: Webhook Deliveries
position: 16
layout: pt
en: "/en/webhook_deliveries"
breadcrumb: Webhook Deliveries
---

## Webhook Deliveries

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [GET /api/v1/webhook_deliveries/:id](#informações-do-webhook-delivery) | Informações do webhook delivery
| [GET /api/v1/webhook_deliveries](#listar-webhook-delivery) | Listar webhook deliveries

### Modelo de Dados

| Parâmetro            | Obr.  | Tipo     | Tamanho | Descrição
| -------------------- | ----- | -------- | ------- | ------------------------
| **id**               | N/A   | Integer  |         | ID do webhook delivery
| **uid**              | N/A   | String   | 36      | UID usado no cabeçalho da requisição
| **url**              | N/A   | String   | 255     | Endereço onde as entrega foi realizada, herdado do webhook
| **request_payload**  | N/A   | Hash     |         | Payload que será enviado no corpo da mensagem. Ver possíveis valores em [Payloads](/webhooks/payloads)
| **request_error**    | N/A   | String   | 255     | Mensagem de erro retornada na resquisição
| **response_headers** | N/A   | Hash     |         | Cabeçalhos da resposta
| **response_body**    | N/A   | Text     |         | Conteúdo do corpo da resposta
| **response_code**    | N/A   | Integer  |         | Código HTTP da resposta. [Leia mais](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
| **response_message** | N/A   | String   | 255     | Mensagem relativa ao Código HTTP da resposta [Leia mais](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
| **delivered_at**     | N/A   | DateTime |         | Data e hora que a entrega foi realizada
| **duration**         | N/A   | Integer  |         | Duração em milesegundos do round trip entre requisição e resposta
| **event**            | N/A   | Object   |         | Evento relativo à entrega. [Leia mais](/reference/v1/events/#modelo-de-dados)
| **webhook**          | N/A   | Object   |         | [Webhook](/reference/v1/webhooks/#modelo-de-dados)

### Informações do webhook delivery

`GET /api/v1/webhook_deliveries/:id`

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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/webhook_deliveries/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "uid": "2397f7fb-cb15-4bfc-8296-0a973e93e551",
  "url": "https://example.com/callbacks/boletosimplest/",
  "duration": 119,
  "request_headers": {
    "X-BoletoSimples-Event": "bank_billet.generated",
    "X-Hub-Signature": "sha1=7be1e99e7ff2c2cd83222161e08593636e5bfe9a",
    "X-BoletoSimples-Delivery-Id": "2397f7fb-cb15-4bfc-8296-0a973e93e551",
    "X-BoletoSimples-Environment": "sandbox",
    "User-Agent": "BoletoSimples-Robot (sandbox)",
    "Content-Type": "application\/json"
  },
  "request_payload": {
    "object": {
      "id":1,
      "expire_at":"2014-11-15",
      "paid_at":null,
      "description":"Prestação de Serviço",
      "status":"opened",
      "shorten_url":"http://bole.to/xxxxxxxx",
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
    },
    "event_code": "bank_billet.generated",
    "webhook": {
      "id": 5,
      "url": "https://example.com/callbacks/boletosimplest/"
    }
  },
  "request_error": null,
  "response_body": "OK",
  "response_code": 200,
  "response_headers": {
    "access-control-allow-origin": [
      "*"
    ],
    "content-type": [
      "application\/json"
    ],
    "date": [
      "Tue, 17 Mar 2015 01:56:05 GMT"
    ],
    "p3p": [
      "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
    ],
    "server": [
      "nginx"
    ],
    "strict-transport-security": [
      "max-age=31536000; includeSubDomains; preload"
    ],
    "x-content-type-options": [
      "nosniff"
    ],
    "x-frame-options": [
      "SAMEORIGIN"
    ],
    "x-xss-protection": [
      "1; mode=block"
    ],
    "content-length": [
      "152"
    ],
    "connection": [
      "Close"
    ]
  },
  "response_message": "OK",
  "delivered_at": "2015-03-16T22:56:05.426-03:00",
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
        "shorten_url":"http://bole.to/xxxxxxxx",
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

### Listar webhook deliveries

`GET /api/v1/webhook_deliveries`

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
-X GET "https://sandbox.boletosimples.com.br/api/v1/webhook_deliveries?page=1&per_page=2"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/webhook_deliveries?page=2&per_page=2>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/webhook_deliveries?page=2&per_page=2>; rel="next"
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id": 197,
    "uid": "2397f7fb-cb15-4bfc-8296-0a973e93e551",
    "url": "https://example.com/callbacks/boletosimplest/",
    "duration": 119,
    "request_headers": {
      "X-BoletoSimples-Event": "bank_billet.generated",
      "X-Hub-Signature": "sha1=7be1e99e7ff2c2cd83222161e08593636e5bfe9a",
      "X-BoletoSimples-Delivery-Id": "2397f7fb-cb15-4bfc-8296-0a973e93e551",
      "X-BoletoSimples-Environment": "sandbox",
      "User-Agent": "BoletoSimples-Robot (sandbox)",
      "Content-Type": "application\/json"
    },
    "request_payload": {
      "object": {
        "id":1,
        "expire_at":"2014-11-15",
        "paid_at":null,
        "description":"Prestação de Serviço",
        "status":"opened",
        "shorten_url":"http://bole.to/xxxxxxxx",
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
      },
      "event_code": "bank_billet.generated",
      "webhook": {
        "id": 5,
        "url": "https://example.com/callbacks/boletosimplest/"
      }
    },
    "request_error": null,
    "response_body": "OK",
    "response_code": 200,
    "response_headers": {
      "access-control-allow-origin": [
        "*"
      ],
      "content-type": [
        "application\/json"
      ],
      "date": [
        "Tue, 17 Mar 2015 01:56:05 GMT"
      ],
      "p3p": [
        "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
      ],
      "server": [
        "nginx"
      ],
      "strict-transport-security": [
        "max-age=31536000; includeSubDomains; preload"
      ],
      "x-content-type-options": [
        "nosniff"
      ],
      "x-frame-options": [
        "SAMEORIGIN"
      ],
      "x-xss-protection": [
        "1; mode=block"
      ],
      "content-length": [
        "152"
      ],
      "connection": [
        "Close"
      ]
    },
    "response_message": "OK",
    "delivered_at": "2015-03-16T22:56:05.426-03:00",
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
          "shorten_url":"http://bole.to/xxxxxxxx",
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