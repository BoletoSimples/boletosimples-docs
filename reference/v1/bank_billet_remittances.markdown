---
title: Registro de Remessa
position: 8
layout: pt
en: "/en/references"
breadcrumb: Registro de Remessa
---

## Registro de Remessa

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [GET /api/v1/bank_billet_remittances](#listar-registros-de-remessa)                     | Listar Registros de Remessa                     |
| [GET /api/v1/bank_billet_remittances/pending](#listar-registros-de-remessa-pendentes)   | Listar Registros de Remessa pendentes           |
| [POST /api/v1/bank_billet_remittances/:id/occurrence/:code](#criar-pendências) | Criar pendências |
| [DELETE /api/v1/bank_billet_remittances/:id](#excluir-pendências) | Excluir pendências                |


### Modelo de Dados

| Parâmetro                  | Obrigatório | Tipo    | Tamanho | Descrição                      |
| -------------------------- | ---- | ------- | ------- | ------------------------------ |
| **id**                     | N/A  | Integer |         | ID do Registro de Remessa               |
| **our_code**               | Sim  | String  | 6       | Código de operação de registro. Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.          |
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
        <strong>our_code </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Código de operação de registro. Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
      </td>
    </tr>
    <tr>
      <td>
        <strong>code </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        <div class="alert alert-danger"><strong>ATENÇÃO</strong> Este atributo está descontinuado e será removido do sistema em breve. Utilize <code class="highlighter-rouge">our_code</code>.</div>
      </td>
    </tr>
    <tr>
      <td>
        <strong>bank_billet_account_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID da Carteira
      </td>
    </tr>
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
        A partir de Data de vencimento
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
        Até Data de vencimento
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
        <strong>our_code </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Código de operação de registro. Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
      </td>
    </tr>
    <tr>
      <td>
        <strong>bank_billet_account_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID da Carteira
      </td>
    </tr>
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
        A partir de Data de vencimento
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
        Até Data de vencimento
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


### Criar pendências

`POST /api/v1/bank_billet_remittances/:id/occurrence/:our_code`

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
        <strong>id </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        Number
      </td>
      <td>
        ID do boleto
      </td>
    </tr>
    <tr>
      <td>
        <strong>our_code </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Código de operação de registro. Consulte os possíveis valores <a href="/bank_contracts">para cada banco</a>.
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances/2/occurrence/9989x'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors": "Operação não disponível para este banco."}
</pre>
  </div>

</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances/2/occurrence/1034'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{ message: "Boleto 2 - Operação( Pago diretamente ao beneficiário ) colocado(a) na lista de envio para o banco." }
</pre>
  </div>

</div>

### Excluir pendências

`DELETE /api/v1/bank_billet_remittances/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X DELETE 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 204 No Content
...

</pre>
  </div>
</div>
