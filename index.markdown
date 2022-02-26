---
title: Documentação para Desenvolvedores
position: 1
en: "/en/"
layout: pt
---

## API do Boleto Simples

#### Automatize todo o processo de cobrança da sua empresa integrando o Boleto Simples aos sistemas que você já usa.

O Boleto Simples fornece uma API simples e poderosa em REST para integrar pagamentos por boletos bancários em seu site ou aplicação.

Os benefícios da API são:

*   Programadores conseguem incluir o Boleto Simples como meio de pagamento em um e-commerce.
*   Criar boletos bancários a partir de um sistema de ERP.
*   Integração com o sistema de Contas a Receber.
*   Desenvolver aplicativos móveis para emissão e gerenciamento de boleto bancário.
*   Liberdade para fazer o que quiser, todo programador clama por isso!

Para dúvidas sobre a API faça suas perguntas em nossa [central de suporte](http://suporte.boletosimples.com.br).

### Endpoint da API

A URL Base da API é `https://api.kobana.com.br/v1/`

Todas as requisições devem usar o schema `https` por questões de segurança.

O Boleto Simples possui também um [Ambiente Sandbox](/sandbox).

### Formato

A API aceita apenas o formato `JSON`, sendo assim todas as requisições usam content type `application/json`.

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Descrição</th>
      <th>Convenção</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>DateTime</th>
      <td>Formato ISO8601</td>
    </tr>
  </tbody>
</table>

### Convenções

Utilizamos as seguintes convenções nesta documentação:

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Convenção</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>:variable</th>
      <td>Indica o nome de uma variável que precisa ser substituída em uma URL.</td>
    </tr>
    <tr>
      <th>#{variable}</th>
      <td>Indica o nome de uma variável que precisa ser substituída por valores da sua conta.</td>
    </tr>
    <tr>
      <th>...</th>
      <td>Indica o conteúdo da resposta de uma requisição, que foi truncado para facilitar a leitura da documentação.</td>
    </tr>
    <tr>
      <th>$BOLETOSIMPLES_TOKEN</th>
      <td>
        Indica o <a href="/authentication/token">Token de Acesso</a> e está neste formato para facilitar os testes na linha de comando. Supondo que o seu token é "zjuio96wkixkzy6z98sy", você pode rodar o comando abaixo e posteriormente copiar e colar os comandos desta documentação no terminal.
        <br/>
        <code>export BOLETOSIMPLES_TOKEN=zjuio96wkixkzy6z98sy</code>
      </td>
    </tr>
  </tbody>
</table>

### Códigos de Retorno

A API retorna os códigos de resposta HTTP. Estas são as informações mais relevantes:

<table class='table table-bordered'>
  <thead>
    <tr>
      <th width="220px">Código</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>200 OK</th>
      <td>A chamada foi bem sucedida.</td>
    </tr>
    <tr>
      <th>400 Bad Request</th>
      <td>A requisição é inválida, em geral conteúdo mal formado.</td>
    </tr>
    <tr>
      <th>401 Unauthorized</th>
      <td>O usuário e senha ou token de acesso são inválidos. <a href="/authentication">Leia mais.</a></td>
    </tr>
    <tr>
      <th>403 Forbidden</th>
      <td>O acesso à API está bloqueado ou o usuário está bloqueado.</td>
    </tr>
    <tr>
      <th>404 Not Found</th>
      <td>O endereço acessado não existe.</td>
    </tr>
    <tr>
      <th>422 Unprocessable Entity</th>
      <td>A requisição é válida, mas os dados passados não são válidos.</td>
    </tr>
    <tr>
      <th>429 Too Many Requests</th>
      <td>O usuário atingiu o <a href="#limite-de-requisições">limite de requisições</a>.</td>
    </tr>
    <tr>
      <th>500 Internal Server Error</th>
      <td>Houve um erro interno do servidor ao processar a requisição. Consulte o <a href="http://status.boletosimples.com.br">status dos servidores</a>.</td>
    </tr>
  </tbody>
</table>

### Segurança

O Boleto Simples utiliza Certificados SSL 2048 bits.

Toda requisição realizada através da API deve utilizar o protocolo
HTTPS pois estará passando informações de autenticação no cabeçalho da requisição.

As requisições realizadas na porta 80, serão automaticamente
redirecionadas para a porta 443. Esta medida garante que nenhuma
requisição realizada na API estará fora do protocolo seguro.

Todas as requisições realizadas nos servidore do Boleto Simples serão criptografadas.

### Header User-Agent

Você deve incluir o header User-Agent com o nome da sua aplicação.
e um endereço de e-mail válido, para que possamos entrar em contato caso:

1.  Você esteja fazendo algo errado, e possamos avisá-lo antecipadamente antes de você ser bloqueado;
2.  Esteja fazendo algo muito legal, e possamos dar-lhe os parabéns :)

