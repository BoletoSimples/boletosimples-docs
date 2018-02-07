---
title: Autenticação
position: 7
layout: pt
en: "/en/authentication"
---

## Autenticação

Nós oferecemos duas formas de autenticação para acessar a API do Boleto Simples:

<table class="table table-bordered features">
  <thead>
  <tr>
    <th>Método</th>
    <th>Melhor para</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><a href="/authentication/token">Token de Acesso</a></td>
    <td>Acessar sua própria conta.</td>
  </tr>
  <tr>
    <td><a href="/authentication/oauth2">OAuth2</a></td>
    <td>Permite conseguir permissões para acessar contas de terceiros.</td>
  </tr>
  </tbody>
</table>

### Segurança

#### Salve as credenciais de forma segura!

Você deve se preocupar em como guardar as credencias que você consegue de forma segura. Se alguém obtém o `access_token` com permissões, eles poderão acessar informações particulares suas e dos seus clientes.

Nunca salve suas credenciais junto ao seu código fonte ou em seu banco de dados à menos que estejam criptografadas. Separar as credencias do seu código fonte e do banco de dados são excelentes práticas a serem adotadas.
