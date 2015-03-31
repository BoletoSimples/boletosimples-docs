---
layout: pt
title: Caixa Econômica Federal - API do Boleto Simples
en: /en/bank_contracts/cef
---

## Caixa Econômica Federal

| Modelos                 
| ------------------------
| [SIGCB: 24 ou 02 (e-Cobrança)](#sigcb-24-ou-02-e-cobrana)
| [SINCO](#sinco)
| [CR (90) - Código do Cliente](#cr-90---cdigo-do-cliente)
| [CR (90) - Código do Cedente](#cr-90---cdigo-do-cedente)
| [SR (80) - Código do Cliente](#sr-80---cdigo-do-cliente)
| [SR (80) - Código do Cedente](#sr-80---cdigo-do-cedente)
| [SR (81) - Código do Cedente](#sr-81---cdigo-do-cedente)
| [SR (82) - Código do Cliente](#sr-82---cdigo-do-cliente)
| [SR (82) - Código do Cedente](#sr-82---cdigo-do-cedente)
| [SR5 - Código do Cliente](#sr5---cdigo-do-cliente)

### SIGCB: 24 ou 02 (e-Cobrança)

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-sr-24**             | N/A     | Slug da carteira
| **our_number_length**     | 15      | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 6       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 6       | Códigoigo do Cedente
| **extra1_digit_length**   | N/A     |
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### SINCO

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-sr**                | N/A     | Slug da carteira
| **our_number_length**     | 16      | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 5       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 6       | Códigoigo do Cedente
| **extra1_digit_length**   | N/A     |
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### CR (90) - Código do Cliente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-90**                | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 4       | Códigoigo da Agência e Operação
| **extra1_digit_length**   | 3       | Dígito do Códigoigo da Agência e Operação
| **extra2_length**         | 8       | Códigoigo do Cliente
| **extra2_digit_length**   | 1       | Dígito do Códigoigo do Cliente

### CR (90) - Código do Cedente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-cr-90**             | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 5       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 11      | Códigoigo do Cedente
| **extra1_digit_length**   | 1       | Dígito do Códigoigo do Cedente
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### SR (80) - Código do Cliente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-80**                | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 4       | Códigoigo da Agência e Operação
| **extra1_digit_length**   | 3       | Dígito do Códigoigo da Agência e Operação
| **extra2_length**         | 8       | Códigoigo do Cliente
| **extra2_digit_length**   | 1       | Dígito do Códigoigo do Cliente

### SR (80) - Código do Cedente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-sr-80**             | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 5       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 11      | Códigoigo do Cedente
| **extra1_digit_length**   | 1       | Dígito do Códigoigo do Cedente
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### SR (81) - Código do Cedente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-sr-81**             | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 5       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 11      | Códigoigo do Cedente
| **extra1_digit_length**   | 1       | Dígito do Códigoigo do Cedente
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### SR (82) - Código do Cliente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-82**                | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 4       | Códigoigo da Agência e Operação
| **extra1_digit_length**   | 3       | Dígito do Códigoigo da Agência e Operação
| **extra2_length**         | 8       | Códigoigo do Cliente
| **extra2_digit_length**   | 1       | Dígito do Códigoigo do Cliente

### SR (82) - Código do Cedente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-sr-82**             | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 5       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 11      | Códigoigo do Cedente
| **extra1_digit_length**   | 1       | Dígito do Códigoigo do Cedente
| **extra2_length**         | N/A     |
| **extra2_digit_length**   | N/A     |

### SR5 - Código do Cliente

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **cef-1**                 | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 4       | Códigoigo da Agência e Operação
| **extra1_digit_length**   | N/A     |
| **extra2_length**         | 6       | Códigoigo do Cliente
| **extra2_digit_length**   | 1       | Dígito do Códigoigo do Cliente
