---
layout: pt
title: Parceiros - API do Boleto Simples
en: /en/reference
breadcrumb: Parceiros
---

## Parceiros

### Criar usuário

`POST /api/v1/partner/users`

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
        <strong>email</strong>
      </td>
      <td>
        Sim
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
        <strong>account_type</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        individual, juridical
      </td>
      <td>
        Pessoa Física ou Jurídica
      </td>
    </tr>

    <tr>
      <td>
        <strong>first_name</strong>
      </td>
      <td>
        Não
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
        <strong>middle_name</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Nome do Meio
      </td>
    </tr>

    <tr>
      <td>
        <strong>last_name</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Sobrenome
      </td>
    </tr>

    <tr>
      <td>
        <strong>cpf</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        CPF
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_street_name</strong>
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
        <strong>address_state</strong>
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
        <strong>address_neighborhood</strong>
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
        <strong>address_postal_code</strong>
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
        <strong>address_city_name</strong>
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
        <strong>notification_url</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        URL de notificação
      </td>
    </tr>

    <tr>
      <td>
        <strong>date_of_birth</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Data de Nascimento
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_category</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        List
      </td>
      <td>
        Categoria
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_subcategory</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        List
      </td>
      <td>
        Subcategoria
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_website</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Website
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_name</strong><br>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Nome Fantasia
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_legal_name</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Razão Social
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_type</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        individual, juridical
      </td>
      <td>
        Tipo da Empresa
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_cnpj</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        CNPJ da Empresa
      </td>
    </tr>


    <tr>
      <td>
        <strong>withdrawal_automatic</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Boolean
      </td>
      <td>
        Saque Automático
      </td>
    </tr>


    <tr>
      <td>
        <strong>mother_name</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Nome da Mãe
      </td>
    </tr>

    <tr>
      <td>
        <strong>father_name</strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Nome do Pai
      </td>
    </tr>
  </tbody>
</table>