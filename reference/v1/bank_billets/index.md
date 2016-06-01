---
layout: pt
title: Boletos - API do Boleto Simples
en: /en/reference
breadcrumb: Boletos
---

## Boletos

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [POST /api/v1/bank_billets](#criar-boleto) | Criar boleto
| [GET /api/v1/bank_billets/:id](#informaes-do-boleto) | Informações do boleto
| [GET /api/v1/bank_billets](#listar-boletos) | Listar boletos
| [PUT /api/v1/bank_billets/:id/cancel](#cancelar-boleto) | Cancelar boleto
| [POST /api/v1/bank_billets/:id/duplicate](#gerar-segunda-via-do-boleto) | Gerar segunda via do boleto

### Modelo de Dados

| Parâmetro                       | Obr.  | Tipo    | Tamanho | Descrição
| ------------------------------- | ----- | ------- | ------- | ------------------------
| **id**                          | N/A   | Integer |         | ID do boleto
| **bank_billet_account_id**      | Sim   | Integer |         | [ID da Carteira de Cobrança](/reference/v1/bank_billet_accounts/)
| **our_number**                  | Não   | Integer |         | Nosso Número(Controlado pelo sistema se em branco)
| **amount**                      | Sim   | String  |         | Quantia (R$) Formato: 1.345,56
| **expire_at**                   | Sim   | Date    |         | Data de vencimento
| **description**                 | Sim   | Text    |         | Descrição do produto ou serviço
| **customer_id**                 | Não   | Number  |         | ID do Cliente Cadastrado. Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
| **customer_person_name**        | Sim   | String  | 255     | Nome ou Razão Social do Pagador
| **customer_cnpj_cpf**           | Sim   | String  | 20      | CNPJ ou CPF do Pagador
| **customer_zipcode**            | Sim   | Integer | 8       | CEP (formato 99999999)
| **customer_email**              | Não   | String  | 255     | E-mail do Pagador
| **customer_address**            | Sim   | Text    |         | Endereço
| **customer_city_name**          | Sim   | String  | 255     | Cidade(Nome deve estar correto e completo)
| **customer_state**              | Sim   | String  | 2       | Estado
| **customer_neighborhood**       | Sim   | String  | 255     | Bairro
| **customer_address_number**     | Não   | String  | 255     | Número
| **customer_address_complement** | Não   | String  | 255     | Complemento
| **customer_phone_number**       | Não   | String  | 255     | Telefone (com DDD)
| **meta**                        | Não   | Campo Genérico | | Aceita qualquer formato passado. Pode ser usado para salvar dados que não existam dentro do Boleto Simples. Exemplo: {pedido: 12345}
| **status**                      | N/A   | String  |         | Situação do boleto ([possíveis valores](#status))
| **paid_at**                     | N/A   | Date    |         | Data do pagamento
| **paid_amount**                 | N/A   | Float   |         | Valor pago
| **shorten_url**                 | N/A   | String  |         | URL para visualização do boleto
| **created_via_api**             | N/A   | Boolean |         | Define se o boleto foi criado pela API
| **fine_for_delay**              | Não   | Float   |         | Multa por Atraso
| **late_payment_interest**       | Não   | Float   |         | Juros de Mora
| **guarantor_name**              | Não   | String  |         | Sacador/Avalista
| **guarantor_cnpj_cpf**          | Não   | Float   |         | CNPJ/CPF do Sacador/Avalista
| **payment_place**               | Não   | String  |         | Local de Pagamento
| **instructions**                | Não   | String  |         | Instruções para o Caixa
| **document_date**               | Não   | Date    |         | Data do Documento
| **document_type**               | Não   | String  |         | Tipo de Documento
| **document_number**             | Não   | Number  |         | Número do Documento
| **document_amount**             | Não   | String  |         | Valor do Documento (R$) Formato: 1.345,56
| **acceptance**                  | Não   | String  |         | Aceite

### Dicionário de Dados

#### status

| generating | Gerando
| opened     | Aberto
| canceled   | Cancelado
| paid       | Pago
| overdue    | Vencido
| blocked    | Bloqueado
| chargeback | Estornado

#### acceptance

| S | Sim
| N | Não

### Criar boleto

`POST /api/v1/bank_billets`

ATENÇÃO: Apesar de receber a resposta com os dados do boleto, isso, somente, não garante que o boleto esteja pronto para uso. Isso apenas indica que o boleto foi aceito e cadastrado em sua conta.

A partir desse momento o boleto entra em uma fila para ser gerado por completo(código de barras, linha digitável, layout).

Após o boleto ser gerado por completo seu status mudará para `opened`.

Só então você poderá disponibilizar o boleto aos seus clientes.

Para saber se um boleto foi gerado por completo, você deve preparar seu sisema para receber nossos [Webhooks](/webhooks)

Será retornado `404 Not Found` ao tentar acessar a url de um boleto que ainda esteja sendo gerado(`generating`).

#### Exemplo de requisição inválida

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
-d '{"bank_billet":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets'
</pre>

    <small>Resposta:</small>

<pre class="http">
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
@bank_billet = BoletoSimples::BankBillet.create({amount: 9.10})
if @bank_billet.persisted?
  puts "Sucesso :)"
  puts @bank_billet.attributes
else
  puts "Erro :("
  puts @bank_billet.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
  :expire_at => [
    [0] "não pode ficar em branco",
    [1] "não é uma data válida"
  ],
  :customer_person_name => [
    [0] "não pode ficar em branco"
  ],
  :customer_cnpj_cpf => [
    [0] "não pode ficar em branco"
  ],
  :description => [
    [0] "não pode ficar em branco"
  ],
  :customer_zipcode => [
    [0] "não pode ficar em branco"
  ],
  :customer_state => [
    [0] "não pode ficar em branco"
  ],
  :customer_address => [
    [0] "não pode ficar em branco"
  ],
  :customer_neighborhood => [
    [0] "não pode ficar em branco"
  ],
  :customer_city_id => [
    [0] "não pode ficar em branco"
  ]
}
</pre>
  </div>
    <div class="tab-pane" id="php">
      <small>Requisição:</small>
<pre class="php">
$bank_billet = BoletoSimples\BankBillet::create(['amount' => 9.1]);
if($bank_billet->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet->response_errors);
}
</pre>

      <small>Resposta:</small>

<pre class="php">
Erro :(
Array
(
    [expire_at] => Array
        (
            [0] => não pode ficar em branco
            [1] => não é uma data válida
        )

    [customer_person_name] => Array
        (
            [0] => não pode ficar em branco
        )

    [customer_cnpj_cpf] => Array
        (
            [0] => não pode ficar em branco
        )

    [description] => Array
        (
            [0] => não pode ficar em branco
        )

    [customer_zipcode] => Array
        (
            [0] => não pode ficar em branco
        )
    [customer_state] => Array
        (
            [0] => não pode ficar em branco
        )

    [customer_address] => Array
        (
            [0] => não pode ficar em branco
        )

    [customer_neighborhood] => Array
        (
            [0] => não pode ficar em branco
        )

    [customer_city_id] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>
    </div>
</div>

#### Exemplo de requisição válida

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
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"bank_billet":{"amount":12.34, "expire_at": "2014-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28", "customer_zipcode": "12312123", "customer_address": "Rua quinhentos", "customer_city_name": "Rio de Janeiro", "customer_state": "RJ", "customer_neighborhood": "bairro"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets'
</pre>

    <small>Resposta:</small>

<pre class="http">
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
  "customer_address":"Rua quinhentos",
  "customer_state":"RJ",
  "customer_neighborhood":"bairro",
  "customer_zipcode":"12312123",
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":"Rio de Janeiro",
  "paid_amount":0.0,
  "amount":12.34
}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>
<pre class="ruby">
@bank_billet = BoletoSimples::BankBillet.create({
  amount: 9.01,
  description: 'Despesas do contrato 0012',
  expire_at: '2014-01-01',
  customer_address: 'Rua quinhentos',
  customer_address_complement: 'Sala 4',
  customer_address_number: '111',
  customer_city_name: 'Rio de Janeiro',
  customer_cnpj_cpf: '012.345.678-90',
  customer_email: 'cliente@example.com',
  customer_neighborhood: 'Sao Francisco',
  customer_person_name: 'Joao da Silva',
  customer_person_type: 'individual',
  customer_phone_number: '2112123434',
  customer_state: 'RJ',
  customer_zipcode: '12312123'
})
if @bank_billet.persisted?
  puts "Sucesso :)"
  puts @bank_billet.attributes
else
  puts "Erro :("
  puts @bank_billet.response_errors
end
</pre>

  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
                         "amount" => 9.01,
                    "description" => "Despesas do contrato 0012",
                      "expire_at" => "2014-01-01",
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
               "customer_zipcode" => "12312123",
                             "id" => 854,
                        "paid_at" => nil,
                         "status" => "generating",
                    "shorten_url" => nil,
               "notification_url" => nil,
         "send_email_on_creation" => nil,
                "created_via_api" => true,
                    "paid_amount" => 0.0
}
</pre>
  </div>
    <div class="tab-pane" id="php2">
      <small>Requisição:</small>
<pre class="php">
$bank_billet = BoletoSimples\BankBillet::create(array (
  'amount' => 9.01,
  'description' => 'Despesas do contrato 0012',
  'expire_at' => '2014-01-01',
  'customer_address' => 'Rua quinhentos',
  'customer_address_complement' => 'Sala 4',
  'customer_address_number' => '111',
  'customer_city_name' => 'Rio de Janeiro',
  'customer_cnpj_cpf' => '012.345.678-90',
  'customer_email' => 'cliente@example.com',
  'customer_neighborhood' => 'Sao Francisco',
  'customer_person_name' => 'Joao da Silva',
  'customer_person_type' => 'individual',
  'customer_phone_number' => '2112123434',
  'customer_state' => 'RJ',
  'customer_zipcode' => '12312123'
));
if($bank_billet->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet->response_errors);
}
</pre>

    <small>Resposta:</small>

<pre class="php">
Sucesso :)
Array
(
    [id] => 857
    [expire_at] => 2014-01-01
    [paid_at] =>
    [description] => Despesas do contrato 0012
    [status] => generating
    [shorten_url] =>
    [customer_person_type] => individual
    [customer_person_name] => Joao da Silva
    [customer_cnpj_cpf] => 012.345.678-90
    [customer_address] => Rua quinhentos
    [customer_state] => RJ
    [customer_neighborhood] => Sao Francisco
    [customer_zipcode] => 12312123
    [customer_address_number] => 111
    [customer_address_complement] => Sala 4
    [customer_phone_number] => 2112123434
    [customer_email] => cliente@example.com
    [notification_url] =>
    [send_email_on_creation] =>
    [created_via_api] => 1
    [customer_city_name] => Rio de Janeiro
    [paid_amount] => 0
    [amount] => 9.01
)
</pre>
    </div>
</div>

### Informações do boleto

`GET /api/v1/bank_billets/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/1'
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
  "customer_zipcode":"12312123",
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":"Rio de Janeiro",
  "paid_amount":0.0,
  "amount":12.34
}

</pre>
  </div>
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet = BoletoSimples::BankBillet.find(854)
puts @bank_billet.attributes
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
                      "expire_at" => "2014-01-01",
                        "paid_at" => nil,
                    "description" => "Despesas do contrato 0012",
                         "status" => "opened",
                    "shorten_url" => "http://bole.to/xxxxxxxx",
           "customer_person_type" => "individual",
           "customer_person_name" => "Joao da Silva",
              "customer_cnpj_cpf" => "012.345.678-90",
               "customer_address" => "Rua quinhentos",
                 "customer_state" => "RJ",
          "customer_neighborhood" => "Sao Francisco",
               "customer_zipcode" => "12312123",
        "customer_address_number" => "111",
    "customer_address_complement" => "Sala 4",
          "customer_phone_number" => "2112123434",
                 "customer_email" => "cliente@example.com",
               "notification_url" => nil,
         "send_email_on_creation" => nil,
                "created_via_api" => true,
             "customer_city_name" => "Rio de Janeiro",
                    "paid_amount" => 0.0,
                         "amount" => 9.01,
                             "id" => 854
}
</pre>

  </div>
    <div class="tab-pane" id="php3">
      <small>Requisição:</small>

<pre class="php">
$bank_billet = BoletoSimples\BankBillet::find(857);
print_r($bank_billet->attributes());
</pre>

      <small>Resposta:</small>

<pre class="php">
Array
(
    [id] => 857
    [expire_at] => 2014-01-01
    [paid_at] =>
    [description] => Despesas do contrato 0012
    [status] => opened
    [shorten_url] => http://bole.to/xxxxxxxx
    [customer_person_type] => individual
    [customer_person_name] => Joao da Silva
    [customer_cnpj_cpf] => 012.345.678-90
    [customer_address] => Rua quinhentos
    [customer_state] => RJ
    [customer_neighborhood] => Sao Francisco
    [customer_zipcode] => 12312123
    [customer_address_number] => 111
    [customer_address_complement] => Sala 4
    [customer_phone_number] => 2112123434
    [customer_email] => cliente@example.com
    [notification_url] =>
    [send_email_on_creation] =>
    [created_via_api] => 1
    [customer_city_name] => Rio de Janeiro
    [paid_amount] => 0
    [amount] => 9.01
)
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
        Quantidade de registros por página (Maximo de 250)
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
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=3&per_page=50>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=2&per_page=50>; rel="next"
Total: 101
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
    "customer_address":"Rua quinhentos",
    "customer_state":"RJ",
    "customer_neighborhood":"bairro",
    "customer_zipcode":"12312123",
    "customer_address_number":null,
    "customer_address_complement":null,
    "customer_phone_number":null,
    "customer_email":null,
    "send_email_on_creation":null,
    "created_via_api":true,
    "customer_city_name":"Rio de Janeiro",
    "paid_amount":0.0,
    "amount":12.34
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição</small>

<pre class="ruby">
@bank_billets = BoletoSimples::BankBillet.all(page: 1, per_page: 2)
puts "Boletos Retornados: #{@bank_billets.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Boletos Retornados: 2
Total: 124
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=62&per_page=2
</pre>

  </div>
    <div class="tab-pane" id="php4">
      <small>Requisição</small>

<pre class="php">
$bank_billets = BoletoSimples\BankBillet::all(['page' => 1, 'per_page' => 2]);
echo "Boletos Retornados: " . sizeof($bank_billets) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

      <small>Resposta:</small>

<pre class="http">
Boletos Retornados: 2
Total: 124
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=62&per_page=2
</pre>

    </div>
</div>

### Cancelar boleto

`PUT /api/v1/bank_billets/:id/cancel` ou `PATCH /api/v1/bank_billets/:id/cancel`

Você pode cancelar boletos nos status de Aberto(`opened`) ou Vencido(`overdue`)

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby5" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php5" role="tab" data-toggle="tab">PHP</a></li>
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

<pre class="http">
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
@bank_billet = BoletoSimples::BankBillet.find(863)
puts "Status Anterior: #{@bank_billet.status}"
if @bank_billet.cancel
  puts "Cancelado :)"
else
  puts "Erro :)"
  puts @bank_billet.response_errors
end
puts "Status Final: #{@bank_billet.status}"
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Status Anterior: paid
Erro :)
{:status=>["cannot transition via cancel"]}
Status Final: paid
</pre>

  </div>
    <div class="tab-pane" id="php5">
      <small>Requisição</small>

<pre class="php">
$bank_billet = BoletoSimples\BankBillet::find(863);
echo "Status Anterior: " . $bank_billet->status . "\n";
if($bank_billet->cancel()) {
  echo "Cancelado :)\n";
} else {
  echo "Erro :)\n";
  print_r($bank_billet->response_errors);
}
echo "Status Final: " . $bank_billet->status . "\n";
</pre>

      <small>Resposta:</small>

<pre class="php">
Status Anterior: paid
Erro :)
Array
(
    [status] => Array
        (
            [0] => cannot transition via cancel
        )

)
Status Final: paid
</pre>

    </div>
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li>
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

<pre class="http">
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
  "customer_address":"Rua quinhentos",
  "customer_state":"RJ",
  "customer_neighborhood":"bairro",
  "customer_zipcode":"12312123",
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":"Rio de Janeiro",
  "paid_amount":0.0,
  "amount":12.34
}
</pre>
  </div>
  <div class="tab-pane" id="ruby6">
    <small>Requisição</small>

<pre class="ruby">
@bank_billet = BoletoSimples::BankBillet.find(862)
puts "Status Anterior: #{@bank_billet.status}"
if @bank_billet.cancel
  puts "Cancelado :)"
else
  puts "Erro :)"
  puts @bank_billet.response_errors
end
puts "Status Final: #{@bank_billet.status}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Status Anterior: opened
Cancelado :)
Status Final: canceled
</pre>

  </div>
    <div class="tab-pane" id="php6">
      <small>Requisição</small>

<pre class="php">
$bank_billet = BoletoSimples\BankBillet::find(860);
echo "Status Anterior: " . $bank_billet->status . "\n";
if($bank_billet->cancel()) {
  echo "Cancelado :)\n";
} else {
  echo "Erro :)\n";
  print_r($bank_billet->response_errors);
}
echo "Status Final: " . $bank_billet->status . "\n";
</pre>

      <small>Resposta:</small>

<pre class="http">
Status Anterior: opened
Cancelado :)
Status Final: canceled
</pre>

    </div>
</div>

### Gerar segunda via do boleto

`POST /api/v1/bank_billets/:id/duplicate`

### Modelo de Dados

| Parâmetro                       | Obr.  | Tipo    | Tamanho | Descrição
| ------------------------------- | ----- | ------- | ------- | ------------------------
| **id**                          | Sim   | Integer |         | ID do boleto
| **expire_at_in_days**           | Não   | Integer |         | Nº de dias para vencimento a partir da data de hoje (Default: 7)
| **cancel**                      | Não   | Boolean |         | Cancelar o boleto que está sendo  duplicado(Default: true)


No momento não há cálculo de juros automáticos que atualizem o valor do boleto.

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"expire_at_in_days":"5"}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/duplicate'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billets/2
Content-Type: application/json; charset=utf-8
...

{
  "id":2,
  "expire_at":"2014-11-20",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"generating",
  "shorten_url":null,
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":"Rua quinhentos",
  "customer_state":"RJ",
  "customer_neighborhood":"bairro",
  "customer_zipcode":"12312123",
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":"Rio de Janeiro",
  "paid_amount":0.0,
  "amount":12.34
}
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>
<pre class="ruby">
@bank_billet = BoletoSimples::BankBillet.create({
  amount: 9.01,
  description: 'Despesas do contrato 0012',
  expire_at: '2014-01-01',
  customer_address: 'Rua quinhentos',
  customer_address_complement: 'Sala 4',
  customer_address_number: '111',
  customer_city_name: 'Rio de Janeiro',
  customer_cnpj_cpf: '012.345.678-90',
  customer_email: 'cliente@example.com',
  customer_neighborhood: 'Sao Francisco',
  customer_person_name: 'Joao da Silva',
  customer_person_type: 'individual',
  customer_phone_number: '2112123434',
  customer_state: 'RJ',
  customer_zipcode: '12312123'
})
if @bank_billet.persisted?
  puts "Sucesso :)"
  puts @bank_billet.attributes
else
  puts "Erro :("
  puts @bank_billet.response_errors
end
</pre>

  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
                         "amount" => 9.01,
                    "description" => "Despesas do contrato 0012",
                      "expire_at" => "2014-01-01",
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
               "customer_zipcode" => "12312123",
                             "id" => 854,
                        "paid_at" => nil,
                         "status" => "generating",
                    "shorten_url" => nil,
               "notification_url" => nil,
         "send_email_on_creation" => nil,
                "created_via_api" => true,
                    "paid_amount" => 0.0
}
</pre>
  </div>
    <div class="tab-pane" id="php2">
      <small>Requisição:</small>
<pre class="php">
$bank_billet = BoletoSimples\BankBillet::create(array (
  'amount' => 9.01,
  'description' => 'Despesas do contrato 0012',
  'expire_at' => '2014-01-01',
  'customer_address' => 'Rua quinhentos',
  'customer_address_complement' => 'Sala 4',
  'customer_address_number' => '111',
  'customer_city_name' => 'Rio de Janeiro',
  'customer_cnpj_cpf' => '012.345.678-90',
  'customer_email' => 'cliente@example.com',
  'customer_neighborhood' => 'Sao Francisco',
  'customer_person_name' => 'Joao da Silva',
  'customer_person_type' => 'individual',
  'customer_phone_number' => '2112123434',
  'customer_state' => 'RJ',
  'customer_zipcode' => '12312123'
));
if($bank_billet->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet->response_errors);
}
</pre>

    <small>Resposta:</small>

<pre class="php">
Sucesso :)
Array
(
    [id] => 857
    [expire_at] => 2014-01-01
    [paid_at] =>
    [description] => Despesas do contrato 0012
    [status] => generating
    [shorten_url] =>
    [customer_person_type] => individual
    [customer_person_name] => Joao da Silva
    [customer_cnpj_cpf] => 012.345.678-90
    [customer_address] => Rua quinhentos
    [customer_state] => RJ
    [customer_neighborhood] => Sao Francisco
    [customer_zipcode] => 12312123
    [customer_address_number] => 111
    [customer_address_complement] => Sala 4
    [customer_phone_number] => 2112123434
    [customer_email] => cliente@example.com
    [notification_url] =>
    [send_email_on_creation] =>
    [created_via_api] => 1
    [customer_city_name] => Rio de Janeiro
    [paid_amount] => 0
    [amount] => 9.01
)
</pre>
    </div> -->
</div>