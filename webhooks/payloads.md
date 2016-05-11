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
    "url": "http://requestb.in/15a0nqn1"
  }
}
</pre>

### bank_billet.*

<pre class="json">
{
  "object": {
    "id": 237,
    "expire_at": "2016-05-11",
    "paid_at": null,
    "description": "Boleto gerado para homologação da carteira de cobrança configurada no sistema Boleto Simples (http://boletosimples.com.br).",
    "status": "generating",
    "shorten_url": "http://boleto-staging.herokuapp.com/2/okq",
    "customer_person_type": "juridical",
    "customer_person_name": "Boleto Simples Cobranças Ltda.",
    "customer_cnpj_cpf": "05.813.794/0001-26",
    "customer_address": "Av. Pres. Vargas",
    "customer_state": "RJ",
    "customer_neighborhood": "Centro",
    "customer_zipcode": "20071004",
    "customer_address_number": "633",
    "customer_address_complement": "sala 1716",
    "customer_phone_number": null,
    "customer_email": "suporte@boletosimples.com.br",
    "created_via_api": false,
    "customer_city_name": "Rio de Janeiro",
    "paid_amount": 0.0,
    "amount": 1.0,
    "url": "http://boleto-staging.herokuapp.com/2/okq",
    "formats": {
      "png": "http://boleto-staging.herokuapp.com/2/okq.png",
      "pdf": "http://boleto-staging.herokuapp.com/2/okq.pdf"
    },
    "meta": null,
    "fine_for_delay": null,
    "late_payment_interest": null,
    "bank_rate": 0.0,
    "bank_billet_account_id": 23,
    "beneficiary_name": "Boleto Simples",
    "beneficiary_cnpj_cpf": "05.813.794/0001-26",
    "beneficiary_address": "Av. Pres. Vargas, 633 sl 1716",
    "beneficiary_assignor_code": null,
    "guarantor_name": null,
    "guarantor_cnpj_cpf": null,
    "payment_place": "Pagável em qualquer banco até a data de vencimento.",
    "instructions": null,
    "document_date": null,
    "document_type": "DM",
    "document_number": null,
    "document_amount": 0.0,
    "acceptance": "N",
    "processed_our_number": null,
    "processed_our_number_raw": null,
    "bank_contract_slug": "bb-bs-18-19-7",
    "agency_number": "4248",
    "agency_digit": "0",
    "account_number": "00012345",
    "account_digit": "6",
    "extra1": "1234567",
    "extra1_digit": null,
    "extra2": null,
    "extra2_digit": null,
    "line": null,
    "our_number": "0000000001"
  },
  "event_code": "bank_billet.created",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### customer.*

<pre class="json">
{
  "object": {
    "id": 32,
    "city_name": "Rio de Janeiro",
    "person_name": "Joao da Silva",
    "address": "Rua quinhentos",
    "address_complement": "Sala 4",
    "address_number": "111",
    "mobile_number": nil,
    "cnpj_cpf": "012.345.678-90",
    "email": "cliente@example.com",
    "neighborhood": "bairro",
    "person_type": "individual",
    "phone_number": "2112123434",
    "zipcode": "12312-123",
    "mobile_local_code": nil,
    "state": "RJ"
  },
  "event_code": "customer.created",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### trasaction.*

<pre class="json">
{
  "object": {
    "id": 1,
    "amount": 300.0,
    "created_at": "2015-02-19",
    "description": "Boleto Bancário 22",
    "kind": "credit",
    "processed_at": null,
    "sent_at": null,
    "status": "unprocessed",
    "credit_at": "2015-02-24"
  },
  "event_code": "transaction.created",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### user.*

<pre class="json">
{
  "object": {
    "id": 1,
    "email": "carteira@example.com",
    "account_type": "individual",
    "sex": "male",
    "cpf": "860.196.915-19",
    "address_street_name": "Rua quinhentos",
    "address_state": "RJ",
    "address_neighborhood": "Bairro Legal",
    "address_postal_code": "12312-123",
    "address_number": "111",
    "address_complement": "222",
    "phone_number": "2112123434",
    "withdrawal_period": "biweekly",
    "first_name": "Joao",
    "middle_name": "da Silva",
    "last_name": "Neto",
    "date_of_birth": "1976-10-09",
    "business_category": 1000,
    "business_subcategory": 2000,
    "business_website": "",
    "business_name": null,
    "business_legal_name": "",
    "business_type": "",
    "business_cnpj": null,
    "address_city_name": "Rio de Janeiro",
    "full_name": "Joao da Silva Neto",
    "login_url": "https://boletosimples.com.br/welcome?email=carteira%40example.com",
    "mother_name": "Maria de Almeida",
    "father_name": "Paulo José da Cunha",
    "account_level": 1
  },
  "event_code": "user.updated",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### remittance.*

<pre class="json">
{
  "object": {
    "id": 1,
    "filename": "1605061.REM",
    "created_via_api": true,
    "status": "processed",
    "bank_billet_account_id": 1,
    "created_at": "2016-05-06",
    "processed_at": "2016-05-06",
    "url": "https://boletosimples.com.br/remessas/06tt1bcc3f6132720866b53a57c76de4/download"
  },
  "event_code": "remittance.processed",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### discharge.*

<pre class="json">
{
  "object": {
    "id": 1,
    "filename": "CN02125A.RET",
    "processed_at": "2015-12-24",
    "created_via_api": true,
    "status": "processed"
  },
  "event_code": "discharge.processed",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### plan_subscription.*

<pre class="json">
{
  "object": {
    "id": 8,
    "subscription_price": 0.16,
    "subscription_cycle": "monthly",
    "canceled_at": null,
    "next_billing": "2016-06-06",
    "contract": null,
    "created_at": "2016-05-06",
    "updated_at": "2016-05-06",
    "number_of_billets": 0,
    "exceeded_price": 0.16,
    "number_of_bank_billet_accounts": 3,
    "discount": 0,
    "user_email": "email@example.com",
    "user_id": 1
  },
  "event_code": "plan_subscription.activated",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>

### bank_billet_account.*

<pre class="json">
{
  "object": {
    "id": 23,
    "bank_contract_slug": "bb-bs-18-19-7",
    "next_our_number": "0000000001",
    "agency_number": "4248",
    "agency_digit": "0",
    "account_number": "00012345",
    "account_digit": "6",
    "extra1": "1234567",
    "extra1_digit": null,
    "extra2": null,
    "extra2_digit": null,
    "extra3": null,
    "beneficiary_name": "Boleto Simples",
    "beneficiary_cnpj_cpf": "05.813.794/0001-26",
    "beneficiary_address": "Av. Pres. Vargas, 633 sl 1716",
    "name": "Banco do Brasil 18 - CC 00012345-6",
    "status": "pending",
    "bank_contract": {
      "bank": {
        "code": "bb",
        "name": "Banco do Brasil",
        "number": "001"
      },
      "slug": "bb-bs-18-19-7",
      "code": "18",
      "sufix": "bs-18-19-7",
      "variation": "19",
      "name": "18-19 (Convênio com 7 dígitos)"
    }
  },
  "event_code": "bank_billet_account.created",
  "webhook": {
    "id": 1,
    "url": "http://example.ngrok.com/callbacks/boletosimples"
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
    "url": "http://example.ngrok.com/callbacks/boletosimples"
  }
}
</pre>