---
layout: en
title: Permissions - Boleto Simples API
pt: /authentication/permissions
---

## Permissions

When authenticating the user with Oauth2, you can specify which data the token will have access by the choice of one or more access scopes.

### Scopes

Here is the list of all scopes that you can request:

<dl class="dl-horizontal">
  <dt>login</dt>
  <dd>Authenticate with user</dd>
  <dt>email</dt>
  <dd>View the e-mail</dd>
  <dt>profile</dt>
  <dd>View account data (full name, date of birth, CPF, parents name, account level)</dd>
  <dt>address</dt>
  <dd>View full adress</dd>
  <dt>phone</dt>
  <dd>View phone used on registration</dd>
  <dt>banking</dt>
  <dd>View the bank data(branch and account)</dd>
  <dt>business</dt>
  <dd>View company data (company name e cnpj)</dd>
  <dt>write</dt>
  <dd>View and create bank billets and customers</dd>
  <dt>read</dt>
  <dd>View bank billets, customers and transactions extract</dd>
  <dt>webhook</dt>
  <dd>Receive notifications every status change of billets</dd>
</dl>

### OAuth2

For OAuth2, permissions are accessed by the `scope` parameter on your Oauth2 request

For example, your application may need log in as user to generate billets, however, don't need to know what are user's bank details.

The default permission is `login` if you don't specify an scope.

#### Permissions group

You can request individual or group permissions.

Group permission should be separated with `+` character on URL.

Below an example of Url request with `scope` parameter at the end:

<pre class="html">https://boletosimples.com.br/api/v1/oauth/authorize?response_type=code&amp;client_id=YOUR_CLIENT_ID&amp;redirect_uri=YOUR_CALLBACK_URL&amp;scope=login+email+profile</pre>
