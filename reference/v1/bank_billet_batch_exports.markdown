---
title: Exportação do Lote
position: 2
en: "/en/reference"
breadcrumb: Exportação do Lote
layout: pt
---

## Exportação do Lote

| Recurso | Descrição
| [GET /api/v1/bank_billet_batch_exports/:id](#arquivo-de-exportacao) | Arquivo de exportação

### 

`GET /api/v1/bank_billet_batch_exports/:id`


Caso o arquivo ainda não tenha sido processado a resposta será 404.
Caso o arquivo já esteja pronto para download a resposta será um redirect para o download do arquivo.

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
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET 'https://api-sandbox.kobana.com.br/v1/bank_billet_batch_exports/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 404 Not Found
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 404 Not Found
Content-Type: application/json; charset=utf-8
...
</pre>
</div>
</div>