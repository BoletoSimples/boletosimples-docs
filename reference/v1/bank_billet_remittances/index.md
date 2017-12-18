---
layout: pt
title: Registro de Remessa - API do Boleto Simples
en: /en/references
breadcrumb: Registro de Remessa
---

## Registro de Remessa

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [GET /api/v1/bank_billet_remittances](#listar-registros-de-remessa)                     | Listar Registros de Remessa                     |
| [GET /api/v1/bank_billet_remittances/pending](#listar-registros-de-remessa-pendentes)   | Listar Registros de Remessa pendentes           |
| [POST /api/v1/bank_billet_remittances/:id/occurrence/:code](#criar-registro-de-remessa) | Adicionar Boleto na lista de envio para o banco |

### Modelo de Dados

| Parâmetro                  | Obr. | Tipo    | Tamanho | Descrição                      |
| -------------------------- | ---- | ------- | ------- | ------------------------------ |
| **id**                     | N/A  | Integer |         | ID da carteira                 |
| **our_code**               | Sim  | String  | 6       | Código                         |
| **occurrence**             | Não  | String  | 3       | Ocorrência                     |
| **remittance_id**          | Sim  | Integer |         | ID da Remessa                  |
| **bank_billet_id**         | Sim  | Integer |         | ID do Boleto                   |
| **bank_billet_account_id** | Sim  | Integer |         | ID da Carteira                 |
| **processed_at**           | Não  | Date    |         | Quando foi processado          |
| **occurrence_detail**      | Não  | String  |         | Descrição do evento na Remessa |

### Listar Registros de Remessa

`GET /api/v1/bank_billet_remittances`

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
        Quantidade de registros por página (Maximo de 250)
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
  curl -i \
  -u $BOLETOSIMPLES_TOKEN:x \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (myapp@example.com)' \
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances?page=1&per_page=50'
</pre>

    <small>Resposta:</small>

<pre class="http">
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":47,
    "our_code": "1001",
    "occurrence": "01",
    "remittance_id":null,
    "bank_billet_id":46,
    "bank_billet_account_id":2,
    "processed_at":null,
    "occurrence_detail": "Entrada de Título",
    "created_at": "2017-11-21",
    "bank_billet":{
      "id":46,
      "expire_at": "2017-12-26",
      "paid_at":null,
      "description": "teste",
      "status": "opened",
      ...
    }
  }
]
</pre>

  </div>
</div>


### Listar Registros de Remessa pendentes

`GET /api/v1/bank_billet_remittances/pending`

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
  </tbody>
</table>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
  curl -i \
  -u $BOLETOSIMPLES_TOKEN:x \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (myapp@example.com)' \
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances/pending?page=1'
</pre>

    <small>Resposta:</small>

<pre class="http">
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":40,
    "our_code": "1001",
    "occurrence": "01",
    "remittance_id":null,
    "bank_billet_id":46,
    "bank_billet_account_id":2,
    "processed_at":null,
    "occurrence_detail": "Entrada de Título",
    "created_at": "2017-11-21",
    "bank_billet":{
      "id":46,
      "expire_at": "2017-12-26",
      "paid_at":null,
      "description": "teste",
      "status": "opened",
      ...
    }
  }
]
</pre>

  </div>
</div>
