---
title: Módulo WHMCS
layout: pt
en: "/en/modules/whmcs"
---

## Módulo Oficial WHMCS

[WHMCS](https://www.whmcs.com/) é um sistema de automação de faturamento e cobrança, muito usado por empresas que oferecem serviço de hospedagem.

O módulo do Boleto Simples para o WHMCS gera automaticamente os boletos com diversas configurações bem flexíveis. Apresenta o código de barras dentro da fatura e dos e-mail de fatura. Além disso dá baixa na fatura automaticamente quando um boleto é pago.

### Código Fonte

O código fonte do módulo oficial do Boleto Simples para WHMCS está disponível em: [https://github.com/BoletoSimples/boletosimples-whmcs](https://github.com/BoletoSimples/boletosimples-whmcs)

### Informações Técnicas

**Autores:** [@mauriciogofas](https://github.com/mauriciogofas)

![](https://s3.amazonaws.com/uploads.gofas.me/wp-content/uploads/2020/06/03211831/gofas_logo_preto-160-1.png)

**Licença:** [GPLv2 ou superior](http://www.gnu.org/licenses/gpl-2.0.html)

### Requisitos

* PHP 5.6 ou superior
* WHMCS

### Instalação

Ao descompactar o arquivo do download, observe que os diretórios foram distribuídos seguindo a mesma hierarquia dos diretórios padrão do WHMCS, o arquivo + pasta do módulo Gateway está localizado no diretório /modules/gateways/. Siga os passos a seguir se precisar de mais detalhes:

* Faça [download do módulo](https://github.com/BoletoSimples/boletosimples-whmcs/archive/main.zip);
* Descompacte o arquivo .zip;
* Copie o arquivo gofasboletosimples.php + o diretório /gofasboletosimples/, localizados na pasta /modules/gateways/ do arquivo recém descompactado, para a pasta /modules/gateways/ da instalação do seu WHMCS;

### Configuração

Para mais configurações e opções, veja o [README do projeto no Github](https://github.com/BoletoSimples/boletosimples-whmcs/blob/main/README.md)