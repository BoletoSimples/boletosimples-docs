---
layout: pt
title: Módulo Shopify - API do Boleto Simples
en: /en/modules/shopify
---

## Módulo Oficial Shopify

[Shopify](https://shopify.com/) é uma plataforma de loja virtual como serviço em cloud.

A integração é feita por meio de um middleware de integração e não é necessário usar código de programação.

### Código Fonte

O código fonte do módulo oficial do Boleto Simples para Shopify está disponível em: [https://github.com/BoletoSimples/boletosimples-shopify](https://github.com/BoletoSimples/boletosimples-shopify)

### Informações Técnicas

**Autores:** [rafaelp](https://github.com/rafaelp)

**Licença:** [MIT License](https://mit-license.org/)

### Requisitos

* Conta no Shopify

### Instalação

Este módulo não requer instalação.

### Configuração

#### Configuração do Boleto Simples

2. Gere um Token em [Boleto Simples - API](https://boletosimples.com.br/conta/api/tokens);
3. Crie um [Novo WebHook](https://boletosimples.com.br/conta/api/webhooks) e em **Endereço para o Payload (URL)** preencha com `http://seusite.com.br/?wc-api=WC_BoletoSimples_Gateway` onde seusite.com.br deve ser trocado para o site da sua loja. Nos eventos deixe marcado apenas **Todos os eventos de boleto (atuais e futuros).**;
4. Pronto, conta configurada.

#### Configuração do Shopify

1. Crie uma loja no Shopify

1. Entre na página de `Dashboard` da sua loja

1. Inclua um pagamento manual nas configurações de Checkout

	1. Clique em `Settings`

	1. Clique em `Checkout`

	1. Selecione `Custom payment method` na área `Manual Payments`

	1. No campo `Name of the custom payment method` coloque: `Boleto Bancário`

		*Atenção:* É importante colocar exatamente *Boleto Bancário* com as maiúsculas e com o acento.
		Se o termo utilizado for diferente, a integração não irá funcionar.
		Pode escrever o que quiser nas instruções de pagamento (Enter the payment instructions) como por exemplo:
		*Você irá receber por e-mail um boleto bancário para pagamento.*

	1. Clique em `Save`

1. Cadastre uma notificação Webhook

	1. Clique em `Settings`

	1. Clique em `Notifications`

	1. Clique em `Create a webhook` na área chamada Webhooks no final da página

	1. Seleciona `Order creation` em `Event`

	1. Deixe selecionado `JSON` em `Format`

	1. Em `URL` coloque o endereço:

		`http://shopify.boletosimples.com.br/TOKEN`

		*TOKEN* é o token de autenticação do seu usuário no Boleto Simples.
		Para pegar o *Token de Autenticação* do seu usuário, acesse o menu [Minha Conta > API](https://boletosimples.com.br/conta/api/tokens)

		  Para escolher a conta de cobrança que será usada na criação do boleto, use:

        `http://shopify.boletosimples.com.br/TOKEN/ID_CARTEIRA`

        *ID_CARTEIRA* é o ID da *Carteira de Cobrança* que será usada para geração do boleto.

	1. Clique em `Save webhook`

1. Faça uma compra de teste e verifique se o boleto bancário será gerado na sua conta do Boleto Simples

### Observações

Os boletos serão gerados com vencimento para 3 dias após a data do pedido.