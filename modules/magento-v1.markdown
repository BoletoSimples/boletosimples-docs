---
title: Módulo Magento V1 - API do Boleto Simples
layout: pt
en: "/en/modules/magento-v1"
---

## Módulo Oficial Magento v1

[Magento](https://magento.com/) é um dos sistema de loja virtual open-source desenvolvido em PHP mais usados no Brasil. A comunidade de desenvolvedores Magento é grande. Esse sistema é comumente usado por lojas de grande porte.

### Código Fonte

O código fonte do módulo oficial do Boleto Simples para Magento v1 está disponível em: [https://github.com/BoletoSimples/boletosimples-magento-v1](https://github.com/BoletoSimples/boletosimples-magento-v1)

### Informações Técnicas

**Autores:** [dhyegofernando](https://github.com/dhyegofernando)

**Patrocinador:** [Código5](https://www.codigo5.com.br/)

**Licença:** [MIT License](https://mit-license.org/)

### Requisitos

* PHP 5.4.x
* Magento

#### Versões suportadas do Magento

- 1.6.x
- 1.7.x
- 1.8.x
- 1.9.x

### Instalação

1. Faça o [download dos arquivos](https://github.com/BoletoSimples/boletosimples-magento-v1/archive/master.zip) e descompacte os arquivos;
2. Copie todos os arquivos da pasta `src/` do módulo e cole na raiz da sua loja Magento;
3. Vá até `Sistema > Gerenciar Cache`;
4. Clique em **Liberar Cache Armazenado** para limpar o cache do Magento;
5. Pronto, a instalação está concluída.

### Configuração

#### 1. Configuração da sua conta Boleto Simples
1. Crie uma conta no [Boleto Simples](https://boletosimples.com.br/?ref=nmylb);
2. Com a conta criada gere um Token em [Boleto Simples > API](https://boletosimples.com.br/conta/api/tokens) e guarde-o em um local seguro para usarmos posteriormente;
4. Pronto, conta configurada.

#### 2. Pré-configuração do Módulo

##### 2.1 Verificação do Campo CPF/CNPJ
Caso seu template não tenha o campo CPF/CNPJ habilitado, siga os seguintes passos:
1. Vá até `Sistema > Configuração > Clientes > Configurações > Opções ao Criar Nova Conta`;
2. Certifique-se de que a opção "Exibir CPF/CNPJ no Frontend" esteja habilitada;
3. Caso não esteja, você deve habilitar e clicar em *Salvar*;

##### 2.2 Verificação dos Campos de Endereço
1. Vá até `Sistema > Configuração > Clientes > Configurações > Opções de Nome e Endereço`;
2. Certifique-se que a opção **Número de Linhas p/ Endereço** está atribuída como **4**;
3. Caso não esteja, você deve definir como **4** e clicar em *Salvar*;

#### 3. Configuração do Módulo
1. Siga todos os passos das [Pré-configuração do Módulo](https://github.com/BoletoSimples/boletosimples-magento-v1/blob/master/README.md#2-pré-configuração-do-módulo) antes de prosseguir;
2. Vá até `Sistema > Configuração > Vendas > Métodos de Pagamento > Boleto Simples`;
3. Habilite o **Boleto Simples** e preencha como preferir a opção de **Ordem de Exibição** e **Título**;
4. Copie o token gerado da sua conta através do [site do Boleto Simples](https://boletosimples.com.br/conta/api/tokens) e cole na opção **Token de Acesso**;
5. Deixe a opção **Chave Secreta do Webhook** vazia para ser preenchida automaticamente;
6. Especifique em quantos dias seu Boleto vence após ser gerado na opção **Dias para Vencimento**;
7. Só mude a opção **Novo Status do Pedido** caso você saiba o que está fazendo;
8. Na opção **Atributo CPF/CNPJ do Cliente**, escolha o atributo que condiz com o CPF/CNPJ do cadastro dos seus clientes;
9. Se necessário, altere as **Linhas dos Atributos de Endereço** de acordo com seu template;
10. Salve as configurações e verifique se você recebeu com sucesso a *mensagem de boas-vindas*;
11. Tudo pronto para receber pagamentos via boleto bancário usando o **Boleto Simples**.

### Screenshots

![](/img/modules/magento-v1/screenshot-1.png)

![](/img/modules/magento-v1/screenshot-2.png)
