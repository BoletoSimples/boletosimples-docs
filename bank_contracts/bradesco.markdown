---
title: Bradesco
position: 1
en: "/en/bank_contracts/bradesco"
layout: pt
---

## Bradesco

| Carteiras                                       | Slug
| ----------------------------------------------- | ------------
| 02                                              | bradesco-bs-02
| 03                                              | bradesco-bs-03
| 04                                              | bradesco-bs-04
| 05 Recebimento Programado Bradesco - RPB        | bradesco-bs-05
| 06 Sem registro                                 | bradesco-bs-06
| 07                                              | bradesco-bs-07
| 09 Com registro                                 | bradesco-bs-09
| 12                                              | bradesco-bs-12
| 16 Com/Sem registro com protesto                | bradesco-bs-16
| 17                                              | bradesco-bs-17
| 19 Com registro                                 | bradesco-bs-19
| 21 Com registro - Pagável somente no Bradesco)  | bradesco-bs-21
| 22 Sem registro - Pagável somente no Bradesco)  | bradesco-bs-22
| 25 Sem registro - Emissão na Internet)          | bradesco-bs-25
| 26 Com registro - Emissão na Internet)          | bradesco-bs-26


### Ocorrências

#### CNAB 240

| Our code | Descrição                                           | Suporte Banco | Suporte Boleto Simples |
|:---------|:----------------------------------------------------|:--------------|:-----------------------|
| 1001     | Entrada de título                                   | Sim           | Sim                    |
| 1002     | Pedido de baixa                                     | Sim           | Sim                    |
| 1003     | Alteração de vencimento                             | Sim           | [Veja tabela](https://suporte.boletosimples.com.br/article/pten2qs3c0-posso-alterar-a-data-de-vencimento-e-o-valor-de-um-boleto-j-emitido)                           |
| 1004     | Concessão de abatimento                             | Sim           | Sim                    |
| 1005     | Cancelamento de abatimento                          | Sim           | Sim                    |
| 1009     | Protestar                                           | Sim           | Sim                    |
| 1011     | Protesto para fins falimentares                     | Sim           | Sim                    |
| 1018     | Sustar o protesto                                   | Sim           | Sim                    |
| 1019     | Sustar protesto e manter em carteira                | Sim           | Sim                    |
| 1031     | Alteração de outros dados                           | Sim           | Sim               |
| 1034     | Pago diretamente ao beneficiário                    | Não           | Não                    |
| 1047     | Não cobrar juros                                    | Não           | Sim                    |
| 1071     | Concessão de desconto                               | Não           | Não                    |
| 1073     | Alteração do valor do desconto                      | Não           | Não                    |
| 1074     | Alteração do valor ou percentual de multa           | Não           | Não                    |
| 1075     | Não cobrar multa                                    | Não           | Sim                    |
| 1076     | Alteração de juros de mora                          | Não           | Não                    |
| 1077     | Alteração do valor de abatimento                    | Não           | Não                    |
| 1120     | Alterar número do título dado pelo beneficiario     | Não           | Não                    |
| 1121     | Alterar número controle do Participante             | Não           | Não                    |
| 1079     | Alterar dados do sacado                             | Não           | Não                    |
| 1080     | Alterar dados do sacador avalista                   | Não           | Não                    |
| 1093     | Acerto nos dados do rateio de crédito               | Sim           | Não                    |
| 1094     | Cancelamento do rateio de crédito                   | Sim           | Não                    |
| 1122     | Alterar número controle do Participante             | Não           | Não                    |
| 1123     | Alterar número controle do Participante             | Não           | Não                    |

#### CNAB 400

| Our code | Descrição                                           | Suporte Banco | Suporte Boleto Simples |
|:---------|:----------------------------------------------------|:--------------|:-----------------------|
| 1001     | Entrada de título                                   | Sim           | Sim                    |
| 1002     | Pedido de baixa                                     | Sim           | Sim                    |
| 1004     | Concessão de abatimento                             | Sim           | Sim                    |
| 1005     | Cancelamento de abatimento                          | Sim           | Sim                    |
| 1003     | Alteração de vencimento                             | Sim           | [Veja tabela](https://suporte.boletosimples.com.br/article/pten2qs3c0-posso-alterar-a-data-de-vencimento-e-o-valor-de-um-boleto-j-emitido)                           |
| 1007     | Alteração do "uso da empresa"                       | Sim           | Não                    |
| 1008     | Alteração do "seu número"                           | Sim           | Não                    |
| 1009     | Protestar                                           | Sim           | Sim                    |
| 1011     | Protesto para fins falimentares                     | Sim           | Sim                    |
| 1018     | Sustar o protesto                                   | Sim           | Sim                    |
| 1019     | Sustar protesto e manter em carteira                | Sim           | Sim                    |
| 1028     | Alterar Valor                                       | Sim           | [Veja tabela](https://suporte.boletosimples.com.br/article/pten2qs3c0-posso-alterar-a-data-de-vencimento-e-o-valor-de-um-boleto-j-emitido)                           |
| 1031     | Alteração de outros dados                           | Sim           | Sim                  |
| 1034     | Pago diretamente ao beneficiário                    | Não           | Não                    |
| 1066     | Solicitar negativação expressa                      | Sim           | Sim                    |
| 1068     | Excluir negativação expressa                        | Sim           | Sim                    |
| 1069     | Cancelar negativação expressa                       | Sim           | Sim                    |

<!--- comment: old occurrences for reference in the documentation
| 1010     | Não protestar                                       | Sim           | Sim                    |
| 1012     | Alterar nome do pagador                             | Não           | Não                    |
| 1013     | Alteração de endereço do pagador                    | Não           | Não                    |
| 1014     | Alterar Cidade do pagador                           | Não           | Não                    |
| 1015     | Alterar UF do pagador                               | Não           | Não                    |
| 1017     | Alteração do número de dias para protesto           | Não           | Não                    |
| 1020     | Alterar CPF/CNPJ do pagador                         | Não           | Não                    |
| 1021     | Alteração de valor com emissão de Boleto (quando a emissão é pelo Banco)                         | Sim           | Não                    |
| 1022     | Transferência cessão crédito ID. Prod. 10           | Sim           | Não                    |
| 1023     | Transferência entre carteiras                       | Sim           | Não                    |
| 1024     | Dev. transferências entre carteiras                 | Sim           | Não                    |
| 1038     | Alterar CEP do pagador                              | Não           | Não                    |
| 1067     | Não negativar                                       | Não           | Não                    |
| 1072     | Cancelamento de desconto                            | Não           | Não                    |
| 1081     | Reembolso e transferência Desconto e Vendor         | Não           | Não                    |
| 1082     | Reembolso e devolução Desconto e Vendor             | Não           | Não                    |
| 1083     | Inclusão de ocorrência                              | Não           | Não                    |
| 1084     | Exclusão de ocorrência                              | Não           | Não                    |
| 1085     | Pedido de devolução                                 | Não           | Não                    |
| 1086     | Pedido de devolução (entregue ao sacado)            | Não           | Não                    |
| 1087     | Pedido dos títulos em aberto                        | Não           | Não                    |
| 1095     | Alteração do prazo de devolução                     | Não           | Não                    |
| 1096     | Alteração da opção de protesto para devolução       | Não           | Não                    |
| 1097     | Alteração da opção de devolução para protesto       | Não           | Não                    |
| 1098     | Alt. número cont. cedente                           | Não           | Não                    |
| 1099     | Alteração de pagador                                | Não           | Não                    |
| 1100     | Pedido de débito em conta                           | Não           | Não                    |
| 1101     | Alteração de nome e endereço do sacado              | Não           | Não                    |
| 1102     | Retificar dados da concessão de desconto            | Não           | Não                    |
| 1103     | Alterar data para concessão de desconto             | Não           | Não                    |
| 1104     | Cobrar multa                                        | Não           | Não                    |
| 1105     | Dispensar indexador                                 | Não           | Não                    |
| 1106     | Dispensar prazo limite de recebimento               | Não           | Não                    |
| 1107     | Alterar prazo limite de recebimento                 | Não           | Não                    |
| 1108     | Alterar modalidade                                  | Não           | Não                    |
| 1109     | Exclusão de sacador avalista                        | Não           | Não                    |
| 1110     | Cancelamento de instrução                           | Não           | Não                    |
| 1111     | Alterar vencimento e sustar protesto                | Não           | Não                    |
| 1112     | Beneficiário não concorda com a alegação do pagador | Não           | Não                    |
| 1113     | Alteração de dados extras (registro de multa)       | Não           | Não                    |
| 1114     | Descontar títulos encaminhados no dia               | Não           | Não                    |
-->