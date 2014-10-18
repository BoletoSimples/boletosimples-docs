---
layout: pt
title: Notificações - API do Boleto Simples
en: /en/notifications
---

## Notificações

### Boletos

O Boleto Simples envia notificações para um sistema externo após algum evento ocorrer no boleto.

Essas notificações são realizadas através de uma requisição `HTTP POST` no endereço configurado no boleto ou na conta do usuário através do campo `notification_url`.

Após receber a notificação, você pode verificar se houve alguma mudança relevante para a lógica de negócios do seu sistema e [consultar os dados do boleto](/reference/v1/bank_billets/#informaes-do-boleto).

<div class="alert alert-info">Os logs das notificações realizadas são salvos em nossa base de dados.</div>

#### Parâmetros passados

<pre class="bash">{
  "id": 1,
  "event": "status-changed",
  "status": "paid",
}</pre>

Onde:

*   `id` - Identificador do registro no Boleto Simples.
*   `event` - Evento que modificou alguma informação no boleto. Por hora o único possível valor é `status-changed`. Este campo irá ser usado nas próximas implementações de notificações.
*   `status` - Status do boleto bancário, cujos possíveis valores são: `generating`, `opened`, `paid`, `canceled` e `due`.

#### Retorno

O sistema espera que a requisição retorne o status code `200 OK`. Caso a requisição retorne erro, ou seja, status code `5XX` o sistema irá continuar tentando realizar a requisição. Caso a requisição bloqueia por falha na autenticação, ou seja status code `4XX`, o sistema irá ignorar a requisição e não tentará novamente.

#### Exemplo

Considerando que o valor do `notification_url` passado na criação do boleto bancário foi **http://seusite.com.br/boletosimples**, a requisição relizada e a resposta esperada são iguais as definidas abaixo.

<small>Requisição:</small>

<pre class="bash">
curl -i \
-D '{"id": 1, "event": "status-changed", "status": "paid"}' \
-X POST http://seusite.com.br/boletosimples
</pre>

<small>Resposta Esperada:</small>

<pre class="json">
HTTP/1.1 200 OK
Status: 200 OK
...
</pre>
