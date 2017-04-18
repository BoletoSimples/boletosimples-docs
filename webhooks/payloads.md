---
layout: pt
title: Payloads - API do Boleto Simples
en: /en/webhooks/payloads
---

## Payloads

Payload é o conteúdo que é enviado na notificação. Cada evento possui um payload diferente. Em seguida o que você pode esperar de cada evento.

A regra é que todos os payloads possuem as chaves `event_code`, `webhook`, `object`, `changes`.

| event_code | código do evento que originou a notificação. |
| webhook    | informações do webhook para o qual a notificação foi criada. |
| object     | informações do recurso relativo ao evento. |
| changes    | mudanças realizadas no recurso (no caso dos eventos *.updated) |


### ping

<pre class="json">
{
  "event_code": "ping",
  "webhook": {
    "id": 11,
    "url": "https://requestb.in"
  }
}
</pre>

### bank_billet.*

<pre class="json">
{
  "object": {
    "id": 1,
    "url": "https://bole.to/6/qzoavp",
    "line": "03399.12347 56700.000005 00033.701012 1 71190000003223",
    "meta": null,
    "notes": null,
    "amount": 217.6,
    "extra1": null,
    "extra2": null,
    "status": "paid",
    "formats": {
      "pdf": "https://bole.to/6/qzoavp.pdf",
      "png": "https://bole.to/6/qzoavp.png"
    },
    "paid_at": "2017-04-17",
    "bank_rate": 0.0,
    "carne_url": null,
    "expire_at": "2017-04-24",
    "paid_bank": "237",
    "acceptance": "N",
    "created_at": "2017-04-17",
    "our_number": "00002957",
    "updated_at": "2017-04-18",
    "description": "Recarga de benefícios",
    "paid_agency": "01200",
    "paid_amount": 217.6,
    "shorten_url": "https://bole.to/6/qzoavp",
    "agency_digit": null,
    "extra1_digit": null,
    "extra2_digit": null,
    "instructions": null,
    "account_digit": "1",
    "agency_number": "1234",
    "document_date": null,
    "document_type": "DM",
    "payment_place": "Pagável em qualquer banco até a data de vencimento.",
    "remittance_id": null,
    "account_number": "00001221",
    "customer_email": "suporte@boletosimples.com.br",
    "customer_state": "RJ",
    "fine_for_delay": null,
    "guarantor_name": null,
    "installment_id": null,
    "created_via_api": true,
    "document_amount": 0.0,
    "document_number": null,
    "beneficiary_name": "Boleto Simples Cobranças Ltda.",
    "customer_address": "Rua da Glória",
    "customer_zipcode": "20241180",
    "customer_cnpj_cpf": "05.813.794/0001-26",
    "bank_contract_slug": "santander-bs-101",
    "customer_city_name": "Rio de Janeiro",
    "guarantor_cnpj_cpf": null,
    "installment_number": null,
    "beneficiary_address": "Rua da Glória, 101",
    "beneficiary_cnpj_cpf": "05.813.794/0001-26",
    "customer_person_name": "Boleto Simples Cobranças Ltda.",
    "customer_person_type": "juridical",
    "processed_our_number": "00002957-2",
    "bank_billet_layout_id": null,
    "customer_neighborhood": "CENTRO",
    "customer_phone_number": null,
    "late_payment_interest": null,
    "bank_billet_account_id": 1,
    "bank_billet_discharges": [
      {
        "id": 1,
        "line": "1020817949600011400014542047                                  0000295728          44                       1061704170000295728                    1704170000000021760237012000100000000000000000000000000             0000000000000000000000000000000000000000000000021760000000000000000000000000000                         04                                                        025869000000000000000010",
        "occurrence": "06",
        "discharge_id": 6488,
        "processed_at": "2017-04-18",
        "bank_billet_id": 1,
        "occurrence_error": "04",
        "occurrence_detail": "Liquidação",
        "date_of_occurrence": "2017-04-17",
        "occurrence_error_detail": "Compensação Eletrônica"
      }
    ],
    "customer_address_number": null,
    "customer_subscription_id": null,
    "processed_our_number_raw": "0000295728",
    "beneficiary_assignor_code": "1234/1234567",
    "customer_address_complement": null
  },
  "changes": {
    "status": [
      "opened",
      "paid"
    ],
    "paid_at": [
      null,
      "2017-04-17"
    ],
    "updated_at": [
      "2017-04-17 15:23:24 -0300",
      "2017-04-18 09:18:13 -0300"
    ],
    "banco_recebedor": [
      null,
      "237"
    ],
    "bank_rate_cents": [
      null,
      0
    ],
    "paid_amount_cents": [
      null,
      21760
    ],
    "agencia_recebedora": [
      null,
      "01200"
    ]
  },
  "event_code": "bank_billet.paid",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-18 09:18:18 -0300"
  }
}
</pre>

