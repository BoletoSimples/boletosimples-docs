---
layout: pt
title: CNAB (Remessa) - API do Boleto Simples
en: /en/references
breadcrumb: CNAB (Remessa)
---

## CNAB (Remessa)

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [POST /api/v1/remittances](#criar-cnab) | Criar CNAB
| [GET /api/v1/remittances/:id](#informações-do-cnab) | Informações do CNAB
| [GET /api/v1/remittances](#listar-cnabs) | Listar CNABs
| [DELETE /api/v1/remittances/:id](#apagar-cnab) | Apagar CNAB

### Modelo de Dados

| Parâmetro                     | Obr.  | Tipo    | Tamanho | Descrição
| ------------------------------| ----- | ------- | ------- | ------------------------
| **id**                        | N/A   | Integer |         | ID do CNAB
| **content**                   | Não   | Text    |         | Conteúdo da remessa
| **filename**                  | Não   | String  | 255     | Nome do arquivo
| **processed_at**              | Não   | Time    |         | Data de Processamento
| **created_via_api**           | Não   | Boolean |         | Enviado pela API
| **status**                    | Não   | String  |         | Situação do arquivo ([possíveis valores](#status))
| **created_at**                | Não   | DateTime|         | Data de criação
| **url**                       | Não   | String  |         | URL do arquivo de remessa
| **bank_billet_account_id**    | Sim   | Integer |         | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/)
| **bank_billet_ids**           | Não   | Array   |         | IDs de boletos vinculados a remessa
| **remittance_number**         | Não   | Integer |         | Número da remessa
| **sent_via_integration**      | Não   | Date    |         | Data de envio automático para o banco

### Dicionário de Dados

#### status

| unprocessed | Pendente
| processed   | Processado
| downloaded  | Baixada pelo usuário
| sent        | Enviada para o banco

### Criar CNAB

`POST /api/v1/remittances`

Será feita uma solicitação de Remessa.
Após a criação da Remessa, ela será processada e
ao término do processamento serão emitidas notificações através dos Webhooks.

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: multipart/form-data' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/remittances'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"remittance":["não pode ficar em branco"]}}
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.create({bank_contract_slug: 'sicoob-02'})
if @bank_billet_account.persisted?
  puts "Sucesso :)"
  ap @bank_billet_account.attributes
else
  puts "Erro :("
  ap @bank_billet_account.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
     :agency_number => [
        [0] "não pode ficar em branco"
    ],
    :account_number => [
        [0] "não pode ficar em branco"
    ]
}
</pre>

  </div> -->
    <!-- <div class="tab-pane" id="php">
      <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::create(['person_name' => 'Joao da Silva']);
if($bank_billet_account->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet_account->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
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
  <!-- <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"remittance":{"bank_billet_account_id": "1"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/remittances'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://sandbox.boletosimples.com.br/api/v1/remittances/1
Content-Type: application/json; charset=utf-8
...

{
                  "filename" => "1605061.REM",
           "created_via_api" => true,
                    "status" => "processed",
    "bank_billet_account_id" => 1,
                "created_at" => "2016-05-06",
              "processed_at" => "2016-05-06",
                       "url" => "https://sandbox.boletosimples.com.br/remessas/06tt1bcc3f6132720866b53a57c76de4/download",
                        "id" => 1,
           "bank_billet_ids" => [1]
}
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.create({
  bank_contract_slug: 'sicoob-02',
  next_our_number: '1',
  agency_number: '4327',
  agency_digit: '3',
  account_number: '3666',
  account_digit: '8',
  extra1: '1234567'
})
if @bank_billet_account.persisted?
  puts "Sucesso :)"
  ap @bank_billet_account.attributes
else
  puts "Erro :("
  ap @bank_billet_account.response_errors
end
</pre>
  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
    "bank_contract_slug" => "sicoob-02",
       "next_our_number" => "0000001",
         "agency_number" => "4327",
          "agency_digit" => "3",
        "account_number" => "00003666",
         "account_digit" => "8",
         "extra1_length" => "1234567",
                    "id" => 2,
                "extra1" => "1234567",
          "extra1_digit" => nil,
                "extra2" => nil,
          "extra2_digit" => nil
}
</pre>
  </div> -->
  <!-- <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::create([
  'person_name' => "Joao da Silva",
  'cnpj_cpf' => "860.196.915-19",
  'email' => "carteira@example.com",
  'address' => "Rua quinhentos",
  'city_name' => "Rio de Janeiro",
  'state' => "RJ",
  'neighborhood' => "bairro",
  'zipcode' => "12312-123",
  'address_number' => "111",
  'address_complement' => "Sala 4",
  'phone_number' => "2112123434"
]);
if($bank_billet_account->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet_account->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
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
    [email] => carteira@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 12312-123
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>

### Informações do CNAB

`GET /api/v1/remittances/:id`

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
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/remittances/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{
                  "filename" => "1605061.REM",
           "created_via_api" => true,
                    "status" => "processed",
    "bank_billet_account_id" => 1,
                "created_at" => "2016-05-06",
              "processed_at" => "2016-05-06",
                       "url" => "https://sandbox.boletosimples.com.br/remessas/06tt1bcc3f6132720866b53a57c76de4/download",
                        "id" => 1,
           "bank_billet_ids" => [1]
}
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(4)
ap @bank_billet_account.attributes
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
    "bank_contract_slug" => "sicoob-02",
       "next_our_number" => "0000001",
         "agency_number" => "4327",
          "agency_digit" => "3",
        "account_number" => "00003666",
         "account_digit" => "8",
                "extra1" => "1234567",
          "extra1_digit" => nil,
                "extra2" => nil,
          "extra2_digit" => nil,
                    "id" => 3
}
</pre>
  </div> -->
  <!-- <div class="tab-pane" id="php3">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(66);
print_r($bank_billet_account->attributes());
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
    [email] => carteira@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 12312-123
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>

### Listar CNABs

`GET /api/v1/remittances`

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
  <!-- <li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/remittances?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

[
  {
                    "filename" => "1605061.REM",
             "created_via_api" => true,
                      "status" => "processed",
      "bank_billet_account_id" => 1,
                  "created_at" => "2016-05-06",
                "processed_at" => "2016-05-06",
                         "url" => "https://boletosimples.com.br/remessas/06tt1bcc3f6132720866b53a57c76de4/download",
                          "id" => 1,
             "bank_billet_ids" => [1]
  }
]
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby6">
    <small>Requisição:</small>

<pre class="ruby">
@remittances = BoletoSimples::BankBilletAccount.all(page: 1, per_page: 2)
puts "Carteiras Retornadas: #{@remittances.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
CNABs Retornadas: 3
Total: 3
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/remittances?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/remittances?page=2&per_page=2
</pre>
  </div> -->
  <!-- <div class="tab-pane" id="php6">
    <small>Requisição:</small>

<pre class="php">
$remittances = BoletoSimples\bank_billet_account::all(['page' => 1, 'per_page' => 2]);
echo "CNABs Retornados: " . sizeof($remittances) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
CNABs Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/remittances?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/remittances?page=5&per_page=2
</pre>
  </div> -->
</div>

### Apagar CNAB

`DELETE /api/v1/remittances/:id`

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
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X DELETE 'https://sandbox.boletosimples.com.br/api/v1/remittances/11'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Content-Length: 0
Connection: keep-alive
Status: 204 No Content
Cache-Control: no-cache
X-Ratelimit-Limit: 500
Date: Thu, 27 Aug 2015 22:59:30 GMT
Strict-Transport-Security: max-age=2592000
X-Ratelimit-Remaining: 498
X-Request-Id: 835c6f5c-06f3-4a8d-9cf0-a354e237cce4
X-Runtime: 0.076245
X-Rack-Cache: invalidate, pass
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(4)
ap @bank_billet_account.attributes
</pre>

    <small>Resposta:</small>

<pre class="ruby">
{
    "bank_contract_slug" => "sicoob-02",
       "next_our_number" => "0000001",
         "agency_number" => "4327",
          "agency_digit" => "3",
        "account_number" => "00003666",
         "account_digit" => "8",
                "extra1" => "1234567",
          "extra1_digit" => nil,
                "extra2" => nil,
          "extra2_digit" => nil,
                    "id" => 3
}
</pre>
  </div> -->
  <!-- <div class="tab-pane" id="php3">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(66);
print_r($bank_billet_account->attributes());
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
    [email] => carteira@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 12312-123
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>
