---
layout: pt
title: Sicoob - API do Boleto Simples
en: /en/bank_contracts/sicoob
---

## Sicoob

| Modelos                 
| ------------------------
| [1/01 - Simples Com Registro](#simples-com-registro)
| [1/02 - Simples Sem Registro](#simples-sem-registro)

### 1/01 - Simples Com Registro

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **sicoob-01**             | N/A     | Slug da carteira
| **our_number_length**     | 7       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 7       | Código do Cedente
| **extra1_digit_length**   | N/A     | N/A
| **extra2_length**         | N/A     | N/A
| **extra2_digit_length**   | N/A     | N/A

### 1/02 - Simples Sem Registro

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **sicoob-02**             | N/A     | Slug da carteira
| **our_number_length**     | 7       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 7       | Código do Cedente
| **extra1_digit_length**   | N/A     | N/A
| **extra2_length**         | N/A     | N/A
| **extra2_digit_length**   | N/A     | N/A
