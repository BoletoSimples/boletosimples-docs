---
layout: reference
title: Criar Boletos - API do Boleto Simples
en: /en/reference
---

## Boletos

### Criar boleto

<code>POST /api/v1/bank_billets</code>

**Parâmetros**

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
        Descrição dos Serviços prestados conforme contrato.
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
        <p>Nome ou Razão Social do Cliente</p>
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
        CNPJ ou CPF do Cliente
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
        E-mail do cliente
        <br>
        Value: Must be String
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
        <br>
        Value: Must be String
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
        ID do Cliente Cadastrado
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
        URL de notificação para onde serão enviadas notificações nas mudanças de status do boleto
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

### Exemplo

<small>requisição:</small>

<pre class="bash">"bank_billets#create": [
  {
    "verb": "POST",
    "path": "/api/v1/bank_billets",
    "versions":
      "v1"
    ],
</pre>

<small>resposta:</small>

<pre class="json">"response_data": {
  "id": 16,
  "expire_at": "2014-10-17",
  "paid_at": null,
  "description": "Despesas do contrato 0012",
  "status": "generating",
  "shorten_url": null,
  "customer_person_type": "individual",
  "customer_person_name": "Joao da Silva",
  "customer_cnpj_cpf": "012.345.678-90",
  "customer_address": "Rua quinhentos",
  "customer_state": "RJ",
  "customer_neighborhood": "Sao Francisco",
  "customer_zipcode": "12312-123",
  "customer_address_number": "111",
  "customer_address_complement": "Sala 4",
  "customer_phone_number": "2112123434",
  "customer_email": "cliente@bom.com",
  "notification_url": "http://example.com.br/notify",
  "send_email_on_creation": true,
  "created_via_api": true,
  "customer_city_name": "Rio de Janeiro",
  "paid_amount": 0.0,
  "amount": 41.01
},
</pre>
