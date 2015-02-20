---
layout: pt
title: Eventos - API do Boleto Simples
en: /en/webhooks/events
---

## Eventos

Alguns eventos que ocorrem dentro do Boleto Simples são registrados. Todos eles, quando registrados, geram notificações para cada webhook que esteja ativo e configurado para receber o respectivo evento.
Você pode acessar a qualquer momento o [Log de Eventos](https://boletosimples.com.br/conta/eventos) da sua conta.

Os códigos dos eventos seguem um padrão `resource.event`, onde `resource` é o nome do recursos que gerou o evento e `event` é a ação propriamente dita.

Abaixo a listagem de eventos registrados pelo Boleto Simples:

| Código                | Descrição                                          |
|-----------------------|----------------------------------------------------|
| bank_billet.created   | Toda vez que um boleto é criado.                   |
| bank_billet.generated | Toda vez que um boleto é gerado.                   |
| bank_billet.updated   | Toda vez que um boleto é atualizado.               |
| bank_billet.canceled  | Toda vez que um boleto é cancelado.                |
| bank_billet.overdue   | Toda vez que um boleto fica vencido.               |
| bank_billet.paid      | Toda vez que um boleto é pago.                     |
| bank_billet.blocked   | Toda vez que o pagamento de um boleto é bloqueado. |
| customer.created      | Toda vez que um cliente é criado.                  |
| customer.updated      | Toda vez que um cliente é atualizado.              |
| customer.deleted      | Toda vez que um cliente é excluído.                |
| transaction.created   | Toda vez que uma transação é criada.               |
| transaction.updated   | Toda vez que uma transação é atualizada.           |
| transaction.processed | Toda vez que uma transação é processada.           |
| ping                  | Evento especial para testar o webhook.             |

### Evento Ping

O evento `ping` é um evento especial para testar se a URL do webhook está funcionando. Quando um webhook é criado uma notificação também é criado com o evento `ping`.

Esse evento não é registrado no log de eventos da conta.

### Eventos Coringas

Ao configurar o webhook é possível se inscrever nos eventos acima e nos eventos coringas. Eventos coringas não são eventos que acontecem dentro do Boleto Simples, eles são apenas representações de um conjunto de eventos para determinar que notificações o webhook deve receber.

| Código                | Descrição                                          |
|-----------------------|----------------------------------------------------|
| *                     | Todos os eventos. Se o webhook estiver configurado para este evento, não é mais necessário configurar para nenhum outro evento e o seu sistema receberá notificação para todos os eventos que ocorrerem no Boleto Simples. Além disso, o webhook estará configurado para receber todo e qualquer evento que venha ser implementado posteriormente. |
| bank_billet.*         | Todos os eventos relacionados a boleto bancário, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| customer.*            | Todos os eventos relacionados a cientes, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| transaction.*         | Todos os eventos relacionados a transações, inclusive os novos eventos que sejam implementados após a criação do webhook. |
