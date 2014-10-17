---
layout: pt
title: Notificações - API do Boleto Simples
en: /en/notifications
---

## Notificações

### Boletos

O Boleto Simples envia notificações para um sistema externo após algum evento ocorrer no boleto.

  Essas notificações são realizadas através de uma requisição
  `HTTP POST` no endereço configurado no
  boleto ou na conta do usuário através do campo `notification_url`.

<div class="alert alert-info">Os logs das notificações realizadas são salvos em nossa base de dados.</div>

#### Parâmetros passados

<pre class="bash">{
   "id":1,
   "event":"status-changed",
   "status":"paid",
   "expire_at":'2014-10-31',
   "customer_person_name":'Boleto Simples Cobranças Ltda',
   "customer_cnpj_cpf":'05.813.794/0001-26',
   "amount":'55.78',
   "paid_amount":'55.78',
   "paid_at":'2014-10-30',
   "shortener_url":'http://bole.to/identificador',
   "meta": 'meu metadado'
}</pre>

Onde:

*   `id` - Identificador do registro no Boleto Simples.
*   `event` - Evento que modificou alguma informação no boleto. Por hora o único possível valor é `status-changed`. Este campo irá ser usado nas próximas implementações de notificações.
*   `status` - Status do boleto bancário, cujos possíveis valores são: `generating`, `opened`, `paid`, `canceled`, `due`.
*   `expire_at` - Data de vencimento.
*   `customer_person_name` - Nome do cliente.
*   `customer_cnpj_cpf` - CPF ou CNPJ do cliente.
*   `amount` - Valor do boleto.
*   `paid_amount` - Valor pago pelo cliente.
*   `paid_at` - Data de pagamento.
*   `shortener_url` - URL pública do boleto.
*   `meta` - Campo Genérico -  Aceita qualquer formato passado. Pode ser usado para salvar dados que não existam dentro do Boleto Simples.

#### Retorno

O sistema espera que a requisição retorne o status code `200 OK`. Caso a requisição retorne erro, ou seja, status code `5XX` o sistema irá continuar tentando realizar a requisição. Caso a requisição bloqueia por falha na autenticação, ou seja status code `4XX`, o sistema irá ignorar a requisição e não tentará novamente.

#### Exemplo

Considerando que o valor do `notification_url` passado na criação do boleto bancário foi **http://seudominio.com.br/boletosimples**, a requisição relizada e a resposta esperada são iguais as definidas abaixo.

<small>Requisição:</small>

<pre class="bash">
curl -i \
-d '{"id":1,"event":"status-changed","status":"paid","expire_at":'2014-10-31',"customer_person_name":'Boleto Simples',"customer_cnpj_cpf":'05.813.794/0001-26',"amount":'55.78',"paid_amount":'55.78',"paid_at":'2014-10-30',"shortener_url":'http://bole.to/identificador',"meta":'meu metadado'}' \
-X POST http://seudominio.com.br/boletosimples
</pre>

<small>Resposta:</small>

<pre class="json">
HTTP/1.1 200 OK
Date: Fri, 05 Nov 2010 12:00:00 GMT
Content-Type: text/html; charset=utf-8
Status: 200 OK
</pre>
