---
layout: pt
title: Permissões - API do Boleto Simples
en: /en/authentication/permissions
---

## Permissões

Quando autenticar o usuário com OAuth2, você pode especificar quais dados o token terá acesso através da escolha de um ou mais escopos de acesso.

### Escopos

Aqui está a lista de todos os escopos que você pode solicitar:

<dl class="dl-horizontal">
  <dt>login</dt>
  <dd>Autenticar com o usuário</dd>
  <dt>email</dt>
  <dd>Visualizar o endereço de e-mail</dd>
  <dt>profile</dt>
  <dd>Visualizar os dados da conta (nome completo, data de nascimento, cpf, nome dos pais, nível da conta)</dd>
  <dt>address</dt>
  <dd>Visualizar o endereço completo</dd>
  <dt>phone</dt>
  <dd>Visualizar o telefone utilizado no cadastro</dd>
  <dt>banking</dt>
  <dd>Visualizar os dados bancários (agência e conta)</dd>
  <dt>business</dt>
  <dd>Visualizar os dados da empresa (razão social e cnpj)</dd>
  <dt>balance</dt>
  <dd>Visualizar o saldo na conta do usuário</dd>
  <dt>write</dt>
  <dd>Criar e visualizar boletos bancários e clientes</dd>
  <dt>read</dt>
  <dd>Visualizar boletos bancários, clientes e extrato de transações</dd>
  <dt>webhook</dt>
  <dd>Receber notificações a cada mudança de status dos boletos</dd>
  <dt>checkout</dt>
  <dd>Visualizar a URL de checkout para pagamentos</dd>
</dl>

### OAuth2

Para OAuth2, permissões são acessadas através do parâmetro `scope` em sua requisição OAuth2.

Por exemplo, sua aplicação pode precisar logar como o usuário para gerar boletos, porém não precisará saber quais são os dados bancários do usuário.

A permissão padrão é `login` caso você não especifice um scope.

#### Grupo de permissões

Você pode solicitar permissões individuais ou em grupo.

Permissões em grupo devem ser separadas com caracter`+` na URL.

Abaixo um exemplo de URL de requisição com parâmetro `scope` no final:

<pre class="html">https://boletosimples.com.br/api/v1/oauth/authorize?response_type=code&amp;client_id=YOUR_CLIENT_ID&amp;redirect_uri=YOUR_CALLBACK_URL&amp;scope=login+email+profile</pre>
