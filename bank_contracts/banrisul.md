---
layout: pt
title: Banrisul - API do Boleto Simples
en: /en/bank_contracts/banrisul
---

## Banrisul

| Modelos                 
| ------------------------
| [Cobrança Direta - Agência com 3 dígitos](#cobrana-direta---agncia-com-3-dgitos)
| [Cobrança Direta - Agência com 4 dígitos](#cobrana-direta---agncia-com-4-dgitos)

### Cobrança Direta - Agência com 3 dígitos

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **banrisul-2-3**          | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 3       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 6       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 2       | Dígito
| **extra1_digit_length**   | N/A     | N/A
| **extra2_length**         | N/A     | N/A
| **extra2_digit_length**   | N/A     | N/A

### Cobrança Direta - Agência com 4 dígitos

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **banrisul-2-4**          | N/A     | Slug da carteira
| **our_number_length**     | 8       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | 2       | Dígito da Agência
| **account_number_length** | 8       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 7       | Código de Cedente(7 primeiros dígitos)
| **extra1_digit_length**   | N/A     | N/A
| **extra2_length**         | N/A     | N/A
| **extra2_digit_length**   | N/A     | N/A
