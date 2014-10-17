---
layout: pt
title: Informações do Boleto - API do Boleto Simples
en: /en/reference
breadcrumb: true
---

## Boletos

### Informações do Boleto

`GET /api/v1/bank_billets/:id`

#### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"opened",
  "shorten_url":"http://bole.to/xxxxxxxx",
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":null,
  "customer_state":null,
  "customer_neighborhood":null,
  "customer_zipcode":null,
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "notification_url":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":null,
  "paid_amount":0.0,
  "amount":12.34
}
</pre>