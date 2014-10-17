---
layout: pt
title: Listar Boletos - API do Boleto Simples
en: /en/reference
breadcrumb: true
---

## Boletos

### Listar boletos

`GET /api/v1/bank_billets`

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obr.</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      <strong>page</strong>
      <br/>
    </td>
    <td>
      Não
    </td>
    <td>
      Number
    </td>
    <td>
      Número da Página
    </td>
  </tr>
  <tr>
    <td>
      <strong>per_page</strong>
    </td>
    <td>
      Não
    </td>
    <td>
      Number
    </td>
    <td>
      Quantidade de registros por página
    </td>
  </tr>
  </tbody>
</table>

#### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=1&per_page=50
</pre>

<small>Resposta:</small>

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
