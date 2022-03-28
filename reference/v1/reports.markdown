---
title: Relatórios
position: 2
en: "/en/reference"
breadcrumb: Relatórios
layout: pt
---

## Relatórios

| Recurso | Descrição
| [GET /api/v1/reports/bank_billet](#contagem-de-boletos) | Contagem de boletos

### Modelo de Dados

| **Parâmetro** | **Tipo** | **Tamanho** | **Descrição**
| **bank_billet_account_id** | Integer | | ID da [Carteira de Cobrança](/reference/v1/bank_billet_accounts/). Se não informado, usará a carteira padrão.
| **bank_billet_count** | Integer | | Quantidade de boletos.

### Contagem de boletos

`GET /api/v1/reports/bank_billets`

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obrigatório</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>expire_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>expire_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de vencimento
      </td>
    </tr>
    <tr>
      <td>
        <strong>paid_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de pagamento
      </td>
    </tr>
    <tr>
      <td>
        <strong>paid_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de pagamento
      </td>
    </tr>
    <tr>
      <td>
        <strong>registered_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de Registro
      </td>
    </tr>
    <tr>
      <td>
        <strong>registered_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de Registro
      </td>
    </tr>
    <tr>
      <td>
        <strong>created_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de criação
      </td>
    </tr>
    <tr>
      <td>
        <strong>created_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de criação
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://api-sandbox.kobana.com.br/v1/reports/bank_billets?created_from=2019-10-01"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Wed, 02 Oct 2019 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

[
  {
    "bank_billet_account_id":1254,
    "bank_billet_count":543
  },
  {
    "bank_billet_account_id":1281,
    "bank_billet_count":1218
  }
]
</pre>
  </div>
</div>
