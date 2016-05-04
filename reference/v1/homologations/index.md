---
layout: pt
title: Homologação de Carteiras de Cobrança - API do Boleto Simples
en: /en/references
breadcrumb: Homologação de Carteiras de Cobrança
---

## Homologação de Carteiras de Cobrança

<div class="alert alert-warning">Para saber mais sobre as carteiras suportadas, acesse a <a href="/bank_contracts">página de Carteiras de Cobrança</a>.</div>

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [GET /api/v1/homologations/:id/ask](#solicitar-homologao-da-carteira-de-cobrana) | Solicitar homologação da Carteira de Cobrança
| [PATCH /api/v1/homologations/:id](#validar-carteira-de-cobrana) | Validar Carteira de Cobrança
| [PUT /api/v1/homologations/:id](#validar-carteira-de-cobrana) | Validar Carteira de Cobrança

### Modelo de Dados

| Parâmetro                | Obr.  | Tipo    | Tamanho | Descrição
| ------------------------ | ----- | ------- | ------- | ------------------------
| **id**                   | Sim   | Integer |         | ID da Carteira de Cobrança
| **homologation_amount**  | Sim   | String  |         | Valor recebido pelo boleto (R$) Ex.: 1,87
| **bank_liquidation_tax** | Não   | String  |         | Valor da Taxa cobrada pelo banco (R$) Ex.: 1,87

### Solicitar homologação da Carteira de Cobrança

`GET /api/v1/homologations/:id/ask`

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
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/homologations/3/ask'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
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
  "status":"homologating",
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

`PATCH /api/v1/homologations/:id` ou `PUT /api/v1/homologations/:id`

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
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"homologation_amount":""}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PATCH 'https://sandbox.boletosimples.com.br/api/v1/homologations/1'
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
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"homologation_amount":"1,67", "bank_liquidation_tax":"1,50"}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT 'https://sandbox.boletosimples.com.br/api/v1/homologations/3'
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
