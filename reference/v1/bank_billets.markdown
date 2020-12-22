---
title: Boletos
position: 2
en: "/en/reference"
breadcrumb: Boletos
layout: pt
---

## Boletos

| Recurso                  | Descrição
| [POST /api/v1/bank_billets](#criar-boleto) | Criar boleto
| [GET /api/v1/bank_billets/:id](#informações-do-boleto) | Informações do boleto
| [GET /api/v1/bank_billets](#listar-boletos) | Listar boletos
| [PUT /api/v1/bank_billets/:id/cancel](#cancelar-boleto) | Cancelar boleto
| [PATCH /api/v1/bank_billets/:id/cancel](#cancelar-boleto) | Cancelar boleto
| [PUT /api/v1/bank_billets/:id](#alterar-boleto) | Alterar boleto
| [PATCH /api/v1/bank_billets/:id](#alterar-boleto) | Alterar boleto
| [POST /api/v1/bank_billets/:id/duplicate](#duplicar-boleto) | Duplicar boleto
| [GET /api/v1/bank_billets/cnpj_cpf](#buscar-por-cpf-ou-cnpj) | Buscar por CPF ou CNPJ ([Deprecated usar Listar boletos](#listar-boletos))
| [GET /api/v1/bank_billets/our_number](#buscar-por-nosso-número) | Buscar por nosso número ([Deprecated usar Listar boletos](#listar-boletos))
| [GET /api/v1/bank_billets/status](#buscar-por-situação-do-boleto) | Buscar por Situação do boleto ([Deprecated usar Listar boletos](#listar-boletos))
| [PUT /api/v1/bank_billets/:id/pay](#marcar-boleto-como-pago) | Marcar boleto como pago
| [PATCH /api/v1/bank_billets/:id/pay](#marcar-boleto-como-pago) | Marcar boleto como pago
| [POST /api/v1/bank_billets/cancel_all](#cancelar-boletos-em-lote) | Cancelar boletos em lote
| [POST /api/v1/bank_billets/bulk](#criar-boletos-em-lote) | Criar boletos em lote  ([Deprecated usar Criar boleto](#criar-boleto))

### Modelo de Dados

| **Parâmetro**                       | **Obrigatório**  | **Tipo**    | **Tamanho** | **Descrição**
| **id**                          | N/A   | Integer |         | ID do boleto
| **bank_billet_account_id**      | Sim   | Integer |         | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/). Se não informado, usará a carteira padrão.
| **our_number**                  | Não   | Integer |         | Nosso Número. Se não informado, usará o Próximo Nosso Número da Carteira de Cobrança.
| **amount**                      | Sim   | String  |         | Quantia (R$) Formato: 1.345,56
| **expire_at**                   | Sim   | Date    |         | Data de vencimento
| **description**                 | Sim   | Text    |         | Descrição do produto ou serviço
| **customer_id**                 | Não   | Integer |         | ID do [Cliente](/reference/v1/customers/). Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
| **customer_person_name**        | Sim   | String  | 120     | Nome ou Razão Social do Pagador
| **customer_nickname**           | Não   | String  | 255     | Apelido ou Nome Fantasia do Pagador
| **customer_cnpj_cpf**           | Sim   | String  | 20      | CNPJ ou CPF do Pagador
| **customer_zipcode**            | Sim   | String  | 8       | CEP (formato 99999999)
| **customer_email**              | Não   | String  | 80     | E-mail do Pagador
| **customer_email_cc**           | Não   | String  | 80     | E-mail alternativo do Pagador
| **customer_address**            | Sim   | String    | 255        | Endereço
| **customer_city_name**          | Sim   | String  | 60     | Cidade(Nome deve estar correto e completo)
| **customer_state**              | Sim   | String  | 2       | Estado
| **customer_neighborhood**       | Sim   | String  | 80     | Bairro
| **customer_address_number**     | Não   | String  | 10     | Número
| **customer_address_complement** | Não   | String  | 60     | Complemento
| **customer_phone_number**       | Não   | String  | 11      | Telefone (com DDD)
| **customer_person_type**        | N/A   | String  | 10     | Tipo de pagador ([possíveis valores](#customer_person_type))
| **customer_mobile_local_code**  | Não   | String  | 2       | DDD do Celular
| **customer_mobile_number**      | Não   | String  | 9       | Celular
| **customer_notes**              | Não   | Text    |         | Anotações do Pagador
| **meta**                        | Não   | Campo Genérico | | Aceita qualquer formato passado. Pode ser usado para salvar dados que não existam dentro do Boleto Simples. Exemplo: {pedido: 12345}
| **status**                      | N/A   | String  |         | Situação do boleto ([possíveis valores](#status))
| **paid_at**                     | N/A   | Date    |         | Data do pagamento
| **paid_amount**                 | N/A   | Float   |         | Valor pago
| **url**                         | N/A   | String  |         | URL para visualização do boleto
| **carne_url**                   | N/A   | String  |         | URL para visualização do carnê(Quando for parcela)
| **formats**                     | N/A   | String  |         | URLs com formatos PDF e Imagem visualização do boleto
| **created_via_api**             | N/A   | Boolean |         | Define se o boleto foi criado pela API
| **fine_type**                   | Não   | Integer |         | Tipo de multa ([possíveis valores](#fine_type))
| **fine_percentage**             | Não   | Float   |         | Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se `fine_type` é igual a 1
| **fine_value**                  | Não   | String  |         | Valor da multa. Obrigatório se `fine_type` é igual a 2. (R$) Formato: 1.234,34
| **days_for_fine**               | Não   | Integer |         | Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
| **fine_for_delay**              | Não   | Float   |         | Alias para `fine_percentage`
| **interest_type**               | Não   | Integer |         | Tipo de juros ([possíveis valores](#interest_type))
| **interest_percentage**         | Não   | Float   |         | Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se `interest_type` é igual a 1.
| **interest_value**              | Não   | String  |         | Valor diário de juros. Obrigatório se `interest_type` é igual a 2. (R$) Formato: 1.234,34
| **interest_daily_percentage**   | Não   | Float   |         | Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se `interest_type` é igual a 1 ou 3. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">interest_percentage</code>.</span>
| **interest_daily_value**        | Não   | String  |         | Valor diário de juros. Obrigatório se `interest_type` é igual a 2 ou 4. (R$) Formato: 1.234,34. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">interest_value</code>.</span>
| **interest_monthly_percentage** | Não   | Float   |         | Juros de mora mensal (O valor será dividido por 30. Ex 3% = 0,1% ao dia.) Obrigatório se `interest_type` é igual a 5 ou 6. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">interest_percentage</code> passando a taxa diária.</span>
| **days_for_interest**               | Não   | Integer |         | Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
| **late_payment_interest**       | Não   | Float   |         | Alias para `interest_monthly_percentage`
| **discount_type**               | Não   | Integer |         | Tipo de desconto. O tipo será o mesmo para todos os três descontos, caso existam. ([possíveis valores](#discount_type))
| **discount_value**              | Não   | String  |         | Valor do desconto. Obrigatório se `discount_type` é igual a 1. (R$) Formato: 1.234,34
| **discount_percentage**         | Não   | Float   |         | Percentual do valor do boleto equivalente ao desconto. Obrigatório se `discount_type` é igual a 2
| **days_for_discount**           | Não   | Integer |         | Dias para desconto. Obrigatório se `discount_type` é diferente de zero
| **discount_limit_date**         | Não   | Date    |         | Data limite para o desconto. Obrigatória se `discount_type` é diferente de zero. <span style="display: block;" class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">days_for_discount</code>.</span>|
| **second_discount_value**              | Não   | String  |         | Valor do segundo desconto. (R$) Formato: 1.234,34.
| **second_discount_percentage**         | Não   | Float   |         | Percentual do valor do boleto equivalente ao segundo desconto.
| **days_for_second_discount**           | Não   | Integer |         | Dias para segundo desconto.
| **third_discount_value**              | Não   | String  |         | Valor do terceiro desconto. (R$) Formato: 1.234,34
| **third_discount_percentage**         | Não   | Float   |         | Percentual do valor do boleto equivalente ao terceiro desconto.
| **days_for_third_discount**           | Não   | Integer |         | Dias para terceiro desconto.
| **payment_place**               | Não   | String  | 100     | Local de Pagamento
| **instructions**                | Não   | Text    |         | Instruções para o Caixa
| **document_date**               | Não   | Date    |         | Data do Documento
| **document_type**               | Sim   | String  |         | Tipo de Documento ([possíveis valores](#document_type)) Padrão: "02" (Duplicata Mercantil)
| **document_number**             | Não   | String |         | Número do Documento
| **acceptance**                  | Sim   | String  |         | Aceite. Padrão: N
| **bank_billet_layout_id**       | Não   | Integer |         | ID do Modelo de Boleto
| **notes**                       | Não   | Text    |         | Anotações
| **tags**                        | Não   | Array   |         | Tags associadas ao boleto
| **days_for_sue**                | Não   | Integer |         | Dias corridos para Protesto/Negativação
| **days_for_revoke**             | Não   | Integer |         | Dias corridos para Baixa/Devolução
| **created_at**                  | N/A   | DateTime    |         | Data e hora de criação do boleto
| **updated_at**                  | N/A   | DateTime    |         | Data e hora de atualização do boleto
| **paid_bank**                   | N/A   | String  |         | Banco de Pagamento
| **paid_agency**                 | N/A   | String  |         | Agência de Pagamento
| **line**                        | N/A   | String  |         | Linha Digitável
| **bank_rate**                   | N/A   | Float   |         | Taxa bancária
| **beneficiary_name**            | N/A   | String  | 100     | Nome do Beneficiário
| **beneficiary_cnpj_cpf**        | N/A   | String  |         | CNPJ/CPF do Beneficiário
| **beneficiary_address**         | N/A   | String  |         | Endereço do Beneficiário
| **beneficiary_assignor_code**   | N/A   | String  |         | Agência/Código do Beneficiário
| **processed_our_number**        | N/A   | String  |         | Nosso Número com DV (formatado)
| **processed_our_number_raw**    | N/A   | String  |         | Nosso Número com DV (limpo)
| **bank_contract_slug**          | N/A   | String  |         | [Slug da Carteira](/bank_contracts)
| **agency_number**               | N/A   | String  |         | Agência
| **agency_digit**                | N/A   | String  |         | Dígito da Agência
| **account_number**              | N/A   | String  |         | Conta
| **account_digit**               | N/A   | String  |         | Dígito da Conta
| **extra1**                      | N/A   | String  |         | Campo extra 1
| **extra1_digit**                | N/A   | String  |         | Digito do Campo extra 1
| **extra2**                      | N/A   | String  |         | Campo extra 2
| **extra2_digit**                | N/A   | String  |         | Dígito do Campo extra 2
| **customer_subscription_id**    | N/A   | Integer |         | ID da [Assinatura](/reference/v1/customer_subscriptions/)
| **installment_number**          | N/A   | Integer |         | Número da parcela do carnê
| **installment_id**              | N/A   | Integer |         | ID do [Carnê](/reference/v1/installments/)
| **bank_billet_discharges**      | N/A   | Array   |         | Retornos bancários
| **first_instruction**           | Não   | String  | 2     | Primeira Instrução(CNAB 400). Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
| **second_instruction**          | Não   | String  | 2    | Segunda Instrução(CNAB 400). Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
| **sue_code**                    | Não   | String  | 1    | Código de Protesto(CNAB 240). Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
| **revoke_code**                 | Não   | String  | 1    | Código de Baixa(CNAB 240). Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
| **guarantor_name**              | Não   | String  |   100      | Nome do Sacador/Avalista
| **guarantor_cnpj_cpf**          | Não   | String  |   20      | CNPJ/CPF do Sacador/Avalista
| **guarantor_zipcode**            | Não   | String | 8       | CEP (formato 99999999) do Sacador/Avalista
| **guarantor_address**            | Não   | String    |  255       | Endereço do Sacador/Avalista
| **guarantor_city_name**          | Não   | String  | 60     | Cidade(Nome deve estar correto e completo) do Sacador/Avalista
| **guarantor_state**              | Não   | String  | 2       | Estado do Sacador/Avalista
| **guarantor_neighborhood**       | Não   | String  | 80     | Bairro do Sacador/Avalista
| **guarantor_address_number**     | Não   | String  | 10     | Número do Sacador/Avalista
| **guarantor_address_complement** | Não   | String  | 60     | Complemento do Sacador/Avalista
| **guarantor_phone_number**       | Não   | String  | 11      | Telefone (com DDD) do Sacador/Avalista
| **registered_at**                | N/A   | DateTime    |         | Data e hora do registro
| **prevent_registration**         | Não   | Boolean |         | Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora do Boleto Simples mas deseja-se incluí-lo no sistema.
| **control_number**               | Não   | String  | 25      | Pode conter qualquer informação de interesse da Empresa. A informação contida neste campo sempre retornará com o respectivo título no arquivo-retorno. Caso não seja informado, será enviado na remessa o valor passado em `document_number`.
| **divergent_payment_type**       | Não   | Integer |         | Tipo de pagamento divergente. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef). ([possíveis valores](#divergent_payment_type))
| **divergent_payment_value_type** | Não   | Integer |         | Tipo de valor a considerar para os limites de pagamentos. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef). ([possíveis valores](#divergent_payment_value_type))
| **divergent_payment_minimum_value** | Não | Float |          | Valor mínimo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).
| **divergent_payment_maximum_value** | Não | Float |          | Valor máximo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).
| **divergent_payment_minimum_percentage** | Não | Float |          | Percentual mínimo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).
| **divergent_payment_maximum_percentage** | Não | Float |          | Percentual máximo para a faixa de pagamentos divergentes. Válido apenas para [Itaú](/bank_contracts/itau) e [Caixa](/bank_contracts/cef).
| **divergent_payment_limit**         | Não | Integer |          | Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela [Caixa](/bank_contracts/cef).
| **custom_attachment_name** | Não | String | 255 | Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra "boleto" acompanhada do ID.
| **charge_type**               | Não   | Integer  |         | Tipo de Cobrança ([possíveis valores](#charge_type)) Padrão: 1 - Simples
| **dispatch_type**               | Não   | Integer  |         | Tipo de Impressão ([possíveis valores](#dispatch_type)) Padrão: 1 - Cliente
| **register_type**               | Não   | Integer  |         | Tipo de Registro ([possíveis valores](#register_type))
| **split_payment**         | Não   | Boolean |         | Split de Pagamento. Caso `true`, o rateio do boleto será registrado. Informar as contas para rateio em `split_accounts`.
| **split_accounts**       | Não   | Array |         | Contas para Split de pagamento. Válido apenas para [ABC Brasil](/bank_contracts/abc) e [Bradesco](/bank_contracts/bradesco). ([possíveis valores](#split_accounts))


### Dicionário de Dados

#### status

| generating | Gerando
| opened     | Aberto
| canceled   | Cancelado
| paid       | Pago
| overdue    | Vencido
| generation_failed | Falha ao gerar
| validation_failed | Inválido

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

| 0 | Inexistente (Padrão)
| 1 | Para valor fixo
| 2 | Para percentual do valor do boleto

#### acceptance

| S | Sim
| N | Não (Padrão)

#### customer_person_type

| individual | Pessoa Física
| juridical  | Pessoa Jurídica

#### document_type

| **Código** | **Sigla**    | **Descrição**
| 01     | CH       | Cheque
| 02     | DM       | Duplicata Mercantil (Padrão)
| 03     | DMI      | Duplicata Mercantil p/ Indicação
| 04     | DS       | Duplicata de Serviço
| 05     | DSI      | Duplicata de Serviço p/ Indicação
| 06     | DR       | Duplicata Rural
| 07     | LC       | Letra de Câmbio
| 08     | NCC      | Nota de Crédito Comercial
| 09     | NCE      | Nota de Crédito a Exportação
| 10     | NCI      | Nota de Crédito Industrial
| 11     | NCR      | Nota de Crédito Rural
| 12     | NP       | Nota Promissória
| 13     | NPR      | Nota Promissória Rural
| 14     | TM       | Triplicata Mercantil
| 15     | TS       | Triplicata de Serviço
| 16     | NS       | Nota de Seguro
| 17     | RC       | Recibo
| 18     | FAT      | Fatura
| 19     | ND       | Nota de Débito
| 20     | AP       | Apólice de Seguro
| 21     | ME       | Mensalidade Escolar
| 22     | PC       | Parcela de Consórcio
| 23     | NF       | Nota Fiscal
| 24     | DD       | Documento de Dívida
| 25     | CPR      | Cédula de Produto Rural
| 26     | CTR      | Contrato
| 27     | CSG      | Cosseguros
| 28     | EC       | Encargos Condominiais
| 29     | CPS      | Conta de Prestação de Serviços
| 30     | WR       | Warrant
| 31     | DP       | Duplicata Prestação
| 32     | CSR      | Cobrança Seriada
| 33     | CAR      | Carnê
| 34     | ARE      | Apólice Ramos Elementares
| 35     | CC        | Cartão de Crédito
| 36     | BDP      | Boleto de Proposta
| 37     | NPD      | Nota Promissória Direta
| 38     | DAE     | Dívida Ativa de Estado
| 39     | DAM      | Divida Ativa de Município
| 40     | DAU      | Dívida Ativa União
| 41     | CCB      | Célula de Crédito Bancário
| 42     | FI           | Financiamento
| 43     | RD           | Rateio de Despesas
| 44     | DRI          | Duplicata Rural p/ Indicação
| 45     | ECI           | Encargos Condominiais p/ Indicação
| 99     | Outros   | Outros

#### divergent_payment_type

| 1 | Aceita qualquer valor divergente
| 2 | Aceita pagamentos dentro de uma faixa de valores ou percentuais
| 3 | Não aceita pagamento de valores divergentes
| 4 | Aceita pagamentos de valores superiores a um valor ou percentual mínimo

#### divergent_payment_value_type

| 1 | Informa pagamentos divergentes por valores
| 2 | Informa pagamentos divergentes por percentuais

#### charge_type

| 1 | Simples
| 2 | Vinculada
| 3 | Descontada
| 4 | Vendor

#### dispatch_type

Quando o boleto precisa ser enviado pelo correio.
É preciso contratar o serviço junto ao banco e pagará tarifa.

| 1 | Cliente
| 2 | Banco

#### register_type

Este campo é apenas retornado. Não é aceito para envio.

| 1 | API
| 2 | EDI

#### split_accounts

| **Parâmetro**  | **Obrigatório**  | **Tipo**    | **Tamanho** | **Descrição**
| bank_number    | Sim | String  | 3   | Número do banco
| agency_number  | Sim | String  | 5   | Agência (Sem dígito)
| agency_digit   | Sim | String  | 1   | Dígito da Agência
| account_number | Sim | String  | 12  | Conta (Sem dígito)
| account_digit  | Sim | String  | 1   | Dígito da Conta
| cnpj_cpf       | Sim | String  | 20  | CNPJ/CPF do Beneficiário
| name           | Sim | String  | 40  | Nome do Beneficiário
| amount         | Sim | String  | 15  | Quantia (R$) Formato: 1.345,56
| floating       | Sim | Integer | 2   | Quantidade de Dias para Crédito. Padrão 5 dias. Máximo 30 dias.


### Criar boleto

`POST /api/v1/bank_billets`

<div class="alert alert-danger"><strong>ATENÇÃO</strong> Apesar de receber a resposta com os dados do boleto, isso, somente, não garante que o boleto esteja pronto para uso. Isso apenas indica que o boleto foi aceito e cadastrado em sua conta.</div>

A partir desse momento o boleto entra em uma fila para ser gerado o layout.

Após o layout do boleto ser gerado por completo seu status mudará para `opened`.

O boleto deverá ser registrado.

Para clientes com registro automático ativado, nós faremos o registro imediatamente após o boleto estar cadastrado.

Para clientes sem registro automático ativado, o registro é feito via [Remessa](/reference/v1/remittances/), gerada e enviada manualmente por você através do sistema do banco.

Só então você poderá disponibilizar o boleto aos seus clientes.

Para saber se um boleto foi gerado por completo, você deve preparar seu sisema para receber nossos [Webhooks](/webhooks)

Será retornado `404 Not Found` ao tentar acessar a url de um boleto que ainda esteja sendo gerado(`generating`)

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet":{"amount":12.34, "expire_at": "2021-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28", "customer_zipcode": "12312123", "customer_address": "Rua quinhentos", "customer_city_name": "Rio de Janeiro", "customer_state": "RJ", "customer_neighborhood": "bairro"}}' \
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
  "url":"http://bole.to/xxxxxxxx",
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
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obrigatório</th>
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
        Quantidade de registros por página (Máximo de 50)
      </td>
    </tr>
    <tr>
      <td>
        <strong>status </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Filtro por Situação.
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>paid_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de pagamento
      </td>
    </tr>
    <tr>
      <td>
        <strong>paid_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de pagamento
      </td>
    </tr>
    <tr>
      <td>
        <strong>our_number </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Filtro por Nosso número.
      </td>
    </tr>
<tr>
      <td>
        <strong> processed_our_number_raw </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Filtro por Nosso Número com DV (limpo).
      </td>
    </tr>
    <tr>
      <td>
        <strong>cnpj_cpf </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Filtro por CPF/CNPJ do cliente. Deve ser formatado. Ex. 000.000.000-00
      </td>
    </tr>
    <tr>
      <td>
        <strong>bank_billet_account_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Filtro ID da Carteira.
      </td>
    </tr>
    <tr>
      <td>
        <strong>registered_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de Registro
      </td>
    </tr>
    <tr>
      <td>
        <strong>registered_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de Registro
      </td>
    </tr>
    <tr>
      <td>
        <strong>created_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de criação
      </td>
    </tr>
    <tr>
      <td>
        <strong>created_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de criação
      </td>
    </tr>
<tr>
      <td>
        <strong>meta </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
Filtrar dados no campo meta
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
    "url":"http://bole.to/xxxxxxxx",
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/cancel
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 403 Forbidden
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 403 Forbidden
Content-Type: application/json; charset=utf-8
...

{
  "errors": {
    "status": ["Boleto não pode ser cancelado para o status canceled"]
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
            [0] => Boleto não pode ser cancelado para o status canceled
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/cancel
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 Not Content
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 204 Not Content
Content-Type: application/json; charset=utf-8
...

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

### Alterar boleto

`PUT /api/v1/bank_billets/:id` ou `PATCH /api/v1/bank_billets/:id`

Você pode alterar boletos no status de Aberto(`opened`) ou Vencido(`overdue`)

Você receberá webhooks `generating` e `opened` para o boleto alterado.

Em carteiras registradas, a alteração irá entrar na remessa e pode ser cobrada taxa bancária.

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
        <strong>expire_at</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>tags</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Array
      </td>
      <td>
        Tags associadas ao boleto
      </td>
    </tr>

    <tr>
      <td>
        <strong>notes</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Text
      </td>
      <td>
        Anotações
      </td>
    </tr>
    <tr>
      <td>
        <strong>days_for_sue</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Integer
      </td>
      <td>
        Dias corridos para Protesto/Negativação
      </td>
    </tr>
    <tr>
      <td>
        <strong>instructions</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Text
      </td>
      <td>
        Instruções para o Caixa
      </td>
    </tr>
    <tr>
      <td>
        <strong>description</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Text
      </td>
      <td>
        Descrição do produto ou serviço
      </td>
    </tr>
    <tr>
      <td>
        <strong>amount</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Quantia (R$) Formato: 1.345,56 Obs.: Disponível apenas para alguns bancos.
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de requisição inválida

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
-d '{"bank_billet":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet":["não pode ficar em branco"]}}

</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby5">
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

    </div> -->
</div>


#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet":{"expire_at":"2017-11-15"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 Not Content
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 204 Not Content
Content-Type: application/json; charset=utf-8
...

</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby6">
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

    </div> -->
</div>


### Duplicar boleto

`POST /api/v1/bank_billets/:id/duplicate`

### Modelo de Dados

| **Parâmetro**                       | **Obrigatório**  | **Tipo**    | **Tamanho** | **Descrição**
| ------------------------------- | ----- | ------- | ------- | ------------------------
| **id**                          | Sim   | Integer |         | ID do boleto
| **expire_at_in_days**           | Não   | Integer |         | Nº de dias para vencimento a partir da data de hoje (Default: 7)
| **cancel**                      | Não   | Boolean |         | Cancelar o boleto que está sendo duplicado(Default: true)
| **amount**                      | Não   | String  |         | Valor do novo boleto. Formato: 1.345,56
| **with_fines**                  | Não   | Boolean |         | Atualizar o valor do novo boleto com juros e multa (Default: false)

É permitido o envio de qualquer outro parâmetro do [boleto](/reference/v1/bank_billets/#modelo-de-dados).


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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
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
    [created_via_api] => 1
    [customer_city_name] => Rio de Janeiro
    [paid_amount] => 0
    [amount] => 9.01
)
</pre>
    </div> -->
</div>

### Buscar por CPF ou CNPJ

<div class="alert alert-danger"><strong>ATENÇÃO</strong> Este endpoint esta descontinuado e será removido do sistema em breve. Utilize o <a href="/reference/v1/bank_billets/#listar-boletos">Listar boletos</a>.</div>

`GET /api/v1/bank_billets/cnpj_cpf`

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
        Quantidade de registros por página (Máximo de 50)
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_from</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Pesquisa a partir de Data de vencimento. Obrigatório o parâmetro <code class="highlighter-rouge">expire_to</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_to</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Pesquisa até a Data de vencimento. Obrigatório o parâmetro <code class="highlighter-rouge">expire_from</code>
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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/cnpj_cpf?q=125.812.717-28'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
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
    "state":"RJ"
  }
]
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

### Buscar por nosso número

<div class="alert alert-danger"><strong>ATENÇÃO</strong> Este endpoint esta descontinuado e será removido do sistema em breve. Utilize o <a href="/reference/v1/bank_billets/#listar-boletos">Listar boletos</a>.</div>

`GET /api/v1/bank_billets/our_number`

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
        Nosso número
      </td>
    </tr>
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
        Quantidade de registros por página (Máximo de 50)
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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/our_number?q=00000000441'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
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
    "state":"RJ"
  }
]
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

### Buscar por situação do boleto

<div class="alert alert-danger"><strong>ATENÇÃO</strong> Este endpoint esta descontinuado e será removido do sistema em breve. Utilize o <a href="/reference/v1/bank_billets/#listar-boletos">Listar boletos</a>.</div>

`GET /api/v1/bank_billets/status`

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
        Situação do boleto
      </td>
    </tr>
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
        Quantidade de registros por página (Máximo de 50)
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_from</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Pesquisa a partir de Data de vencimento. Obrigatório o parâmetro <code class="highlighter-rouge">expire_to</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_to</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Pesquisa até a Data de vencimento. Obrigatório o parâmetro <code class="highlighter-rouge">expire_from</code>
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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/status?q=opened'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
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
    "state":"RJ"
  }
]
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

### Marcar boleto como pago

`PUT /api/v1/bank_billets/:id/pay`

### Modelo de Dados

| Parâmetro                       | Obrigatório  | Tipo    | Tamanho | Descrição
| ------------------------------- | ----- | ------- | ------- | ------------------------
| **id**                          | Sim   | Integer |         | ID do boleto
| **paid_at**                     | Sim   | Date    |         | Data de pagamento
| **paid_amount**                 | Sim   | String  |         | Valor pago. Formato: 1.345,56
| **bank_rate**                   | Não   | String  |         | Valor da taxa bancária. Formato: 1.345,56
| **direct_payment**              | Não   | Boolean |         | Informa se o pagamento foi feito diretamente ao beneficiário.

#### Exemplo de requisição inválida

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
-d '{"bank_billet":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/pay
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{
  "errors": {
    "bank_billet": ["não pode ficar em branco"]
  }
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
    [created_via_api] => 1
    [customer_city_name] => Rio de Janeiro
    [paid_amount] => 0
    [amount] => 9.01
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
-d '{"bank_billet":{"paid_amount":120.34, "paid_at": "2014-11-15"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://sandbox.boletosimples.com.br/api/v1/bank_billets/1/pay
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 Not Content
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 204 Not Content
Content-Type: application/json; charset=utf-8
...

</pre>
  </div>
  </div>


### Cancelar boletos em lote

`POST /api/v1/bank_billets/cancel_all`

 <div class="alert alert-info">Pelo menos um parâmetro é obrigatório na chamada. Os parâmetros podem ser combinados.</div>
  <div class="alert alert-danger"><strong>ATENÇÃO</strong> Essa ação é irreversível, pois os boletos serão cancelados no banco.</div>

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
        <strong>status</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Situação do boleto
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_from</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir de Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_to</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>bank_billet_ids</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Array
      </td>
      <td>
        Ids dos boletos
      </td>
    </tr>
    <tr>
      <td>
        <strong>cnpj_cpf</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ ou CPF do Pagador
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>
<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"status":""}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/cancel_all'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{ "errors":"Parâmetros não encontrados" }
</pre>
</div>
</div>


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
-d '{"status":"opened", "expire_from":"20-04-2017", "expire_to"="20-10-2017", "bank_billet_ids":"[345,456,788]", "cnpj_cpf": "125.812.717-28"}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/cancel_all'
</pre>

<small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{ message: 'Solicitação de cancelamento enviada para processamento' }

</pre>
</div>
</div>

### Criar boletos em lote

`POST /api/v1/bank_billets/bulk`

<div class="alert alert-danger"><strong>ATENÇÃO</strong> Este endpoint esta descontinuado e será removido do sistema em breve. Utilize o <a href="/reference/v1/bank_billets/#criar-boleto">Criar boleto</a>.</div>

Apesar de receber a resposta com os dados do boleto, isso, somente, não garante que o boleto esteja pronto para uso. Isso apenas indica que o boleto foi aceito e cadastrado em sua conta.

A partir desse momento o boleto entra em uma fila para ser gerado o layout.

Após o layout do boleto ser gerado por completo seu status mudará para `opened`.

O boleto deverá ser registrado.

Para clientes com registro automático ativado, nós faremos o registro imediatamente após o boleto estar cadastrado.

Para clientes sem registro automático ativado, o registro é feito via [Remessa](/reference/v1/remittances/), gerada e enviada manualmente por você através do sistema do banco.

Só então você poderá disponibilizar o boleto aos seus clientes.

Para saber se um boleto foi gerado por completo, você deve preparar seu sisema para receber nossos [Webhooks](/webhooks)

Será retornado `404 Not Found` ao tentar acessar a url de um boleto que ainda esteja sendo gerado(`generating`)


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
        <strong>bank_billets</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        Array
      </td>
      <td>
        Array de boletos. Cada item do array deve conter os mesmo parâmetros do  Modelo de Dados de <a href="/reference/v1/bank_billets/#criar-boleto">criação de boleto único</a>.
      </td>
    </tr>
  </tbody>
</table>

<div class="alert alert-info"><strong>ATENÇÃO</strong> Máximo de 50 boletos por chamada.</div>

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>
<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billets":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/bulk'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billets":["não pode ficar em branco"]}}
</pre>
  </div>

  <!-- <div class="tab-pane" id="ruby">
    <small>Requisição:</small>
<pre class="ruby">

</pre>

    <small>Resposta:</small>

<pre class="ruby">

</pre>
  </div>
    <div class="tab-pane" id="php">
      <small>Requisição:</small>
<pre class="php">

</pre>

      <small>Resposta:</small>

<pre class="php">

</pre>
    </div> -->
</div>

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billets":[{"amount":12.34, "expire_at": "2018-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28", "customer_zipcode": "12312123", "customer_address": "Rua quinhentos", "customer_city_name": "Rio de Janeiro", "customer_state": "RJ", "customer_neighborhood": "bairro"},{"amount":12.34, "expire_at": "2018-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28", "customer_zipcode": "12312123", "customer_address": "Rua quinhentos", "customer_city_name": "Rio de Janeiro", "customer_state": "RJ", "customer_neighborhood": "bairro"},{"amount":12.34, "expire_at": "", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "", "customer_zipcode": "12312123", "customer_address": "Rua quinhentos", "customer_city_name": "Rio de Janeiro", "customer_state": "RJ", "customer_neighborhood": "bairro"}]}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billets/bulk'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Status: 201 Created
...
[
{
  "item":0,
  "status":"success",
  "bank_billet":{
    "id":63883,
    "expire_at":"2018-11-16",
    "paid_at":null,"
    description":"Prestação de Serviço",
    "status":"generating"
    ...
  }
},
{
  "item":1,
  "status":"success",
  "bank_billet":{
    "id":63884,
    "expire_at":"2018-11-16",
    "paid_at":null,
    "description":"Prestação de Serviço",
    "status":"generating"
    ...
  }
},
{
  "item":2,
  "status":"error",
  "errors":
  {
    "customer_id":["não pode ficar em branco"],
    "expire_at":["não pode ficar em branco","não é uma data válida"],
    "customer_cnpj_cpf":["não pode ficar em branco"]
  }
}
]
</pre>
  </div>
  <!-- <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>
<pre class="ruby">

</pre>

  <small>Resposta:</small>

<pre class="ruby">

</pre>
  </div>
    <div class="tab-pane" id="php2">
      <small>Requisição:</small>
<pre class="php">

</pre>

    <small>Resposta:</small>

<pre class="php">

</pre>
    </div> -->
</div>
