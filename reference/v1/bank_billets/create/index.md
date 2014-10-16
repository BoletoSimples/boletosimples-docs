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
      <th>Nome do Parâmetro</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong> amount </strong>
        <br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        Quantia (R$) - Formato: 1000,50 ou 1000.5
        <br>
        Value: Must be Float
      </td>
    </tr>

    <tr>
      <td>
        <strong> expire_at </strong><br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        Data de vencimento - Formato: 31/12/2013 ou 2013-12-31
        <br>
        Value: Must be Date
      </td>
    </tr>

    <tr>
      <td>
        <strong> description </strong>
        <br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        Descrição dos Serviços prestados conforme contrato.
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_person_name </strong>
        <br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        <p>Nome ou Razão Social do Cliente</p>
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_cnpj_cpf </strong>
        <br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        CNPJ ou CPF do Cliente
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_email </strong>
        <br>
        <small>
          opcional
        </small>
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
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Endereço
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_city_name </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Cidade
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_state </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Estado
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_neighborhood </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Bairro
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_zipcode </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        CEP
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address_number </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Número
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_address_complement </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Complemento
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> customer_phone_number </strong>
        <br>
        <small>
          opcional
        </small>
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
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        ID do Cliente Cadastrado
        <br>
        Value: Must be a number.
      </td>
    </tr>

    <tr>
      <td>
        <strong> notification_url </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        URL de notificação para onde serão enviadas notificações nas mudanças de status do boleto
          <br>
          Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong> meta </strong>
        <br>
        <small>
          opcional
        </small>
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
