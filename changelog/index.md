---
layout: pt
title: Changelog - API do Boleto Simples
en: /en/changelog
---

## Changelog

#### Código fonte da documentação

A documentação da API é um [projeto público no Github](https://github.com/BoletoSimples/boletosimples-api). Você pode acompanhar as mudanças na documentação na [página dos commits](https://github.com/BoletoSimples/boletosimples-api/commits/gh-pages).

#### Receba as atualizações por e-mail

Você também pode se inscrever para receber as notificações de alterações da API por e-mail.

<form action="https://www.getdrip.com/forms/93702557/submissions" method="post" data-drip-embedded-form="93702557">
  <input type="email" name="fields[email]" value="" required="required" placeholder="Seu e-mail" />
  <input type="submit" name="submit" value="Inscrever" data-drip-attribute="sign-up-button" />
</form>

#### Últimas alterações realizadas na API.

* Adicionado novos parâmetros ao endpoint de filtro de [Boletos](/reference/v1/bank_billets/#buscar-por-situação-do-boleto) por `status`: Filtro por período de vencimento a partir de `expire_from` e até data de vencimento `expire_to`

* Adicionado novos parâmetros ao endpoint de filtro de [Boletos](/reference/v1/bank_billets/#buscar-por-cpf-ou-cnpj) por `cnpj_cpf`: Filtro por período de vencimento a partir de `expire_from` e até data de vencimento `expire_to`

* Adicionado novo endpoint de cancelamento coletivo de [Boletos](/reference/v1/bank_billets/#cancelar-boletos):

### 29/11/2017

* Adicionado endpoint de alteração de [Carteiras de cobrança](/reference/v1/bank_billet_accounts/#alterar-carteira-de-cobrança-padrão) para padrão ou deixar de ser padrão

### 24/11/2017

* Adicionado novos parâmetros ao endpoint de criação de [Carnês](/reference/v1/installments/):
- Novos campos para [Desconto](/reference/v1/installments/#discount_type)

* Adicionado novos parâmetros ao endpoint de criação e alteração de [Assinaturas](/reference/v1/customer_subscriptions/):
- Novos campos para [Desconto](/reference/v1/customer_subscriptions/#discount_type)

### 14/11/2017

* Adicionado novos parâmetros ao endpoint de criação e alteração de [Assinaturas](/reference/v1/customer_subscriptions/):
- Novos campos para [Multa](/reference/v1/customer_subscriptions/#fine_type)
- Novos campos para [Juros](/reference/v1/customer_subscriptions/#interest_type)

### 07/11/2017

* Adicionado novos parâmetros ao endpoint de criação de [Carnes](/reference/v1/installments/):
- Novos campos para [Multa](/reference/v1/installments/#fine_type)
- Novos campos para [Juros](/reference/v1/installments/#interest_type)

### 20/09/2017

* Adicionado novos parâmetros ao endpoint de alteração de [Boletos](/reference/v1/bank_billets/#alterar-boleto)

### 09/08/2017

* Adicionado endpoint de alteração de [Boletos](/reference/v1/bank_billets/#alterar-boleto)

### 31/05/2017

* Inclui `notes` nos [Carnês](/reference/v1/installments/)
* Inclui `notes` nas [Assinaturas](/reference/v1/customer_subscriptions/)

### 24/05/2017

* Documentando endpoint para RAW da [Remessa](/reference/v1/remittances/#rawtextplain-do-cnab)

### 23/05/2017

* Inclui `nickname` nos [Clientes](/reference/v1/customers/)

### 22/05/2017

* Adicionado endpoint de pagamento aos [Boletos](/reference/v1/bank_billets/#marcar-boleto-como-pago)

### 18/05/2017

* Inclui eventos `bank_billet_discharge.*` e `bank_billet_remittance.*` na página de [eventos dos webhooks](/webhooks/events/)

### 17/04/2017

* Documenta informações sobre retentativas de entrega de [Webhooks](/webhooks/)
* Documenta o campo `bank_billets_with_transactions` em [Retornos](/reference/v1/discharges)

### 17/02/2017

* Documenta eventos de [carnês](/webhooks/events/)
* Inclusão de valor padrão para o campo `cycle` em [Assinaturas](/reference/v1/customer_subscriptions) e [Carnês](/reference/v1/installments)

### 08/02/2017

* Documenta o campo `default` em [Carteira de Cobrança](/reference/v1/bank_billet_accounts/#default)
* Adicionado novo scope para retornar url de [checkout](/authentication/permissions/)
* Adicionado novo scope para [subscription](/authentication/permissions/)

### 06/02/2017

* Incluída informação sobre a [limpeza do ambiente de sandbox](/sandbox/#limpeza-do-ambiente)

### 19/01/2017

* Adicionando novos endpoints aos [Boletos](/reference/v1/bank_billets)

### 13/01/2017

* Atualizando modelo de dados dos [Boletos](/reference/v1/bank_billets)

* Adicionado opções `amount` e `with_fines` ao [Boletos](/reference/v1/bank_billets/#gerar-segunda-via-do-boleto)

### 26/12/2016

* Revisão e atualização dos modelos de dados dos endpoints da API
* Revisão das [Carteiras](/bank_contracts)

### 19/11/2016

* Inclui endpoint de busca por [CPF ou CNPJ](/reference/v1/customers/#buscar-por-cpf-ou-cnpj) nos clientes
* Inclui endpoint de busca por [E-mail](/reference/v1/customers/#buscar-por-e-mail) nos clientes

### 31/10/2016

* Adiciona `bank_billet_layout_id` aos [Boletos](/reference/v1/bank_billets)

### 28/10/2016

* Adiciona `fine_for_delay` e `late_payment_interest` aos [Carnês](/reference/v1/installments)
* Adiciona `fine_for_delay` e `late_payment_interest` às [Assinaturas](/reference/v1/customer_subscriptions)

### 24/10/2016

* Adiciona `bank_billet_ids` a [Remessa](/reference/v1/remittances).

### 12/10/2016

* Melhora a explicação de como o [limite de requisições](/#limite-de-requisições) é calculado e aumenta o limite por segundo de 1 para 5 requisições.

### 14/09/2016

* Retira a obrigatoriedade do campo `bank_billet_account_id` e documenta a existência da carteira de cobrança padrão.

### 29/08/2016

* Melhora a explicação sobre [status da carteira de cobrança](/reference/v1/bank_billet_accounts/#status).
* Inclui aviso na página de [eventos dos webhooks](/webhooks/events/) de que os eventos `bank_billet_account.homologated` e `bank_billet_account.validated` serão renomeados em breve para `bank_billet_account.homologation_started` e `bank_billet_account.validation_released` respectivamente.

### 15/08/2016

* Inclui endpoint de [Carnês](/reference/v1/installments)

### 10/08/2016

* Corrige campos `amount`,  `cycle` e `days_in_advance` da [assinatura](/reference/v1/customer_subscriptions)

### 20/05/2016

* Corrige endpoint de [geração da próxima cobrança da assinatura](/reference/v1/customer_subscriptions#gerar-próxima-cobrança)

### 18/05/2016

* Inclui endpoint de [Assinaturas](/reference/v1/customer_subscriptions)

### 06/05/2016

* Atualização de [Eventos](/webhooks/events/) e exemplos de [Payload](/webhooks/payloads/)

### 04/05/2016

* Novo endpoint para gerar [segunda via de boletos](/reference/v1/bank_billets/#gerar-segunda-via-do-boleto)

### 03/05/2016

* Inclui 'status' nas informações retornadas nas carteiras de cobrança
* Novo endpoint para homologar carteiras de cobrança

### 24/02/2016

* Padronizando CEP

### 24/12/2015

* Atualiza as informações retornadas nas carteiras (`BankBilletAccount`)
* Inclui dicionário de dados de CNAB Retorno
* Atualiza status faltando no dicionário de dados de CNAB Remessa
* Inclui informações de payload dos webhooks de usuário, CNAB Remessa e CNAB Retorno

### 09/12/2015

* Atualização dos campos obrigatórios dos boletos
* Atualização dos campos obrigatórios dos clientes
* Revisão de todos os códigos de exemplo

### 28/10/2015

* Tabela com lista atual de retornos e remessas disponíveis

### 22/10/2015

* Atualizada lista de carteiras do Itaú
* Atualizada lista de carteiras do Bradesco
* Atualizada lista de carteiras do Banco do Brasil

### 09/10/2015

* Atualizada lista de carteiras do Santander

### 06/10/2015

* Atualiza informações de convênio de remessa
* Atualiza lista de atributos opcionais do boleto

### 30/09/2015

* Atualiza lista de carteiras da Caixa

### 14/09/2015

* Adicionado carteiras do Banestes

### 27/08/2015

* Adicionado endpoint destroy na remessa

### 24/08/2015

* Adicionado campo URL do arquivo de remessa

### 10/08/2015

* Adicionado campo extra3 para uso em remessas

### 23/06/2015

* Adicionado eventos de remessa
* Adicionado eventos de retorno

### 18/06/2015

* Adicionado ID da carteira a documentação de boletos
* Adicionado exemplos a API de Parceiros

### 12/06/2015

* Renomeado endpoint de CNAB de Retorno
* Adicionado endpoint de CNAB de Remessa

### 11/06/2015

* Adicionado endpoint `pay_off` na API de CNAB
* Correção exemplo de cancelamento de boleto

### 17/04/2015

* Adicionado novo scopo `balance`
* Inclusão de account_level na resposta sobre usuários
* Adicionado API de CNAB (Retorno)
* Adicionado endpoints(novo saque, solicitar saque, informações do saque e listagem de saques) na API de transações
* Adicionado novos eventos de webhooks

### 31/03/2015

* Inclusão de carteiras de cobrança.
* Correções nos exemplos em Bash do endpoint de Clientes
* Adicionado opção de usar PUT para cancelar Boletos

### 08/03/2015

* As notificações antigas ficaram obsoletas e não devem ser mais utilizadas. Para receber notificações sobre os eventos que ocorrem no sistema é necessário usar os Webhooks.

### 16/02/2015

* O código do status (`BankBillet#status`) de um boleto vencido mudou de `due` para `overdue`.