---
title: Parceiros
position: 7
layout: pt
en: "/en/reference"
breadcrumb: Parceiros
---

## API de Parceiros

### Criar usuário

`POST /api/v1/partner/users`


### Modelo de Dados

| Parâmetro                       | Obr. | Tipo    | Tamanho | Descrição
| ------------------------------- | ---- | ------- | ------- | ------------------------
| **id**                          | N/A  | Integer |         | ID do usuário
| **email**                       | Sim  | String  |         | E-mail
| **account_type**                | Não  | String  |         | Tipo de Conta
| **account_level**               | Não  | Integer |         | Nível da Conta
| **first_name**                  | Não  | String  |         | Primeiro Nome
| **middle_name**                 | Não  | String  |         | Nome do Meio
| **last_name**                   | Não  | String  |         | Último Nome
| **cpf**                         | Não  | String  |         | CPF
| **address_street_name**         | Não  | String  |         | Endereço
| **address_state**               | Não  | String  |         | Estado
| **address_neighborhood**        | Não  | String  |         | Bairro
| **address_postal_code**         | Não  | String  |         | CEP
| **address_number**              | Não  | String  |         | Número
| **address_complement**          | Não  | String  |         | Complemento
| **address_city_name**           | Não  | String  |         | Cidade
| **phone_number**                | Não  | String  |         | Telefone
| **date_of_birth**               | Não  | Date    |         | Data de Nascimento
| **business_category**           | Não  | List    |         | Categoria
| **business_subcategory**        | Não  | List    |         | Subcategoria
| **business_website**            | Não  | String  |         | Website
| **business_name**               | Não  | String  |         | Nome Fantasia
| **business_legal_name**         | Não  | String  |         | Razão Social
| **business_type**               | Não  | String  |         | Tipo da Empresa
| **business_cnpj**               | Não  | String  |         | CNPJ da Empresa
| **withdrawal_automatic**        | Não  | Boolean |         | Saque Automático
| **mother_name**                 | Não  | String  |         | Nome da Mãe
| **father_name**                 | Não  | String  |         | Nome do Pai
| **login_url**                   | Não  | String  |         | URL de primeiro login
| **application_access_token**    | Não  | String  |         | Token de acesso ao usuário

### Dicionário de Dados

#### account_type

| individual | Pessoa Física
| juridical  | Pessoa Jurídica

#### account_level

| 0  | Não pode criar boletos e não pode efetuar saques
| 1  | Pode criar boletos e não pode efetuar saques
| 2  | Pode criar boletos e pode efetuar saques

#### business_type

| mei            | Microempreendedor Individual
| individual     | Micro Empresa/Empresa de pequeno porte
| proprietorship | Sociedade Empresária Limitada
| partnership    | Sociedade Anônima de Capital Fechado
| corporation    | Sociedade Anônima de Capital Aberto
| nonprofit      | Sem fins lucrativos
| government     | Governamental

#### business_category

| Código da Categoria | Descrição
| ---- | -------------------------------------------
| 1000 | Arte e objetos de colecionadores
| 1001 | Bebês
| 1002 | Beleza e fragrâncias
| 1022 | Brinquedos e hobbies
| 1015 | Casa e jardim
| 1006 | Computadores
| 1004 | De empresa para empresa (B2B)
| 1007 | Educação
| 1008 | Eletrônicos e telecomunicações
| 1009 | Entretenimento e mídia
| 1021 | Esportes e atividades ao ar livre
| 1013 | Governo
| 1003 | Livros e revistas
| 1012 | Presentes e flores
| 1018 | Religião e espiritualidade (com fins lucrativos)
| 1014 | Saúde e cuidados pessoais
| 1016 | Sem fins lucrativos
| 1025 | Serviço
| 1020 | Serviços - Outro
| 1010 | Serviços e produtos financeiros
| 1019 | Varejo (não classificado em nenhum outro lugar)
| 1011 | Varejo e serviços de alimentação
| 1024 | Vendas de veículos
| 1005 | Vestuário
| 1023 | Viagem

#### business_subcategory

