---
title: Registro de Retorno
position: 8
layout: pt
en: "/en/references"
breadcrumb: Registro de Retorno
---

## Registro de Retorno

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [GET /api/v1/bank_billet_discharges](#listar-registros-de-retorno)                     | Listar Registros de Retorno                     |
| [GET /api/v1/bank_billet_discharges/:id](#informações-do-registro-de-retorno)   | Informações do Registro de Retorno              |

### Modelo de Dados

| Parâmetro           | Obrigatório | Tipo    | Tamanho | Descrição                      |
| -------------------------- | ---- | ------- | ------- | ------------------------------ |
| **id**                     | N/A  | Integer |         | ID da carteira                 |
| **our_occurrence**         | Não  | String  | 4       | Código de operação de retorno  |
| **discharge_id**           | Não  | Integer |         | ID do Retorno                  |
| **bank_billet_id**         | Não  | Integer |         | ID do Boleto                   |
| **bank_billet_account_id** | N/A  | Integer |         | ID da Carteira                 |
| **processed_at**           | N/A  | Date    |         | Quando foi processado          |
| **date_of_occurrence**     | N/A  | Date    |         | Data da ocorrência             |
| **occurrence**             | N/A  | String  | 2       | Código da operação (banco)     |
| **occurrence_detail**      | N/A  | String  |         | Descrição do evento no Retorno |
| **occurrence_error**       | N/A  | String  |         | Erro no retorno                |
| **occurrence_error_detail**| N/A  | String  |         | Descrição do erro no retorno   |


### Listar Registros de Retorno

`GET /api/v1/bank_billet_discharges`

<table class='table table-bordered'>
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
    <tr>
      <td>
        <strong>our_occurrence </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Código de operação de retorno
      </td>
    </tr>
    <tr>
      <td>
        <strong>bank_billet_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Boleto
      </td>
    </tr>
    <tr>
      <td>
        <strong>discharge_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Retorno
      </td>
    </tr>
    <tr>
      <td>
        <strong>processed_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de processamento
      </td>
    </tr>
    <tr>
      <td>
        <strong>processed_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de processamento
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
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_discharges?page=1&per_page=50'
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
    "id": 1,
    "bank_billet_id": 2,
    "discharge_id": 1,
    "processed_at": "2018-09-10",
    "date_of_occurrence": "2018-09-10",
    "occurrence": "02",
    "our_occurrence": "2001",
    "occurrence_detail": 'Confirmação Entrada Título',
    "occurrence_error": nil,
    "occurrence_error_detail": nil,
    "bank_billet":{
      "id":46,
      "expire_at": "2018-09-12",
      "paid_at":null,
      "description": "teste",
      ...
    }
  }
]
</pre>

  </div>
</div>


### Informações do Registro de Retorno

`GET /api/v1/bank_billet_discharges/:id`

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
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_discharges/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "bank_billet_id": 2,
  "discharge_id": 1,
  "processed_at": "2018-09-10",
  "date_of_occurrence": "2018-09-10",
  "occurrence": "02",
  "our_occurrence": "2001",
  "occurrence_detail": 'Confirmação Entrada Título',
  "occurrence_error": nil,
  "occurrence_error_detail": nil,
  "bank_billet":{
    "id":46,
    "expire_at": "2018-09-12",
    "paid_at":null,
    "description": "teste",
    ...
  }
}
</pre>

  </div>
</div>
