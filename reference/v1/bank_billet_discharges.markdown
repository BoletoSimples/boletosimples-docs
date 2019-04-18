---
title: Registro de Retorno
position: 8
layout: pt
en: "/en/references"
breadcrumb: Registro de Retorno
---

## Registro de Retorno

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [GET /api/v1/bank_billet_discharges](#listar-registros-de-retorno)                     | Listar Registros de Retorno                     |
| [GET /api/v1/bank_billet_discharges/:id](#informações-do-registro-de-retorno)   | Informações do Registro de Retorno              |

### Modelo de Dados

| Parâmetro           | Obrigatório | Tipo    | Tamanho | Descrição                      |
| -------------------------- | ---- | ------- | ------- | ------------------------------ |
| **id**                     | N/A  | Integer |         | ID do Registro de Retorno                 |
| [**our_occurrence**](#our_occurrence)          | Não  | String  | 4       | Código da operação no Boleto Simples  |
| **discharge_id**           | Não  | Integer |         | ID do Retorno                  |
| **bank_billet_id**         | Não  | Integer |         | ID do Boleto                   |
| **processed_at**           | N/A  | Date    |         | Quando foi processado          |
| **date_of_occurrence**     | N/A  | Date    |         | Data da ocorrência             |
| **occurrence**             | N/A  | String  | 2       | Código da operação no banco     |
| **occurrence_detail**      | N/A  | String  |         | Descrição do evento no Retorno |
| **occurrence_error**       | N/A  | String  |         | Erro no retorno                |
| **occurrence_error_detail**| N/A  | String  |         | Descrição do erro no retorno   |
| **line_raw**           | N/A  | Hash/Array  |        | Linha plana com informações vindas do banco     |
| [**line_parsed**](#line_parsed)            | N/A  | Hash/Array  |        | Linha parseada com informações vindas do banco     |


### Dicionário de Dados

#### line_parsed

Conteúdo do retorno bancário. Pode mudar de acordo com o banco e o formato 240 ou 400. Se algum dos campos estiver em branco é porque o seu banco não disponibiliza essa informação.

| paid_at | Data de pagamento
| paid_amount | Valor pago
| bank_rate   | Taxa do boleto paga ao banco
| credit_at       | Data de crédito
| credit_amount | Valor do Crédito
| our_number | Nosso número
| processed_our_number_raw | Nosso número formatado
| discount     | Desconto
| billet_fine | Acréscimos(Multa/Juros cobrados)
| other_fines | Outras cobranças adicionais
| other_credit | Outros valores pagos
| value_rebate | Outras taxas
| error_code    | Código de erro
| event_type | Ocorrência bancária
| agency_number | Agência
| account_number | Conta
| banco_recebedor | Banco recebedor
| agencia_recebedora | Agência recebedora
| control_number | Número de Controle
| document_number | Número do Documento

#### our_occurrence

Código único de operação dentro do Boleto Simples

| 2001 | Entrada Confirmada
| 2002 | Entrada Rejeitada
| 2003 | Liquidação
| 2004 | Baixa de Título Confirmada
| 2005 | Baixa de Título Rejeitada
| 2006 | Alteração do Vencimento Confirmada
| 2007 | Alteração do Vencimento Rejeitada
| 2008 | Baixa Solicitada
| 2009 | Títulos em Carteira (em ser)
| 2010 | Confirmação de Recebimento de Instrução de Abatimento
| 2011 | Confirmação de Recebimento de Instrução de Cancelamento Abatimento
| 2012 | Confirmação de Recebimento de Instrução de Alteração de Vencimento
| 2013 | Franco de Pagamento
| 2014 | Liquidação Após Baixa ou Liquidação Título Não Registrado
| 2015 | Confirmação Recebimento Instrução de Protesto
| 2016 | Confirmação Recebimento Instrução de Sustação/Cancelamento de Protesto
| 2017 | Remessa a Cartório (Aponte em Cartório)
| 2018 | Retirada de Cartório e Manutenção em Carteira
| 2019 | Protestado e Baixado (Baixa por ter sido Protestado)
| 2020 | Instrução Rejeitada
| 2021 | Confirmação do Pedido de Alteração de Outros Dados
| 2022 | Débito de Tarifas/Custas
| 2023 | Ocorrências do Sacado
| 2024 | Alteração de Dados Rejeitada
| 2025 | Título pago com cheque devolvido
| 2026 | Título pago com cheque pendente de compensação
| 2027 | Liquidado sem registro
| 2028 | Liquidação Normal
| 2029 | Liquidação por Conta/Parcial
| 2030 | Liquidação por Saldo
| 2031 | Transferência de Carteira/Entrada
| 2032 | Transferência de Carteira/Baixa
| 2033 | Abatimento Concedido
| 2034 | Abatimento Cancelado
| 2035 | Liquidação em Cartório
| 2036 | Confirmação de alteração de juros de mora
| 2037 | Débito em Conta
| 2038 | Alteração do Nome do Sacado
| 2039 | Alteração do Endereço do Sacado
| 2040 | Indicação de encaminhamento a cartório
| 2041 | Sustar Protesto
| 2042 | Dispensar Juros de mora
| 2043 | Alteração do número do título dado pelo Cedente (Seu número) – 10 e 15 posições
| 2044 | Manutenção de título vencido
| 2045 | Conceder desconto
| 2046 | Não conceder desconto
| 2047 | Retificar desconto
| 2048 | Alterar data para desconto
| 2049 | Cobrar Multa
| 2050 | Dispensar Multa
| 2051 | Dispensar Indexador
| 2052 | Dispensar prazo limite para recebimento
| 2053 | Alterar prazo limite para recebimento
| 2054 | Alteração do número do controle do participante (25 posições)
| 2055 | Alteração do número do documento do sacado (CNPJ/CPF)
| 2056 | Alteração de tipo de cobrança (específico para títulos das carteiras 11 e 17)
| 2057 | Confirmação de Instrução de Parâmetro de Pagamento Parcial
| 2058 | Despesas de Protesto
| 2059 | Despesas de Sustação de Protesto
| 2060 | Débito de Custas Antecipadas
| 2061 | Confirmação do recebimento da instrução de desconto
| 2062 | Confirmação do recebimento do cancelamento do desconto
| 2063 | Solicitação de 2a via de instrumento de protesto
| 2064 | 2a via de instrumento de protesto emitida pelo cartório
| 2065 | Confirmação da alteração dos dados do sacado
| 2066 | Confirmação da alteração dos dados do sacador avalista
| 2067 | Título DDA reconhecido pelo sacado
| 2068 | Título DDA não reconhecido pelo sacado
| 2069 | Título DDA recusado pela CIP
| 2070 | Instrução de protesto processada
| 2071 | Remessa rejeitada
| 2072 | Baixa de título liquidado por edital
| 2073 | Devolução automática
| 2074 | Baixado conforme instruções
| 2075 | Arquivo levantamento
| 2076 | Pagamento em cartório
| 2077 | Alteração de dados
| 2078 | Alteração de instruções
| 2079 | Aguardando autorização para protesto por edital
| 2080 | Protesto sustado por alteração de vencimento e prazo de cartório
| 2081 | Confirmação da entrada em cartório
| 2082 | cobrança a creditar (liquidação em trânsito)
| 2083 | Título em trânsito pago em cartório
| 2084 | Reembolso e transferência Desconto e Vendor ou carteira em garantia
| 2085 | Reembolso e devolução Desconto e Vendor
| 2086 | Reembolso não efetuado por falta de saldo
| 2087 | Despesa de aponte
| 2088 | Alteração de título
| 2089 | Relação de títulos
| 2090 | Manutenção mensal
| 2091 | Sustação de cartório e envio de título a cartório
| 2092 | Fornecimento de formulário pré-impresso
| 2093 | Confirmação de entrada – Pagador DDA
| 2094 | Acerto dos dados do rateio de crédito
| 2095 | Cancelamento dos dados do rateio
| 2096 | Pagamento por Conta
| 2097 | Baixa Simples
| 2098 | Devolvido - Protestado
| 2099 | Baixa automática
| 2100 | Alteração Depositária
| 2101 | Confirmação de Protesto
| 2102 | Título Pago em Cheque – Vinculado
| 2103 | Acerto de Depositária
| 2104 | Acerto do Controle do Participante
| 2105 | Título Com Pagamento Cancelado
| 2106 | Entrada rejeitada por CEP Irregular
| 2107 | Confirmação Receb.Inst.de Protesto Falimentar
| 2108 | Ocorrências do Pagador
| 2109 | Retirado de Cartório e Manutenção Carteira
| 2110 | Desagendamento do débito automático
| 2111 | Estorno de pagamento
| 2112 | Sustado judicial
| 2113 | Solicitação de Impressão de Títulos Confirmada
| 2114 | Confirmação de Inclusão Banco de Pagador
| 2115 | Confirmação de Alteração Banco de Pagador
| 2116 | Confirmação de Exclusão Banco de Pagador
| 2117 | Emissão de Boletos de Banco de Pagador
| 2118 | Manutenção de Pagador Rejeitada
| 2119 | Entrada de Título via Banco de Pagador Rejeitada
| 2120 | Manutenção de Banco de Pagador Rejeitada
| 2121 | Estorno de Baixa / Liquidação
| 2122 | Liquidação On-line
| 2123 | Estorno de Liquidação On-line
| 2124 | Confirmação de alteração do valor nominal do título
| 2125 | Confirmação de alteração do valor/percentual mínimo/máximo
| 2126 | Baixa Manual Confirmada
| 2127 | Uso da Empresa Alterado
| 2128 | Prazo de Protesto Alterado
| 2129 | Prazo de Devolução Alterado
| 2130 | Alteração com reemissão de Bloqueto Confirmada
| 2131 | Alteração da opção de Protesto para Devolução Confirmada
| 2132 | Alteração da opção de Devolução para Protesto Confirmada
| 2133 | Baixa por Devolução
| 2134 | Título enviado para Cartório
| 2135 | Estorno de Protesto
| 2136 | Estorno de Sustação de Protesto
| 2137 | Tarifa sobre Título Vencido
| 2138 | Outras Tarifas de Alteração
| 2139 | Tarifas Diversas
| 2140 | Rejeição do Título
| 2141 | Confirmação de Envio de SMS
| 2142 | Envio de SMS rejeitado
| 2143 | Cancelamento de SMS
| 2144 | Liquidação de boleto cooperativa emite e expede
| 2145 | Liquidação de boleto após baixa ou não registrado cooperativa emite e expede
| 2146 | Título em aberto não enviado ao pagador
| 2147 | Inconsistência Negativação Serasa
| 2148 | Inclusão Negativação via Serasa
| 2149 | Exclusão Negativação Serasa
| 2150 | Devolução por Decurso de Prazo
| 2151 | Confirmação de Pedido de Exclusão da Serasa
| 2152 | Título enviado para negativação
| 2153 | Alegação do Sacado
| 2154 | Título retirado de cartório
| 2155 | Custa de distribuição
| 2156 | Custa de sustação
| 2157 | Custa de protesto
| 2158 | Movimentação CIP
| 2159 | Alteração De Dados – Nova Entrada ou Alteração/Exclusão de Dados Acatada
| 2160 | Alteração de Dados – Baixa
| 2161 | Baixa Por Ter Sido Liquidado
| 2162 | Cobrança Contratual – Instruções/Alterações Rejeitadas/Pendentes
| 2163 | Confirmação Recebimento de Instrução de Não Protestar
| 2164 | Protesto Enviado a Cartório/Tarifa
| 2165 | Tarifa de Aviso de Cobrança
| 2166 | Tarifa de Extrato Posição
| 2167 | Tarifa de Relação das Liquidações
| 2168 | Tarifa de Manutenção de Títulos Vencidos
| 2169 | Débito Mensal de Tarifas (para entradas e baixas)
| 2170 | Custas de Edital
| 2171 | Tarifa de Emissão de Boleto/Tarifa de Envio de Duplicata
| 2172 | Tarifa de Instrução
| 2173 | Tarifa de Ocorrências
| 2174 | Tarifa Mensal de Emissão de Boleto/Tarifa Mensal de Envio de Duplicata
| 2175 | Débito Mensal de Tarifas – Extrato de Posição (b4ep/b4ox)
| 2176 | Débito Mensal de Tarifas – Outras Instruções
| 2177 | Débito Mensal de Tarifas – Manutenção de Títulos Vencidos
| 2178 | Débito Mensal de Tarifas – Outras Ocorrências
| 2179 | Débito Mensal de Tarifas – Protesto
| 2180 | Débito Mensal de Tarifas – Sustação de Protesto
| 2181 | Baixa Com Transferência Para Desconto
| 2182 | Custas de Sustação Judicial
| 2183 | Tarifa Mensal Referente A Entradas Bancos Correspondentes Na Carteira
| 2184 | Tarifa Mensal Baixas Na Carteira
| 2185 | Tarifa Mensal Baixas Em Bancos Correspondentes Na Carteira
| 2186 | Tarifa Mensal de Liquidações Na Carteira
| 2187 | Tarifa Mensal de Liquidações Em Bancos Correspondentes Na Carteira
| 2188 | Custas de Irregularidade
| 2189 | Instrução Cancelada
| 2190 | Comando Recusado
| 2191 | Código de IOF inválido
| 2192 | Título não existe
| 2193 | Prorrogação de Vencimento
| 2194 | Título Já Baixado/Protestado
| 2195 | Custas de Cartório
| 2196 | Confirmação de envio de e-mail/SMS
| 2197 | Envio de e-mail/SMS rejeitado
| 2198 | Título pago com cheque compensado
| 2199 | Instrução para protesto para fins falimentares confirmada
| 2200 | Alteração de contrato de cobrança
| 2201 | Confirmação da Instrução de Baixa de Título Negativado sem Protesto
| 2202 | Confirmação de Pedido de Dispensa de Multa
| 2203 | Confirmação do Pedido de Cobrança de Multa
| 2204 | Confirmação do Pedido de Alteração de Cobrança de Juros
| 2205 | Confirmação do Pedido de Alteração do Valor/Data de Desconto
| 2206 | Confirmação do Pedido de Alteração do Beneficiário do Título
| 2207 | Confirmação do Pedido de Dispensa de Juros de Mora
| 2208 | Confirmação de instrução de transferência de carteira/modalidade de cobrança
| 2209 | Confirmação de Desistência de Protesto
| 2210 | Encaminhado a Protesto
| 2211 | Baixado automaticamente via arquivo
| 2212 | Baixa rejeitada
| 2213 | Tarifa
| 2214 | Rejeição do pagador
| 2215 | Alteração rejeitada
| 2216 | Aceite do Pagador
| 2217 | Baixa por Crédito em Conta Corrente
| 2218 | Entrada Rejeitada Carnê
| 2219 | Tarifa Emissão Aviso de Movimentação de Títulos
| 2220 | Débito Mensal de Tarifas - Aviso de Movimentação de Títulos
| 2221 | Entrada Confirmada com Rateio de Crédito
| 2222 | Baixa por Crédito em Conta Corrente sem Título Correspondente
| 2223 | Confirmação de Entrada na Cobrança
| 2224 | Instrução de Negativação Expressa Rejeitada
| 2225 | Confirma o Recebimento de Instrução de Entrada Em Negativação Expressa
| 2226 | Confirma o Recebimento de Instrução de Exclusão de Entrada Em Negativação Expressa
| 2227 | Confirma o Recebimento de Instrução de Cancelamento de Negativação Expressa
| 2228 | Negativação Expressa Informacional
| 2229 | Confirma de Entrada Em Negativação Expressa / Tarifa
| 2230 | Confirma o Cancelamento Em Negativação Expressa / Tarifa
| 2231 | Confirma Exclusão de Entrada Em Negativação Expressa Por Liquidação / Tarifa
| 2232 | Tarifa Pacote Cobrança Ativa Eletrônica
| 2233 | Tarifa E-mail Cobrança Ativa Eletrônica
| 2234 | Tarifa Sms Cobrança Ativa Eletrônica
| 2235 | Tarifa Mensal Pacote Cobrança Ativa Eletrônica
| 2236 | Tarifa Mensal E-mail Cobrança Ativa Eletrônica
| 2237 | Tarifa Mensal Sms Cobrança Ativa Eletrônica
| 2238 | Tarifa Mensal de Exclusão de Entrada Em Negativação Expressa
| 2239 | Tarifa Mensal de Cancelamento de Negativação Expressa
| 2240 | Tarifa Mensal de Exclusão de Negativação Expressa Por Liquidação
| 2241 | Confirma Recebimento de Instrução de Não Negativar

### Listar Registros de Retorno

`GET /api/v1/bank_billet_discharges`

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th data-container="body" data-toggle="tooltip" title="Obrigatório">Obrigatório</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>page </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        Número da Página
      </td>
    </tr>
    <tr>
      <td>
        <strong>per_page </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        Quantidade de registros por página (Maximo de 250)
      </td>
    </tr>
    <tr>
      <td>
        <strong>our_occurrence </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        String
      </td>
      <td>
        Código de operação de retorno
      </td>
    </tr>
    <tr>
      <td>
        <strong>bank_billet_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Boleto
      </td>
    </tr>
    <tr>
      <td>
        <strong>discharge_id </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Number
      </td>
      <td>
        ID do Retorno
      </td>
    </tr>
    <tr>
      <td>
        <strong>processed_from </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        A partir da Data de processamento
      </td>
    </tr>
    <tr>
      <td>
        <strong>processed_to </strong>
      </td>
      <td>
        Não
      </td>
      <td>
        Date
      </td>
      <td>
        Até a Data de processamento
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
  curl -i \
  -u $BOLETOSIMPLES_TOKEN:x \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (myapp@example.com)' \
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_discharges?page=1&per_page=50'
</pre>

    <small>Resposta:</small>

<pre class="http">
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

[
  {
    "id": 1,
    "bank_billet_id": 2,
    "discharge_id": 1,
    "processed_at": "2018-09-10",
    "date_of_occurrence": "2018-09-10",
    "occurrence": "02",
    "our_occurrence": "2001",
    "occurrence_detail": 'Confirmação Entrada Título',
    "occurrence_error": nil,
    "occurrence_error_detail": nil,
    "bank_billet":{
      "id":46,
      "expire_at": "2018-09-12",
      "paid_at":null,
      "description": "teste",
      ...
    }
  }
]
</pre>

  </div>
</div>


### Informações do Registro de Retorno

`GET /api/v1/bank_billet_discharges/:id`

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <!--<li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li>-->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
  curl -i \
  -u $BOLETOSIMPLES_TOKEN:x \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (myapp@example.com)' \
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_discharges/1'
</pre>

    <small>Resposta:</small>

<pre class="http">
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Total: 1
Content-Type: application/json; charset=utf-8
...

{
  "id": 1,
  "bank_billet_id": 2,
  "discharge_id": 1,
  "processed_at": "2018-09-10",
  "date_of_occurrence": "2018-09-10",
  "occurrence": "02",
  "our_occurrence": "2001",
  "occurrence_detail": 'Confirmação Entrada Título',
  "occurrence_error": nil,
  "occurrence_error_detail": nil,
  "bank_billet":{
    "id":46,
    "expire_at": "2018-09-12",
    "paid_at":null,
    "description": "teste",
    ...
  }
}
</pre>

  </div>
</div>