| Código da Categoria | Código da Subcategoria | Descrição
| ---- | ---- | -------------------------------------------
| 1017 | 2173 | Animais de estimação especiais ou raros
| 1017 | 2171 | Medicamentos e suplementos
| 1017 | 2172 | Pet shops, alimentos e suprimentos para animais de estimação
| 1017 | 2174 | Serviços veterinários
| 1000 | 2000 | Antiguidades
| 1000 | 2004 | Arte digital
| 1000 | 2007 | Costura, bordado e tecidos
| 1000 | 2003 | Câmeras e suprimentos fotográficos
| 1000 | 2005 | Lembranças
| 1000 | 2006 | Loja de música - instrumentos e partituras
| 1000 | 2002 | Marchands e galerias
| 1000 | 2009 | Papel de carta, de impressão e escrita
| 1000 | 2008 | Selos e moedas
| 1000 | 2001 | Suprimentos de artesanato
| 1000 | 2010 | Vintage e artigos de colecionadores
| 1001 | 2012 | Móveis
| 1001 | 2013 | Produtos para bebês - Outro
| 1001 | 2014 | Segurança e saúde
| 1001 | 2011 | Vestuário
| 1002 | 2015 | Banho e corpo
| 1002 | 2016 | Fragrâncias e perfumes
| 1002 | 2017 | Maquiagem e cosméticos
| 1022 | 2252 | Artesanato
| 1022 | 2253 | Câmeras e suprimentos fotográficos
| 1022 | 2255 | Lembranças
| 1022 | 2256 | Loja de música - instrumentos e partituras
| 1022 | 2254 | Lojas de hobbies, brinquedos e jogos
| 1022 | 2258 | Papel de carta, de impressão e escrita
| 1022 | 2257 | Selos e moedas
| 1022 | 2260 | Videogames e sistemas
| 1022 | 2259 | Vintage e artigos de colecionadores
| 1015 | 2145 | Antiguidades
| 1015 | 2146 | Aparelhos
| 1015 | 2148 | Cama e banho
| 1015 | 2150 | Cortinas e tapeçaria
| 1015 | 2157 | Decoração residencial
| 1015 | 2162 | Equipamentos de segurança e vigilância
| 1015 | 2152 | Lareiras e telas para lareira
| 1015 | 2147 | Marchands e galerias
| 1015 | 2149 | Material de construção
| 1015 | 2156 | Máquinas e ferramentas
| 1015 | 2153 | Móveis
| 1015 | 2160 | Paisagismo
| 1015 | 2163 | Piscinas e spas
| 1015 | 2151 | Serviços de exterminação de pragas e desinfecção
| 1015 | 2154 | Suprimentos para jardim
| 1015 | 2161 | Tapetes e carpetes
| 1015 | 2159 | Utensílios de cozinha
| 1015 | 2158 | Utensílios domésticos
| 1015 | 2155 | Vidro, tinta e papel de parede
| 1006 | 2057 | Computadores e serviços de processamento de dados
| 1006 | 2059 | Conteúdo digital
| 1006 | 2058 | Desktops, laptops e notebooks
| 1006 | 2069 | Hospedagem e design para a Web
| 1006 | 2064 | Jogo online
| 1006 | 2062 | Monitores e projetores
| 1006 | 2066 | Periféricos
| 1006 | 2065 | Peças e acessórios
| 1006 | 2063 | Rede de comunicação
| 1006 | 2060 | Serviços de Comércio eletrônico
| 1006 | 2061 | Serviços de reparo e manutenção
| 1006 | 2068 | Serviços de treinamento
| 1006 | 2067 | Software
| 1004 | 2027 | Agrícola
| 1004 | 2047 | Atacado
| 1004 | 2031 | Construção
| 1004 | 2025 | Contabilidade
| 1004 | 2043 | Editoração e impressão
| 1004 | 2045 | Embalagem e envio
| 1004 | 2030 | Fotografia comercial, arte e gráficos
| 1004 | 2038 | Mala direta
| 1004 | 2039 | Marketing
| 1004 | 2040 | Marketing em vários níveis
| 1004 | 2041 | Móveis de escritório e comerciais
| 1004 | 2029 | Produtos químicos e assemelhados
| 1004 | 2026 | Propaganda
| 1004 | 2028 | Serviços de arquitetura, engenharia e prospecção
| 1004 | 2032 | Serviços de consultoria
| 1004 | 2044 | Serviços de cópia rápida e reprodução
| 1004 | 2046 | Serviços de estenografia e de secretaria
| 1004 | 2034 | Serviços de leasing e locação de equipamentos
| 1004 | 2036 | Serviços de recrutamento e seleção
| 1004 | 2035 | Serviços de reparo de equipamentos
| 1004 | 2033 | Serviços educacionais
| 1004 | 2042 | Suprimentos e equipamento de escritório
| 1004 | 2037 | Suprimentos industriais e de produção
| 1007 | 2073 | Academias, estúdios e escolas de dança
| 1007 | 2070 | Escolas comerciais e secretariais
| 1007 | 2074 | Escolas de ensino fundamental e médio
| 1007 | 2075 | Escolas vocacionais e de comércio
| 1007 | 2072 | Faculdades e universidades
| 1007 | 2071 | Serviços de cuidados infantis diários
| 1008 | 2079 | Acessórios eletrônicos em geral
| 1008 | 2085 | Cartões telefônicos
| 1008 | 2076 | Câmeras, camcorders e equipamentos
| 1008 | 2081 | Eletrônicos residenciais
| 1008 | 2083 | Equipamento de telecomunicações e vendas
| 1008 | 2082 | Segurança e vigilância
| 1008 | 2084 | Serviços de telecomunicação
| 1008 | 2077 | Som de carro e eletrônicos
| 1008 | 2078 | Telefones celulares, PDAs e pagers
| 1008 | 2080 | Áudio residencial
| 1009 | 2097 | Animadores de programas
| 1009 | 2094 | Brinquedos e jogos
| 1009 | 2095 | Caça níqueis
| 1009 | 2096 | Conteúdo digital
| 1009 | 2091 | Conteúdo digital adulto
| 1009 | 2088 | Filmes - DVDs, fitas de vídeo
| 1009 | 2087 | Ingressos de cinema
| 1009 | 2093 | Ingressos de teatro
| 1009 | 2092 | Ingressos para shows
| 1009 | 2098 | Jogo
| 1009 | 2099 | Jogos online
| 1009 | 2086 | Lembranças
| 1009 | 2089 | Música - CDs, cassetes e álbuns
| 1009 | 2090 | TV e rádio a cabo, por satélite e outros tipos pagos
| 1009 | 2100 | Videogames e sistemas
| 1021 | 2241 | Academias, estúdios e escolas de dança
| 1021 | 2244 | Acessórios de armas de fogo
| 1021 | 2248 | Armas de artes marciais
| 1021 | 2245 | Armas de fogo
| 1021 | 2237 | Calçados esportivos
| 1021 | 2240 | Camping e atividades ao ar livre
| 1021 | 2246 | Caça
| 1021 | 2243 | Engrenagem de relógio
| 1021 | 2250 | Equipamento esportivo
| 1021 | 2242 | Exercícios e condicionamento físico
| 1021 | 2247 | Facas
| 1021 | 2249 | Jogos e brinquedos esportivos
| 1021 | 2238 | Loja, serviço e reparo de bicicletas
| 1021 | 2251 | Piscinas e spas
| 1021 | 2239 | Remo, vela e acessórios
| 1013 | 2137 | Serviços governamentais (não classificado em nenhum outro lugar)
| 1003 | 2019 | Conteúdo digital
| 1003 | 2023 | Editoração e impressão
| 1003 | 2021 | Ficção e não ficção
| 1003 | 2020 | Livros de texto e educativos
| 1003 | 2018 | Livros em áudio
| 1003 | 2024 | Livros raros e usados
| 1003 | 2022 | Revistas
| 1012 | 2134 | Comidas de gourmet
| 1012 | 2132 | Floristas
| 1012 | 2133 | Lojas de presentes, cartões, novidades e lembranças
| 1012 | 2136 | Suprimentos para festas
| 1012 | 2135 | Viveiro de plantas e flores
| 1018 | 2176 | Mercadoria
| 1018 | 2177 | Serviços (não classificados em nenhum outro lugar)
| 1018 | 2175 | Serviços de associação
| 1014 | 2141 | Assistência médica
| 1014 | 2140 | Cuidados dentários
| 1014 | 2142 | Equipamentos e suprimentos médicos
| 1014 | 2138 | Farmácia (exceto prescrição de medicamentos)
| 1014 | 2139 | Farmácia (inclusive prescrição de medicamentos)
| 1014 | 2143 | Oftalmologia
| 1014 | 2144 | Vitaminas e suplementos
| 1016 | 2169 | Educacional
| 1016 | 2164 | Entidade assistencial
| 1016 | 2167 | Outro
| 1016 | 2168 | Pessoal
| 1016 | 2165 | Político
| 1016 | 2166 | Religioso
| 1025 | 2297 | Acessórios
| 1025 | 2296 | Aluguel de caminhões e trailers utilitários
| 1025 | 2293 | Aluguel de trailers e veículos recreativos
| 1025 | 2291 | Aluguel e leasing de barcos
| 1025 | 2294 | Ferramentas e equipamentos
| 1025 | 2292 | Lavagem de carros
| 1025 | 2288 | Locação de carros
| 1025 | 2284 | Peças e suprimentos novos - veículo motor
| 1025 | 2285 | Peças usadas - veículo motor
| 1025 | 2287 | Reparo e pintura de autos
| 1025 | 2295 | Serviço de guincho
| 1025 | 2289 | Serviços de autos
| 1025 | 2290 | Suprimento e serviços de pneus automotivos
| 1025 | 2286 | Áudio e vídeo
| 1020 | 2232 | Ajustes e alterações
| 1020 | 2216 | Assistência médica
| 1020 | 2188 | Carpintaria
| 1020 | 2217 | Clubes e organizações de associados
| 1020 | 2192 | Computadores e serviços de processamento de dados
| 1020 | 2225 | Conserto de rádios, televisores e estéreo
| 1020 | 2226 | Corretor de imóveis
| 1020 | 2197 | Cuidados dentários
| 1020 | 2205 | Desenho gráfico e comercial
| 1020 | 2230 | Embalagem e envio
| 1020 | 2204 | Empreiteiros em geral
| 1020 | 2220 | Encontros online
| 1020 | 2200 | Entretenimento
| 1020 | 2222 | Estúdios fotográficos - retratos
| 1020 | 2221 | Fotoacabamento
| 1020 | 2191 | Fotografia comercial
| 1020 | 2227 | Gerenciamento de locação de imóvel
| 1020 | 2207 | Identidades, certidões e passaportes
| 1020 | 2208 | Importação e exportação
| 1020 | 2203 | Jogo
| 1020 | 2190 | Limpeza e manutenção
| 1020 | 2215 | Loterias e concursos
| 1020 | 2218 | Misc. publicação e impressão
| 1020 | 2219 | Mudança e depósito
| 1020 | 2235 | Oftalmologia
| 1020 | 2212 | Paisagismo e horticultura
| 1020 | 2202 | Planejamento de eventos e casamentos
| 1020 | 2185 | Propaganda
| 1020 | 2199 | Reparo de dispositivos pequenos e elétricos
| 1020 | 2228 | Reparos de móveis e estofamento
| 1020 | 2236 | Reparos de relógios e joias
| 1020 | 2210 | Seguros - auto e residência
| 1020 | 2211 | Seguros - vida e anuidade
| 1020 | 2214 | Serviço de entrega local
| 1020 | 2233 | Serviço de telecomunicação
| 1020 | 2229 | Serviços (não classificados em nenhum outro lugar)
| 1020 | 2198 | Serviços de Comércio eletrônico
| 1020 | 2195 | Serviços de aconselhamento
| 1020 | 2187 | Serviços de carreira
| 1020 | 2194 | Serviços de consultoria
| 1020 | 2189 | Serviços de cuidados com crianças
| 1020 | 2224 | Serviços de cópia rápida e reprodução
| 1020 | 2196 | Serviços de entregas
| 1020 | 2201 | Serviços de leasing e locação de equipamentos
| 1020 | 2231 | Serviços de piscinas
| 1020 | 2223 | Serviços de proteção e segurança
| 1020 | 2209 | Serviços de recuperação de informações
| 1020 | 2193 | Serviços de rede de computador
| 1020 | 2186 | Serviços e clubes de compras
| 1020 | 2213 | Serviços jurídicos e advogados
| 1020 | 2206 | Spas de saúde e beleza
| 1020 | 2234 | Utilitários
| 1010 | 2122 | Agentes e corretores de títulos
| 1010 | 2115 | Agentes ou corretores de hipotecas
| 1010 | 2103 | Bolsa de commodities e futuros
| 1010 | 2118 | Cartões de valores pré-pagos e armazenados
| 1010 | 2109 | Companhia financeira
| 1010 | 2110 | Consultoria financeira e de investimentos
| 1010 | 2101 | Contabilidade
| 1010 | 2106 | Cooperativa de crédito
| 1010 | 2119 | Corretor de imóveis
| 1010 | 2107 | Corretores e câmbio
| 1010 | 2108 | Custódia de títulos
| 1010 | 2114 | Empresa de serviços financeiros
| 1010 | 2104 | Empresas de informação de crédito de consumidor
| 1010 | 2120 | Entrega
| 1010 | 2102 | Escritório de cobrança
| 1010 | 2121 | Gerenciamento de locação de imóvel
| 1010 | 2113 | Investimentos - geral
| 1010 | 2116 | Moeda de jogo online
| 1010 | 2117 | Pagamento antecipado ou empréstimo contra salário
| 1010 | 2111 | Seguros - auto e residência
| 1010 | 2112 | Seguros - vida e anuidade
| 1010 | 2105 | Serviço de orientação sobre débitos
| 1010 | 2123 | Transferência eletrônica e ordem de pagamento
| 1019 | 2181 | Bens duráveis
| 1019 | 2182 | Bens não duráveis
| 1019 | 2179 | Loja de departamentos
| 1019 | 2180 | Loja de descontos
| 1019 | 2183 | Loja de usados e segunda mão
| 1019 | 2184 | Loja de variedades
| 1019 | 2178 | Produtos químicos e assemelhados
| 1011 | 2124 | Bebidas alcoólicas
| 1011 | 2126 | Café e chá
| 1011 | 2127 | Comidas de gourmet
| 1011 | 2130 | Fumo
| 1011 | 2128 | Lojas de alimentos variados e especialidades
| 1011 | 2129 | Restaurante
| 1011 | 2125 | Serviços de bufê
| 1011 | 2131 | Vitaminas e suplementos
| 1024 | 2277 | Aviação
| 1024 | 2283 | Vintage e artigos de colecionadores
| 1024 | 2275 | vendedor de autos - novos e usados
| 1024 | 2276 | vendedor de autos - somente usados
| 1024 | 2278 | vendedor de barcos
| 1024 | 2280 | vendedor de motocicletas
| 1024 | 2279 | vendedor de trailers
| 1024 | 2281 | vendedor de trailers utilitários e recreativos
| 1024 | 2282 | vendedor de veículos recreativos
| 1005 | 2053 | Acessórios
| 1005 | 2055 | Atacado - pedras e metais preciosos
| 1005 | 2056 | Joalheria da moda
| 1005 | 2050 | Roupas femininas
| 1005 | 2048 | Roupas infantis
| 1005 | 2049 | Roupas masculinas
| 1005 | 2051 | Sapatos
| 1005 | 2052 | Uniformes de serviço militar e civil
| 1005 | 2054 | Varejo - joalheria fina e relógios
| 1023 | 2268 | Acampamento de esportes e recreação
| 1023 | 2274 | Agência de viagens
| 1023 | 2264 | Cruzeiros
| 1023 | 2265 | Hospedagem e acomodações
| 1023 | 2261 | Linha aérea
| 1023 | 2263 | Linha de ônibus
| 1023 | 2262 | Locação de carros
| 1023 | 2266 | Malas e mercadorias em couro
| 1023 | 2272 | Parques ou acampamentos de trailers
| 1023 | 2270 | Propriedades de lazer compartilhado
| 1023 | 2267 | Serviços de recreação
| 1023 | 2273 | Serviços de transporte - outros
| 1023 | 2269 | Táxis e limusines
| 1023 | 2271 | Viagens


