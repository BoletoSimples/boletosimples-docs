---
title: Carteiras de Cobrança
position: 4
layout: pt
en: "/en/references"
breadcrumb: Carteiras de Cobrança
---

## Carteiras de Cobrança

<div class="alert alert-warning">Para saber mais sobre as carteiras suportadas, acesse a <a href="/bank_contracts">página de Carteiras de Cobrança</a>.</div>

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [POST /api/v1/bank_billet_accounts](#criar-carteira) | Criar carteira
| [GET /api/v1/bank_billet_accounts/:id](#informações-do-carteira) | Informações do carteira
| [PATCH /api/v1/bank_billet_accounts/:id](#atualizar-carteira) | Atualizar carteira
| [PUT /api/v1/bank_billet_accounts/:id](#atualizar-carteira) | Atualizar carteira
| [GET /api/v1/bank_billet_accounts](#listar-carteiras) | Listar carteiras
| [GET /api/v1/bank_billet_accounts/:id/ask](#solicitar-homologação-da-carteira-de-cobrança) | Solicitar homologação da Carteira de Cobrança
| [PATCH /api/v1/bank_billet_accounts/:id/validate](#validar-carteira-de-cobrança) | Validar Carteira de Cobrança
| [PUT /api/v1/bank_billet_accounts/:id/validate](#validar-carteira-de-cobrança) | Validar Carteira de Cobrança
| [PATCH /api/v1/bank_billet_accounts/:id/set_default](#alterar-carteira-de-cobrança-padrão) | Alterar Carteira de Cobrança padrão
| [PUT /api/v1/bank_billet_accounts/:id/set_default](#alterar-carteira-de-cobrança-padrão) | Alterar Carteira de Cobrança padrão

### Modelo de Dados

| Parâmetro                | Obrigatório  | Tipo    | Tamanho | Descrição
| ------------------------ | ----- | ------- | ------- | ------------------------
| **id**                   | N/A   | Integer |         | ID da carteira
| **bank_contract_slug**   | Sim   | String  | 50      | [Slug da Carteira](/bank_contracts)
| **next_our_number**      | Não   | String  | 40      | Próximo Nosso Número. Default: 1
| **agency_number**        | Sim   | String  | 20      | Agência
| **agency_digit**         | *     | String  | 2       | Dígito da Agência
| **account_number**       | Sim   | String  | 20      | Conta
| **account_digit**        | Sim   | String  | 2       | Dígito da Conta
| **extra1**               | *     | String  | 15      | Campo Extra 1
| **extra1_digit**         | *     | String  | 3       | Dígito do Campo Extra 1
| **extra2**               | *     | String  | 15      | Campo Extra 2
| **extra2_digit**         | *     | String  | 3       | Dígito do Campo Extra 2
| **extra3**               | **    | String  | 30      | [Código de Remessa](/reference/v1/remittances/)
| **beneficiary_name**     | Sim   | String  | 255     | Nome do Beneficiário
| **beneficiary_cnpj_cpf** | Sim   | String  | 20      | CPF/CNPJ do Beneficiário
| **beneficiary_address**  | Sim   | String  | 255     | Endereço do Beneficiário
| **name**                 | Não   | String  |         | Nome da Conta ***
| [**status**](#status)    | Não   | String  |         | Situação da carteira
| **homologated_at**       | Não   | DateTime    |         | Data de homologação
| **next_remittance_number**| Não  | String  |         | Próximo Número da Remessa. Default: 1
| [**default**](#default)  | Não   | Boolean |         | Padrão
| **configuration**        | Não   | JSON    |         | Configuração de dados padrões para boleto
| **bank_contract**        | Não   | Hash    |         | Dados da Carteira ***
| **custom_name**          | Não   | String  | 255     | Nome da Carteira para identificação dentro do Boleto Simples
| [**kind**](#kind) | Não | String |   | Tipo de CNAB

'*' Depende da carteira escolhida.

'**' Usado na remessa em bancos.

'***' Não é recebido na criação e nem na atualização, só é retornado na consulta e listagem.

### Dicionário de Dados

#### status

Quando a carteira acaba de ser cadastrada, ela ganha o status `pending`.

Nesse momento o usuário deve aceitar os termos e iniciar a homologação.

Ao clicar em "Prosseguir com a Homologação", o status passa para `homologating`.

Será gerado um boleto e uma remessa de Homologação para ser enviada ao banco. Após o término, o status passa para `validating`.

A partir desse momento o usuário precisa informar o valor do boleto que foi gerado ou enviar o retorno processado pelo banco.

Quando o valor é informado corretamente, ou no retorno processado, o banco diz estar tudo certo, o status passa para `active`.

| pending | Homologação não iniciada
| homologating | Em homologação, aguardand pagamento do boleto
| validating | Boleto pago, aguardando validação
| active | Ativa e pronta para uso

#### default

O campo `default` determina a carteira de cobrança que será usada na criação do boleto quando nenhuma carteira for informada.

No momento que a primeira carteira é homologada (passa para o `status` = `active`), ela recebe o valor `default` = true

#### kind

| cnab400 | CNAB 400
| cnab240 | CNAB 240

### Criar carteira

`POST /api/v1/bank_billet_accounts`

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_account":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet_account":["não pode ficar em branco"]}}
</pre>
  </div>
  <div class="tab-pane" id="ruby">
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

  </div>
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
  <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_account":{"bank_contract_slug": "sicoob-02", "agency_number": "4327", "agency_digit": "3", "account_number": "3666", "account_digit": "8", "next_our_number": "1", "extra1": "1234567"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/3
Content-Type: application/json; charset=utf-8
...

{
  "id":3,
  "bank_contract_slug":"sicoob-02",
  "next_our_number":"0000001",
  "agency_number":"4327",
  "agency_digit":"3",
  "account_number":"00003666",
  "account_digit":"8",
  "extra1":"1234567",
  "extra1_digit":null,
  "extra2":null,
  "extra2_digit":null,
  "extra3":null,
  "beneficiary_name":"Boleto Simples Cobranças Ltda.",
  "beneficiary_cnpj_cpf":"05.813.794/0001-26",
  "beneficiary_address":"Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
  "name":"Bancoob/Sicoob 02 - CC 00003666-8",
  "status":"pending",
  "custom_name":"Minha Carteira",
  "bank_contract": {
    "bank":{
      "code":"sicoob",
      "name":"Bancoob/Sicoob",
      "number":"756"
    },
    "slug":"sicoob-02",
    "code":"02",
    "sufix":"02",
    "variation":null,
    "name":"1/02 - Simples Sem Registro"
  }
}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
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
                  "extra1" => "1234567",
            "extra1_digit" => nil,
                  "extra2" => nil,
            "extra2_digit" => nil,
                  "extra3" => nil,
        "beneficiary_name" => "Boleto Simples Cobranças Ltda.",
    "beneficiary_cnpj_cpf" => "05.813.794/0001-26",
     "beneficiary_address" => "Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
                    "name" => "Bancoob/Sicoob 02 - CC 00003666-8",
                  "status" => "pending",
             "custom_name" => nil,
           "bank_contract" => {
                                "bank" => {
                                  "code" => "sicoob",
                                  "name" => "Bancoob/Sicoob",
                                  "number" => "756"
                                },
                               "slug" => "sicoob-02",
                               "code" => "02",
                              "sufix" => "02",
                          "variation" => nil,
                               "name" => "1/02 - Simples Sem Registro"
                              },
                      "id" => 3
}
</pre>
  </div>
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

### Informações do carteira

`GET /api/v1/bank_billet_accounts/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li>
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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/3'
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
  "id":3,
  "bank_contract_slug":"sicoob-02",
  "next_our_number":"0000001",
  "agency_number":"4327",
  "agency_digit":"3",
  "account_number":"00003666",
  "account_digit":"8",
  "extra1":"1234567",
  "extra1_digit":null,
  "extra2":null,
  "extra2_digit":null,
  "extra3":null,
  "beneficiary_name":"Boleto Simples Cobranças Ltda.",
  "beneficiary_cnpj_cpf":"05.813.794/0001-26",
  "beneficiary_address":"Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
  "name":"Bancoob/Sicoob 02 - CC 00003666-8",
  "status":"pending",
  "custom_name":"Minha Carteira",
  "bank_contract": {
    "bank":{
      "code":"sicoob",
      "name":"Bancoob/Sicoob",
      "number":"756"
    },
    "slug":"sicoob-02",
    "code":"02",
    "sufix":"02",
    "variation":null,
    "name":"1/02 - Simples Sem Registro"
  }
}
</pre>
  </div>
  <div class="tab-pane" id="ruby3">
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
                  "extra3" => nil,
        "beneficiary_name" => "Boleto Simples Cobranças Ltda.",
    "beneficiary_cnpj_cpf" => "05.813.794/0001-26",
     "beneficiary_address" => "Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
                    "name" => "Bancoob/Sicoob 02 - CC 00003666-8",
                  "status" => "pending",
             "custom_name" => "Minha Carteira",
           "bank_contract" => {
                                "bank" => {
                                  "code" => "sicoob",
                                  "name" => "Bancoob/Sicoob",
                                  "number" => "756"
                                },
                               "slug" => "sicoob-02",
                               "code" => "02",
                              "sufix" => "02",
                          "variation" => nil,
                               "name" => "1/02 - Simples Sem Registro"
                              },
                      "id" => 123
}

</pre>
  </div>
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

### Atualizar carteira

`PATCH /api/v1/bank_billet_accounts/:id` ou `PUT /api/v1/bank_billet_accounts/:id`

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_account":{"agency_number":""}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PATCH 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"agency_number":["não pode ficar em branco"]}}
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(3)
puts "Agência: #{@bank_billet_account.agency_number}"
@bank_billet_account.agency_number = ""
if @bank_billet_account.save
  puts "Sucesso :)"
  puts "Nova agência: #{@bank_billet_account.agency_number}"
else
  puts "Erro :("
  puts @bank_billet_account.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
    :agency_number => [
        [0] "não pode ficar em branco"
    ]
}
</pre>

  </div>
    <!-- <div class="tab-pane" id="php4">
      <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(1);
$bank_billet_account->person_name = '';
if($bank_billet_account->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $bank_billet_account->person_name . "\n";;
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
    [person_name] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>

    </div> -->

</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby5" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php5" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash5">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_account":{"agency_number":"4567"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/3'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/3
...
</pre>
  </div>
  <div class="tab-pane" id="ruby5">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(3)
puts "Agência: #{@bank_billet_account.agency_number}"
@bank_billet_account.agency_number = "4842"
if @bank_billet_account.save
  puts "Sucesso :)"
  puts "Nova agência: #{@bank_billet_account.agency_number}"
else
  puts "Erro :("
  ap @bank_billet_account.response_errors
end
</pre>

<small>Resposta:</small>

<pre class="ruby">
Sucesso :)
Nova agência: 4842
</pre>
  </div>
  <!-- <div class="tab-pane" id="php5">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(1);
echo "Nome antigo: " . $bank_billet_account->person_name . "\n";;
$bank_billet_account->person_name = 'Nome 1234';
if($bank_billet_account->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $bank_billet_account->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
}
</pre>

<small>Resposta:</small>

<pre class="php">
Sucesso :)
Novo nome: Nome 1234
</pre>
  </div> -->
</div>

### Listar carteiras

`GET /api/v1/bank_billet_accounts`

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

  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":3,
    "bank_contract_slug":"sicoob-02",
    "next_our_number":"0000001",
    "agency_number":"4327",
    "agency_digit":"3",
    "account_number":"00003666",
    "account_digit":"8",
    "extra1":"1234567",
    "extra1_digit":null,
    "extra2":null,
    "extra2_digit":null,
    "extra3":null,
    "beneficiary_name":"Boleto Simples Cobranças Ltda.",
    "beneficiary_cnpj_cpf":"05.813.794/0001-26",
    "beneficiary_address":"Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
    "name":"Bancoob/Sicoob 02 - CC 00003666-8",
    "status":"pending",
    "custom_name":"Minha Carteira",
    "bank_contract": {
      "bank":{
        "code":"sicoob",
        "name":"Bancoob/Sicoob",
        "number":"756"
      },
      "slug":"sicoob-02",
      "code":"02",
      "sufix":"02",
      "variation":null,
      "name":"1/02 - Simples Sem Registro"
    }
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby6">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_accounts = BoletoSimples::BankBilletAccount.all(page: 1, per_page: 2)
puts "Carteiras Retornadas: #{@bank_billet_accounts.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Carteiras Retornadas: 3
Total: 3
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts?page=2&per_page=2
</pre>
  </div>
  <!-- <div class="tab-pane" id="php6">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_accounts = BoletoSimples\bank_billet_account::all(['page' => 1, 'per_page' => 2]);
echo "carteiras Retornados: " . sizeof($bank_billet_accounts) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
carteiras Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts?page=5&per_page=2
</pre>
  </div> -->
</div>

### Solicitar homologação da Carteira de Cobrança

`GET /api/v1/bank_billet_accounts/:id/ask`

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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1/ask'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1
Content-Type: application/json; charset=utf-8
...

{
  "id":3,
  "bank_contract_slug":"sicoob-02",
  "next_our_number":"0000001",
  "agency_number":"4327",
  "agency_digit":"3",
  "account_number":"00003666",
  "account_digit":"8",
  "extra1":"1234567",
  "extra1_digit":null,
  "extra2":null,
  "extra2_digit":null,
  "extra3":null,
  "beneficiary_name":"Boleto Simples Cobranças Ltda.",
  "beneficiary_cnpj_cpf":"05.813.794/0001-26",
  "beneficiary_address":"Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
  "name":"Bancoob/Sicoob 02 - CC 00003666-8",
  "status":"homologating",
  "custom_name":"Minha Carteira",
  "bank_contract": {
    "bank":{
      "code":"sicoob",
      "name":"Bancoob/Sicoob",
      "number":"756"
    },
    "slug":"sicoob-02",
    "code":"02",
    "sufix":"02",
    "variation":null,
    "name":"1/02 - Simples Sem Registro"
  }
}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby3">
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
                  "extra3" => nil,
        "beneficiary_name" => "Boleto Simples Cobranças Ltda.",
    "beneficiary_cnpj_cpf" => "05.813.794/0001-26",
     "beneficiary_address" => "Av. Presidente Vargas, 633 sala 1716. Rio de Janeiro - RJ",
                    "name" => "Bancoob/Sicoob 02 - CC 00003666-8",
           "bank_contract" => {
                                "bank" => {
                                  "code" => "sicoob",
                                  "name" => "Bancoob/Sicoob",
                                  "number" => "756"
                                },
                               "slug" => "sicoob-02",
                               "code" => "02",
                              "sufix" => "02",
                          "variation" => nil,
                               "name" => "1/02 - Simples Sem Registro"
                              },
                      "id" => 123
}

</pre>
  </div>
  <div class="tab-pane" id="php3">
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

### Validar Carteira de Cobrança

`PATCH /api/v1/bank_billet_accounts/:id/validate` ou `PUT /api/v1/bank_billet_accounts/:id/validate`

### Modelo de Dados

| Parâmetro               | Obrigatório | Tipo    | Tamanho | Descrição                                 |
| ----------------------- | ----------- | ------- | ------- | ----------------------------------------- |
| **id**                  | Sim         | Integer |         | ID da Carteira de Cobrança                |
| **homologation_amount** | Sim         | String  |         | Valor recebido pelo boleto (R$) Ex.: 1,87 |

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"homologation_amount":""}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PATCH 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1/validate'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"homologation_amount":["não pode ficar em branco"]}}
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(3)
puts "Agência: #{@bank_billet_account.agency_number}"
@bank_billet_account.agency_number = ""
if @bank_billet_account.save
  puts "Sucesso :)"
  puts "Nova agência: #{@bank_billet_account.agency_number}"
else
  puts "Erro :("
  puts @bank_billet_account.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
    :agency_number => [
        [0] "não pode ficar em branco"
    ]
}
</pre>

  </div>
    <div class="tab-pane" id="php4">
      <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(1);
$bank_billet_account->person_name = '';
if($bank_billet_account->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $bank_billet_account->person_name . "\n";;
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
    [person_name] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>

    </div> -->

</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby5" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php5" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash5">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"homologation_amount":"1,67"}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1/validate'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1
...

</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby5">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(3)
puts "Agência: #{@bank_billet_account.agency_number}"
@bank_billet_account.agency_number = "4842"
if @bank_billet_account.save
  puts "Sucesso :)"
  puts "Nova agência: #{@bank_billet_account.agency_number}"
else
  puts "Erro :("
  ap @bank_billet_account.response_errors
end
</pre>

<small>Resposta:</small>

<pre class="ruby">
Sucesso :)
Nova agência: 4842
</pre>
  </div>
<div class="tab-pane" id="php5">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(1);
echo "Nome antigo: " . $bank_billet_account->person_name . "\n";;
$bank_billet_account->person_name = 'Nome 1234';
if($bank_billet_account->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $bank_billet_account->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
}
</pre>

<small>Resposta:</small>

<pre class="php">
Sucesso :)
Novo nome: Nome 1234
</pre>
  </div> -->
</div>

### Alterar Carteira de Cobrança padrão

`PATCH /api/v1/bank_billet_accounts/:id/set_default` ou `PUT /api/v1/bank_billet_accounts/:id/set_default`

### Modelo de Dados

| Parâmetro   | Obrigatório | Tipo    | Tamanho | Descrição                                                                       |
| ----------- | ----------- | ------- | ------- | ------------------------------------------------------------------------------- |
| **id**      | Sim         | Integer |         | ID da Carteira de Cobrança                                                      |
| **default** | Sim         | Boolean |         | Define a Carteira padrão(Default: true) ou deixar de ser padrão(Default: false) |

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"default":""}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PATCH 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1/set_default'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"default":["não pode ficar em branco"]}}
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(3)
puts "Agência: #{@bank_billet_account.agency_number}"
@bank_billet_account.agency_number = ""
if @bank_billet_account.save
  puts "Sucesso :)"
  puts "Nova agência: #{@bank_billet_account.agency_number}"
else
  puts "Erro :("
  puts @bank_billet_account.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
    :agency_number => [
        [0] "não pode ficar em branco"
    ]
}
</pre>

  </div>
    <div class="tab-pane" id="php4">
      <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(1);
$bank_billet_account->person_name = '';
if($bank_billet_account->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $bank_billet_account->person_name . "\n";;
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
    [person_name] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>

    </div> -->

</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby5" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php5" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash5">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"default":"true"}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1/set_default'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billet_accounts/1
...

</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby5">
    <small>Requisição:</small>

<pre class="ruby">
@bank_billet_account = BoletoSimples::BankBilletAccount.find(3)
puts "Agência: #{@bank_billet_account.agency_number}"
@bank_billet_account.agency_number = "4842"
if @bank_billet_account.save
  puts "Sucesso :)"
  puts "Nova agência: #{@bank_billet_account.agency_number}"
else
  puts "Erro :("
  ap @bank_billet_account.response_errors
end
</pre>

<small>Resposta:</small>

<pre class="ruby">
Sucesso :)
Nova agência: 4842
</pre>
  </div>
<div class="tab-pane" id="php5">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::find(1);
echo "Nome antigo: " . $bank_billet_account->person_name . "\n";;
$bank_billet_account->person_name = 'Nome 1234';
if($bank_billet_account->save()) {
  echo "Sucesso :)\n";
  echo "Novo nome: " . $bank_billet_account->person_name . "\n";;
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
}
</pre>

<small>Resposta:</small>

<pre class="php">
Sucesso :)
Novo nome: Nome 1234
</pre>
  </div> -->
</div>
