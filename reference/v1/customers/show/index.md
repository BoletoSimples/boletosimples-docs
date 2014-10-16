---
layout: reference
title: Informações do Cliente - API do Boleto Simples
en: /en/references
---

## Clientes

### Informações do Cliente
<code>GET /api/v1/customers/:id</code>

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
        <strong>id </strong><br>
      </td>
      <td>
        Sim
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Cliente
      </td>
    </tr>
  </tbody>
</table>

### Exemplo

<small>requisição</small>

<pre class="bash">"customers#show": [
  {
    "verb": "GET",
    "path": "/api/v1/customers/13",
    "versions": [
      "v1"
    ],
</pre>

<small>resposta</small>

<pre class="json">"response_data": {
  "id": 13,
  "city_name": "Rio de Janeiro",
  "person_name": "Margret Santos Filgueiras",
  "address": "Av. Burkhard Hehn Simões",
  "address_complement": "709",
  "address_number": "120",
  "mobile_number": null,
  "cnpj_cpf": "889.403.083-01",
  "email": "roberta@batistaalbuquerque.org",
  "neighborhood": "São Francisco",
  "person_type": "individual",
  "phone_number": "2199999999",
  "zipcode": "24360-440",
  "mobile_local_code": null,
  "state": "RJ"
},
</pre>
