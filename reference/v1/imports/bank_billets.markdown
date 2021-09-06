---
title: Importações de Boletos
position: 7
en: "/en/imports"
breadcrumb: Importações de Boletos
layout: pt
---

## Importações de Boletos

| Recurso                 | Descrição |
|------------------------ |------------------------|
| [POST /api/v1/imports/bank_billets](#importar) | Importar boletos |
| [GET /api/v1/imports/bank_billets/:id](#informações-da-importação) | Informações da importação |
| [GET /api/v1/imports/bank_billets](#listar-importações) | Listar importações |

### Modelo de Dados

| Parâmetro              | Obrigatório  | Tipo    | Tamanho | Descrição|
| ---------------------- | ----- | ------- | ------- | ------------------------|
| **id**                 | N/A   | Integer |         | ID da importação|
| **source**             | Sim   |         |         | Arquivo
| **processed_rows**     | N/A   |  Integer       |         | Número de boletos processados
| **created_rows**       | N/A   |  Integer       |         | Número de boletos criados
| **updated_rows**       | N/A   |  Integer       |         | Número de boletos alterados
| **enqueued_at**        | N/A   | Time    |         | Data/hora de enfileiramento
| **started_at**         | N/A   | Time    |         | Data/hora do início do processo de importação
| **finished_at**        | N/A   | Time    |         | Data/hora do término do processo de importação
| **import_errors**      | N/A   | Array    |         | Erros de importação, caso existam
| **source_file_name**   | N/A   | String  |         | Nome do arquivo
| **source_file_size**   | N/A   | Integer  |         | Tamanho em bytes do arquivo
| **status**             | N/A   | String  |         | Situação do arquivo ([possíveis valores](#status))
| **created_via_api**    | N/A   | Boolean |         | Enviado pela API
| **customer_ignore_email**| Não | Boolean |         | Nunca enviar e-mail para este cliente
| **customer_ignore_sms**  | Não | Boolean |         | Nunca enviar SMS para este cliente
| **ignore_email**         | Não | Boolean |         | Não enviar este boleto por email
| **ignore_sms**           | Não | Boolean |         | Não enviar este boleto por SMS

### Dicionário de Dados

#### status

| enqueued | Aguardando processamento
| aborted  | Processamento não realizado devido a erro
| done     | Processamento concluído

### Importar boleto

`POST /api/v1/imports/bank_billets`

<p>Você pode enviar arquivos no formato&nbsp;<a href="https://pt.wikipedia.org/wiki/Comma-separated_values">CSV</a>&nbsp;ou Arquivo Remessa enviado para o seu banco.</p>
<h4>Arquivo CSV</h4>
<p>A extensão do arquivo deve ser .csv</p>
<p>Exemplo: boletos.csv</p>
<p>Arquivos de Exemplo</p>
<ul>
    <li><a target="_blank" href="https://docs.google.com/spreadsheets/d/1NGip505M6gcJBg9-n4J95Ij3M5sCUPk4tGfIyQzc6kg/pub?output=csv">Baixar Exemplo em CSV</a></li>
    <li><a target="_blank" href="https://docs.google.com/spreadsheets/d/1NGip505M6gcJBg9-n4J95Ij3M5sCUPk4tGfIyQzc6kg/pub?output=xlsx">Baixar Exemplo em Excel</a></li>
    <li><a target="_blank" href="https://docs.google.com/spreadsheets/d/1NGip505M6gcJBg9-n4J95Ij3M5sCUPk4tGfIyQzc6kg/edit#gid=0">Acessar no Google Sheets</a></li>
</ul>
<h4>Arquivo Remessa</h4>
<p>A extensão do arquivo deve ser .rem</p>
<p>Exemplo: CN200401.rem</p>

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: multipart/form-data' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/imports/bank_billets'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet_import":["não pode ficar em branco"]}}
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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: multipart/form-data' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-F "bank_billet_import[source]=@boletos.csv" \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/imports/bank_billets'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://sandbox.boletosimples.com.br/api/v1/discharges/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "processed_rows":10,
  "created_rows":10,
  "updated_rows":0,
  "total_rows":10,
  "failed_to_create_rows":0,
  "failed_to_update_rows":0,
  "enqueued_at":"2018-03-19T15:23:10-03:00",
  "started_at":"2018-03-19T15:23:13-03:00",
  "finished_at":"2018-03-19T15:23:16-03:00",
  "import_errors":[],
  "source_content_type":"text/plain",
  "source_file_name":"boletos.csv",
  "source_file_size":10401,
  "created_via_api":true,
  "status":"enqueued"
}
</pre>
  </div>
</div>

### Informações da importação

`GET /api/v1/imports/bank_billets/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby3" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php3" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash3">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://sandbox.boletosimples.com.br/api/v1/imports/bank_billets/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "processed_rows":10,
  "created_rows":10,
  "updated_rows":0,
  "total_rows":10,
  "failed_to_create_rows":0,
  "failed_to_update_rows":0,
  "enqueued_at":"2018-03-19T15:23:10-03:00",
  "started_at":"2018-03-19T15:23:13-03:00",
  "finished_at":"2018-03-19T15:23:16-03:00",
  "import_errors":[],
  "source_content_type":"text/plain",
  "source_file_name":"boletos.csv",
  "source_file_size":10401,
  "created_via_api":true,
  "status":"done"
}
</pre>
  </div>
</div>

### Listar importações

`GET /api/v1/imports/bank_billets`

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
        Quantidade de registros por página (Máximo de 50)
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
  <!-- <li><a href="#ruby6" role="tab" data-toggle="tab">Ruby</a></li> -->
  <!-- <li><a href="#php6" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash6">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/imports/bank_billets?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "processed_rows":10,
    "created_rows":10,
    "updated_rows":0,
    "total_rows":10,
    "failed_to_create_rows":0,
    "failed_to_update_rows":0,
    "enqueued_at":"2018-03-19T15:23:10-03:00",
    "started_at":"2018-03-19T15:23:13-03:00",
    "finished_at":"2018-03-19T15:23:16-03:00",
    "import_errors":[],
    "source_content_type":"text/plain",
    "source_file_name":"boletos.csv",
    "source_file_size":10401,
    "created_via_api":true,
    "status":"done"
  }
]
</pre>
  </div>
</div>
