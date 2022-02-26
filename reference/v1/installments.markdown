---
title: Carnês
position: 3
en: "/en/references"
breadcrumb: Carnês
layout: pt
---

## Carnês

| Recurso                                               | Descrição            |
| ----------------------------------------------------- | -------------------- |
| [POST /api/v1/installments](#criar-carnê)             | Criar carnê          |
| [GET /api/v1/installments/:id](#informações-do-carnê) | Informações do carnê |
| [GET /api/v1/installments](#listar-carnês)            | Listar Carnês        |
| [DELETE /api/v1/installments/:id](#excluir-carnê)     | Excluir carnê        |

### Modelo de Dados

| Parâmetro                                | Obrigatório | Tipo    | Tamanho | Descrição                                                                                                                                                                                      |
| ---------------------------------------- | ----------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**                                   | N/A         | Integer |         | ID do carnê                                                                                                                                                                                    |
| **customer_id**                          | N/A         | Integer |         | ID do [Cliente](/reference/v1/customers/)                                                                                                                                                      |
| **customer_person_name**                 | Sim         | String  | 120     | Nome ou Razão Social do Pagador                                                                                                                                                                |
| **customer_nickname**                    | Não         | String  | 255     | Apelido ou Nome Fantasia do Pagador                                                                                                                                                            |
| **customer_cnpj_cpf**                    | Sim         | String  | 20      | CNPJ ou CPF do Pagador                                                                                                                                                                         |
| **customer_zipcode**                     | Sim         | Integer | 8       | CEP (formato 99999999)                                                                                                                                                                         |
| **customer_email**                       | Não         | String  | 80      | E-mail do Pagador                                                                                                                                                                              |
| **customer_email_cc**                    | Não         | String  | 80      | E-mail alternativo do Pagador                                                                                                                                                                  |
| **customer_address**                     | Sim         | String  | 255     | Endereço                                                                                                                                                                                       |
| **customer_city_name**                   | Sim         | String  | 60      | Cidade(Nome deve estar correto e completo)                                                                                                                                                     |
| **customer_state**                       | Sim         | String  | 2       | Estado                                                                                                                                                                                         |
| **customer_neighborhood**                | Sim         | String  | 80      | Bairro                                                                                                                                                                                         |
| **customer_address_number**              | Não         | String  | 10      | Número                                                                                                                                                                                         |
| **customer_address_complement**          | Não         | String  | 60      | Complemento                                                                                                                                                                                    |
| **customer_phone_number**                | Não         | String  | 11      | Telefone (com DDD)                                                                                                                                                                             |
| **customer_mobile_local_code**           | Não         | String  | 2       | DDD do Celular                                                                                                                                                                                 |
| **customer_mobile_number**               | Não         | String  | 9       | Celular                                                                                                                                                                                        |
| **customer_notes**                       | Não         | Text    |         | Anotações do Pagador                                                                                                                                                                           |
| **customer_person_type**                 | N/A         | String  | 10      | Tipo de pagador ([possíveis valores](#customer_person_type))                                                                                                                                   |
| **customer_ignore_email**                | Não         | Boolean |         | Nunca enviar e-mail para este cliente                                                                                                                                                          |
| **customer_ignore_sms**                  | Não         | Boolean |         | Nunca enviar SMS para este cliente                                                                                                                                                             |
| **customer_contact_person**              | Não         | String  | 120     | Contato do Pagador                                                                                                                                                                             |
| **customer_update**                      | Não         | Boolean |         | Atualizar dados no cadastro do cliente                                                                                                                                                         |
| **bank_billet_account_id**               | Sim         | Integer |         | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/). Se não informado, usará a carteira padrão.                                                                                  |
| **amount**                               | Sim         | String  |         | Valor da parcela (R$) Formato: 1.234,34                                                                                                                                                        |
| **cycle**                                | Não         | String  | 20      | Ciclo do carnê ([possíveis valores](#cycle)). Default: monthly                                                                                                                                 |
| **start_at**                             | Sim         | Date    |         | Data da Primeira cobrança.                                                                                                                                                                     |
| **end_at**                               | Não         | Date    |         | Data da última cobrança.                                                                                                                                                                       |
| **total**                                | Sim         | Integer |         | Quantidade de parcelas.                                                                                                                                                                        |
| **description**                          | Não         | Text    |         | Descrição do produto vendido ou serviço prestado.                                                                                                                                              |
| **instructions**                         | Não         | Text    |         | Instruções para o caixa                                                                                                                                                                        |
| **status**                               | N/A         | String  |         | Situação do carnê ([possíveis valores](#status))                                                                                                                                               |
| **fine_type**                            | Não         | Integer |         | Tipo de multa ([possíveis valores](#fine_type))                                                                                                                                                |
| **fine_percentage**                      | Não         | Float   |         | Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se `fine_type` é igual a 1                                                                                           |
| **fine_value**                           | Não         | String  |         | Valor da multa. Obrigatório se `fine_type` é igual a 2. (R$) Formato: 1.234,34                                                                                                                 |
| **days_for_fine**                        | Não         | Integer |         | Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).                                                                  |
| **interest_type**                        | Não         | Integer |         | Tipo de juros ([possíveis valores](#interest_type))                                                                                                                                            |
| **interest_percentage**                  | Não         | Float   |         | Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se `interest_type` é igual a 1.                                                                                        |
| **interest_value**                       | Não         | String  |         | Valor diário de juros. Obrigatório se `interest_type` é igual a 2. (R$) Formato: 1.234,34                                                                                                      |
| **days_for_interest**                    | Não         | Integer |         | Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).                                                                   |
| **discount_type**                        | Não         | Integer |         | Tipo de desconto. O tipo será o mesmo para todos os três descontos, caso existam. ([possíveis valores](#discount_type))                                                                        |
| **discount_value**                       | Não         | String  |         | Valor do desconto. Obrigatório se `discount_type` é igual a 1. (R$) Formato: 1.234,34                                                                                                          |
| **discount_percentage**                  | Não         | Float   |         | Percentual do valor do boleto equivalente ao desconto. Obrigatório se `discount_type` é igual a 2                                                                                              |
| **days_for_discount**                    | Não         | Integer |         | Dias para desconto. Obrigatório se `discount_type` é diferente de zero                                                                                                                         |
| **second_discount_value**                | Não         | String  |         | Valor do segundo desconto. (R$) Formato: 1.234,34.                                                                                                                                             |
| **second_discount_percentage**           | Não         | Float   |         | Percentual do valor do boleto equivalente ao segundo desconto.                                                                                                                                 |
| **days_for_second_discount**             | Não         | Integer |         | Dias para segundo desconto.                                                                                                                                                                    |
| **third_discount_value**                 | Não         | String  |         | Valor do terceiro desconto. (R$) Formato: 1.234,34                                                                                                                                             |
| **third_discount_percentage**            | Não         | Float   |         | Percentual do valor do boleto equivalente ao terceiro desconto.                                                                                                                                |
| **days_for_third_discount**              | Não         | Integer |         | Dias para terceiro desconto.                                                                                                                                                                   |
| **bank_billet_layout_id**                | Não         | Integer |         | ID do Modelo de Boleto                                                                                                                                                                         |
| **url**                                  | N/A         | String  |         | URL para visualização do carnê                                                                                                                                                                 |
| **bank_billet_ids**                      | N/A         | Array   |         | IDs de boletos vinculados ao carnê                                                                                                                                                             |
| **notes**                                | Não         | Text    |         | Anotações                                                                                                                                                                                      |
| **tags**                                 | Não         | Array   |         | Tags associadas                                                                                                                                                                                |
| **prevent_registration**                 | Não         | Boolean |         | Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora do Boleto Simples mas deseja-se incluí-lo no sistema.                        |
| **divergent_payment_type**               | Não         | Integer |         | Tipo de pagamento divergente. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef). ([possíveis valores](#divergent_payment_type))                                   |
| **divergent_payment_value_type**         | Não         | Integer |         | Tipo de valor a considerar para os limites de pagamentos. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef). ([possíveis valores](#divergent_payment_value_type)) |
| **divergent_payment_minimum_value**      | Não         | Float   |         | Valor mínimo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                           |
| **divergent_payment_maximum_value**      | Não         | Float   |         | Valor máximo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                           |
| **divergent_payment_minimum_percentage** | Não         | Float   |         | Percentual mínimo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                      |
| **divergent_payment_maximum_percentage** | Não         | Float   |         | Percentual máximo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                      |
| **divergent_payment_limit**              | Não         | Integer |         | Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela [Caixa](/bank_contracts/cef).                                                |
| **custom_attachment_name**               | Não         | String  | 255     | Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra "boleto" acompanhada do ID.         |
| **guarantor_name**                       | Não         | String  | 100     | Nome do Benecifiário final (Sacador/Avalista)                                                                                                                                                  |
| **guarantor_cnpj_cpf**                   | Não         | String  | 20      | CNPJ/CPF do Benecifiário final (Sacador/Avalista)                                                                                                                                              |
| **guarantor_zipcode**                    | Não         | String  | 8       | CEP (formato 99999999) do Benecifiário final (Sacador/Avalista)                                                                                                                                |
| **guarantor_address**                    | Não         | String  | 255     | Endereço do Benecifiário final (Sacador/Avalista)                                                                                                                                              |
| **guarantor_city_name**                  | Não         | String  | 60      | Cidade(Nome deve estar correto e completo) do Benecifiário final (Sacador/Avalista)                                                                                                            |
| **guarantor_state**                      | Não         | String  | 2       | Estado do Benecifiário final (Sacador/Avalista)                                                                                                                                                |
| **guarantor_neighborhood**               | Não         | String  | 80      | Bairro do Benecifiário final (Sacador/Avalista)                                                                                                                                                |
| **guarantor_address_number**             | Não         | String  | 10      | Número do Benecifiário final (Sacador/Avalista)                                                                                                                                                |
| **guarantor_address_complement**         | Não         | String  | 60      | Complemento do Benecifiário final (Sacador/Avalista)                                                                                                                                           |
| **guarantor_phone_number**               | Não         | String  | 11      | Telefone (com DDD) do Benecifiário final (Sacador/Avalista)                                                                                                                                    |
| **document_date**                        | Não         | Date    |         | Data do Documento                                                                                                                                                                              |
| **document_type**                        | Sim         | String  |         | Tipo de Documento ([possíveis valores](/reference/v1/bank_billets#document_type)) Padrão: "02" (Duplicata Mercantil)                                                                           |
| **document_number**                      | Não         | String  |         | Número do Documento                                                                                                                                                                            |
| **payment_count**                        | Não         | Integer |         | Quantidade de pagamentos parciais.                                                                                                                                                             |
| **days_for_sue**                         | Não         | Integer |         | Dias corridos para Protesto                                                                                                                                                                    |
| **days_for_revoke**                      | Não         | Integer |         | Dias corridos para Baixa/Devolução                                                                                                                                                             |
| **days_for_negativation**                | Não         | Integer |         | Dias corridos para Negativação ([mais](#days_for_negativation))                                                                                                                                |
| **custom_bank_billets**                  | Não         | Array   |         | Carnê customizado. Quando enviado, os valores de `amount`, `start_at` e `end_at` serão ignorados. ([possíveis valores](#custom_bank_billets))                                                  |

### Dicionário de Dados

#### cycle

| biweekly | Quinzenal
| bimonthly | Bimestral
| monthly | Mensal
| quarterly | Trimestral
| semiannual | Semestral
| annual | Anual

#### status

| created | Gerando
| processed | Parcelas criadas
| generated | Aberto

#### customer_person_type

| individual | Pessoa Física
| juridical | Pessoa Jurídica

#### fine_type

| 0 | Inexistente (Padrão)
| 1 | Para percentual do valor do boleto
| 2 | Para valor fixo

#### interest_type

| 0 | Inexistente (Padrão)
| 1 | Para porcentagem diária
| 2 | Para valor diário

#### discount_type

| 0 | Inexistente (Padrão)
| 1 | Para valor fixo
| 2 | Para percentual do valor do boleto

#### divergent_payment_type

| 1 | Aceita qualquer valor divergente
| 2 | Aceita pagamentos dentro de uma faixa de valores ou percentuais
| 3 | Não aceita pagamento de valores divergentes
| 4 | Aceita pagamentos de valores superiores a um valor ou percentual mínimo

#### divergent_payment_value_type

| 1 | Informa pagamentos divergentes por valores
| 2 | Informa pagamentos divergentes por percentuais

#### custom_bank_billets

| **Parâmetro** | **Obrigatório** | **Tipo** | **Tamanho** | **Descrição**
| amount_cents | Sim | Integer | 15 | Valor da parcela (R$) com 2 casas decimais. Formato: 134556 corresponde 1.345,56
| expire_at | Sim | Date | | Data de vencimento da parcela

### Criar carnê

`POST /api/v1/installments`

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"installment":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/installments'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"installment":["não pode ficar em branco"]}}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
@installment = BoletoSimples::Customer.create({person_name: 'Joao Da Silva'})
if @installment.persisted?
  puts "Sucesso :)"
  puts @installment.attributes
else
  puts "Erro :("
  puts @installment.response_errors
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
$installment = BoletoSimples\Customer::create(['person_name' => 'Joao da Silva']);
if($installment->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($installment->attributes());
} else {
  echo "Erro :(\n";
  print_r($installment->response_errors);
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
  -H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
  -d '{"installment":{"customer_id":"1", "bank_billet_account_id": "1", "amount": "1.120,4", "cycle": "monthly", "start_at": "2016-09-15", "total": "3", "description": "Hospedagem"}}' \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (myapp@example.com)' \
  -X POST 'https://api-sandbox.kobana.com.br/v1/installments'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://api-sandbox.kobana.com.br/v1/installments/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "amount":1120.4,
  "cycle":"monthly",
  "start_at":"2016-09-15",
  "end_at":"2016-11-16",
  "instructions":null,
  "customer_id":11,
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
  "description":"Hospedagem",
  "created_at":"2016-08-15",
  "updated_at":"2016-08-15",
  "created_via_api":true,
  "total":3,
  "bank_billet_account_id":12,
  "status":"created"
}
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
@installment = BoletoSimples::Customer.create({
  person_name: "Joao da Silva",
  cnpj_cpf: "782.661.177-64",
  email: "carnê@bom.com",
  address: "Rua quinhentos",
  city_name: "Rio de Janeiro",
  state: "RJ",
  neighborhood: "bairro",
  zipcode: "20071004",
  address_number: "111",
  address_complement: "Sala 4",
  phone_number: "2112123434"
})
if @installment.persisted?
  puts "Sucesso :)"
  puts @installment.attributes
else
  puts "Erro :("
  puts @installment.response_errors
end
</pre>

<small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
           "person_name" => "Joao da Silva",
              "cnpj_cpf" => "782.661.177-64",
                 "email" => "carnê@bom.com",
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
$installment = BoletoSimples\Customer::create([
  'person_name' => "Joao da Silva",
  'cnpj_cpf' => "860.196.915-19",
  'email' => "carnê@example.com",
  'address' => "Rua quinhentos",
  'city_name' => "Rio de Janeiro",
  'state' => "RJ",
  'neighborhood' => "bairro",
  'zipcode' => "20071004",
  'address_number' => "111",
  'address_complement' => "Sala 4",
  'phone_number' => "2112123434"
]);
if($installment->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($installment->attributes());
} else {
  echo "Erro :(\n";
  print_r($installment->response_errors);
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
    [email] => carnê@example.com
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

### Informações do carnê

`GET /api/v1/installments/:id`

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://api-sandbox.kobana.com.br/v1/installments/1'
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
  "start_at":"2016-09-15",
  "end_at":"2016-11-16",
  "instructions":null,
  "customer_id":11,
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
  "description":"Hospedagem",
  "created_at":"2016-08-15",
  "updated_at":"2016-08-15",
  "created_via_api":true,
  "total":3,
  "bank_billet_account_id":12,
  "status":"created"
}
</pre>
  </div>
  <!--
  <div class="tab-pane" id="ruby3">
    <small>Requisição:</small>

<pre class="ruby">
@installment = BoletoSimples::Customer.find(67)
puts @installment.attributes
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
                 "email" => "carnê@bom.com",
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
$installment = BoletoSimples\Customer::find(66);
print_r($installment->attributes());
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
    [email] => carnê@example.com
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

### Listar Carnês

`GET /api/v1/installments`

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
  <!--<li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://api-sandbox.kobana.com.br/v1/installments?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://api-sandbox.kobana.com.br/v1/installments?page=3&per_page=50>; rel="last", <https://api-sandbox.kobana.com.br/v1/installments?page=2&per_page=50>; rel="next"
Total: 101
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "amount":1120.4,
    "cycle":"monthly",
    "start_at":"2016-09-15",
    "end_at":"2016-11-16",
    "instructions":null,
    "customer_id":11,
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
    "description":"Hospedagem",
    "created_at":"2016-08-15",
    "updated_at":"2016-08-15",
    "created_via_api":true,
    "total":3,
    "bank_billet_account_id":12,
    "status":"created"
  }
]
</pre>
  </div>
 <!--
  <div class="tab-pane" id="ruby6">
    <small>Requisição:</small>

<pre class="ruby">
@installments = BoletoSimples::Customer.all(page: 1, per_page: 2)
puts "Carnês Retornados: #{@installments.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Carnês Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://api-sandbox.kobana.com.br/v1/installments?page=2&per_page=2
Última Página: https://api-sandbox.kobana.com.br/v1/installments?page=5&per_page=2
</pre>
  </div>
  <div class="tab-pane" id="php6">
    <small>Requisição:</small>

<pre class="php">
$installments = BoletoSimples\Customer::all(['page' => 1, 'per_page' => 2]);
echo "Carnês Retornados: " . sizeof($installments) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
Carnês Retornados: 2
Total: 9
Primeira Página:
Página Anterior:
Próxima Página: https://api-sandbox.kobana.com.br/v1/installments?page=2&per_page=2
Última Página: https://api-sandbox.kobana.com.br/v1/installments?page=5&per_page=2
</pre>
  </div>
  -->
</div>

### Excluir carnê

`DELETE /api/v1/installments/:id`

Nenhum boleto gerado pela carnê será excluído.

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X DELETE 'https://api-sandbox.kobana.com.br/v1/installments/1'
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
