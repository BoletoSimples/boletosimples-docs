---
layout: reference
title: Listar Boletos - API do Boleto Simples
en: /en/reference
---

## Boletos

### Listar boletos

<code>GET /api/v1/bank_billets</code>

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


### Exemplo

<small>requisição:</small>

<pre class="bash">"bank_billets#index": [
  {
    "verb": "GET",
    "path": "/api/v1/bank_billets",
    "versions": [
      "v1"
    ],
</pre>

<small>resposta:</small>

<pre class="json">"response_data": [
  {
    "id": 14,
    "expire_at": "2014-10-17",
    "paid_at": null,
    "description": "Serviço de criação de site",
    "status": "generating",
    "shorten_url": null,
    "customer_person_type": "individual",
    "customer_person_name": "José da Silva",
    "customer_cnpj_cpf": "012.345.678-90",
    "customer_address": "Av. Burkhard Hehn Simões",
    "customer_state": "RJ",
    "customer_neighborhood": "São Francisco",
    "customer_zipcode": "12312-123",
    "customer_address_number": "111",
    "customer_address_complement": null,
    "customer_phone_number": null,
    "customer_email": "cliente@example.com",
    "notification_url": "http://example.com.br/notify",
    "send_email_on_creation": true,
    "created_via_api": false,
    "customer_city_name": "Rio de Janeiro",
    "paid_amount": 0.0,
    "amount": 50.0
  },
</pre>
