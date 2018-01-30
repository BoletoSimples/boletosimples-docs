---
title: Notificações do Webhook
position: 6
layout: pt
en: "/en/webhooks/deliveries"
---

## Notificações do Webhook

Cada vez que um evento ocorre no sistema e um webhook está ativo e configurado para receber o evento, uma notificação é criada e entregue.

Na página do webhook, abaixo das informações cadastradas, você pode acompanhar as notificações e os detalhes da requisição.

![](/img/webhook-deliveries.png)

Esta área é muito útil para inspecionar o que aconteceu em cada caso.

### Requisição

Na aba requisição você pode inspecionar os cabeçalhos enviados e seus valores, o corpo da mensagem e o payload estruturado.

### Resposta

Na aba Resposta você pode inspecionar os cabeçalhos retornados e seus valores e o corpo da resposta.

### Reenviando a notificação

Caso o seu sistema tenha dado algum erro e você deseje receber a notificação novamente, você pode reenviá-la através desta área.

Quando você reenvia a notificação, as informações da requisição e da respostaa, bem como duração são sobrescritas.

No momento do reenvio são usadas as configurações do webhook atuais, ou seja, se o endereço do webhook mudou entre o momento que a notificação foi criada e o momento que ela está sendo reenviada, o novo endereço será usado no reenvio.

É importante ressaltar que isso não é uma operação comum e deve ser usada apenas enquanto se desenvolve uma integração.