---
layout: pt
title: Boletos - API do Boleto Simples
en: /reference/v1/bank_billets/en/
breadcrumb: Boletos
---

## Boletos

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#criar-boleto">POST /api/v1/bank_billets</a></td>
      <td width='60%'>Criar boleto</td>
    </tr>
    <tr>
      <td><a href="#informaes-do-boleto">GET /api/v1/bank_billets/:id</a></td>
      <td width='60%'>Informações do boleto</td>
    </tr>
    <tr>
      <td><a href="#listar-boletos">GET /api/v1/bank_billets</a></td>
      <td width='60%'>Listar boletos</td>
    </tr>
  </tbody>
</table>

### Criar boleto

`POST /api/v1/bank_billets`

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
        <strong> amount </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        Float
      </td>
      <td>
        Quantia (R$) - Formato: 1000,50 ou 1000.5
      </td>
    </tr>

    <tr>
      <td>
        <strong> expire_at </strong><br>
      </td>
      <td>
        Sim
      </td>
      <td>
        Date
      </td>
      <td>
        Data de vencimento - Formato: 31/12/2013 ou 2013-12-31
      </td>
    </tr>

    <tr>
      <td>
        <strong> description </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        Descrição do produto ou serviço
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_person_name </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        <p>Nome ou Razão Social do Pagador</p>
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_cnpj_cpf </strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ ou CPF do Pagador
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Cliente Cadastrado. Quando passado os campos <code>customer_person_name</code> e <code>customer_cnpj_cpf</code> não são obrigatórios.
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_email </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        E-mail do Pagador
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Endereço
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_city_name </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Cidade
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_state </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Estado
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_neighborhood </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Bairro
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_zipcode </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        CEP
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address_number </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Número
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address_complement </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Complemento
      </td>
    </tr>
    <tr>
      <td>
        <strong> customer_phone_number </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Telefone (com DDD)
      </td>
    </tr>
    <tr>
      <td>
        <strong> notification_url </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        URL de notificação para onde serão enviadas notificações nas mudanças de status do boleto.
        <a href="/notifications">Leia mais</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong> meta </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        &nbsp;
      </td>
      <td>
        Campo Genérico -  Aceita qualquer formato passado. Pode ser usado para salvar dados que não existam dentro do Boleto Simples.
        <br>
        Exemplo JSON: {pedido: 12345}<br>
        Exemplo Array: pedido: 12345
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de requisição inválida

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-d '{"bank_billet":{}}'
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/bank_billets
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 17 Oct 2014 18:39:47 GMT
Status: 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
...

{"errors":{"bank_billet":["não pode ficar em branco"]}}
</pre>

#### Exemplo de requisição válida

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-d '{"bank_billet":{"amount":12.34, "expire_at": "2014-11-15", "description": "Prestação de Serviço", "customer_person_name": "Nome do Cliente", "customer_cnpj_cpf": "125.812.717-28"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST https://sandbox.boletosimples.com.br/api/v1/bank_billets
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"generating",
  "shorten_url":null,
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":null,
  "customer_state":null,
  "customer_neighborhood":null,
  "customer_zipcode":null,
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "notification_url":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":null,
  "paid_amount":0.0,
  "amount":12.34
}
</pre>

### Informações do boleto

`GET /api/v1/bank_billets/:id`

#### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/bank_billets/1
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Content-Type: application/json; charset=utf-8
...

{
  "id":1,
  "expire_at":"2014-11-15",
  "paid_at":null,
  "description":"Prestação de Serviço",
  "status":"opened",
  "shorten_url":"http://bole.to/xxxxxxxx",
  "customer_person_type":"individual",
  "customer_person_name":"Nome do Cliente",
  "customer_cnpj_cpf":"125.812.717-28",
  "customer_address":null,
  "customer_state":null,
  "customer_neighborhood":null,
  "customer_zipcode":null,
  "customer_address_number":null,
  "customer_address_complement":null,
  "customer_phone_number":null,
  "customer_email":null,
  "notification_url":null,
  "send_email_on_creation":null,
  "created_via_api":true,
  "customer_city_name":null,
  "paid_amount":0.0,
  "amount":12.34
}
</pre>

### Listar boletos

`GET /api/v1/bank_billets`

<table class='table table-bordered features'>
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
        Quantidade de registros por página
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/bank_billets?page=1&per_page=50
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 19:46:16 GMT
Status: 200 OK
Total: 2
Content-Type: application/json; charset=utf-8
...

[
  {
    "id":1,
    "expire_at":"2014-11-15",
    "paid_at":null,
    "description":"Prestação de Serviço",
    "status":"opened",
    "shorten_url":"http://bole.to/xxxxxxxx",
    "customer_person_type":"individual",
    "customer_person_name":"Nome do Cliente",
    "customer_cnpj_cpf":"125.812.717-28",
    "customer_address":null,
    "customer_state":null,
    "customer_neighborhood":null,
    "customer_zipcode":null,
    "customer_address_number":null,
    "customer_address_complement":null,
    "customer_phone_number":null,
    "customer_email":null,
    "notification_url":null,
    "send_email_on_creation":null,
    "created_via_api":true,
    "customer_city_name":null,
    "paid_amount":0.0,
    "amount":12.34
  }
]
</pre>
