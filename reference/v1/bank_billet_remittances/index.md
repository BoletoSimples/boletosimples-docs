---
layout: pt
title: Registro de Remessa - API do Boleto Simples
en: /en/references
breadcrumb: Registro de Remessa
---

## Registro de Remessa

| Recurso                          | Descrição
| -------------------------------- | ------------------------
| [GET /api/v1/bank_billet_remittances](#listar-registros)   | Listar Registros de Remessa
| [POST /api/v1/bank_billet_remittances/:id/occurrence/:code](#criar-registro-de-remessa)    | Adicionar Boleto na lista de envio para o banco
| [GET /api/v1/bank_billet_remittances/pending](#listar-pendentes)   | Listar Registros de Remessa pendentes

### Modelo de Dados

| Parâmetro                   | Obr.  | Tipo    | Tamanho | Descrição
| --------------------------- | ----- | ------- | ------- | ------------------------
| **id**                      | N/A   | Integer |         | ID da carteira
| **our_code**                | Sim   | String  | 6       | Código
| **occurrence**              | Não   | String  | 3       | Ocorrência
| **remittance_id**           | Sim   | Integer |         | ID da Remessa
| **bank_billet_id**          | Sim   | Integer |         | ID do Boleto
| **bank_billet_account_id**  | Sim   | Integer |         | ID da Carteira
| **processed_at**            | Sim   | Date    |         | Quando foi processado
| **occurrence_detail**       | Sim   | String  |         | Descrição do evento na Remessa
| **created_at**              | Sim   | Date    |         | Quando foi criado
