---
layout: pt
title: Parceiros e Usuários - API do Boleto Simples
en: /en/reference
breadcrumb: true
---

## Parceiros - Usuários

### Criar cliente

<code>POST /api/v1/partner/users </code>

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
        <strong>user </strong>
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
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        Categoria
      </td>
    </tr>

    <tr>
      <td>
        <strong>business_subcategory</strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
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
        Number
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
        &#39;true&#39; or &#39;false&#39;
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
        &#39;true&#39; or &#39;false&#39;
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
        &#39;true&#39; or &#39;false&#39;
      </td>
      <td>
        Nome do Pai
      </td>
    </tr>
  </tbody>
</table>

### Exemplos

<pre class="prettyprint">Request Headers

User-Agent: Meu e-Commerce (meuecommerce@example.com)
Accept: application/json
Content-Type: application/json
</pre>

<pre class="prettyprint">cURL
curl &quot;http://boletosimples.com.br/api/v1/partner/users&quot; -d &#39;{&quot;access_token&quot;:&quot;d60884298205eb5cc5a03b8f73796383a69a38772f36785f565579d871cbb86d&quot;,&quot;user&quot;:{&quot;email&quot;:&quot;email@example.com&quot;,&quot;account_type&quot;:&quot;individual&quot;,&quot;first_name&quot;:&quot;Margret&quot;,&quot;middle_name&quot;:&quot;Simoes&quot;,&quot;last_name&quot;:&quot;Goncalo&quot;,&quot;cpf&quot;:&quot;344.588.511-79&quot;,&quot;address_street_name&quot;:&quot;Av. Burkhard Hehn Simoes&quot;,&quot;address_state&quot;:&quot;RJ&quot;,&quot;address_neighborhood&quot;:&quot;Sao Francisco&quot;,&quot;address_postal_code&quot;:&quot;24360440&quot;,&quot;address_number&quot;:&quot;120&quot;,&quot;address_complement&quot;:&quot;709&quot;,&quot;address_city_name&quot;:&quot;Rio de Janeiro&quot;,&quot;phone_number&quot;:&quot;2199999999&quot;,&quot;notification_url&quot;:&quot;http://example.com.br/notify&quot;,&quot;date_of_birth&quot;:&quot;1970-03-01&quot;}}&#39; -X POST         -H &quot;User-Agent: Meu e-Commerce (meuecommerce@example.com)&quot;         -H &quot;Accept: application/json&quot;         -H &quot;Content-Type: application/json&quot;
</pre>

<pre class="prettyprint">Response Headers

X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Content-Type: application/json; charset=utf-8
ETag: &quot;5016b194c55782cd1a31ff7c85837976&quot;
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: request_method=POST; path=/
X-Request-Id: a21f2e94-03f1-4076-803b-f39e3dd6554c
X-RateLimit-Limit: 500
X-RateLimit-Remaining: 499
X-Runtime: 0.333307
Content-Length: 979

201 Created
</pre>
