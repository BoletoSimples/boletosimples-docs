---
layout: pt
title: Informações do Cliente - API do Boleto Simples
en: /en/references
breadcrumb: true
---

## Clientes

### Informações do Cliente

`GET /api/v1/customers/:id`

#### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/customers/1
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
  "city_name":null,
  "person_name":"Nome do Cliente",
  "address":null,
  "address_complement":null,
  "address_number":null,
  "mobile_number":null,
  "cnpj_cpf":"125.812.717-28",
  "email":null,
  "neighborhood":null,
  "person_type":"individual",
  "phone_number":null,
  "zipcode":null,
  "mobile_local_code":null,
  "state":null
}
</pre>
