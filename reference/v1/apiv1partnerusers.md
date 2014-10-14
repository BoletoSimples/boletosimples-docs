---
layout: reference
title: Parceiros - Usuários
en: /en/reference
---

## Parceiros - Usuários

### POST /api/v1/partner/users

Criar cliente

### Formatos suportados

json

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
