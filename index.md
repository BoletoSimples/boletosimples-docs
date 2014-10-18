---
layout: pt
title: API do Boleto Simples
en: /en/
---

## API do Boleto Simples

#### Integre pagamentos por boletos bancários em seu site ou aplicação.


Boleto Simples fornece uma API simples e poderosa em REST para
integrar pagamentos por boletos bancários em seu site ou aplicação.

Os benefícios da API são:

*   Programadores conseguem incluir o Boleto Simples como meio de pagamento em um e-commerce.
*   Criar boletos bancários a partir de um sistema de ERP.
*   Integração com o sistema de Contas a Receber.
*   Desenvolver aplicativos móveis para emissão e gerenciamento de boleto bancário.
*   Liberdade para fazer o que quiser, todo programador clama por isso!

Para dúvidas sobre a API faça suas perguntas em nossa [central de suporte](http://suporte.boletosimples.com.br).

## Endpoint da API

A URL Base da API é `https://boletosimples.com.br/api/v1/`

Todas as requisições devem usar o schema `https` por questões de segurança.

O Boleto Simples possui também um [Ambiente Sandbox](/sandbox).

## Formato

A API aceita apenas o formato `JSON`, sendo assim todas as requisições usam content type `application/json`.

## Convenções da API

Na documentação da API, utilizamos as seguintes convenções:

* **#{variable}** - Indica o nome de uma variável que precisa ser substituída por valores da sua conta.
* **...** - Indica o conteúdo da resposta de uma requisição, que foi truncado para facilitar a leitura da documentação.
* **$TOKEN** - Indica o [Token de Acesso](/authentication/#token-de-acesso) e está neste formato para facilitar os testes na linha de comando. Supondo que o seu token é "zjuio96wkixkzy6z98sy", você pode rodar o comando abaixo e posteriormente copiar e colar os comandos desta documentação no terminal.

  `export TOKEN=zjuio96wkixkzy6z98sy`

## Códigos de Retorno

A API retorna os códigos de resposta HTTP. Estas são as informações mais relevantes:

*   `200 OK` - A chamada foi bem sucedida.
*   `400 Bad Request` - A requisição é inválida, em geral conteúdo mal formado.
*   `401 Unauthorized` - O usuário e senha são inválidos.
*   `403 Forbidden` - O acesso à API está bloqueado.
*   `404 Not Found` - O endereço acessado não existe.
*   `429 Too Many Requests` - O usuário atingiu o  de requisições.
*   `503 Service Unavailable` - O usuário atingiu algum dos s de uso.
*   `500 Internal Server Error` - Houve um erro interno do servidor ao processar a requisição.

## Segurança

O Boleto Simples utiliza Certificados SSL 2048 bits.

Toda requisição realizada através da API deve utilizar o protocolo
HTTPS pois estará passando informações de autenticação no cabeçalho da requisição.

As requisições realizadas na porta 80, serão automaticamente
redirecionadas para a porta 443. Esta medida garante que nenhuma
requisição realizada na API estará fora do protocolo seguro.

Todas as requisições realizadas nos servidore do Boleto Simples serão criptografadas.

## Identificando sua aplicação

Você deve incluir o header User-Agent com o nome da sua aplicação
e um endereço de e-mail válido, para que possamos entrar em contato caso:

1.  Você esteja fazendo algo errado, e possamos avisá-lo antecipadamente antes de você ser bloqueado;
2.  Esteja fazendo algo muito legal, e possamos dar-lhe os parabéns :)

Segue um Exemplo:

   `User-Agent: Meu e-Commerce (meuecommerce@example.com)`

Se você não informar este cabeçalho, você receberá um erro `400 Bad Request.`

## Cache HTTP

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


## Tratamento de erros

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


## Limite de Requisições

Existem dois tipos de limite de requisições. Em ambos os casos a
contagem é feita para cada usuário.

### Intervalo

Cada usuário pode realizar uma requisição a cada 1 segundo. Caso
o usuário realize duas requisições simultâneas, o servidor
retorna o status HTTP 429 Too Many Requests. Neste caso, o
servidor envia o header `Retry-After` com o número de
segundos que você deve esperar até realizar a próxima requisição.

### Requisições por Hora

Cada usuário pode realizar no máximo 500 requisições por hora.
O número de requisições feitas pelo usuário é
zerada no primeiro minuto de cada hora.

A cada requisição realizada, o servidor retorna os headers
`X-RateLimit-Limit` e

`X-RateLimit-Remaining` com o
número de requisições permitidas e o número de requisições
restantes para aquela hora. Exemplo:

### Exemplo

<small>Requisição:</small>

<pre class="bash">
curl -i \
-u $TOKEN:x \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X GET https://sandbox.boletosimples.com.br/api/v1/userinfo
</pre>

<small>Resposta:</small>

<pre class="bash">
HTTP/1.1 200 OK
Date: Fri, 05 Nov 2010 12:00:00 GMT
Content-Type: application/xml; charset=utf-8
X-RateLimit-Limit: 500
X-RateLimit-Remaining: 486
</pre>

Caso atinja o número máximo de requisições dentro de uma hora,
o servidor retorna o status
`HTTP 429 Too Many Requests`.
Neste caso, você deve esperar até o primeiro minuto da hora
seguinte para realizar a próxima requisição.


## Começando

*   [Autenticação](/authentication "Autenticação")
*   [Permissões](/permissions "Permissões")
*   [Notificações](/notifications "Notificações")
*   [Bibliotecas](/libraries "Bibliotecas")
*   [Referências](/reference "Referências")
