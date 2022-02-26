---
title: E-mails enviados
position: 14
layout: pt
en: "/en/email_deliveries"
breadcrumb: E-mails enviados
---

## E-mails enviados

| Recurso                                                             | Descrição                     |
| ------------------------------------------------------------------- | ----------------------------- |
| [GET /api/v1/email_deliveries/:id](#informações-do-e-mail-enviado)  | Informações do e-mail enviado |
| [GET /api/v1/email_deliveries](#listar-e-mails-enviados)            | Listar e-mails enviados       |
| [PUT /api/v1/email_deliveries/:id/resend](#reenviar-e-mail-enviado) | Reenviar e-mail enviado       |

### Modelo de Dados

| Parâmetro                  | Obrigatório | Tipo     | Tamanho | Descrição                                                                       |
| -------------------------- | ----------- | -------- | ------- | ------------------------------------------------------------------------------- |
| **id**                     | N/A         | Integer  |         | ID do e-mail enviado                                                            |
| **uid**                    | N/A         | String   | 36      | UID usado no cabeçalho da requisição                                            |
| **delivered_at**           | N/A         | DateTime |         | Data e hora que a entrega foi realizada                                         |
| **failed_at**              | N/A         | DateTime |         | Data e hora que a entrega falhou                                                |
| **event_code**             | N/A         | String   | 255     | Código do evento. Ver possíveis valores na [lista de eventos](/webhooks/events) |
| **content**                | N/A         | Text     |         | Conteúdo do email                                                               |
| **sent_error**             | N/A         | String   | 255     | Erro ocorrido no envio                                                          |
| **email_notification_id**  | N/A         | Integer  |         | ID da Notificação                                                               |
| **bank_billet_account_id** | N/A         | Integer  |         | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/).              |
| **resource_owner_id**      | N/A         | Integer  |         | ID do Objeto associado ao evento                                                |
| **status**                 | N/A         | String   | 255     | Situação                                                                        |
| **status_occurred_at**     | N/A         | DateTime |         | Data e hora que o status ocorreu                                                |

O `ID do Objeto` vai retornar todos e qualquer tipo de objeto que tenha o ID enviado, ou seja, se você enviar `1`, poderá retornar boletos, clientes e etc. Caso queira um filtro mais refinado, combine o `ID do Objeto ` com o `Código do evento`.

### Dicionário de Dados

#### status

| 0 | Pendente
| 1 | Enviado para o Servidor de E-mail
| 2 | Falha no Envio para o Servidor de E-mail
| 3 | Lido pelo Destinatário
| 4 | Link Acessado pelo Destinatário

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://api-sandbox.kobana.com.br/v1/email_deliveries/1'
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
  "content":"{}",
  "resource_owner_id":1,
  "delivered_at":'2015-03-17T03:36:08-03:00',
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

| Parâmetro             | Obrigatório | Tipo    | Descrição                                                                       |
| --------------------- | ----------- | ------- | ------------------------------------------------------------------------------- |
| **page**              | Não         | Integer | Número da Página                                                                |
| **per_page**          | Não         | Integer | Quantidade de registros por página                                              |
| **event_code**        | Não         | String  | Código do evento. Ver possíveis valores na [lista de eventos](/webhooks/events) |
| **status**            | Não         | Integer | Status do e-mail enviado ([possíveis valores](#status))                         |
| **resource_owner_id** | Não         | Integer | ID do Objeto                                                                    |

O `ID do Objeto` vai retornar todos e qualquer tipo de objeto que tenha o ID enviado, ou seja, se você enviar `1`, poderá retornar boletos, clientes e etc. Caso queira um filtro mais refinado, combine o `ID do Objeto ` com o `Código do evento`.

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://api-sandbox.kobana.com.br/v1/email_deliveries?page=1&per_page=2"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://api-sandbox.kobana.com.br/v1/email_deliveries?page=2&per_page=2>; rel="last", <https://api-sandbox.kobana.com.br/v1/email_deliveries?page=2&per_page=2>; rel="next"
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "content":"{}",
    "delivered_at":'2015-03-17T03:36:08-03:00',
    "resource_owner_id":1,
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
Próxima Página: https://api-sandbox.kobana.com.br/v1/transactions?page=2&per_page=2
Última Página: https://api-sandbox.kobana.com.br/v1/transactions?page=2&per_page=2
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
Próxima Página: https://api-sandbox.kobana.com.br/v1/transactions?page=2&per_page=2
Última Página: https://api-sandbox.kobana.com.br/v1/transactions?page=2&per_page=2
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://api-sandbox.kobana.com.br/v1/email_deliveries/1/resend"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
Location: https://api-sandbox.kobana.com.br/v1/email_deliveries/1
...

</pre>
  </div>
