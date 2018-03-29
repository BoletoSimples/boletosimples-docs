---
title: Módulo TOTVS RM
en: "/en/modules/totvs-rm"
layout: pt
---

## Módulo Oficial TOTVS RM

[TOTVS](https://www.totvs.com) é a empresa líder do mercado brasileiro de ERP. Ela possui alguns sistemas de gestão, dentre eles o RM.

A integração realiza a geração dos boletos a partir dos títulos cadastrados no contas a receber e permite baixa automática pelo agendamento de processos.

### Código Fonte

O código fonte deste módulo não é disponibilizado.

### Requisitos

* RM 12.1.18.180 ou superior

### Download

* [BoletoSimplesTOTVS-RM](/uploads/BoletoSimples-TOTVSRM.zip)

### Instalação

⦁   Acesse o menu Serviços Globais | Metadados | Projeto, onde devem ser importados os projetos de metadados disponibilizados no arquivo:

“BoletoSimples-TOTVSRM.TotvsMD”.

![1.png](/uploads/1.png)

Após importação, deve ser executado o processo “Gerar Projeto de Metadados” para cada um dos projetos importados.

![2.png](/uploads/2.png)

⦁   Acesse o menu Gestão Financeira | Customização | Parâmetros Boleto Simples, onde devem ser definidos os seguintes campos:

**Status:**  define se a integração está ativa ou inativa.

**Ambiente:** define o ambiente que está sendo integrado com o Boleto Simples.

**Token de Acesso:** deve ser informado o token de acesso do ambiente do Boleto Simples.

Usar Conta Caixa associada ao convênio do boleto: define se será usado a conta caixa associada ao convênio do boleto no momento da baixa realizado pelo processo ‘Consulta de Status Boleto Simples’.

Conta Caixa: define a conta caixa que será usada no momento da baixa do boleto, se o parâmetro acima estiver desmarcado.

Meio de Pagamento: define o meio de pagamento que será usado na baixa realizada pelo processo ‘Consulta de Status Boleto Simples’.

![3.png](/uploads/3.png)

⦁   Acesse o menu Gestão | Fórmula Visual | Fórmula Visual onde devem ser importadas as fórmulas visuais responsáveis pela integração com o Boleto Simples, disponibilizadas no arquivo:

“BoletoSimples-TOTVSRM.TotvsWF”

![4.png](/uploads/4.png)


**Utilização:**

⦁   Após salvar o registro no cadastro de convênio do TOTVS Gestão Financeira, será feita a integração incluindo uma carteira no Boleto Simples. Se o convênio já tiver sido integrado com o Boleto Simples as informações alteradas no convênio serão alteradas no Boleto Simples.

⦁   Após execução do processo de inclusão de boleto no TOTVS Gestão Financeira será feita a integração incluindo o boleto no Boletos Simples, caso o convenio associado ao boleto esteja integrado. O status da remessa do boleto no TOTVS Gestão Financeira será alterado para Remetido.

⦁   Para atualizar o status do boleto no TOTVS Gestão Financeira deve ser executada a fórmula visual “Consulta Status do Boleto”, menu Gestão | Fórmula Visual | Executar, onde será consultado o status do boleto no Boleto Simples. Caso o boleto estiver com status de “Pago” ou “Cancelado” no Boleto Simples será realizado a baixa ou cancelamento do boleto no TOTVS Gestão Financeira respectivamente. Essa fórmula visual pode ser agendada.