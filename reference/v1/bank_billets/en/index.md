---
layout: en
title: Billets - Boleto Simples API
pt: /reference/bank_billets/
breadcrumb: Billets
---

## Billets

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Ressource</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#billet-create">POST /api/v1/bank_billets</a></td>
      <td width='60%'>Billet create</td>
    </tr>
    <tr>
      <td><a href="#billets-info">GET /api/v1/bank_billets/:id</a></td>
      <td width='60%'>Billet's info</td>
    </tr>
    <tr>
      <td><a href="#list-billets">GET /api/v1/bank_billets</a></td>
      <td width='60%'>List billets</td>
    </tr>
  </tbody>
</table>

### Billet Create

`POST /api/v1/bank_billets`

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
        <strong> amount </strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        Float
      </td>
      <td>
        Amount (R$) - Format: 1000,50 or 1000.5
      </td>
    </tr>

    <tr>
      <td>
        <strong> expire_at </strong><br>
      </td>
      <td>
        Yes
      </td>
      <td>
        Date
      </td>
      <td>
        Due date - Format: 31/12/2013 or 2013-12-31
      </td>
    </tr>

    <tr>
      <td>
        <strong> description </strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        String
      </td>
      <td>
        Description of service or product
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_person_name </strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        String
      </td>
      <td>
        <p>Name or Company Name of payer</p>
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_cnpj_cpf </strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ or CPF from payer
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_id </strong>
      </td>
      <td>
        No
      </td>
      <td>
        Number
      </td>
      <td>
        ID from registered customers. When sent <code>customer_person_name</code> and <code>customer_cnpj_cpf</code> aren't required fields
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_email </strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Payer's mail
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address </strong>
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
        <strong> customer_city_name </strong>
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
        <strong> customer_state </strong>
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
        <strong> customer_neighborhood </strong>
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
        <strong> customer_zipcode </strong>
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
        <strong> customer_address_number </strong>
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
        <strong> customer_address_complement </strong>
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
        <strong> customer_phone_number </strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Phone Number (with LDC)
      </td>
    </tr>
    <tr>
      <td>
        <strong> notification_url </strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Notifications URL to wich notifications are sent in the changing of billet status
        <a href="/notifications">Read more</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong> meta </strong>
      </td>
      <td>
        No
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Generic Field - Allows any format sent. Can be used to save data that no exist on Boleto Simples
        <br>
        JSON example: {request: 12345}<br>
        Array example : request: 12345
      </td>
    </tr>
  </tbody>
</table>

#### Invalid request example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-d '{"bank_billet":{}}'
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletoYesples.com.br/api/v1/bank_billets
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet":["Não pode ficar em branco"]}}
</pre>

#### Valid request example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-d '{"bank_billet":{"amount":12.34, "expire_at": "2014-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletoYesples.com.br/api/v1/bank_billets
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletoYesples.com.br/api/v1/bank_billets/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"generating",
  "shorten_url":null,
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

### Billet's Info

`GET /api/v1/bank_billets/:id`

#### Example

<small>Request:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletoYesples.com.br/api/v1/bank_billets/1
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

### List billets

`GET /api/v1/bank_billets`

<table class='table table-bordered features'>
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
        <strong>page</strong>
        <br/>
      </td>
      <td>
        No
      </td>
      <td>
        Number
      </td>
      <td>
        Page number
      </td>
    </tr>
    <tr>
      <td>
        <strong>per_page</strong>
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
-X GET https://sandbox.boletoYesples.com.br/api/v1/bank_billets?page=1&per_page=50
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
]
</pre>
