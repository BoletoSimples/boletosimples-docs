---
title: Pagamento de Boleto
position: 8
layout: pt
en: "/en/references"
breadcrumb: Pagamento de Boleto
---

## Pagamento de Boleto

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [POST /api/v1/bank_billet_payments](#efetuar-pagamento-de-boleto) | Efetuar Pagamento de Boleto   |
| [GET /api/v1/bank_billet_payments](#listar-pagamentos-de-boleto)                     | Listar Pagamentos de Boleto                     |
| [GET /api/v1/bank_billet_payments/:id](#informações-do-pagamento-de-boleto) | Informações do Pagamento de Boleto                      |
| [DELETE /api/v1/bank_billet_payments/:id](#excluir-pagamento-de-boleto) | Excluir Pagamento de Boleto                |

### Modelo de Dados

| Parâmetro                  | Obrigatório | Tipo    | Tamanho | Descrição               |
| -------------------------- | ---- | ------- | ------- | ------------------------------ |
| **id**                     | N/A  | Integer |         | ID do Pagamento de Boleto      |
| **bank_billet_id**         | Sim  | Integer |         | ID do Boleto                   |
| **bank_billet_account_id** | Sim  | Integer |         | ID da Carteira                 |
| **discharge_id**           | Sim  | Integer |         | ID do Retorno                  |
| **amount**                 | Não  | Float   |         | Valor do Boleto                |
| **paid_at**                | Sim  | Date    |         | Data do pagamento              |
| **paid_amount**            | Sim  | Float   |         | Valor pago                     |
| **paid_bank**              | Não  | String  |    3    | Banco de Pagamento             |
| **paid_agency**            | Não  | String  |    5    | Agência de Pagamento           |
| **bank_rate**              | Não  | Float   |         | Taxa bancária                  |
| **credit_at**              | Não  | Date    |         | Data de crédito                |
| **direct**                 | Não  | Boolean |         | Pagamento direto ao beneficíario                |
| **expire_at**              | Não  | Date    |         | Data de vencimento                |
| **our_number**             | Não  | Date    |         | Nosso número                |
| **created_via_api**        | N/A  | Boolean |         | Enviado pela API    |
| **created_at**             | Não  | DateTime    |         | Criado em                |
| [**line_parsed**](/reference/v1/bank_billet_discharges/#line_parsed)            | N/A  | Hash/Array  |        | Linha parseada com informações vindas do banco     |
| **customer_person_name**              | Não  | String  |    3    | Nome do cliente             |
| **paid_by_pix**        | N/A  | Boolean |         | Pagamento via PIX    |

### Efetuar Pagamento de Boleto

`POST /api/v1/bank_billet_payments`

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
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_payments'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet_payment":["não pode ficar em branco"]}}
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
-d '{"bank_billet_payment":{"paid_amount":40.01,"bank_rate":4,02,"paid_at":"2017-03-13","paid_bank":"001","paid_agency":"00001","bank_billet_id":1}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://api-sandbox.kobana.com.br/v1/bank_billet_payments'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://api-sandbox.kobana.com.br/v1/bank_billet_payments/1
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "paid_at": "2018-09-05",
  "paid_amount": 6.0,
  "bank_rate": 1.5,
  "paid_bank": "001",
  "paid_agency": "00001",
  "bank_billet_id": 1,
  "bank_billet_account_id": 2,
  "created_at":"2018-09-05"
}
</pre>
  </div>
</div>



### Listar Pagamentos de Boleto

`GET /api/v1/bank_billet_payments`

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
  -X GET 'https://api-sandbox.kobana.com.br/v1/bank_billet_payments?page=1&per_page=50'
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
    "paid_at": "2018-09-05",
    "paid_amount": 6.0,
    "bank_rate": 1.5,
    "paid_bank": "001",
    "paid_agency": "00001",
    "bank_billet_id": 1,
    "bank_billet_account_id": 2,
    "created_at":"2018-09-05"
  }
]
</pre>

  </div>
</div>


### Informações do Pagamento de Boleto

`GET /api/v1/bank_billet_payments/:id`

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
-X GET 'https://api-sandbox.kobana.com.br/v1/bank_billet_payments/1'
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
  "paid_at": "2018-09-05",
  "paid_amount": 6.0,
  "bank_rate": 1.5,
  "paid_bank": "001",
  "paid_agency": "00001",
  "bank_billet_id": 1,
  "bank_billet_account_id": 2,
  "created_at": "2018-09-05"
}
</pre>
  </div>
</div>



### Excluir Pagamento de Boleto

`DELETE /api/v1/bank_billet_payments/:id`

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
-H "Authorization: Bearer $BOLETOSIMPLES_TOKEN" \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X DELETE 'https://api-sandbox.kobana.com.br/v1/bank_billet_payments/1'
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
