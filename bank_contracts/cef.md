---
layout: pt
title: Caixa Econômica Federal - API do Boleto Simples
en: /en/bank_contracts/cef
---

## Caixa Econômica Federal

| Modelos                 
| ------------------------
| [Sem Registro](#sem-registro)
| [Com Registro](#com-registro)

### Sem Registro

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **caixa-sr**              | N/A     | Slug da carteira
| **our_number_length**     | 15      | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 7       | Conta corrente
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 6       | Código do Beneficiário
| **extra1_digit_length**   | N/A     |
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### Com Registro

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **caixa-rg**              | N/A     | Slug da carteira
| **our_number_length**     | 15      | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 7       | Conta corrente
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 6       | Código do Beneficiário
| **extra1_digit_length**   | N/A     |
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |