---
layout: pt
title: Changelog - API do Boleto Simples
en: /en/changelog
---

## Changelog

#### Últimas alterações realizadas na API.

### 04/05/2016

* Novo endpoint para gerar segunda via de boletos

### 03/05/2016

* Inclui 'status' nas informações retornadas nas carteiras de cobrança
* Novo endpoint para homologar carteiras de cobrança

### 24/02/2016

* Padronizando CEP

### 24/12/2015

* Atualiza as informações retornadas nas carteiras (BankBilletAccount)
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

* Adicionado endpoint 'pay_off' na API de CNAB
* Correção exemplo de cancelamento de boleto

### 17/04/2015

* Adicionado novo scopo 'balance'
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

### Código fonte da documentação

A documentação da API é um [projeto público no Github](https://github.com/BoletoSimples/boletosimples-api). Você pode acompanhar as mudanças na documentação na [página dos commits](https://github.com/BoletoSimples/boletosimples-api/commits/gh-pages).
