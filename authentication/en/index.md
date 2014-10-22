---
layout: en
title: Authentication - Boleto Simples API
en: /en/authentication
---

## Autentication

We offer two ways of authentication to access the Boleto Simples API:

<table class="table table-bordered features">
  <thead>
  <tr>
    <th>Method</th>
    <th>Best for</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><a href="/authentication/en/token">Access Token</a></td>
    <td>Access your own account.</td>
  </tr>
  <tr>
    <td><a href="/authentication/en/oauth2">OAuth2</a></td>
    <td> Allows you to get permissions for access third-party accounts.</td>
  </tr>
  </tbody>
</table>

## Security

#### Save credentials securely!

You should worry about how to store the credentials that you can safely. If someone gets the `access_token` with permissions,
they can access private informations of you and of your customers.

Never save your credentials with your source code or database to unless they are encrypted. Separating the credentials of your source code and the database are excellent practices to be adopted.
