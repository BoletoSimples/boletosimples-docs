---
layout: reference
title: Criar Clientes - API do Boleto Simples
en: /en/references
---

## Clientes

### POST /api/v1/customers
Criar cliente

### Formatos suportados
json

### Parâmetros

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
        <strong>customer</strong>
        <br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        Informações do Cliente
        <br>
        Value: Must be a Hash
      </td>
    </tr>

    <tr>
      <td>
        <strong>customer[person_name] </strong><br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        Nome
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong>customer[cnpj_cpf] </strong>
        <br>
        <small>
          obrigatório
        </small>
      </td>
      <td>
        CNPJ/CPF
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong>customer[address] </strong>
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
        <strong>customer[city_name] </strong>
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
        <strong>customer[state] </strong>
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
        <strong>customer[neighborhood] </strong>
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
        <strong>customer[zipcode] </strong>
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
        <strong>customer[address_number] </strong>
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
        <strong>customer[address_complement] </strong>
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
        <strong>customer[phone_number] </strong>
        <br>
        <small>
          opcional  
        </small>
      </td>
      <td>
        Telefone
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong>customer[email] </strong>
        <br>
        <small>
          opcional  
        </small>
      </td>
      <td>
        E-mail
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong>customer[mobile_local_code] </strong>
        <br>
        <small>
          opcional  
        </small>
      </td>
      <td>
        Celular(DDD)
        <br>
        Value: Must be a number.
      </td>
    </tr>


    <tr>
      <td>
        <strong>customer[mobile_number] </strong>
        <br>
        <small>
          opcional  
        </small>
      </td>
      <td>
        Celular
        <br>
        Value: Must be a number.
      </td>
    </tr>

  </tbody>
</table>
