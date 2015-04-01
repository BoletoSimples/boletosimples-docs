---
layout: pt
title: Changelog - API do Boleto Simples
en: /en/changelog
---

## Changelog

#### Log das últimas alterações realizadas na API.

<!-- ### 31/03/2015

* Inclusão de carteiras de cobrança.
* Correções nos exemplos em Bash do endpoint de Clientes
* Adicinando opção de usar PUT para cancelar Boletos
 -->

### 08/03/2015

* As notificações antigas ficaram obsoletas e não devem ser mais utilizadas. Para receber notificações sobre os eventos que ocorrem no sistema é necessário usar os Webhooks.

### 16/02/2015

* O código do status (`BankBillet#status`) de um boleto vencido mudou de `due` para `overdue`.

### Código fonte da documentação

A documentação da API é um [projeto público no Github](https://github.com/BoletoSimples/boletosimples-api). Você pode acompanhar as mudanças na documentação na [página dos commits](https://github.com/BoletoSimples/boletosimples-api/commits/gh-pages).