Segue um Exemplo:

   `User-Agent: Meu e-Commerce (meuecommerce@example.com)`

Se você não informar este cabeçalho, você receberá um erro `400 Bad Request.`

### Cache HTTP

Você deve fazer uso dos cabeçalhos HTTP de cache para diminuir a
carga em nossos servidores (e aumentar a velocidade do seu aplicativo!).

A maioria dos retornos das requisições irão incluir um header `ETag`
ou `Last-Modified.` Quando você solicitar um recurso pela primeira vez,
armazene esse valor e nos envie de volta nas requisições seguintes
nos headers `If-None-Match` e `If-Modified-Since.` Se o recurso não
foi alterado, você receberá uma resposta com o header `304 Not Modified`,
o que  economiza tempo e largura de banda, por
evitar de te enviar os dados que você já tem.

[Mais informações sobre Cache HTTP (em inglês)](http://www.mnot.net/cache_docs/)


### Tratamento de Erros

Se os nossos servidores estiverem com problema, sua requisição receberá um retorno de erro com status 5xx.

Erro 500 significa que a aplicação está completamente indisponível,
mas você pode receber também outros erros
da família 500 em casos específicos, tais como `502 Bad Gateway`,

`503 Service Unavailable` ou `504 Gateway
Timeout`.

É de sua responsabilidade identificar o erro e lidar com esses
casos, fazendo com que o aplicativo tente enviar
a requisição novamente depois de alguns minutos.

Nós temos uma página que informa o status dos servidores do Boleto Simples em
[http://status.boletosimples.com.br/](http://status.boletosimples.com.br/ "Status")


### Limite de Requisições

Existem dois tipos de limite de requisições. 

O limite por GET e POST.

Em ambos os casos a contagem é feita por **hora** para o **Token de Acesso** usado na autenticação.

#### Requisições por hora

Cada token pode realizar no máximo 60 requisições GET e 1000 requisições POST por hora.

O número de requisições feitas pelo usuário é
zerada no primeiro minuto de cada hora.

A cada requisição realizada, o servidor retorna os cabeçalhos
`X-RateLimit-Limit` e `X-RateLimit-Remaining` com o
número de requisições permitidas e o número de requisições
restantes para aquela hora.

<small>Exemplo de Resposta em caso de sucesso</small>

<pre class="http">
HTTP/1.1 200 OK
Date: Fri, 05 Nov 2010 12:00:00 GMT
Content-Type: application/json; charset=utf-8
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 486
</pre>

Caso atinja o número máximo de requisições dentro de uma hora, o servidor retorna o status<br/>
`HTTP 429 Too Many Requests`.

Neste caso, você deve esperar o número de segundos retornado no header `Retry-After` antes de realizar a próxima requisição.

<small>Exemplo de Resposta em caso de bloqueio:</small>

<pre class="http">
HTTP/1.1 429 Too Many Requests
Date: Fri, 05 Nov 2010 12:00:00 GMT
Content-Type: application/json; charset=utf-8
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 0
Retry-After: 3600
...

{error: "Limite de requisições POST por hora excedido para esse usuário."}
</pre>