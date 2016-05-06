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

| Código                            | Descrição                                          |
|-----------------------------------|----------------------------------------------------|
| bank_billet.created               | Toda vez que um boleto é criado.                   |
| bank_billet.generated             | Toda vez que um boleto é gerado.                   |
| bank_billet.updated               | Toda vez que um boleto é atualizado.               |
| bank_billet.canceled              | Toda vez que um boleto é cancelado.                |
| bank_billet.overdue               | Toda vez que um boleto fica vencido.               |
| bank_billet.paid                  | Toda vez que um boleto é pago.                     |
| bank_billet.blocked               | Toda vez que o pagamento de um boleto é bloqueado. |
| bank_billet.due_date              | Notifica boleto com 15, 7, 3 e 1 dias antes do vencimento. |
| customer.created                  | Toda vez que um cliente é criado.                  |
| customer.updated                  | Toda vez que um cliente é atualizado.              |
| customer.deleted                  | Toda vez que um cliente é excluído.                |
| transaction.created               | Toda vez que uma transação é criada.               |
| transaction.updated               | Toda vez que uma transação é atualizada.           |
| transaction.processed             | Toda vez que uma transação é processada.           |
| withdrawal.requested              | Toda vez que um saque é solicitado.                |
| withdrawal.transferred            | Toda vez que um saque é transferido.               |
| user.updated                      | Toda vez que a conta é atualizada.                 |
| user.blocked                      | Toda vez que a conta é bloqueada.                  |
| user.bank_billet_creation_blocked | Toda vez que a emissão de boletos é bloqueada.     |
| remittance.created                | Toda vez que uma remessa é criada.                 |
| remittance.processed              | Toda vez que uma remessa é processada.             |
| remittance.downloaded             | Toda vez que uma remessa é baixada.                |
| remittance.sent                   | Toda vez que uma remessa é enviada.                |
| discharge.created                 | Toda vez que um retorno é criado.                  |
| discharge.processed               | Toda vez que um retorno é processado.              |
| plan_subscription.activated       | Toda vez que um plano é ativado.                   |
| plan_subscription.removed         | Toda vez que um plano é desativado.                |
| plan_subscription.fee             | Toda vez que um plano é cobrado.                   |
| bank_billet_account.created       | Toda vez que uma carteira de cobrança é criada.    |
| bank_billet_account.homologated   | Toda vez que uma carteira de cobrança é enviada para homologação.|
| bank_billet_account.validated     | Toda vez que uma carteira de cobrança é enviada para validação.  |
| bank_billet_account.activated     | Toda vez que uma carteira de cobrança é homologada.|
| bank_billet_account.updated       | Toda vez que uma carteira de cobrança é atualizada.|
| bank_billet_account.deleted       | Toda vez que uma carteira de cobrança é excluída.  |
| ping                              | Evento especial para testar o webhook.             |

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
| withdrawal.*          | Todos os eventos relacionados a saques, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| user.*                | Todos os eventos relacionados a conta, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| remittance.*          | Todos os eventos relacionados a remessas, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| discharge.*           | Todos os eventos relacionados a retornos, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| plan_subscription.*   | Todos os eventos relacionados a planos, inclusive os novos eventos que sejam implementados após a criação do webhook. |
| bank_billet_account.* | Todos os eventos relacionados a carteiras de cobrança, inclusive os novos eventos que sejam implementados após a criação do webhook. |
