---
layout: reference
title: Listar Transações - API do Boleto Simples
en: /en/references
---

## Transações

### Listar transações
<code>GET /api/v1/transactions</code>


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

<small>requisição</small>

<pre class="bash">"transactions#index": [
  {
    "verb": "GET",
    "path": "/api/v1/transactions",
    "versions": [
      "v1"
    ],
</pre>

<small>resposta</small>

<pre class="json">"response_data": [
  {
    "id": 8,
    "amount": -5.0,
    "created_at": "2014-05-22",
    "description": "Boleto Bancário 12345",
    "kind": "fee",
    "processed_at": null,
    "sent_at": null,
    "status": "unprocessed",
    "credit_at": "2014-05-27"
  }
],
</pre>
