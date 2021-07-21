---
title: BOCOM BBM
position: 10
en: "/en/bank_contracts/bocombbm"
layout: pt
---

## BOCOM BBM

| Carteiras                | Slug
| ------------------------ | ------------
| 21                       | bbm-bs-21


<!--### Ocorrências

### CNAB Sem Suporte

| Our code | Descrição                                           | Suporte Banco | Suporte Boleto Simples |
|:---------|:----------------------------------------------------|:--------------|:-----------------------|
| 1001     | Entrada de título                                   | Sim           | Sim                    |
| 1002     | Pedido de baixa                                     | Sim           | Sim                    |
| 1003     | Alteração de vencimento                             | Sim           | [Veja tabela](https://suporte.boletosimples.com.br/article/pten2qs3c0-posso-alterar-a-data-de-vencimento-e-o-valor-de-um-boleto-j-emitido)                           |
| 1004     | Concessão de abatimento                             | Sim           | Sim                    |
| 1005     | Cancelamento de abatimento                          | Sim           | Sim                    |
| 1031     | Alteração de outros dados                           | Não           | Não                    |
| 1034     | Pago diretamente ao beneficiário                    | Sim           | Não                    |
| 1047     | Não cobrar juros                                    | Sim           | Sim                    |
| 1071     | Concessão de desconto                               | Sim           | Não                    |
| 1072     | Cancelamento de desconto                            | Sim           | Sim                    |
| 1073     | Alteração do valor do desconto                      | Sim           | Não                    |
| 1074     | Alteração do valor ou percentual de multa           | Sim           | Não                    |
| 1075     | Não cobrar multa                                    | Sim           | Sim                    |
| 1076     | Alteração de juros de mora                          | Sim           | Não                    |
| 1077     | Alteração do valor de abatimento                    | Sim           | Não                    |
| 1123     | Alteração de espécie de título                      | Não           | Não                    |

<!--- comment: old occurrences for reference in the documentation
| 1007     | Alteração do "uso da empresa"                       | Sim           | Não                    |
| 1008     | Alteração do "seu número"                           | Sim           | Não                    |
| 1009     | Protestar                                           | Sim           | Não                    |
| 1010     | Não protestar                                       | Sim           | Não                    |
| 1011     | Protesto para fins falimentares                     | Não           | Não                    |
| 1012     | Alterar nome do pagador                             | Não           | Não                    |
| 1013     | Alteração de endereço do pagador                    | Não           | Não                    |
| 1014     | Alterar Cidade do pagador                           | Não           | Não                    |
| 1015     | Alterar UF do pagador                               | Não           | Não                    |
| 1017     | Alteração do número de dias para protesto           | Não           | Não                    |
| 1018     | Sustar o protesto                                   | Sim           | Não                    |
| 1019     | Sustar protesto e manter em carteira                                   | Não           | Não            |
| 1020     | Alterar CPF/CNPJ do pagador                         | Não           | Não                    |
| 1021     | Alteração de valor com emissão de Boleto (quando a emissão é pelo Banco)                         | Não           | Não                    |
| 1022     | Transferência cessão crédito ID. Prod. 10           | Não           | Não                    |
| 1023     | Transferência entre carteiras                       | Não           | Não                    |
| 1024     | Dev. transferências entre carteiras                 | Não           | Não                    |
| 1028     | Alterar Valor                                       | Não           | [Veja tabela](https://suporte.boletosimples.com.br/article/pten2qs3c0-posso-alterar-a-data-de-vencimento-e-o-valor-de-um-boleto-j-emitido)                    |
| 1038     | Alterar CEP do pagador                              | Não           | Não                    |
| 1066     | Solicitar negativação expressa                      | Não           | Não                    |
| 1067     | Não negativar                                       | Não           | Não                    |
| 1068     | Excluir negativação expressa                        | Não           | Não                    |
| 1069     | Cancelar negativação expressa                       | Não           | Não                    |
| 1078     | Sustar protesto e baixar título                     | Sim           | Não                    |
| 1079     | Alterar dados do sacado                             | Sim           | Não                    |
| 1080     | Alterar dados do sacador avalista                   | Sim           | Não                    |
| 1081     | Reembolso e transferência Desconto e Vendor         | Não           | Não                    |
| 1082     | Reembolso e devolução Desconto e Vendor             | Não           | Não                    |
| 1083     | Inclusão de ocorrência                              | Não           | Não                    |
| 1084     | Exclusão de ocorrência                              | Não           | Não                    |
| 1085     | Pedido de devolução                                 | Não           | Não                    |
| 1086     | Pedido de devolução (entregue ao sacado)            | Não           | Não                    |
| 1087     | Pedido dos títulos em aberto                        | Não           | Não                    |
| 1093     | Acerto nos dados do rateio de crédito               | Não           | Não                    |
| 1094     | Cancelamento do rateio de crédito                   | Não           | Não                    |
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