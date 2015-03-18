---
layout: pt
title: Transações - API do Boleto Simples
en: /en/references
breadcrumb: Transações
---

## Transações

| Recurso                  | Descrição
| ------------------------ | ------------------------
| [GET /api/v1/transactions](#listar-transaes) | Listar transações

### Modelo de Dados

| Parâmetro        | Obr.  | Tipo     | Tamanho | Descrição
| ---------------- | ----- | -------- | ------- | ------------------------
| **id**           | N/A   | Integer  |         | ID da transação
| **amount**       | N/A   | Float    |         | Quantia (R$)
| **description**  | N/A   | Text     |         | Descrição na transação.
| **kind**         | N/A   | String   | 255     | Tipo da transação.
| **status**       | N/A   | String   | 20      | Status da transação.
| **processed_at** | N/A   | Date     |         | Data do processamento.
| **sent_at**      | N/A   | Date     |         | Data da transferência para os casos de saque (`kind: withdrawal`).
| **credit_at**    | N/A   | Date     |         | Data de quando a transação entra para o saldo.

### Dicionário de Dados

#### kind

| fee            | Taxa
| credit         | Crédito
| withdrawal     | Saque
| withdrawal_fee | Taxa Saque
| chargeback     | Estorno
| chargeback_fee | Taxa Estorno
| addon_fee      | Addon

#### status

| unprocessed   | Aguardando  |
| processed     | Processado  |
| transferred   | Transferido | Somente para os casos de saque (`kind: withdrawal`)

### Listar transações

`GET /api/v1/transactions`

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

#### Exemplo

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash4" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby4" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php4" role="tab" data-toggle="tab">PHP</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash4">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET "https://sandbox.boletosimples.com.br/api/v1/transactions?page=1&per_page=2"
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Link: <https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2>; rel="last", <https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2>; rel="next"
Total: 4
Content-Type: application/json; charset=utf-8
...

[
  {
    "id": 59,
    "amount": 9.01,
    "created_at": "2015-02-10",
    "description": "Boleto Banc\u00e1rio 688",
    "kind": "credit",
    "processed_at": "2015-02-19",
    "sent_at": null,
    "status": "processed",
    "credit_at": "2015-02-19"
  },
  {
    "id": 60,
    "amount": -5,
    "created_at": "2015-02-10",
    "description": "Boleto Banc\u00e1rio 688",
    "kind": "fee",
    "processed_at": "2015-02-19",
    "sent_at": null,
    "status": "processed",
    "credit_at": "2015-02-19"
  }
]
</pre>
  </div>
  <div class="tab-pane" id="ruby4">
    <small>Requisição:</small>

<pre class="ruby">
@transactions = BoletoSimples::Transaction.all(page: 1, per_page: 2)
puts "Transações Retornadas: #{@transactions.count}"
puts "Total: #{BoletoSimples.last_request.total}"
puts "Primeira Página: #{BoletoSimples.last_request.links[:first]}"
puts "Página Anterior: #{BoletoSimples.last_request.links[:prev]}"
puts "Próxima Página: #{BoletoSimples.last_request.links[:next]}"
puts "Última Página: #{BoletoSimples.last_request.links[:last]}"
</pre>

    <small>Resposta:</small>

<pre class="http">
Transações Retornadas: 2
Total: 4
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
</pre>
  </div>
  <div class="tab-pane" id="php4">
    <small>Requisição:</small>

<pre class="php">
$transactions = BoletoSimples\Transaction::all(['page' => 1, 'per_page' => 2]);
echo "Transações Retornadas: " . sizeof($transactions) . "\n";
echo "Total: " . BoletoSimples::$last_request->total . "\n";
echo "Primeira Página: " . BoletoSimples::$last_request->links['first'] . "\n";
echo "Página Anterior: " . BoletoSimples::$last_request->links['prev'] . "\n";
echo "Próxima Página: " . BoletoSimples::$last_request->links['next'] . "\n";
echo "Última Página: " . BoletoSimples::$last_request->links['last'] . "\n";
</pre>

    <small>Resposta:</small>

<pre class="http">
Transações Retornadas: 2
Total: 4
Primeira Página:
Página Anterior:
Próxima Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
Última Página: https://sandbox.boletosimples.com.br/api/v1/transactions?page=2&per_page=2
</pre>
  </div>
</div>