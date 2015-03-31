---
layout: pt
title: Sicredi - API do Boleto Simples
en: /en/bank_contracts/sicredi
---

## Sicredi

| Modelos                 
| ------------------------
| [A (Simples)](#a-simples)

### A (Simples)

| Parâmetro                 | Tamanho | Descrição
| ------------------------- | ------- | -------------------
| **sicredi-a**             | N/A     | Slug da carteira
| **our_number_length**     | 5       | Nosso Número
| **agency_number_length**  | 4       | Agência
| **agency_digit_length**   | N/A     | Dígito da Agência
| **account_number_length** | 5       | Conta
| **account_digit_length**  | 1       | Dígito da Conta
| **extra1_length**         | 2       | Código do posto da cooperativa de crédito
| **extra1_digit_length**   | N/A     | N/A
| **extra2_length**         | 1       | Byte de identificação `1 - Cooperativa` e `2 a 9 - Cedente`
| **extra2_digit_length**   | N/A     | N/A
