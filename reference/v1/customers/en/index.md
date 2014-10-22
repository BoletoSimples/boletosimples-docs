---
layout: en
title: Customers - Boleto Simples API
pt: /references/customers/
breadcrumb: Customers
---

## Customers

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Ressource</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#customer-create">POST /api/v1/customers</a></td>
      <td width='60%'>Customer create</td>
    </tr>
    <tr>
      <td><a href="#informaes-do-cliente">GET /api/v1/customers/:id</a></td>
      <td width='60%'>Customer's info</td>
    </tr>
    <tr>
      <td><a href="#listar-clientes">GET /api/v1/customers</a></td>
      <td width='60%'>List customers</td>
    </tr>
  </tbody>
</table>

### Customer Create

`POST /api/v1/customers`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parameter</th>
      <th data-container="body" data-toggle="tooltip" title="Required">Req.</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>customer</strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        Hash
      </td>
      <td>
        Customer's Info
      </td>
    </tr>

    <tr>
      <td>
        <strong>person_name</strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        String
      </td>
      <td>
        Name
      </td>
    </tr>

    <tr>
      <td>
        <strong>cnpj_cpf</strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ/CPF
      </td>
    </tr>

    <tr>
      <td>
        <strong>address</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Address
      </td>
    </tr>

    <tr>
      <td>
        <strong>city_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        City
      </td>
    </tr>

    <tr>
      <td>
        <strong>state</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        State
      </td>
    </tr>

    <tr>
      <td>
        <strong>neighborhood</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Neighborhood
      </td>
    </tr>

    <tr>
      <td>
        <strong>zipcode</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Zipcode
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_number</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Address Number
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_complement</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Adress complement
      </td>
    </tr>

    <tr>
      <td>
        <strong>phone_number</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Phone number
      </td>
    </tr>

    <tr>
      <td>
        <strong>email</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Email
      </td>
    </tr>

    <tr>
      <td>
        <strong>mobile_local_code</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Mobile local code(LDC)
      </td>
    </tr>

    <tr>
      <td>
        <strong>mobile_number</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Mobile Number
      </td>
    </tr>

  </tbody>
</table>

#### Invalid request example

<small>Rquest:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-d '{"customer":{}}'
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/customers
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"customer":["não pode ficar em branco"]}}
</pre>

#### Valid request example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-d '{"customer":{"person_name":"Nome do Cliente", "cnpj_cpf": "125.812.717-28"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/customers
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/customers/1
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

### Customer's info

`GET /api/v1/customers/:id`

#### Example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/customers/1
</pre>

<small>Response:</small>

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

### List Customers

`GET /api/v1/customers`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parameter</th>
      <th data-container="body" data-toggle="tooltip" title="Required">Req.</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>page </strong>
      </td>
      <td>
        No
      </td>
      <td>
        Number
      </td>
      <td>
        Page Number
      </td>
    </tr>

    <tr>
      <td>
        <strong>per_page </strong>
      </td>
      <td>
        No
      </td>
      <td>
        Number
      </td>
      <td>
        Quantity of records per page
      </td>
    </tr>
  </tbody>
</table>

#### Example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/customers?page=1&per_page=50
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Total: 2
Content-Type: application/json; charset=utf-8
...

[
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
]
</pre>
