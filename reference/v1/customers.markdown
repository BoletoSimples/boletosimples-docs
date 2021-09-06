---
title: Clientes
position: 5
en: "/en/references"
breadcrumb: Clientes
layout: pt
---

## Clientes

| Recurso                                                   | Descrição              |
| --------------------------------------------------------- | ---------------------- |
| [POST /api/v1/customers](#criar-cliente)                  | Criar cliente          |
| [GET /api/v1/customers/:id](#informações-do-cliente)      | Informações do cliente |
| [PATCH /api/v1/customers/:id](#atualizar-cliente)         | Atualizar cliente      |
| [PUT /api/v1/customers/:id](#atualizar-cliente)           | Atualizar cliente      |
| [GET /api/v1/customers](#listar-clientes)                 | Listar clientes        |
| [GET /api/v1/customers/cnpj_cpf](#buscar-por-cpf-ou-cnpj) | Buscar por CPF ou CNPJ |
| [GET /api/v1/customers/email](#buscar-por-e-mail)         | Buscar por e-mail      |

### Modelo de Dados

| Parâmetro              | Obrigatório | Tipo    | Tamanho | Descrição                                               |
| ---------------------- | ----------- | ------- | ------- | ------------------------------------------------------- |
| **id**                 | N/A         | Integer |         | ID do cliente                                           |
| **person_name**        | Sim         | String  | 120     | Nome Completo ou Razão Social                           |
| **nickname**           | Não         | String  | 255     | Apelido ou Nome Fantasia                                |
| **person_type**        | N/A         | String  |         | Tipo de Cliente                                         |
| **cnpj_cpf**           | Sim         | String  | 20      | CNPJ/CPF (formato 999.999.999-99 ou 99.999.999/9999-99) |
| **zipcode**            | Sim         | Integer | 8       | CEP (formato 99999999)                                  |
| **address**            | Sim         | String  | 255     | Endereço                                                |
| **city_name**          | Sim         | String  | 60      | Cidade                                                  |
| **state**              | Sim         | String  | 2       | Estado (sigla do estado, Ex: RJ)                        |
| **neighborhood**       | Sim         | String  | 80      | Bairro                                                  |
| **address_number**     | Não         | String  | 10      | Número                                                  |
| **address_complement** | Não         | String  | 60      | Complemento                                             |
| **phone_number**       | Não         | String  | 11      | Telefone (formato 9988888888)                           |
| **email**              | Não         | String  | 80      | E-mail                                                  |
| **mobile_local_code**  | Não         | String  | 2       | DDD do Celular                                          |
| **mobile_number**      | Não         | String  | 9       | Celular                                                 |
| **notes**              | Não         | Text    |         | Anotações                                               |
| **email_cc**           | Não         | String  | 80      | E-mail alternativo                                      |
| **created_via_api**    | N/A         | Boolean |         | Enviado pela API                                        |
| **contact_person**     | Não         | String  | 255     | Pessoa de contato                                       |
| **truncated_address**  | Não         | String  | 40      | Endereço para remessa                                   |
| **external_code**      | Não         | String  | 60      | Código externo do Cliente                               |
| **tags**               | Não         | Array   |         | Etiquetas (Tags)                                        |
| **ignore_email**       | Não         | Boolean |         | Nunca enviar e-mail para este cliente
| **ignore_sms**         | Não         | Boolean |         | Nunca enviar SMS para este cliente                  |

### Criar cliente

`POST /api/v1/customers`

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"customer":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/customers'
</pre>

    <small>Resposta:</small>

<pre class="http">
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
@customer = BoletoSimples::Customer.create({person_name: 'Joao Da Silva'})
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
$customer = BoletoSimples\Customer::create(['person_name' => 'Joao da Silva']);
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"customer":{"person_name":"Nome do Cliente", "cnpj_cpf": "125.812.717-28", "zipcode": "20071004", "address": "Rua quinhentos", "city_name": "Rio de Janeiro", "state": "RJ", "neighborhood": "bairro", "tags": ["tag1", "tag2"]}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/customers'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/customers/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "city_name":"Rio de Janeiro",
  "person_name":"Nome do Cliente",
  "nickname":null,
  "address":"Rua quinhentos",
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":null,
  "neighborhood":"bairro",
  "person_type":"individual",
  "phone_number":null,
  "zipcode":"20071004",
  "mobile_local_code":null,
  "state":"RJ",
  "contact_person":"Nome do Contato",
  "truncated_address":"Rua quinhentos",
  "external_code":"12346578",
  "tags": [
      "tag1",
      "tag2"
  ],
  "tag_list": "tag1,tag2"
}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
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
  zipcode: "20071004",
  address_number: "111",
  address_complement: "Sala 4",
  phone_number: "2112123434",
  contact_person: "Nome do Contato",
  truncated_address:"Rua quinhentos",
  external_code:"12345678",
  tags: ["tag1", "tag2"]
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
               "zipcode" => "20071004",
        "address_number" => "111",
    "address_complement" => "Sala 4",
          "phone_number" => "2112123434",
                    "id" => 67,
         "mobile_number" => nil,
           "person_type" => "individual",
     "mobile_local_code" => nil,
       "created_via_api" => true,
       "nome_do_contato" => "Nome do Contato",
     "truncated_address" => "Rua quinhentos, 111",
     "external_code" => "12346578",
     "tags" => ["tag1", "tag2"],
     "tag_list" => "tag1,tag2"
}
</pre>
  </div>
  <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
$customer = BoletoSimples\Customer::create([
  "person_name" => "Joao da Silva",
  "cnpj_cpf" => "860.196.915-19",
  "email" => "cliente@example.com",
  "address" => "Rua quinhentos",
  "city_name" => "Rio de Janeiro",
  "state" => "RJ",
  "neighborhood" => "bairro",
  "zipcode" => "20071004",
  "address_number" => "111",
  "address_complement" => "Sala 4",
  "phone_number" => "2112123434",
  "contact_person" => "Nome do Contato",
  "truncated_address" => "Rua quinhentos, 111",
  "external_code" => "12345678",
  "tags" => ["tag1", "tag2"]
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
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
    [contact_person] => Nome do Contato
    [truncated_address] => Rua quinhentos, 111
    [external_code] => 12345678
    [tags] => {
                [0] => "tag1"
                [1] => "tag2"
              }
    [tag_list] => tag1,tag2
)
</pre>
  </div>
</div>

### Informações do cliente

`GET /api/v1/customers/:id`

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/customers/1'
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
  "city_name":"Rio de Janeiro",
  "person_name":"Nome do Cliente",
  "nickname":null,
  "address":"Rua quinhentos",
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":null,
  "neighborhood":"bairro",
  "person_type":"individual",
  "phone_number":null,
  "zipcode":"20071004",
  "mobile_local_code":null,
  "state":"RJ",
  "contact_person":"Nome do Contato",
  "truncated_address":"Rua quinhentos",
  "external_code":"12346578",
  "tags": [
      "tag1",
      "tag2"
  ],
  "tag_list": "tag1,tag2"
}
</pre>
  </div>
  <div class="tab-pane" id="ruby3">
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
               "zipcode" => "20071004",
     "mobile_local_code" => nil,
                 "state" => "RJ",
       "created_via_api" => true,
                    "id" => 67,
        "contact_person" => "Nome do Contato",
        "truncated_address" => "Rua quinhentos",
        "external_code" => "12346578",
        "tags" => ["tag1", "tag2"]
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
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
    [contact_person] => Nome do Contato
    [truncated_address] => Rua quinhentos, 111
    [external_code] => 12345678
    [tags] => {
                [0] => "tag1"
                [1]=> "tag2"
              }
)
</pre>
  </div>
</div>

### Atualizar cliente

`PATCH /api/v1/customers/:id` ou `PUT /api/v1/customers/:id`

#### Exemplo de requisição inválida

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
-d '{"customer":{"person_name":""}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PATCH 'https://sandbox.boletosimples.com.br/api/v1/customers/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"person_name":["não pode ficar em branco"]}}
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@customer = BoletoSimples::Customer.find(1)
@customer.person_name = ""
if @customer.save
  puts "Sucesso :)"
  puts "Novo nome: #{@customer.person_name}"
else
  puts "Erro :("
  puts @customer.response_errors
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
$customer = BoletoSimples\Customer::find(1);
$customer->person_name = '';
if($customer->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $customer->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($customer->response_errors);
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

</div>

#### Exemplo de requisição válida

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"customer":{"person_name":"Nome do Cliente Atualizado"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT 'https://sandbox.boletosimples.com.br/api/v1/customers/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Server: Cowboy
Content-Length: 0
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://sandbox.boletosimples.com.br/api/v1/customers/1
...

</pre>
  </div>
  <div class="tab-pane" id="ruby5">
    <small>Requisição:</small>

<pre class="ruby">
@customer = BoletoSimples::Customer.find(1)
@customer.person_name = "Nome 1234"
if @customer.save
  puts "Sucesso :)"
  puts "Novo nome: #{@customer.person_name}"
else
  puts "Erro :("
  puts @customer.response_errors
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
$customer = BoletoSimples\Customer::find(1);
echo "Nome antigo: " . $customer->person_name . "\n";;
$customer->person_name = 'Nome 1234';
if($customer->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $customer->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($customer->response_errors);
}
</pre>

<small>Resposta:</small>

<pre class="php">
Sucesso :)
Novo nome: Nome 1234
</pre>
  </div>
</div>

### Listar clientes

`GET /api/v1/customers`

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
        Quantidade de registros por página (Máximo de 50)
      </td>
    </tr>

    <tr>
      <td>
        <strong>tags[]</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Filtra por tags.
      </td>
    </tr>

  </tbody>
</table>

#### Exemplo

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/customers?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/customers?page=3&per_page=50>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/customers?page=2&per_page=50>; rel="next"
Total: 101
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "city_name":"Rio de Janeiro",
    "person_name":"Nome do Cliente",
    "address":"Rua quinhentos",
    "address_complement":null,
    "address_number":null,
    "mobile_number":null,
    "cnpj_cpf":"125.812.717-28",
    "email":null,
    "neighborhood":"bairro",
    "person_type":"individual",
    "phone_number":null,
    "zipcode":"20071004",
    "mobile_local_code":null,
    "state":"RJ",
    "contact_person":"Nome do Contato",
    "truncated_address":"Rua quinhentos",
    "external_code":"12345678"
    "tags": [
              "tag1"
          ],
    "tag_list": "tag1"
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby6">
    <small>Requisição:</small>

<pre class="ruby">
@customers = BoletoSimples::Customer.all(page: 1, per_page: 2)
puts "Clientes Retornados: #{@customers.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Clientes Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/customers?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/customers?page=5&per_page=2
</pre>
  </div>
  <div class="tab-pane" id="php6">
    <small>Requisição:</small>

<pre class="php">
$customers = BoletoSimples\Customer::all(['page' => 1, 'per_page' => 2]);
echo "Clientes Retornados: " . sizeof($customers) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
Clientes Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/customers?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/customers?page=5&per_page=2
</pre>
  </div>
</div>

### Buscar por CPF ou CNPJ

`GET /api/v1/customers/cnpj_cpf`

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
        <strong>q</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        CPF ou CNPJ formatado
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/customers/cnpj_cpf?q=125.812.717-28'
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
  "city_name":"Rio de Janeiro",
  "person_name":"Nome do Cliente",
  "address":"Rua quinhentos",
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":null,
  "neighborhood":"bairro",
  "person_type":"individual",
  "phone_number":null,
  "zipcode":"20071004",
  "mobile_local_code":null,
  "state":"RJ",
  "contact_person":"Nome do Contato",
  "truncated_address":"Rua quinhentos",
  "external_code":"12345678",
  "tags": [
            "tag1"
        ],
  "tag_list": "tag1"
}
</pre>
  </div>
 <!--  <div class="tab-pane" id="ruby3">
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
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>

### Buscar por e-mail

`GET /api/v1/customers/email`

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
        <strong>q</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        E-mail
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/customers/email?q=cliente@example.com'
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
  "city_name":"Rio de Janeiro",
  "person_name":"Nome do Cliente",
  "address":"Rua quinhentos",
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":"cliente@example.com",
  "neighborhood":"bairro",
  "person_type":"individual",
  "phone_number":null,
  "zipcode":"20071004",
  "mobile_local_code":null,
  "state":"RJ",
  "contact_person":"Nome do Contato",
  "truncated_address":"Rua quinhentos",
  "external_code":"12345678",
  "tags": [
            "tag1"
        ],
  "tag_list": "tag1"
}
</pre>
  </div>
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<!-- <pre class="ruby">
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
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>
