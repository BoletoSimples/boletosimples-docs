---
layout: pt
title: Chave secreta - API do Boleto Simples
en: /en/key
---

## Chave secreta da API

#### Chave autenticadora de requisições

Em todas as [notificações](/notifications) enviadas pelo Boleto Simples, 
incluímos uma chave de autenticação.

Esta chave serve para validar que a requisição realmente saiu dos nossos servidores,
evitando assim que requisições falsas possam ser processadas pelo seu sistema.

Antes de processar qualquer notificação recebida,
compare se a chave presente na requisição é a mesma chave que está presente em sua conta no Boleto Simples.

#### Qual é a minha Chave secreta?

Para saber qual é a sua **Chave secreta da API**, 
você precisa ir na [página de API (Sandbox)](https://sandbox.boletosimples.com.br/conta/api) da sua conta.

![](/img/api-token-key.png)

A chave pode ser renovada a qualquer momento, 
sempre que você precisar ou entender que para a sua segurança, 
você deva troca-la.