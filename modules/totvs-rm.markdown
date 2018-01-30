---
title: Módulo TOTVS RM - API do Boleto Simples
layout: pt
en: "/en/modules/totvs-rm"
---

## Módulo Oficial TOTVS RM

[TOTVS](https://www.totvs.com) é a empresa líder do mercado brasileiro de ERP. Ela possui alguns sistemas de gestão, dentre eles o RM.

A integração realiza a geração dos boletos a partir dos títulos cadastrados no contas a receber e permite baixa automática pelo agendamento de processos.

### Código Fonte

O código fonte deste módulo não é disponibilizado.

### Requisitos

* RM 12.1 ou superior

### Download

* [BoletoSimples-TOTVS-RM.zip (46KB)](/downloads/BoletoSimples-TOTVS-RM.zip)

### Instalação

*	Fazer o upload das DLLs da customização para a pasta Custom onde foi instalado a biblioteca RM. Exemplo: `C:\TOTVS\RM.Net\Custom`.
*	Executar o script, que será gerando na aquisição da customização, na base de dados para carregar as tabelas com dos dados da customização.

*Atenção:* Após atualização das DLLs deve ser apagado o arquivo `_broker.dat` e reiniciado o `RM.Host.Service.exe` ou o `RM.Host.exe`.

### Configuração

•	Acesse o menu `Customização | Parâmetros Integração Boleto Simples`, onde devem ser definidos os seguintes campos:

*Status da Integração:* define se a integração está ativa ou inativa.

*Ambiente:* define o ambiente que está sendo integrado com o Boleto Simples.

*Token de Acesso:* deve ser informado o token de acesso do ambiente do Boleto Simples.

*Usa Conta Caixa associada ao convênio do boleto:* define se será usado a conta caixa associada ao convênio do boleto no momento da baixa realizado pelo processo `Consulta de Status Boleto Simples`.

*Conta Caixa:* define a conta caixa que será usada no momento da baixa do boleto, se o parâmetro acima estiver desmarcado.

*Meio de Pagamento:* define o meio de pagamento que será usado na baixa realizada pelo processo `Consulta de Status Boleto Simples`.

### Screenshots

![](/img/modules/totvs-rm/screenshot-1.png)

![](/img/modules/totvs-rm/screenshot-2.png)

![](/img/modules/totvs-rm/screenshot-3.png)

![](/img/modules/totvs-rm/screenshot-4.png)

![](/img/modules/totvs-rm/screenshot-5.png)
