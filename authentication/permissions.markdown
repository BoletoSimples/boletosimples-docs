---
title: Permissões
position: 2
layout: pt
en: "/en/authentication/permissions"
---

## Permissões

Quando autenticar o usuário com OAuth2, você pode especificar quais dados o token terá acesso através da escolha de um ou mais escopos de acesso.

### Escopos

Aqui está a lista de todos os escopos que você pode solicitar:

<table>
  <tr>
    <td>login</td>
    <td>Autenticar com o usuário</td>
  </tr>
  <tr>
    <td>email</td>
    <td>Visualizar o endereço de e-mail</td>
  </tr>
  <tr>
    <td>profile</td>
    <td>Visualizar os dados da conta (nome completo, data de nascimento, cpf, nome dos pais, nível da conta)</td>
  </tr>
  <tr>
    <td>address</td>
    <td>Visualizar o endereço completo</td>
  </tr>
  <tr>
    <td>phone</td>
    <td>Visualizar o telefone utilizado no cadastro</td>
  </tr>
  <tr>
    <td>banking</td>
    <td>Visualizar os dados bancários (agência e conta)</td>
  </tr>
  <tr>
    <td>business</td>
    <td>Visualizar os dados da empresa (razão social e cnpj)</td>
  </tr>
  <tr>
    <td>balance</td>
    <td>Visualizar o saldo na conta do usuário</td>
  </tr>
  <tr>
    <td>write</td>
    <td>Criar e visualizar boletos bancários e clientes</td>
  </tr>
  <tr>
    <td>read</td>
    <td>Visualizar boletos bancários, clientes e extrato de transações</td>
  </tr>
  <tr>
    <td>checkout</td>
    <td>Visualizar a URL de checkout para pagamentos</td>
  </tr>
  <tr>
    <td>subscription</td>
    <td>Visualizar o plano contratado</td>
  </tr>

</table>

### OAuth2

Para OAuth2, permissões são acessadas através do parâmetro `scope` em sua requisição OAuth2.

Por exemplo, sua aplicação pode precisar logar como o usuário para gerar boletos, porém não precisará saber quais são os dados bancários do usuário.

A permissão padrão é `login` caso você não especifice um scope.

#### Grupo de permissões

Você pode solicitar permissões individuais ou em grupo.

Permissões em grupo devem ser separadas com caracter `+` na URL.

Abaixo um exemplo de URL de requisição com parâmetro `scope` no final:

<pre class="html">https://boletosimples.com.br/api/v1/oauth/authorize?response_type=code&amp;client_id=YOUR_CLIENT_ID&amp;redirect_uri=YOUR_CALLBACK_URL&amp;scope=login+email+profile</pre>