#### Exemplo de requisição inválida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-H 'Content-Type: multipart/form-data' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/partner/users'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 422 Unprocessable Entity
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Content-Type: application/json; charset=utf-8
...

{"errors":{"user":["não pode ficar em branco"]}}
</pre>
  </div>
  <div class="tab-pane" id="ruby">
    <small>Requisição:</small>

<pre class="ruby">
@user = BoletoSimples::Partner::User.create(email: '')
if @user.persisted?
  puts "Sucesso :)"
  ap @user.attributes
else
  puts "Erro :("
  ap @user.response_errors
end
</pre>

    <small>Resposta:</small>

<pre class="ruby">
Erro :(
{
     :email => [
        [0] "não pode ficar em branco"
    ]
}
</pre>

  </div>
    <!-- <div class="tab-pane" id="php">
      <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::create(['person_name' => 'Joao da Silva']);
if($bank_billet_account->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet_account->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
}
</pre>

      <small>Resposta:</small>

<pre class="php">
Erro :(
Array
(
    [cnpj_cpf] => Array
        (
            [0] => não pode ficar em branco
        )

    [zipcode] => Array
        (
            [0] => não pode ficar em branco
        )

)
</pre>

    </div> -->
</div>

#### Exemplo de requisição válida

<ul class="nav nav-tabs" role="tablist">
  <li class="active"><a href="#bash2" role="tab" data-toggle="tab">Bash</a></li>
  <li><a href="#ruby2" role="tab" data-toggle="tab">Ruby</a></li>
  <!-- <li><a href="#php2" role="tab" data-toggle="tab">PHP</a></li> -->
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="bash2">
    <small>Requisição:</small>

<pre class="bash">
curl -i \
-u $BOLETOSIMPLES_TOKEN:x \
-d '{"user":{"email": "customer@example.com"}}' \
-H 'Content-Type: application/json' \
-H 'User-Agent: MyApp (myapp@example.com)' \
-X POST 'https://sandbox.boletosimples.com.br/api/v1/partner/users'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
Strict-Transport-Security: max-age=2592000
Location: https://sandbox.boletosimples.com.br/api/v1/partner/users/2
Content-Type: application/json; charset=utf-8
...

{
  "email"=>"customer@example.com", 
  "id"=>2, "account_type"=>nil, "sex"=>nil, "cpf"=>nil, "address_street_name"=>nil, 
  "address_state"=>nil, "address_neighborhood"=>nil, "address_postal_code"=>nil, 
  "address_number"=>nil, "address_complement"=>nil, "phone_number"=>nil, 
  "withdrawal_period"=>"biweekly", "notification_url"=>nil, 
  "first_name"=>nil, "middle_name"=>nil, "last_name"=>nil, "date_of_birth"=>nil, 
  "business_category"=>nil, "business_subcategory"=>nil, "business_website"=>nil, 
  "business_name"=>nil, "business_legal_name"=>nil, "business_type"=>nil, 
  "business_cnpj"=>nil, "address_city_name"=>nil, "full_name"=>nil, 
  "login_url"=>"https://sandbox.boletosimples.com.br/welcome?email=kivanio%2Bsand10%40boletosimples.com.br&token=25m48-FeVVqpzrUtMvXZ", 
  "mother_name"=>nil, "father_name"=>nil, "account_level"=>2,
  "application_access_token"=>"3cfa8aa4a9a3ee1e4cab4e1839c8c4fa279e1411b5f22587713f7b705685c4e8"
}
</pre>
  </div>
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
@user = BoletoSimples::Partner::User.create(email: 'customer@example.com')
if @user.persisted?
  puts "Sucesso :)"
  ap @user.attributes
else
  puts "Erro :("
  ap @user.response_errors
end
</pre>
  <small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
  "email"=>"customer@example.com", 
  "id"=>2, "account_type"=>nil, "sex"=>nil, "cpf"=>nil, "address_street_name"=>nil, 
  "address_state"=>nil, "address_neighborhood"=>nil, "address_postal_code"=>nil, 
  "address_number"=>nil, "address_complement"=>nil, "phone_number"=>nil, 
  "withdrawal_period"=>"biweekly", "notification_url"=>nil, 
  "first_name"=>nil, "middle_name"=>nil, "last_name"=>nil, "date_of_birth"=>nil, 
  "business_category"=>nil, "business_subcategory"=>nil, "business_website"=>nil, 
  "business_name"=>nil, "business_legal_name"=>nil, "business_type"=>nil, "business_cnpj"=>nil, "address_city_name"=>nil, "full_name"=>nil, "login_url"=>"https://sandbox.boletosimples.com.br/welcome?email=kivanio%2Bsand10%40boletosimples.com.br&token=25m48-FeVVqpzrUtMvXZ", 
  "mother_name"=>nil, "father_name"=>nil, "account_level"=>2,
  "application_access_token"=>"3cfa8aa4a9a3ee1e4cab4e1839c8c4fa279e1411b5f22587713f7b705685c4e8"
}
</pre>
  </div>
  <!-- <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
$bank_billet_account = BoletoSimples\bank_billet_account::create([
  'person_name' => "Joao da Silva",
  'cnpj_cpf' => "860.196.915-19",
  'email' => "carteira@example.com",
  'address' => "Rua quinhentos",
  'city_name' => "Rio de Janeiro",
  'state' => "RJ",
  'neighborhood' => "bairro",
  'zipcode' => "12312-123",
  'address_number' => "111",
  'address_complement' => "Sala 4",
  'phone_number' => "2112123434"
]);
if($bank_billet_account->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($bank_billet_account->attributes());
} else {
  echo "Erro :(\n";
  print_r($bank_billet_account->response_errors);
}
</pre>
  <small>Resposta:</small>

<pre class="php">
Sucesso :)
Array
(
    [id] => 66
    [city_name] => Rio de Janeiro
    [person_name] => Joao da Silva
    [address] => Rua quinhentos
    [address_complement] => Sala 4
    [address_number] => 111
    [mobile_number] =>
    [cnpj_cpf] => 860.196.915-19
    [email] => carteira@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 12312-123
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>
  </div> -->
</div>
