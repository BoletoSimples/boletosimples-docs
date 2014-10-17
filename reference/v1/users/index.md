---
layout: pt
title: Informações do Usuário - API do Boleto Simples
en: /en/references
breadcrumb: true
---

## Usuários

### Informações do Usuário Autenticado

`GET /api/v1/userinfo`

#### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id": 53,
  "email": "meuecommerce@example.com",
  "account_type": "juridical",
  "sex": "female",
  "cpf": "142.578.243-44",
  "address_street_name": "Av. Burkhard Hehn Simões",
  "address_state": "RJ",
  "address_neighborhood": "São Francisco",
  "address_postal_code": "24360-440",
  "address_number": "120",
  "address_complement": "709",
  "phone_number": "2199999999",
  "withdrawal_period": "biweekly",
  "notification_url": "http://example.com.br/notify",
  "first_name": "Margret",
  "middle_name": "Simões",
  "last_name": "Gonçalo",
  "date_of_birth": "1970-03-01",
  "business_category": 1000,
  "business_subcategory": 2173,
  "business_website": "http://example.com.br",
  "business_name": "Sebastian Elias Publicidade",
  "business_legal_name": "Sebastian Elias Publicidade LTDA.",
  "business_type": "mei",
  "business_cnpj": "18.174.681/0001-70",
  "address_city_name": "Rio de Janeiro",
  "full_name": "Margret Simões Gonçalo",
  "login_url": "https://sandbox.boletosimples.com.br/welcome?email=meuecommerce%40example.com&token=UCefpzbGRrM1UrLEuUDS",
  "mother_name": "Lenadra Simões Gonçalo",
  "father_name": "José Simões Gonçalo"
}
</pre>
