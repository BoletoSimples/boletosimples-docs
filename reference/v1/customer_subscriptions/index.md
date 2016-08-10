---
layout: pt
title: Assinaturas - API do Boleto Simples
en: /en/references
breadcrumb: Assinaturas
---

## Assinaturas

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [POST /api/v1/customer_subscriptions](#criar-assinatura) | Criar assinatura
| [GET /api/v1/customer_subscriptions/:id](#informaes-do-assinatura) | Informações da assinatura
| [PATCH /api/v1/customer_subscriptions/:id](#atualizar-assinatura) | Atualizar assinatura
| [PUT /api/v1/customer_subscriptions/:id](#atualizar-assinatura) | Atualizar assinatura
| [GET /api/v1/customer_subscriptions](#listar-assinaturas) | Listar assinaturas
| [POST /api/v1/customer_subscriptions/:id/next_charge](#gerar-prxima-cobrana) | Gerar próxima cobrança
| [DELETE /api/v1/customer_subscriptions/:id](#excluir-assinatura) | Excluir assinatura

### Modelo de Dados

| Parâmetro                   | Obr.  | Tipo    | Tamanho | Descrição
| --------------------------- | ----- | ------- | ------- | ------------------------
| **id**                      | N/A   | Integer |         | ID da assinatura
| **customer_id**             | Sim   | Integer |         | [ID do Cliente Cadastrado](/reference/v1/customers/)
| **bank_billet_account_id**  | Sim   | Integer |         | [ID da carteira de Cobrança Cadastrada](/reference/v1/bank_billet_accounts/)
| **amount**                  | Sim   | String  |         | Preço da Assinatura (R$) Formato: 1.234,34
| **cycle**                   | Sim   | String  | 20      | Ciclo da Assinatura ([possíveis valores](#subscriptioncycle))
| **next_billing**            | Não   | Date    |         | Data da Primeira ou Próxima cobrança. Caso não seja enviado uma data, esse campo será calculado para ter o valor do dia da criação da assinatura mais o ciclo escolhido. Ex.: Mensal(Hoje + 30 dias)
| **end_at**                  | Não   | Date    |         | Data em que deseja parar as cobranças. Caso em branco, as cobranças serão geradas automaticamente até que se informe uma data ou se exclua a assinatura.
| **description**             | Sim   | Text    |         | Descrição do produto vendido ou serviço prestado.
| **instructions**            | Não   | Text    |         | Instruções para o caixa
| **days_in_advance**         | Não   | Integer |         | Com quantos dias de antecedência à data de vencimento a cobrança será gerada. Default: 7.

### Dicionário de Dados

#### cycle

| biweekly   | Quinzenal
| bimonthly  | Bimestral
| monthly    | Mensal
| quarterly  | Trimestral
| semiannual | Semestral
| annual     | Anual

### Criar assinatura

`POST /api/v1/customer_subscriptions`

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"customer_subscription":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"customer_subscription":["não pode ficar em branco"]}}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscription = BoletoSimples::Customer.create({person_name: 'Joao Da Silva'})
if @customer_subscription.persisted?
  puts "Sucesso :)"
  puts @customer_subscription.attributes
else
  puts "Erro :("
  puts @customer_subscription.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
  :cnpj_cpf => [
    [0] "não pode ficar em branco"
  ],
  :zipcode => [
    [0] "não pode ficar em branco"
  ]
}
</pre>

  </div>
    <div class="tab-pane" id="php">
      <small>Requisição:</small>

<pre class="php">
$customer_subscription = BoletoSimples\Customer::create(['person_name' => 'Joao da Silva']);
if($customer_subscription->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($customer_subscription->attributes());
} else {
  echo "Erro :(\n";
  print_r($customer_subscription->response_errors);
}
</pre>

      <small>Resposta:</small>

<pre class="php">
Erro :(
Array
(
    [cnpj_cpf] => Array
        (
            [0] => não pode ficar em branco
        )

    [zipcode] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>

    </div> -->
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"customer_subscription":{"customer_id":"1", "bank_billet_account_id": "1", "amount": "1.120,4", "cycle": "monthly", "description": "Hospedagem"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1
Content-Type: application/json; charset=utf-8
...

{
 "id":1,
 "amount":1120.4,
 "cycle":"monthly",
 "next_billing":"2016-06-18",
 "end_at":null,
 "instructions":null,
 "description":"Hospedagem",
 "created_at":"2016-05-18",
 "updated_at":"2016-05-18",
 "created_via_api":true,
 "customer_id":"1",
 "bank_billet_account_id":"1",
 "days_in_advance": "7"
}
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscription = BoletoSimples::Customer.create({
  person_name: "Joao da Silva",
  cnpj_cpf: "782.661.177-64",
  email: "assinatura@bom.com",
  address: "Rua quinhentos",
  city_name: "Rio de Janeiro",
  state: "RJ",
  neighborhood: "bairro",
  zipcode: "20071004",
  address_number: "111",
  address_complement: "Sala 4",
  phone_number: "2112123434"
})
if @customer_subscription.persisted?
  puts "Sucesso :)"
  puts @customer_subscription.attributes
else
  puts "Erro :("
  puts @customer_subscription.response_errors
end
</pre>
  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
           "person_name" => "Joao da Silva",
              "cnpj_cpf" => "782.661.177-64",
                 "email" => "assinatura@bom.com",
               "address" => "Rua quinhentos",
             "city_name" => "Rio de Janeiro",
                 "state" => "RJ",
          "neighborhood" => "bairro",
               "zipcode" => "20071004",
        "address_number" => "111",
    "address_complement" => "Sala 4",
          "phone_number" => "2112123434",
                    "id" => 67,
         "mobile_number" => nil,
           "person_type" => "individual",
     "mobile_local_code" => nil,
       "created_via_api" => true
}
</pre>
  </div>
  <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
$customer_subscription = BoletoSimples\Customer::create([
  'person_name' => "Joao da Silva",
  'cnpj_cpf' => "860.196.915-19",
  'email' => "assinatura@example.com",
  'address' => "Rua quinhentos",
  'city_name' => "Rio de Janeiro",
  'state' => "RJ",
  'neighborhood' => "bairro",
  'zipcode' => "20071004",
  'address_number' => "111",
  'address_complement' => "Sala 4",
  'phone_number' => "2112123434"
]);
if($customer_subscription->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($customer_subscription->attributes());
} else {
  echo "Erro :(\n";
  print_r($customer_subscription->response_errors);
}
</pre>
  <small>Resposta:</small>

<pre class="php">
Sucesso :)
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
    [email] => assinatura@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>

### Informações do assinatura

`GET /api/v1/customer_subscriptions/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1'
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
 "amount":1120.4,
 "cycle":"monthly",
 "next_billing":"2016-06-18",
 "end_at":null,
 "instructions":null,
 "description":"Hospedagem",
 "created_at":"2016-05-18",
 "updated_at":"2016-05-18",
 "created_via_api":true,
 "customer_id":"1",
 "bank_billet_account_id":"1",
 "days_in_advance": "7"
}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscription = BoletoSimples::Customer.find(67)
puts @customer_subscription.attributes
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
                 "email" => "assinatura@bom.com",
          "neighborhood" => "bairro",
           "person_type" => "individual",
          "phone_number" => "2112123434",
               "zipcode" => "20071004",
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
$customer_subscription = BoletoSimples\Customer::find(66);
print_r($customer_subscription->attributes());
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
    [email] => assinatura@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div>
  -->
</div>

### Atualizar assinatura

`PATCH /api/v1/customer_subscriptions/:id` ou `PUT /api/v1/customer_subscriptions/:id`

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"customer_subscription":{"amount":""}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PATCH 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"amount":["não pode ficar em branco"]}}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscription = BoletoSimples::Customer.find(1)
@customer_subscription.person_name = ""
if @customer_subscription.save
  puts "Sucesso :)"
  puts "Novo nome: #{@customer_subscription.person_name}"
else
  puts "Erro :("
  puts @customer_subscription.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
  :person_name => [
    [0] "não pode ficar em branco"
  ]
}
</pre>

  </div>
    <div class="tab-pane" id="php4">
      <small>Requisição:</small>

<pre class="php">
$customer_subscription = BoletoSimples\Customer::find(1);
$customer_subscription->person_name = '';
if($customer_subscription->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $customer_subscription->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($customer_subscription->response_errors);
}
</pre>

      <small>Resposta:</small>

<pre class="php">
Erro :(
Array
(
    [person_name] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>

    </div>
    -->
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
 <!-- <li><a href="#ruby5" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php5" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash5">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"customer_subscription":{"amount":"120,40"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Content-Length: 0
Connection: keep-alive
Status: 204 No Content
Cache-Control: no-cache
X-Ratelimit-Limit: 500
Location: https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby5">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscription = BoletoSimples::Customer.find(1)
@customer_subscription.person_name = "Nome 1234"
if @customer_subscription.save
  puts "Sucesso :)"
  puts "Novo nome: #{@customer_subscription.person_name}"
else
  puts "Erro :("
  puts @customer_subscription.response_errors
end
</pre>
  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
Novo nome: Nome 1234
</pre>
  </div>
  <div class="tab-pane" id="php5">
    <small>Requisição:</small>

<pre class="php">
$customer_subscription = BoletoSimples\Customer::find(1);
echo "Nome antigo: " . $customer_subscription->person_name . "\n";;
$customer_subscription->person_name = 'Nome 1234';
if($customer_subscription->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $customer_subscription->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($customer_subscription->response_errors);
}
</pre>
  <small>Resposta:</small>

<pre class="php">
Sucesso :)
Novo nome: Nome 1234
</pre>
  </div>
  -->
</div>

### Listar assinaturas

`GET /api/v1/customer_subscriptions`

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
        Quantidade de registros por página (Maximo de 250)
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=3&per_page=50>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=2&per_page=50>; rel="next"
Total: 101
Content-Type: application/json; charset=utf-8
...

[
  {
   "id":1,
   "amount":1120.4,
   "cycle":"monthly",
   "next_billing":"2016-06-18",
   "end_at":null,
   "instructions":null,
   "description":"Hospedagem",
   "created_at":"2016-05-18",
   "updated_at":"2016-05-18",
   "created_via_api":true,
   "customer_id":"1",
   "bank_billet_account_id":"1",
   "days_in_advance": "7"
  }
]
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby6">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscriptions = BoletoSimples::Customer.all(page: 1, per_page: 2)
puts "Assinaturas Retornados: #{@customer_subscriptions.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Assinaturas Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=5&per_page=2
</pre>
  </div>
  <div class="tab-pane" id="php6">
    <small>Requisição:</small>

<pre class="php">
$customer_subscriptions = BoletoSimples\Customer::all(['page' => 1, 'per_page' => 2]);
echo "Assinaturas Retornados: " . sizeof($customer_subscriptions) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
Assinaturas Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions?page=5&per_page=2
</pre>
  </div>
  -->
</div>

### Gerar próxima cobrança

`POST /api/v1/customer_subscriptions/:id/next_charge`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1/next_charge'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 201 OK
Content-Type: application/json; charset=utf-8
...

{
 "id":1,
 "amount":1120.4,
 "cycle":"monthly",
 "next_billing":"2016-07-18",
 "end_at":null,
 "instructions":null,
 "description":"Hospedagem",
 "created_at":"2016-05-18",
 "updated_at":"2016-05-18",
 "created_via_api":true,
 "customer_id":"1",
 "bank_billet_account_id":"1",
 "days_in_advance": "7"
}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@customer_subscription = BoletoSimples::Customer.find(67)
puts @customer_subscription.attributes
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
                 "email" => "assinatura@bom.com",
          "neighborhood" => "bairro",
           "person_type" => "individual",
          "phone_number" => "2112123434",
               "zipcode" => "20071004",
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
$customer_subscription = BoletoSimples\Customer::find(66);
print_r($customer_subscription->attributes());
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
    [email] => assinatura@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div>
  -->
</div>

### Excluir assinatura

`DELETE /api/v1/customer_subscriptions/:id`

Nenhum boleto gerado pela assinatura será excluído.

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X DELETE 'https://sandbox.boletosimples.com.br/api/v1/customer_subscriptions/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
...

</pre>
  </div>
  <!--div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
@customer = BoletoSimples::Customer.create({
  person_name: "Joao da Silva",
  cnpj_cpf: "782.661.177-64",
  email: "cliente@bom.com",
  address: "Rua quinhentos",
  city_name: "Rio de Janeiro",
  state: "RJ",
  neighborhood: "bairro",
  zipcode: "12312-123",
  address_number: "111",
  address_complement: "Sala 4",
  phone_number: "2112123434"
})
if @customer.persisted?
  puts "Sucesso :)"
  puts @customer.attributes
else
  puts "Erro :("
  puts @customer.response_errors
end
</pre>
  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
           "person_name" => "Joao da Silva",
              "cnpj_cpf" => "782.661.177-64",
                 "email" => "cliente@bom.com",
               "address" => "Rua quinhentos",
             "city_name" => "Rio de Janeiro",
                 "state" => "RJ",
          "neighborhood" => "bairro",
               "zipcode" => "12312-123",
        "address_number" => "111",
    "address_complement" => "Sala 4",
          "phone_number" => "2112123434",
                    "id" => 67,
         "mobile_number" => nil,
           "person_type" => "individual",
     "mobile_local_code" => nil,
       "created_via_api" => true
}
</pre>
  </div>
  <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
$customer = BoletoSimples\Customer::create([
  'person_name' => "Joao da Silva",
  'cnpj_cpf' => "860.196.915-19",
  'email' => "cliente@example.com",
  'address' => "Rua quinhentos",
  'city_name' => "Rio de Janeiro",
  'state' => "RJ",
  'neighborhood' => "bairro",
  'zipcode' => "12312-123",
  'address_number' => "111",
  'address_complement' => "Sala 4",
  'phone_number' => "2112123434"
]);
if($customer->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($customer->attributes());
} else {
  echo "Erro :(\n";
  print_r($customer->response_errors);
}
</pre>
  <small>Resposta:</small>

<pre class="php">
Sucesso :)
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