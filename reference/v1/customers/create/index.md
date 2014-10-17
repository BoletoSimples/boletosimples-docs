---
layout: pt
title: Criar Clientes - API do Boleto Simples
en: /en/references
breadcrumb: true
---

## Clientes

### Criar cliente
<code>POST /api/v1/customers</code>

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
        <strong>customer</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        Hash
      </td>
      <td>
        Informações do Cliente
      </td>
    </tr>

    <tr>
      <td>
        <strong>person_name</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        Nome
      </td>
    </tr>

    <tr>
      <td>
        <strong>cnpj_cpf</strong>
      </td>
      <td>
        Sim
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ/CPF
      </td>
    </tr>

    <tr>
      <td>
        <strong>address</strong>
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
        <strong>city_name</strong>
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
        <strong>state</strong>
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
        <strong>neighborhood</strong>
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
        <strong>zipcode</strong>
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
        <strong>address_number</strong>
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
        <strong>address_complement</strong>
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
        <strong>phone_number</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Telefone
      </td>
    </tr>

    <tr>
      <td>
        <strong>email</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        E-mail
      </td>
    </tr>

    <tr>
      <td>
        <strong>mobile_local_code</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Celular(DDD)
      </td>
    </tr>

    <tr>
      <td>
        <strong>mobile_number</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Celular
      </td>
    </tr>

  </tbody>
</table>

### Exemplo

<small>requisição</small>

<pre class="bash"> "customers#create": [
  {
    "verb": "POST",
    "path": "/api/v1/customers",
    "versions": [
      "v1"
    ],
</pre>

<small>resposta</small>

<pre class="json">"response_data": {
  "id": 14,
  "city_name": "Rio de Janeiro",
  "person_name": "Joao da Silva",
  "address": "Rua quinhentos",
  "address_complement": "Sala 4",
  "address_number": "111",
  "mobile_number": "99998888",
  "cnpj_cpf": "012.345.678-90",
  "email": "cliente@bom.com",
  "neighborhood": "bairro",
  "person_type": "individual",
  "phone_number": "2112123434",
  "zipcode": "12312-123",
  "mobile_local_code": "21",
  "state": "RJ"
},
</pre>
