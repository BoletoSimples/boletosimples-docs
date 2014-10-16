---
layout: reference
title: Listar Clientes - API do Boleto Simples
en: /en/references
---

## Clientes

### Listar clientes
<code>GET /api/v1/customers</code>

**Parâmetros**

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

### Exemplo

<small>requisição:</small>

<pre class="bash">"customers#index": [
  {
    "verb": "GET",
    "path": "/api/v1/customers",
    "versions": [
      "v1"
    ],
</pre>

<small>resposta:</small>

<pre class="json"> "response_data": [
  {
    "id": 11,
    "city_name": "Rio de Janeiro",
    "person_name": "Ana Júlia",
    "address": "Av. Burkhard Hehn Simões",
    "address_complement": "709",
    "address_number": "120",
    "mobile_number": null,
    "cnpj_cpf": "517.317.498-64",
    "email": "lorraine@martinscarvalho.net",
    "neighborhood": "São Francisco",
    "person_type": "individual",
    "phone_number": "2199999999",
    "zipcode": "24360-440",
    "mobile_local_code": null,
    "state": "RJ"
  },
</pre>
