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
    "id": 1,
    "expire_at": "2014-11-15",
    "paid_at": null,
    "description": "Prestação de Serviço",
    "status": "generating",
    "shorten_url": null,
    "customer_person_type": "individual",
    "customer_person_name": "Nome do Cliente",
    "customer_cnpj_cpf": "125.812.717-28",
    "customer_address": null,
    "customer_state": null,
    "customer_neighborhood": null,
    "customer_zipcode": null,
    "customer_address_number": null,
    "customer_address_complement": null,
    "customer_phone_number": null,
    "customer_email": null,
    "notification_url": null,
    "send_email_on_creation": null,
    "created_via_api": true,
    "customer_city_name": null,
    "paid_amount": 0.0,
    "amount": 12.34
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
    "filename": "1512242.REM",
    "created_via_api": true,
    "status": "processed",
    "bank_billet_account_id": 17,
    "created_at": "2015-12-24",
    "processed_at": "2015-12-24",
    "url": "https://boletosimples.com.br/api/v1/remittances/1/raw"
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