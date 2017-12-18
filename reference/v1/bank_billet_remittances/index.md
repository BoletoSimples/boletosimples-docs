---
layout: pt
title: Registro de Remessa - API do Boleto Simples
en: /en/references
breadcrumb: Registro de Remessa
---

## Registro de Remessa

| Recurso                                                                                 | Descrição                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [GET /api/v1/bank_billet_remittances](#listar-registros-de-remessa)                     | Listar Registros de Remessa                     |
| [POST /api/v1/bank_billet_remittances/:id/occurrence/:code](#criar-registro-de-remessa) | Adicionar Boleto na lista de envio para o banco |
| [GET /api/v1/bank_billet_remittances/pending](#listar-pendentes)                        | Listar Registros de Remessa pendentes           |

### Modelo de Dados

| Parâmetro                  | Obr. | Tipo    | Tamanho | Descrição                      |
| -------------------------- | ---- | ------- | ------- | ------------------------------ |
| **id**                     | N/A  | Integer |         | ID da carteira                 |
| **our_code**               | Sim  | String  | 6       | Código                         |
| **occurrence**             | Não  | String  | 3       | Ocorrência                     |
| **remittance_id**          | Sim  | Integer |         | ID da Remessa                  |
| **bank_billet_id**         | Sim  | Integer |         | ID do Boleto                   |
| **bank_billet_account_id** | Sim  | Integer |         | ID da Carteira                 |
| **processed_at**           | Não  | Date    |         | Quando foi processado          |
| **occurrence_detail**      | Não  | String  |         | Descrição do evento na Remessa |

### Listar Registros de Remessa

`GET /api/v1/bank_billet_remittances`

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
  -X GET 'https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances'
</pre>

    <small>Resposta:</small>

<pre class="http">
HTTP/1.1 201 Created
Date: Fri, 17 Oct 2014 19:30:06 GMT
Status: 201 Created
Location: https://sandbox.boletosimples.com.br/api/v1/bank_billet_remittances
Content-Type: application/json; charset=utf-8
...

{
  "id":47,
  "our_code": "1001",
  "occurrence": "01",
  "remittance_id":null,
  "bank_billet_id":46,
  "bank_billet_account_id":2,
  "processed_at":null,
  "occurrence_detail": "Entrada de Título",
  "created_at": "2017-11-21",
  "bank_billet":{
    "id":46,
    "expire_at": "2017-12-26",
    "paid_at":null,
    "description": "teste",
    "status": "opened",
    ...
  }
}
</pre>

  </div>
 <!--
  <div class="tab-pane" id="ruby2">
    <small>Requisição:</small>

<pre class="ruby">
@installment = BoletoSimples::Customer.create({
  person_name: "Joao da Silva",
  cnpj_cpf: "782.661.177-64",
  email: "carnê@bom.com",
  address: "Rua quinhentos",
  city_name: "Rio de Janeiro",
  state: "RJ",
  neighborhood: "bairro",
  zipcode: "20071004",
  address_number: "111",
  address_complement: "Sala 4",
  phone_number: "2112123434"
})
if @installment.persisted?
  puts "Sucesso :)"
  puts @installment.attributes
else
  puts "Erro :("
  puts @installment.response_errors
end
</pre>

<small>Resposta:</small>

<pre class="ruby">
Sucesso :)
{
           "person_name" => "Joao da Silva",
              "cnpj_cpf" => "782.661.177-64",
                 "email" => "carnê@bom.com",
               "address" => "Rua quinhentos",
             "city_name" => "Rio de Janeiro",
                 "state" => "RJ",
          "neighborhood" => "bairro",
               "zipcode" => "20071004",
        "address_number" => "111",
    "address_complement" => "Sala 4",
          "phone_number" => "2112123434",
                    "id" => 67,
         "mobile_number" => nil,
           "person_type" => "individual",
     "mobile_local_code" => nil,
       "created_via_api" => true
}
</pre>

  </div>
  <div class="tab-pane" id="php2">
    <small>Requisição:</small>

<pre class="php">
$installment = BoletoSimples\Customer::create([
  'person_name' => "Joao da Silva",
  'cnpj_cpf' => "860.196.915-19",
  'email' => "carnê@example.com",
  'address' => "Rua quinhentos",
  'city_name' => "Rio de Janeiro",
  'state' => "RJ",
  'neighborhood' => "bairro",
  'zipcode' => "20071004",
  'address_number' => "111",
  'address_complement' => "Sala 4",
  'phone_number' => "2112123434"
]);
if($installment->isPersisted()) {
  echo "Sucesso :)\n";
  print_r($installment->attributes());
} else {
  echo "Erro :(\n";
  print_r($installment->response_errors);
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
    [email] => carnê@example.com
    [neighborhood] => bairro
    [person_type] => individual
    [phone_number] => 2112123434
    [zipcode] => 20071004
    [mobile_local_code] =>
    [state] => RJ
    [created_via_api] => 1
)
</pre>

  </div> -->
</div>
