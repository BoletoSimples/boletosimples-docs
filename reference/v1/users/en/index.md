---
layout: en
title: Authenticated User - Boleto Simples API
en: /en/references
breadcrumb: Authenticated User
---

## Authenticated User

### User's Info

`GET /api/v1/userinfo`

When assessed by [OAuth2](/authentication/oauth2), the information returned will vary depending on the [permissões](/authentication/permissions) granted by user according with table below:

When assessed by [Access Token](/authentication/token), all information are returned.

<table class='table table-bordered'>
  <thead>
    <tr>
      <th width="200px">Scope</th>
      <th>Returned Fields</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>login</th>
      <td>[:login_url]</td>
    </tr>
    <tr>
      <th>email</th>
      <td>[:email]</td>
    </tr>
    <tr>
      <th>profile</th>
      <td>[:account_type, :first_name, :middle_name, :last_name, :full_name, :cpf, :date_of_birth, :mother_name, :father_name, :account_level]</td>
    </tr>
    <tr>
      <th>address</th>
      <td>[:address_street_name, :address_number, :address_complement, :address_neighborhood, :address_postal_code, :address_city_name, :address_state]</td>
    </tr>
    <tr>
      <th>phone</th>
      <td>[:phone_number]</td>
    </tr>
    <tr>
      <th>business</th>
      <td>[:business_name, :business_cnpj, :business_legal_name]</td>
    </tr>
  </tbody>
</table>

#### Example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
</pre>

<small>Response:</small>

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
