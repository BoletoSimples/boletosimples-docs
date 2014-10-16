---
layout: reference
title: Parceiros e Usuários - API do Boleto Simples
en: /en/reference
---

## Parceiros - Usuários

### Criar cliente

<code>POST /api/v1/partner/users </code>

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
        <strong>user </strong>
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
        <strong>user[email] </strong>
        <br>
        <small>
          obrigatório
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
        <strong>user[account_type] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>

      <td>
        Pessoa Física ou Jurídica
        <br>
        Value: Must be one of: individual, juridical.
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[first_name] </strong>
        <br>
        <small>
          opcional
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
        <strong>user[middle_name] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Nome do Meio
        <br>
        Value: Must be String
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[last_name] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Sobrenome
        <br>
        Value: Must be String
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[cpf] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        CPF
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong>user[address_street_name] </strong>
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
        <strong>user[address_state] </strong>
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
        <strong>user[address_neighborhood]</strong>
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
        <strong>user[address_postal_code] </strong>
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
        <strong>user[address_number] </strong>
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
        <strong>user[address_complement] </strong>
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
        <strong>user[address_city_name] </strong>
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
        <strong>user[phone_number] </strong>
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
        <strong>user[notification_url] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        URL de notificacao
        <br>
        Value: Must be String
      </td>

    </tr>


    <tr>
      <td>
        <strong>user[date_of_birth] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Data de Nascimento
        <br>
        Value: Must be Date
      </td>
    </tr>

    <tr>
      <td>
        <strong>user[business_category] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Categoria
        <br>
        Value: Must be a number.
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[business_subcategory] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Subcategoria
        <br>
        Value: Must be a number.
      </td>
    </tr>

    <tr>
      <td>
        <strong>user[business_website] </strong><br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Website
        <br>
        Value: Must be a number.
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[business_name] </strong><br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Nome Fantasia
        <br>
        Value: Must be String
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[business_legal_name] </strong><br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Razão Social
        <br>
        Value: Must be String
      </td>
    </tr>

    <tr>
      <td>
        <strong>user[business_type] </strong><br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Tipo da Empresa
        <br>
        Value: Must be one of: individual, juridical.
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[business_cnpj] </strong><br>
        <small>
          opcional
        </small>
      </td>
      <td>
        CNPJ da Empresa
        <br>
        Value: Must be String
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[withdrawal_automatic] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Saque Automático
        <br>
        Value: Must be &#39;true&#39; or &#39;false&#39;
      </td>
    </tr>


    <tr>
      <td>
        <strong>user[mother_name] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Nome da Mãe
        <br>
        Value: Must be &#39;true&#39; or &#39;false&#39;
      </td>
    </tr>

    <tr>
      <td>
        <strong>user[father_name] </strong>
        <br>
        <small>
          opcional
        </small>
      </td>
      <td>
        Nome do Pai
        <br>
        Value: Must be &#39;true&#39; or &#39;false&#39;
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
