---
title: Lotes
position: 2
en: "/en/reference"
breadcrumb: Lotes
layout: pt
---

## Lotes

| Recurso | Descrição
| [POST /api/v1/bank_billet_batches](#criar-lote) | Criar lote
| [GET /api/v1/bank_billet_batches/:id](#informa%C3%A7%C3%B5es-do-lote) | Informações do lote
| [GET /api/v1/bank_billet_batches](#listar-lotes) | Listar lotes
| [DELETE /api/v1/bank_billet_batches/:id](#excluir-lote) | Excluir boleto
| [PUT /api/v1/bank_billet_batches/:id/add_bank_billets](#incluir-boletos-no-lote) | Incluir boletos no lote
| [DELETE /api/v1/bank_billet_batches/:id/remove_bank_billet](#exluir-boleto-do-lote) | Excluir boleto do lote
| [POST /api/v1/bank_billet_batches/:id/zip](#exportar-lote-no-format-zip) | Exportar lote no formato .zip
| [POST /api/v1/bank_billet_batches/:id/pdf](#exportar-lote-no-format-pdf) | Exportar lote no formato .pdf

### Modelo de Dados

| **Parâmetro** | **Obrigatório** | **Tipo** | **Tamanho** | **Descrição**
| **id** | N/A | Integer | | ID do lote
| **name** | Sim | String | | Nome do lote.
| **bank_billet_ids** | Não | String | | IDs de [Boleto](/reference/v1/bank_billets/) separados por vírgula.

### Criar lote

`POST /api/v1/bank_billet_batches`

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash">
<small>Requisição:</small>
<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_batch":{}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_batches'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":[{"title":"bank_billet_batch não pode ficar em branco","status":422,"code":422}]}
</pre>
</div>
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash2">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_batch":{"name":"Lote 1"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_batches'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "created_at": "2021-09-16T12:31:06-03:00",
  "updated_at": "2021-09-16T12:31:06-03:00",
  "name": "Lote 1",
  "bank_billet_ids": []
}
</pre>
</div>
</div>

### Informações do lote

`GET /api/v1/bank_billet_batches/:id`

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash3">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1'
</pre>

<small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "created_at": "2021-09-16T12:31:06-03:00",
  "updated_at": "2021-09-16T12:31:06-03:00",
  "name": "Lote 1",
  "bank_billet_ids": [1, 2, 3]
}

</pre>
</div>
</div>

### Listar lotes

`GET /api/v1/bank_billet_batches`

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
Quantidade de registros por página (Máximo de 50)
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
-X GET "https://api-sandbox.kobana.com.br/v1/bank_billet_batches?page=1&per_page=50"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: [https://api-sandbox.kobana.com.br/v1/bank_billet_batches?page=3&per_page=50](https://api-sandbox.kobana.com.br/v1/bank_billet_batches?page=3&per_page=50); rel="last", [https://api-sandbox.kobana.com.br/v1/bank_billet_batches?page=2&per_page=50](https://api-sandbox.kobana.com.br/v1/bank_billet_batches?page=2&per_page=50); rel="next"
Total: 101
Content-Type: application/json; charset=utf-8
...

\[
{
  "id": 1,
  "created_at": "2021-09-16T12:31:06-03:00",
  "updated_at": "2021-09-16T12:31:06-03:00",
  "name": "Lote 1",
  "bank_billet_ids": [1, 2, 3]
}
\]
</pre>
</div>
</div>

### Excluir lote

`DELETE /api/v1/bank_billet_batches/:id`

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash6" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash6">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X DELETE https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 204 No Content
Content-Type: application/json; charset=utf-8
...

</pre>
</div>
</div>

### Incluir boletos no lote

`POST /api/v1/bank_billet_batches/:id/add_bank_billets`

### Modelo de Dados

| Parâmetro          | Obrigatório | Tipo    | Tamanho | Descrição                                                     |
| ------------------ | ----------- | ------- | ------- | ------------------------------------------------------------- |
| **id**             | Sim         | Integer |         | ID do lote                                                  |
| **bank_billet_ids**| Sim         | String  |         | IDs de [Boleto](/reference/v1/bank_billets/) separados por vírgula.                                             |

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash5">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_batch":{"bank_billet_ids": "0"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1/add_bank_billet
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet_batch_associations":["não é válido"]}}
</pre>
</div>
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash5" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash5">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_batch":{"bank_billet_ids": "1"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X PUT https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1/add_bank_billet
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 204 No Content
Content-Type: application/json; charset=utf-8
...

</pre>
</div>
</div>

### Excluir boleto do lote

`DELETE /api/v1/bank_billet_batches/cancel_all`

### Modelo de Dados

| Parâmetro          | Obrigatório | Tipo    | Tamanho | Descrição                                                     |
| ------------------ | ----------- | ------- | ------- | ------------------------------------------------------------- |
| **id**             | Sim         | Integer |         | ID do lote                                                    |
| **bank_billet_id** | Sim          | Integer |        | IDs de [Boleto](/reference/v1/bank_billets/).                 |

#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash">
<small>Requisição:</small>
<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_id":""}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_batch/1/remove_bank_billet'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 404 Not Found
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 404 Not Found
Content-Type: application/json; charset=utf-8
...

{"errors":[{"title":"Não foi possível encontrar o registro","status":404,"code":404,"detail":"Este registro não existe, ou foi deletado."}]}
</pre>
</div>
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash3" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash3">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-d '{"bank_billet_id":"1"}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_batch/1/remove_bank_billet'
</pre>

<small>Resposta:</small>

<pre class="http">
HTTP/1.1 204 No Content
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 204 No Content
Content-Type: application/json; charset=utf-8
...

</pre>
</div>
</div>

### Exportar lote no formato .zip

`POST /api/v1/bank_billet_batches/:id/zip`

Após a requisição a exportação entra numa fila para gerar o arquivo do lote.
A URL do arquivo do lote será retornada pelo endpoint de [Exportação do Lote](/reference/v1/bank_billet_batch_exports).

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash2">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1/zip'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://api-sandbox.kobana.com.br/v1/bank_billet_batch_exports/1
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "account_id": 1,
  "bank_billet_batch_id": 1,
  "status": "enqueued",
  "file_format": "zip",
  "processed_at": null,
  "output_url": null,
  "created_at": "2021-09-16T15:06:13-03:00",
  "updated_at": "2021-09-16T15:06:13-03:00"
}
</pre>
</div>
</div>

### Exportar lote no formato .pdf

`POST /api/v1/bank_billet_batches/:id/pdf`

Após a requisição a exportação entra numa fila para gerar o arquivo do lote.
A URL do arquivo do lote será retornada pelo endpoint de [Exportação do Lote](/reference/v1/bank_billet_batch_exports).

<ul class="nav nav-tabs" role="tablist">
<li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="bash2">
<small>Requisição:</small>

<pre class="bash">
curl -i \
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_batches/1/pdf'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://api-sandbox.kobana.com.br/v1/bank_billet_batch_exports/1
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "account_id": 1,
  "bank_billet_batch_id": 1,
  "status": "enqueued",
  "file_format": "pdf",
  "processed_at": null,
  "output_url": null,
  "created_at": "2021-09-16T15:06:13-03:00",
  "updated_at": "2021-09-16T15:06:13-03:00"
}
</pre>
</div>
</div>