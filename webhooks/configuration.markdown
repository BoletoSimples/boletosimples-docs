---
title: Configurando Webhooks - API do Boleto Simples
layout: pt
en: "/en/webhooks/configuration"
---

## Configurando Webhooks

Você pode criar webhooks em [Minha Conta > API > Webhooks](https://boletosimples.com.br/conta/api/webhooks).

### Endereço para o Payload (URL)

Endereço que receberá a requisição HTTP POST de notificação do evento. É recomendável que seja um endereço que use SSL, ou seja, que inicie com `https://`.

### Tipo da Requisição (content-type)

Você pode escolher por receber a requisição no formato `application/json` ou `application/x-www-form-urlencoded`. Essa configuração será usada no cabeçalho `Content-Type` da requisição.

Exemplo de conteúdo da requisição no formato `application/json`:

<pre class="json">
{"event_code":"ping","webhook":{"id":11,"url":"http://requestb.in/15a0nqn1"}}
</pre>

Exemplo de conteúdo da requisição no formato `application/x-www-form-urlencoded`:

<pre class="http">
payload[event_code]=ping&payload[webhook][id]=11&payload[webhook][url]=http://requestb.in/15a0nqn1
</pre>

### Verificação SSL

Por padrão, o sistema irá verificar o certificado SSL quando a URL for `https`. É altamente recomendável deixar a verificação SSL ativa. Se você estiver tendo problemas por conta do certificado SSL ou não tem um certificado SSL emitido por um certificador conhecido, você pode desabilitar a verificação ssl. Faça isso somente se estiver muito certo do que está fazendo.

### Eventos

Eventos que irão disparar notificações para este webhook. Selecionando **Todos os eventos (atuais e futuros).** você receberá os novos eventos que venham a ser implementados após a configuração deste webhook.

É importante selecionar apenas os eventos relevantes para a integração que você está desenvolvendo, para reduzir a carga no seu servidor.

### Ativo?

A qualquer momento você pode ativar e desativar o webhook. Quando o webhook está inativo e um evento ocorre no sistema, a notificação não é criada. Se o evento é ativado posteriormente, essa notificação será perdida, mas todas as próximas serão criadas no momento que os eventos forem ocorrendo. Em outras palavras, o sistema verifica se o webhook está ativo ou não no momento que o evento ocorre para determinar se a notificação será criada ou não.