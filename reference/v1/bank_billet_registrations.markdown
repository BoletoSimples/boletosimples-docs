---
title: Registro de Boleto
position: 8
layout: pt
en: "/en/references"
breadcrumb: Registro de Boleto
---

## Registro de Boleto

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [GET /api/v1/bank_billet_registrations](#listar-registros-de-boleto)                    | Listar Registros de Boleto                      |
| [GET /api/v1/bank_billet_registrations/:id](#informações-do-registro-de-boleto)         | Informações do Registro de Boleto               |

### Modelo de Dados

| Parâmetro                  | Obrigatório | Tipo | Tamanho | Descrição
| -------------------------- | ---- | ------- | ------- | ------------------------------
| **id**                     | N/A  | Integer |         | ID do Registro de Boleto
| **bank_billet_id**         | N/A  | Integer |         | ID do Boleto
| **bank_billet_account_id** | N/A  | Integer |         | ID da Carteira
| **status**                 | N/A  | String  |         | Situação do registro ([possíveis valores](#status))
| **registered_at**          | N/A  | DateTime    |         | Data e hora do registro
| **error_message**          | N/A  | String  |         | Mensagem de erro do registro
| **failed_at**              | N/A  | DateTime    |         | Data e hora da falha
| **fails_count**            | N/A  | Integer |         | Quantidade de falhas em tentativas de registrar o boleto


## Dicionário de Dados

#### status

| 0 | Erro
| 1 | Sucesso
| 2 | Serviço indisponível



### Listar Registros de Boleto

`GET /api/v1/bank_billet_registrations`

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
        ID do Boleto.
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
        ID da Carteira.
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
        A partir da Data de registro
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
        Até a Data de registro
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
  -H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (myapp@example.com)' \
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_registrations?page=1&per_page=50'
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
    "bank_billet_id": 1,
    "bank_billet_account_id": 2,
    "created_at":"2018-09-05",
    "error_message":nil,
    "failed_at":nil,
    "fails_count":0,
    "registered_at":"2018-09-10",
    "status":"01"
  }
]
</pre>

  </div>
</div>


### Informações do Registro de Boleto

`GET /api/v1/bank_billet_registrations/:id`

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
-X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_registrations/1'
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
  "bank_billet_id": 1,
  "bank_billet_account_id": 2,
  "created_at":"2018-09-05",
  "error_message":nil,
  "failed_at":nil,
  "fails_count":0,
  "registered_at":"2018-09-10",
  "status":"01"
}
</pre>
  </div>
</div>
