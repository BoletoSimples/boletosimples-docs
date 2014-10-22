---
layout: en
title: Access Token - Boleto Simples API
en: /en/authentication
---

## Access Token

#### We recommend this option is you need access only to data of your own account.

To use the authentication via **Access Token**, you need to get your `Token` on [API page (Sandbox)](https://sandbox.boletosimples.com.br/conta/api) of your account.

![](/img/api-token.png)

The authentication using the `Access Token` it's made via `HTTP Basic`, however, instead of passing user's login and password, as usual, should provide the `Access Token` of user on the field ‘login’ and nothing on the field ‘password’. Some HTTP clients
may complain about the fact that the ‘password’ field is empty, in this case you can inform ‘X’ as password, the system will ignore.

Example API call authenticated (where "zjuio96wkixkzy6z98sy" is the Access Token of user):

### Valid Token Example

<small>Request:</small>

<pre class="bash">
curl -i \
-u zjuio96wkixkzy6z98sy:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 17 Oct 2014 18:14:56 GMT
Status: 200 OK
...
</pre>

### Invalid Token Example

<small>Request:</small>

<pre class="bash">
curl -i \
-u tokeninvalido:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
</pre>

<small>Response:</small>

<pre class="bash">
HTTP/1.1 401 Unauthorized
Date: Fri, 17 Oct 2014 18:20:18 GMT
Status: 401 Unauthorized
...

{"error":"Email ou senha inválidos."}
</pre>