### customer.*

<pre class="json">
{
  "object": {
    "id": 1,
    "email": null,
    "notes": null,
    "state": "RJ",
    "address": "Rua da Glória, 36",
    "zipcode": "99354050",
    "cnpj_cpf": "05.813.794/0001-26",
    "email_cc": null,
    "city_name": "Brusque",
    "person_name": "Boleto Simples Cobranças Ltda.",
    "person_type": "juridical",
    "neighborhood": "Centro",
    "phone_number": "9999999999",
    "mobile_number": null,
    "address_number": "0",
    "created_via_api": true,
    "mobile_local_code": null,
    "address_complement": "Rua Glória, 36"
  },
  "event_code": "customer.created",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-18 09:46:58 -0300"
  }
}
</pre>

### customer_subscription.*

<pre class="json">
{
  "object": {
    "id": 1,
    "cycle": "monthly",
    "email": "",
    "amount": 150.0,
    "end_at": null,
    "created_at": "2017-03-31",
    "updated_at": "2017-03-31",
    "customer_id": 1,
    "description": "MANUTENÇÃO MENSAL DO HOTSITE",
    "instructions": "",
    "next_billing": "2017-04-10",
    "fine_for_delay": 2.0,
    "bank_billet_ids": [

    ],
    "created_via_api": false,
    "days_in_advance": 10,
    "bank_billet_layout_id": 1,
    "late_payment_interest": 1.0,
    "bank_billet_account_id": 1
  },
  "event_code": "customer_subscription.created",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-18 09:46:58 -0300"
  }
}
</pre>

### installment.*

<pre class="json">
{
  "object": {
    "id": 1,
    "url": "https://bole.to/6/lbvaaz/carne",
    "cycle": "monthly",
    "total": 1,
    "amount": 765.0,
    "end_at": "2017-06-12",
    "status": "generated",
    "start_at": "2017-04-12",
    "created_at": "2017-04-06",
    "updated_at": "2017-04-06",
    "customer_id": 1,
    "description": "DESENVOLVIMENTO DO WEBSITE",
    "bank_billets": [
      {
        "id": 1,
        "url": "https://bole.to/6/pnvjjv",
        "line": "10496.00297 94000.100043 00005.034509 5 71880000076500",
        "meta": null,
        "notes": null,
        "amount": 765.0,
        "extra1": "999999",
        "extra2": null,
        "status": "opened",
        "formats": {
          "pdf": "https://bole.to/6/pnvjjv.pdf",
          "png": "https://bole.to/6/pnvjjv.png",
          "carne": "https://bole.to/6/pnvjjv/carne"
        },
        "paid_at": null,
        "bank_rate": 0.0,
        "carne_url": "https://bole.to/6/pnvjjv/carne",
        "expire_at": "2017-06-12",
        "paid_bank": null,
        "acceptance": "N",
        "created_at": "2017-04-06",
        "our_number": "000000000050345",
        "updated_at": "2017-04-06",
        "description": "DESENVOLVIMENTO DO WEBSITE",
        "paid_agency": null,
        "paid_amount": 0.0,
        "shorten_url": "https://bole.to/6/pnvjjv",
        "agency_digit": "0",
        "extra1_digit": null,
        "extra2_digit": null,
        "instructions": "",
        "account_digit": "9",
        "agency_number": "9999",
        "document_date": null,
        "document_type": "DM",
        "payment_place": "Pagável em qualquer banco até a data de vencimento.",
        "remittance_id": null,
        "account_number": "0000293",
        "customer_email": null,
        "customer_state": "AL",
        "fine_for_delay": 2.0,
        "guarantor_name": null,
        "installment_id": 1,
        "created_via_api": false,
        "document_amount": 0.0,
        "document_number": null,
        "beneficiary_name": "Boleto Simples Cobranças Ltda.",
        "customer_address": "Rua Jornalista",
        "customer_zipcode": "99999999",
        "customer_cnpj_cpf": "05.813.794/0001-26",
        "bank_contract_slug": "caixa-rg",
        "customer_city_name": "Rio de Janeiro",
        "guarantor_cnpj_cpf": null,
        "installment_number": 3,
        "beneficiary_address": "Avenida, 326",
        "beneficiary_cnpj_cpf": "05.813.794/0001-26",
        "customer_person_name": "Boleto Simples Cobranças Ltda.",
        "customer_person_type": "juridical",
        "processed_our_number": "14000000000050345-8",
        "bank_billet_layout_id": 1,
        "customer_neighborhood": "Centro",
        "customer_phone_number": "9999999999",
        "late_payment_interest": 3.0,
        "bank_billet_account_id": 1,
        "customer_address_number": "255",
        "customer_subscription_id": null,
        "processed_our_number_raw": "140000000000503458",
        "beneficiary_assignor_code": "9999/600299-4",
        "customer_address_complement": ""
      }
    ],
    "instructions": "",
    "fine_for_delay": 2.0,
    "bank_billet_ids": [
      1
    ],
    "created_via_api": false,
    "bank_billet_layout_id": 1,
    "late_payment_interest": 3.0,
    "bank_billet_account_id": 1
  },
  "changes": {
    "status": [
      "processed",
      "generated"
    ],
    "updated_at": [
      "2017-04-06 20:30:53 -0300",
      "2017-04-06 20:31:09 -0300"
    ]
  },
  "event_code": "installment.generated",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-06 20:31:14 -0300"
  }
}
</pre>

