---
layout: pt
title: Changelog - API do Boleto Simples
en: /en/changelog
---

## Changelog

#### Últimas alterações realizadas na API.

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
