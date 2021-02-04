---
title: Assinaturas
position: 1
layout: pt
en: "/en/references"
breadcrumb: Assinaturas
---

## Assinaturas

| Recurso                                                                        | Descrição                 |
| ------------------------------------------------------------------------------ | ------------------------- |
| [POST /api/v1/customer_subscriptions](#criar-assinatura)                       | Criar assinatura          |
| [GET /api/v1/customer_subscriptions/:id](#informações-do-assinatura)           | Informações da assinatura |
| [PATCH /api/v1/customer_subscriptions/:id](#atualizar-assinatura)              | Atualizar assinatura      |
| [PUT /api/v1/customer_subscriptions/:id](#atualizar-assinatura)                | Atualizar assinatura      |
| [GET /api/v1/customer_subscriptions](#listar-assinaturas)                      | Listar assinaturas        |
| [POST /api/v1/customer_subscriptions/:id/next_charge](#gerar-próxima-cobrança) | Gerar próxima cobrança    |
| [DELETE /api/v1/customer_subscriptions/:id](#excluir-assinatura)               | Excluir assinatura        |

### Modelo de Dados

| Parâmetro                                | Obrigatório | Tipo    | Tamanho | Descrição                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------- | ----------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **id**                                   | N/A         | Integer |         | ID da assinatura                                                                                                                                                                                                                                                                                                                                                                     |
| **customer_id**                          | Não         | Integer |         | ID do [Cliente](/reference/v1/customers/). Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.                                                                                                                           |
| **customer_person_name**                 | Sim         | String  | 120     | Nome ou Razão Social do Pagador                                                                                                                                                                                                                                                                                                                                                      |
| **customer_nickname**                    | Não         | String  | 255     | Apelido ou Nome Fantasia do Pagador                                                                                                                                                                                                                                                                                                                                                  |
| **customer_cnpj_cpf**                    | Sim         | String  | 20      | CNPJ ou CPF do Pagador                                                                                                                                                                                                                                                                                                                                                               |
| **customer_zipcode**                     | Sim         | Integer | 8       | CEP (formato 99999999)                                                                                                                                                                                                                                                                                                                                                               |
| **customer_email**                       | Não         | String  | 80      | E-mail do Pagador                                                                                                                                                                                                                                                                                                                                                                    |
| **customer_email_cc**                    | Não         | String  | 80      | E-mail alternativo do Pagador                                                                                                                                                                                                                                                                                                                                                        |
| **customer_address**                     | Sim         | String  | 25      | Endereço                                                                                                                                                                                                                                                                                                                                                                             |
| **customer_city_name**                   | Sim         | String  | 60      | Cidade(Nome deve estar correto e completo)                                                                                                                                                                                                                                                                                                                                           |
| **customer_state**                       | Sim         | String  | 2       | Estado                                                                                                                                                                                                                                                                                                                                                                               |
| **customer_neighborhood**                | Sim         | String  | 80      | Bairro                                                                                                                                                                                                                                                                                                                                                                               |
| **customer_address_number**              | Não         | String  | 10      | Número                                                                                                                                                                                                                                                                                                                                                                               |
| **customer_address_complement**          | Não         | String  | 60      | Complemento                                                                                                                                                                                                                                                                                                                                                                          |
| **customer_phone_number**                | Não         | String  | 11      | Telefone (com DDD)                                                                                                                                                                                                                                                                                                                                                                   |
| **customer_person_type**                 | N/A         | String  | 10      | Tipo de pagador ([possíveis valores](#customer_person_type))                                                                                                                                                                                                                                                                                                                         |
| **customer_mobile_local_code**           | Não         | String  | 2       | DDD do Celular                                                                                                                                                                                                                                                                                                                                                                       |
| **customer_mobile_number**               | Não         | String  | 9       | Celular                                                                                                                                                                                                                                                                                                                                                                              |
| **customer_notes**                       | Não         | Text    |         | Anotações do Pagador                                                                                                                                                                                                                                                                                                                                                                 |
| **customer_ignore_email**                | Não         | Boolean |         | Nunca enviar e-mail para este cliente                                                                                                                                                                                                                                                                                                                                                |
| **bank_billet_account_id**               | Não         | Integer |         | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/). Se não informado, usará a carteira padrão.                                                                                                                                                                                                                                                                        |
| **amount**                               | Sim         | String  |         | Valor da Assinatura (R$) Formato: 1.234,34                                                                                                                                                                                                                                                                                                                                           |
| **cycle**                                | Não         | String  | 20      | Ciclo da carnê ([possíveis valores](#cycle)). Default: monthly                                                                                                                                                                                                                                                                                                                       |
| **next_billing**                         | Não         | Date    |         | Data da Primeira ou Próxima cobrança. Caso não seja enviado uma data, esse campo será calculado para ter o valor do dia da criação da assinatura mais o ciclo escolhido. Ex.: Mensal(Hoje + 30 dias)                                                                                                                                                                                 |
| **end_at**                               | Não         | Date    |         | Data em que deseja parar as cobranças. Caso em branco, as cobranças serão geradas automaticamente até que se informe uma data ou se exclua a assinatura.                                                                                                                                                                                                                             |
| **description**                          | Sim         | Text    |         | Descrição do produto vendido ou serviço prestado.                                                                                                                                                                                                                                                                                                                                    |
| **instructions**                         | Não         | Text    |         | Instruções para o caixa                                                                                                                                                                                                                                                                                                                                                              |
| **days_in_advance**                      | Não         | Integer |         | Com quantos dias de antecedência à data de vencimento a cobrança será gerada. Default: 7.                                                                                                                                                                                                                                                                                            |
| **fine_type**                            | Não         | Integer |         | Tipo de multa ([possíveis valores](#fine_type))                                                                                                                                                                                                                                                                                                                                      |
| **fine_percentage**                      | Não         | Float   |         | Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se `fine_type` é igual a 1                                                                                                                                                                                                                                                                                 |
| **fine_value**                           | Não         | String  |         | Valor da multa. Obrigatório se `fine_type` é igual a 2. (R$) Formato: 1.234,34                                                                                                                                                                                                                                                                                                       |
| **days_for_fine**                        | Não         | Integer |         | Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).                                                                                                                                                                                                                                                        |
| **fine_for_delay**                       | Não         | Float   |         | Alias para `fine_percentage`                                                                                                                                                                                                                                                                                                                                                         |
| **interest_type**                        | Não         | Integer |         | Tipo de juros ([possíveis valores](#interest_type))                                                                                                                                                                                                                                                                                                                                  |
| **interest_percentage**                  | Não         | Float   |         | Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se `interest_type` é igual a 1.                                                                                                                                                                                                                                                                              |
| **interest_value**                       | Não         | String  |         | Valor diário de juros. Obrigatório se `interest_type` é igual a 2. (R$) Formato: 1.234,34                                                                                                                                                                                                                                                                                            |
| **interest_daily_percentage**            | Não         | Float   |         | Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se `interest_type` é igual a 1 ou 3. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">interest_percentage</code>.</span>                                      |
| **interest_daily_value**                 | Não         | String  |         | Valor diário de juros. Obrigatório se `interest_type` é igual a 2 ou 4. (R$) Formato: 1.234,34. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">interest_value</code>.</span>                                                        |
| **interest_monthly_percentage**          | Não         | Float   |         | Juros de mora mensal (O valor será dividido por 30. Ex 3% = 0,1% ao dia.) Obrigatório se `interest_type` é igual a 5 ou 6. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">interest_percentage</code> passando a taxa diária.</span> |
| **days_for_interest**                    | Não         | Integer |         | Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).                                                                                                                                                                                                                                                         |
| **late_payment_interest**                | Não         | Float   |         | Alias para `interest_monthly_percentage`ao dia.)                                                                                                                                                                                                                                                                                                                                     |
| **discount_type**                        | Não         | Integer |         | Tipo de desconto. O tipo será o mesmo para todos os três descontos, caso existam. ([possíveis valores](#discount_type))                                                                                                                                                                                                                                                              |
| **discount_value**                       | Não         | String  |         | Valor do desconto. Obrigatório se `discount_type` é igual a 1. (R$) Formato: 1.234,34                                                                                                                                                                                                                                                                                                |
| **discount_percentage**                  | Não         | Float   |         | Percentual do valor do boleto equivalente ao desconto. Obrigatório se `discount_type` é igual a 2                                                                                                                                                                                                                                                                                    |
| **days_for_discount**                    | Não         | Integer |         | Dias para desconto. Obrigatório se `discount_type` é diferente de zero                                                                                                                                                                                                                                                                                                               |
| **second_discount_value**                | Não         | String  |         | Valor do segundo desconto. (R$) Formato: 1.234,34.                                                                                                                                                                                                                                                                                                                                   |
| **second_discount_percentage**           | Não         | Float   |         | Percentual do valor do boleto equivalente ao segundo desconto.                                                                                                                                                                                                                                                                                                                       |
| **days_for_second_discount**             | Não         | Integer |         | Dias para segundo desconto.                                                                                                                                                                                                                                                                                                                                                          |
| **third_discount_value**                 | Não         | String  |         | Valor do terceiro desconto. (R$) Formato: 1.234,34                                                                                                                                                                                                                                                                                                                                   |
| **third_discount_percentage**            | Não         | Float   |         | Percentual do valor do boleto equivalente ao terceiro desconto.                                                                                                                                                                                                                                                                                                                      |
| **days_for_third_discount**              | Não         | Integer |         | Dias para terceiro desconto.                                                                                                                                                                                                                                                                                                                                                         |
| **bank_billet_layout_id**                | Não         | Integer |         | ID do Modelo de Boleto                                                                                                                                                                                                                                                                                                                                                               |
| **notes**                                | Não         | Text    |         | Anotações                                                                                                                                                                                                                                                                                                                                                                            |
| **tags**                                 | Não         | Array   |         | Tags associadas                                                                                                                                                                                                                                                                                                                                                                      |
| **bank_billet_ids**                      | N/A         | Array   |         | IDs de boletos vinculados a assinatura                                                                                                                                                                                                                                                                                                                                               |
| **prevent_registration**                 | Não         | Boolean |         | Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora do Boleto Simples mas deseja-se incluí-lo no sistema.                                                                                                                                                                                                              |
| **divergent_payment_type**               | Não         | Integer |         | Tipo de pagamento divergente. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef). ([possíveis valores](#divergent_payment_type))                                                                                                                                                                                                                         |
| **divergent_payment_value_type**         | Não         | Integer |         | Tipo de valor a considerar para os limites de pagamentos. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef). ([possíveis valores](#divergent_payment_value_type))                                                                                                                                                                                       |
| **divergent_payment_minimum_value**      | Não         | Float   |         | Valor mínimo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                                                                                                                                                                                                                 |
| **divergent_payment_maximum_value**      | Não         | Float   |         | Valor máximo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                                                                                                                                                                                                                 |
| **divergent_payment_minimum_percentage** | Não         | Float   |         | Percentual mínimo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                                                                                                                                                                                                            |
| **divergent_payment_maximum_percentage** | Não         | Float   |         | Percentual máximo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).                                                                                                                                                                                                                                            |
| **divergent_payment_limit**              | Não         | Integer |         | Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela [Caixa](/bank_contracts/cef).                                                                                                                                                                                                                                      |
| **custom_attachment_name**               | Não         | String  | 255     | Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra "boleto" acompanhada do ID.                                                                                                                                                                                               |
| **guarantor_name** | Não | String | 100 | Nome do Benecifiário final (Sacador/Avalista)
| **guarantor_cnpj_cpf** | Não | String | 20 | CNPJ/CPF do Benecifiário final (Sacador/Avalista)
| **guarantor_zipcode** | Não | String | 8 | CEP (formato 99999999) do Benecifiário final (Sacador/Avalista)
| **guarantor_address** | Não | String | 255 | Endereço do Benecifiário final (Sacador/Avalista)
| **guarantor_city_name** | Não | String | 60 | Cidade(Nome deve estar correto e completo) do Benecifiário final (Sacador/Avalista)
| **guarantor_state** | Não | String | 2 | Estado do Benecifiário final (Sacador/Avalista)
| **guarantor_neighborhood** | Não | String | 80 | Bairro do Benecifiário final (Sacador/Avalista)
| **guarantor_address_number** | Não | String | 10 | Número do Benecifiário final (Sacador/Avalista)
| **guarantor_address_complement** | Não | String | 60 | Complemento do Benecifiário final (Sacador/Avalista)
| **guarantor_phone_number** | Não | String | 11 | Telefone (com DDD) do Benecifiário final (Sacador/Avalista)

### Dicionário de Dados

#### cycle

| biweekly | Quinzenal
| bimonthly | Bimestral
| monthly | Mensal
| quarterly | Trimestral
| semiannual | Semestral
| annual | Anual

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
| 3 | Para porcentagem diária após um dia útil. <span style="color: #b94a48"><strong>ATENÇÃO</strong> Esta opção está descontinuada e será removida do sistema em breve. Entradas com este valor estão sendo convertidas para <code class="highlighter-rouge">1</code>.</span>
| 4 | Para valor diário após um dia útil. <span style="color: #b94a48"><strong>ATENÇÃO</strong> Esta opção está descontinuada e será removida do sistema em breve. Entradas com este valor estão sendo convertidas para <code class="highlighter-rouge">2</code>.</span>
| 5 | Para porcentagem mensal após um dia corrido. <span style="color: #b94a48"><strong>ATENÇÃO</strong> Esta opção está descontinuada e será removida do sistema em breve. Entradas com este valor estão sendo convertidas para <code class="highlighter-rouge">1</code> e o valor da porcentagem recalculado de acordo.</span>
| 6 | Para porcentagem mensal após um dia útil. <span style="color: #b94a48"><strong>ATENÇÃO</strong> Esta opção está descontinuada e será removida do sistema em breve. Entradas com este valor estão sendo convertidas para <code class="highlighter-rouge">1</code> e o valor da porcentagem recalculado de acordo.</span>

#### discount_type

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
 "bank_billet_account_id":"1",
 "days_in_advance": "7",
 "fine_for_delay": 0.0,
 "late_payment_interest": 0.0
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
 "bank_billet_account_id":"1",
 "days_in_advance": "7",
 "fine_for_delay": 0.0,
 "late_payment_interest": 0.0
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
   "bank_billet_account_id":"1",
   "days_in_advance": "7",
   "fine_for_delay": 0.0,
   "late_payment_interest": 0.0
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
 "bank_billet_account_id":"1",
 "days_in_advance": "7",
 "fine_for_delay": 0.0,
 "late_payment_interest": 0.0
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
