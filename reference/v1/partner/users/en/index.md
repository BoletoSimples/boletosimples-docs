---
layout: en
title: Partners -  Boleto Simples API
pt: /reference/users/partner
breadcrumb: Partners
---

## Partners

### User create

`POST /api/v1/partner/users`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parameter</th>
      <th data-container="body" data-toggle="tooltip" title="Required">Req.</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <strong>email</strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        String
      </td>
      <td>
        Email
      </td>
    </tr>

    <tr>
      <td>
        <strong>account_type</strong>
      </td>
      <td>
        No
      </td>
      <td>
        individual, juridical
      </td>
      <td>
        Individual or Corporate
      </td>
    </tr>

    <tr>
      <td>
        <strong>first_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Name
      </td>
    </tr>

    <tr>
      <td>
        <strong>middle_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Middle name
      </td>
    </tr>

    <tr>
      <td>
        <strong>last_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Last name
      </td>
    </tr>

    <tr>
      <td>
        <strong>cpf</strong>
      </td>
      <td>
        No
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
        No
      </td>
      <td>
        String
      </td>
      <td>
        Address
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_state</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        State
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_neighborhood</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Neighborhood
      </td>
    </tr>

    <tr>
      <td>
        <strong>address_postal_code</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Zipcode
      </td>
    </tr>


    <tr>
      <td>
        <strong>address_number</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Address Number
      </td>
    </tr>


    <tr>
      <td>
        <strong>address_complement</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Address complement
      </td>
    </tr>


    <tr>
      <td>
        <strong>address_city_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        City
      </td>
    </tr>

    <tr>
      <td>
        <strong>phone_number</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Phone number
      </td>
    </tr>

    <tr>
      <td>
        <strong>notification_url</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Notification URL
      </td>
    </tr>

    <tr>
      <td>
        <strong>date_of_birth</strong>
      </td>
      <td>
        No
      </td>
      <td>
        Date
      </td>
      <td>
        Date of birth
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_category</strong>
      </td>
      <td>
        No
      </td>
      <td>
        List
      </td>
      <td>
        Business Category
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_subcategory</strong>
      </td>
      <td>
        No
      </td>
      <td>
        List
      </td>
      <td>
        Business subcategory
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_website</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Business website
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_name</strong><br>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Business name
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_legal_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Business legal name
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_type</strong>
      </td>
      <td>
        No
      </td>
      <td>
        individual, juridical
      </td>
      <td>
        Business type
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_cnpj</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Business CNPJ
      </td>
    </tr>


    <tr>
      <td>
        <strong>withdrawal_automatic</strong>
      </td>
      <td>
        No
      </td>
      <td>
        Boolean
      </td>
      <td>
        Automatic withdrawal
      </td>
    </tr>


    <tr>
      <td>
        <strong>mother_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Mother name
      </td>
    </tr>

    <tr>
      <td>
        <strong>father_name</strong>
      </td>
      <td>
        No
      </td>
      <td>
        String
      </td>
      <td>
        Father name
      </td>
    </tr>
  </tbody>
</table>
