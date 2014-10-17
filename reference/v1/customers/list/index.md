---
layout: pt
title: Listar Clientes - API do Boleto Simples
en: /en/references
breadcrumb: true
---

## Clientes

### Listar clientes

`GET /api/v1/customers`

<table class='table table-bordered'>
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
        <strong>page </strong>
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
        <strong>per_page </strong>
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
-X GET https://sandbox.boletosimples.com.br/api/v1/customers?page=1&per_page=50
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
