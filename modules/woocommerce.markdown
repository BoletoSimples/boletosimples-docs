---
title: Módulo Woocommerce
layout: pt
en: "/en/modules/woocommerce"
---

## Módulo Oficial Wordpress/WooCommerce

[WooCommerce](https://woocommerce.com/) é um sistema de loja virtual open-source desenvolvido em PHP e baseado em WordPress.

A integração é completa para vender por boleto e ainda conta com sistema de retorno que avisa quando o boleto é pago, atualizando o status do seu pedido para processando.

### Código Fonte

O código fonte do módulo oficial do Boleto Simples para WooCommerce está disponível em: [https://github.com/BoletoSimples/boletosimples-woocommerce](https://github.com/BoletoSimples/boletosimples-woocommerce)

### Informações Técnicas

**Autores:** [claudiosanches](https://github.com/claudiosanches), [kivanio](https://github.com/kivanio)

**Licença:** [GPLv2 ou superior](http://www.gnu.org/licenses/gpl-2.0.html)

### Requisitos

* PHP 5.6 ou superior
* [WooCommerce 2.5 ou superior](https://woocommerce.com/download)
* [WooCommerce Extra Checkout Fields for Brazil](https://wordpress.org/plugins/woocommerce-extra-checkout-fields-for-brazil/)

### Instalação

* Faça upload dos arquivos do plugin para a sua pasta de plugins ou faça a instalação usando o instalador do WordPress em `Plugins > Adicionar Novo`;
* Ative o plugin.

### Configuração

#### Configuração do Boleto Simples

2. Gere um Token em [Boleto Simples - API](https://app.kobana.com.br/conta/api/tokens);
3. Crie um [Novo WebHook](https://app.kobana.com.br/conta/api/webhooks) e em **Endereço para o Payload (URL)** preencha com `http://seusite.com.br/?wc-api=WC_BoletoSimples_Gateway` onde seusite.com.br deve ser trocado para o site da sua loja. Nos eventos deixe marcado apenas **Todos os eventos de boleto (atuais e futuros).**;
4. Pronto, conta configurada.

#### Configuração do Plugin

1. Vá até `WooCommerce > Configurações > Finalizar compra > Boleto Simples`;
2. Habilite o **Boleto Simples** e preencha como preferir as opções de *Título* de *Descrição*;
3. Digite o token gerado na sua conta do **Boleto Simples**;
5. Salve as configurações;
6. Vá até `WooCommerce > Configurações > Produtos > Inventário`;
7. Deixe em branco a opção **Manter estoque (minutos)** (isso evita problemas com contas canceladas antes do cliente pagar o boleto).
8. Salve novamente as configurações;
9. Tudo pronto para receber pagamentos via boleto bancário usando o **Boleto Simples**.

#### Configuração do plugin para CPF/CNPJ

1. Instale e ative o plugin [WooCommerce Extra Checkout Fields for Brazil](https://wordpress.org/plugins/woocommerce-extra-checkout-fields-for-brazil/)
2. Vá até `WooCommerce > Campos do Checkout`;
3. Escolha 'CPF e CNPJ' em 'Exibir Tipo de Pessoa'
4. Marque a opção 'Caso esteja marcado os campos de Pessoa Física e Pessoa Jurídica serão obrigatórios apenas no Brasil.'
5. Deixe as opções de validação de e-mail, cpf, cnpj todas ativas(Ajuda a evitar fraudes)
6. Salve as configurações.

### Screenshots

![](/img//modules/woocommerce/screenshot-1.png)

### Customizações

É possível usar qualquer um dos exemplos abaixo dentro do `functions.php` do seu tema ou criando um plugin (veja como em [WordPress - Writing a Plugin](http://codex.wordpress.org/Writing_a_Plugin)).

#### Adicionar um ícone no método de pagamento:


	/**
	 * Adicionar um ícone para Boleto Simples.
	 *
	 * @param  string $url String vazia.
	 *
	 * @return string      Link para o seu ícone.
	 */
	function custom_woocommerce_boletosimples_icon( $url ) {
		return 'link do ícone';
	}

	add_filter( 'woocommerce_boletosimples_icon', 'custom_woocommerce_boletosimples_icon' );


#### Alterar os parametros postados para o Boleto Simples:


	/**
	 * Customizar os dados postados para o Boleto Simples.
	 *
	 * @param  array    $data  Dados gerados pelo plugin.
	 * @param  WC_Order $order Objeto que contém todas as informações do pedido.
	 *
	 * @return array
	 */
	function custom_woocommerce_boletosimples_billet_data( $data, $order ) {
		// aqui você pode trabalhar e alterar o array $data com o que desejar.
		// Api do Boleto Simples: http://api.boletosimples.com.br

		return $data;
	}

	add_filter( 'woocommerce_boletosimples_billet_data', 'custom_woocommerce_boletosimples_billet_data', 10, 2 );


#### Alterar as instruções do boleto na página de "obrigado" (thankyou page):


	/**
	 * Customizar as instruções sobre o boleto na página "obrigado".
	 *
	 * @param  string $message  Mensagem padrão do plugin.
	 * @param  int    $order_id ID do pedido.
	 *
	 * @return string           Novas instruções.
	 */
	function custom_woocommerce_boletosimples_thankyou_page_instructions( $message, $order_id ) {
		return 'Novas instruções';
	}

	add_filter( 'woocommerce_boletosimples_thankyou_page_instructions', 'custom_woocommerce_boletosimples_thankyou_page_instructions', 10, 2 );


#### Alterar as instruções do boleto para pedidos que estão aguardando pagamento:


	/**
	 * Customizar as instruções do boleto para pedidos que estão aguardando pagamento.
	 *
	 * @param  string   $message Mensagem padrão do plugin.
	 * @param  WC_Order $order   Objeto que contém todas as informações do pedido.
	 *
	 * @return string            Novas instruções.
	 */
	function custom_woocommerce_boletosimples_pending_payment_instructions( $message, $order ) {
		return 'Novas instruções';
	}

	add_filter( 'woocommerce_boletosimples_pending_payment_instructions', 'custom_woocommerce_boletosimples_pending_payment_instructions', 10, 2 );
