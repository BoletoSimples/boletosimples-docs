---
layout: en
title: OAuth2 - Boleto Simples API
pt: /authentication/oauth2
---

## OAuth2

#### We recommend this option in case your app needs to access third-party accounts.

The [OAuth2](http://en.wikipedia.org/wiki/OAuth#OAuth_2.0) protocol allows the partial or full access by third parties without
the need to share your password. It's more complex than access by username and password but it's more flexible. Oauth2 works too well for web applications, as well for desktop and mobile.

### Libraries

There libraries OAuth2 for almost all the languages because it's a protocol widely used in software industry and by companies like Google and Facebook.

[Before start, choose a library](http://oauth.net/code/).

### Register Application

Before start you need [request to register your application](http://suporte.boletosimples.com.br) on our servers. We'll send you an `client_id` and a `client_secret`.

You must also give us an redirect URL `redirect_uri` for your site. If you develop to desktop or mobile, see on the section below how to set the `redirect_uri`.

### Endpoints

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th width='150px'>Sandbox</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Authorize URL</td>
      <td>GET https://sandbox.boletosimples.com.br/api/v1/oauth2/authorize</td>
    </tr>
    <tr>
      <td>Token URL</td>
      <td>POST https://sandbox.boletosimples.com.br/api/v1/oauth2/token</td>
    </tr>
  </tbody>
</table>

<table class='table table-bordered features'>
  <thead>
    <tr>
      <th width='150px'>Production</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Authorize URL</td>
      <td>GET https://boletosimples.com.br/api/v1/oauth2/authorize</td>
    </tr>
    <tr>
      <td>Token URL</td>
      <td>POST https://boletosimples.com.br/api/v1/oauth2/token</td>
    </tr>
  </tbody>
</table>

### Operational Summary

The OAuth2 require the user to authorize the access of your app to their account. For authenticate the user on Oauth2:

*   Use the `client_id` and the `client_secret` that you got with us during the registration for redirect the user to the `Authorize URL`. Optionally include the `scope` for access some [specific information](/permissions).
*   If the user authorize your app, he will be redirected to the `redirect_uri` that you have set on the registration with the `code`.
*   Use the parameter `code` received to generate an `access_token` making a request on `Token URL`.
*   Use the `access_token` to make the requests in the name of the user.


### Step to Step Detailed

1. Consider the following informations:

    * **Client ID** -> fc4e525ff3
    * **Client Secret** -> 95ea9a477d
    * **Redirect URL** -> http://yoursite.com.br

1. Redirect the user for the address below.

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth2/authorize?response_type=code&amp;client_id=fc4e525ff3&amp;redirect_uri=http://yoursite.com.br</pre>

1. The user will see a screen asking for your application to acces their data and with two links, one to decline and another to authorize redirecting to the following adress:

    <small>If declined</small>

    <pre class="bash">http://yoursite.com.br/?error=access_denied&error_description=O+dono+do+recurso+ou+servidor+de+autorização+negou+a+solicitação</pre>

    <small>If authorized</small>

    <pre class="bash">http://yoursite.com.br/?code=57858ba460</pre>

    `code` is the code for you to request the access token.

1. Make a `POST` request for the address below to receive the access token.

    <pre class="bash">https://sandbox.boletosimples.com.br/api/v1/oauth2/token?grant_type=authorization_code&amp;code=57858ba460&amp;redirect_uri=http://seusite.com.br&amp;client_id=fc4e525ff3&amp;client_secret=95ea9a477d</pre>

    <small>Request:</small>

    <pre class="bash">
    curl -i \
    -d 'grant_type=authorization_code&code=57858ba460&redirect_uri=http://seusite.com.br&client_id=fc4e525ff3&client_secret=95ea9a477d' \
    -H 'User-Agent: MyApp (myapp@example.com)' \
    -X POST https://sandbox.boletosimples.com.br/api/v1/oauth2/token
    </pre>

    <small>Response in error case:</small>

    <pre class="bash">
    HTTP/1.1 401 Unauthorized
    Date: Fri, 17 Oct 2014 18:39:47 GMT
    Status: 401 Unauthorized
    Content-Type: application/json; charset=utf-8
    ...

    {"error":"invalid_grant","error_description":"A permissão de autorização provida é inválida, está expirada, revogada, não coincide com a URL de redirecionamento usada na requisição de autorização ou foi emitida por outro cliente."}
    </pre>

    <small>Response in success case:</small>

    <pre class="bash">
    HTTP/1.1 200 OK
    Date: Fri, 17 Oct 2014 18:39:47 GMT
    Status: 200 OK
    Content-Type: application/json; charset=utf-8
    ...

    {"access_token":"ada046e3cc","token_type":"bearer","scope":"login"}
    </pre>

1. Now you can use the `access_token` to make calls in API. This token doesn't have a due date.

    <small>Request:</small>

    <pre class="bash">
    curl -i \
    -u ada046e3cc:x \
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

    # dados do usuário que autorizou o acesso
    </pre>



### Rube Example

<pre class="ruby">
require 'oauth2'

redirect_uri = 'http://www.seusite.com.br/oauth2/callback' # tem que ser a mesma url do registro

client = OAuth2::Client.new(ENV['BOLETOSIMPLES_ID'], ENV['BOLETOSIMPLES_SECRET'], site: 'https://sandbox.boletosimples.com.br/api/v1')

`open "#{client.auth_code.authorize_url(redirect_uri: redirect_uri)}"`
print "Coloque o código retornado na URL: "

code = STDIN.readline.chomp

token = client.auth_code.get_token(code, redirect_uri: redirect_uri)

puts JSON.parse(token.get('/api/v1/userinfo').body)
</pre>

### Developing applications for Mobile and Desktop

If you're developing to mobile or desktop, maybe you doesn't have a redirect url. In that cases you can set the url for:
`urn:ietf:wg:oauth:2.0:oob`. This causes the server show a blank page with the authorization url and page title. You can read
this information somewhat inside your application to be able to use later.

The same technique is adopted by
[Google](https://developers.google.com/accounts/docs/OAuth2InstalledApp).

[Here is a guide](http://www.slideshare.net/briandavidcampbell/is-that-a-token-in-your-phone-in-your-pocket-or-are-you-just-glad-to-see-me-oauth-20-and-mobile-devices) with a example to IOS and Android.