### user.*

<pre class="json">
{
  "object": {
    "id": 1,
    "cpf": "046.665.234-80",
    "email": "suporte@boletosimples.com.br",
    "gender": "Masculino",
    "full_name": "Luiz Silva",
    "last_name": "Silva",
    "login_url": "https://boletosimples.com.br/welcome?email=suporte%boletosimples.com.br&token=TJEz4fMFv2Q4jp8SLj6q",
    "first_name": "Luiz",
    "father_name": null,
    "middle_name": null,
    "mother_name": "Maria Oliveira",
    "account_type": "juridical",
    "checkout_url": "https://checkout.boletosimples.com.br/#boletosimples;b2e55674f80ee49073f272626e6fbc18",
    "phone_number": "9999999999",
    "subscription": {
      "id": 1,
      "cycle": "annual",
      "amount": 405.0,
      "contract": "Plano alterado para anual, por solicitação do usuário.\r\n",
      "discount": 0,
      "created_at": "2016-12-23",
      "updated_at": "2017-03-05",
      "canceled_at": null,
      "next_billing": "2017-09-05",
      "exceeded_price": 0.42,
      "integration_price": 0.13,
      "number_of_billets": 250,
      "number_of_bank_billet_accounts": 1
    },
    "account_level": 1,
    "address_state": "RJ",
    "billing_email": "",
    "business_cnpj": "05.813.794/0001-26",
    "business_name": "Boleto Simples Cobranças Ltda.",
    "business_type": "individual",
    "configuration": null,
    "date_of_birth": "1984-02-16",
    "address_number": "326",
    "business_website": "http://www.boletosimples.com.br",
    "address_city_name": "Rio de Janeiro",
    "business_category": 1020,
    "address_complement": "Sala 06",
    "address_postal_code": "99999999",
    "address_street_name": "Avenida  Espíndola",
    "business_legal_name": "Boleto Simples Cobranças Ltda.",
    "address_neighborhood": "Centro",
    "business_subcategory": 2229
  },
  "changes": {
    "updated_at": [
      "2017-04-17 12:49:57 -0300",
      "2017-04-17 15:38:48 -0300"
    ],
    "sign_in_count": [
      326,
      327
    ],
    "last_sign_in_at": [
      "2017-04-14 09:54:44 -0300",
      "2017-04-17 12:49:57 -0300"
    ],
    "current_sign_in_at": [
      "2017-04-17 12:49:57 -0300",
      "2017-04-17 15:38:48 -0300"
    ],
    "current_sign_in_ip": [
      "179.235.185.186",
      "179.235.167.233"
    ]
  },
  "event_code": "user.updated",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-17 15:38:58 -0300"
  }
}
</pre>

### remittance.*

<pre class="json">
{
  "object": {
    "id": 1,
    "url": "https://sandbox.boletosimples.com.br/remessas/60353767cf6e6992ab97f7448acfb66e/download",
    "status": "processed",
    "filename": "1704181.REM",
    "created_at": "2017-04-18",
    "processed_at": "2017-04-18",
    "bank_billet_ids": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "created_via_api": true,
    "remittance_number": 1,
    "sent_via_integration": null,
    "bank_billet_account_id": 1
  },
  "changes": {
    "status": [
      "unprocessed",
      "processed"
    ],
    "updated_at": [
      "2017-04-18 09:12:13 -0300",
      "2017-04-18 09:12:13 -0300"
    ]
  },
  "event_code": "remittance.processed",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-18 09:12:22 -0300"
  }
}
</pre>

### discharge.*

<pre class="json">
{
  "object": {
    "id": 1,
    "status": "processed",
    "filename": "87668-2.RET",
    "processed_at": "2017-04-18",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "bank_billet_discharges": [

    ],
    "created_via_integration": null,
    "bank_billets_with_transactions": [
      {
        "transaction": {
          "iof": "0",
          "paid_at": "2017-04-11",
          "discount": "0",
          "line_raw": "1020239897600019000000090750908766827                         000000000000000008520000000000000000000000000917110417          00000000000000000852000000000000050396703300162  000000000000000000000000000000000000000000000000000000000000000000000000000000000000050396700000000000000000000000000   120417                 0000000000                                                                  000002",
          "sue_rate": "0",
          "bank_rate": "0",
          "credit_at": null,
          "error_code": "0000000000",
          "event_type": "17",
          "our_number": "09000000000852",
          "billet_fine": "0",
          "paid_amount": "503967",
          "value_rebate": "0",
          "agency_number": "9999",
          "account_number": "9999999",
          "banco_recebedor": "033",
          "agencia_recebedora": "0016"
        },
        "bank_billet_id": 1
      }
    ]
  },
  "changes": {
    "status": [
      "unprocessed",
      "processed"
    ],
    "quantity": [
      0,
      1
    ],
    "updated_at": [
      "2017-04-18 10:00:58 -0300",
      "2017-04-18 10:00:58 -0300"
    ],
    "amount_cents": [
      0,
      503967
    ],
    "processed_at": [
      null,
      "2017-04-18 10:00:58 -0300"
    ]
  },
  "event_code": "discharge.processed",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-18 10:00:59 -0300"
  }
}
</pre>

### plan_subscription.*

<pre class="json">
{
  "object": {
    "id": 1,
    "cycle": "monthly",
    "amount": 50.0,
    "contract": null,
    "discount": 0,
    "created_at": "2017-02-20",
    "updated_at": "2017-02-21",
    "canceled_at": null,
    "next_billing": "2017-03-21",
    "exceeded_price": 0.6,
    "integration_price": 0.15,
    "number_of_billets": 50,
    "number_of_bank_billet_accounts": 1
  },
  "event_code": "plan_subscription.activated",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-18 10:00:59 -0300"
  }
}
</pre>

### bank_billet_account.*

<pre class="json">
{
  "object": {
    "id": 1,
    "name": "Banrisul - 2",
    "extra1": "9999999",
    "extra2": null,
    "extra3": "999999999",
    "status": "active",
    "default": false,
    "integration": false,
    "agency_digit": "00",
    "extra1_digit": "61",
    "extra2_digit": null,
    "account_digit": "04",
    "agency_number": "9999",
    "bank_contract": {
      "bank": {
        "code": "banrisul",
        "name": "Banrisul",
        "number": "041"
      },
      "code": "2",
      "name": "Cob. Direta - Agência com 4 dígitos - BDL",
      "slug": "banrisul-bs-4-2",
      "sufix": "bs-4-2",
      "variation": null
    },
    "configuration": null,
    "account_number": "99999999",
    "homologated_at": "2017-01-13",
    "created_via_api": false,
    "next_our_number": "00145332",
    "beneficiary_name": "Boleto Simples Cobranças Ltda.",
    "bank_contract_slug": "banrisul-bs-4-2",
    "beneficiary_address": "Rua Glória",
    "beneficiary_cnpj_cpf": "05.813.794/0001-26",
    "next_remittance_number": 2
  },
  "changes": {
    "updated_at": [
      "2017-03-22 16:25:35 -0300",
      "2017-04-13 11:04:36 -0300"
    ],
    "extra1_digit": [
      null,
      "61"
    ]
  },
  "event_code": "bank_billet_account.activated",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br",
    "first_try": "2017-04-13 11:04:36 -0300"
  }
}
</pre>

### *.updated

<pre class="json">
{
  "object": {
    ...
  },
  "changes": {
    "person_name": [
      "Nome Antigo",
      "Nome Novo"
    ],
  },
  "event_code": "customer.updated",
  "webhook": {
    "id": 1,
    "url": "http://hooks.boletosimples.com.br"
  }
}
</pre>
