---
title: Sandbox
position: 5
layout: pt
en: "/en/sandbox"
---

## Ambiente Sandbox

O Boleto Simples fornece um ambiente para testes do uso da API. Esse ambiente é chamado Sandbox. Se você não conhece o que é isso, leia sobre o [conceito de Sandbox na Wikipedia](http://en.wikipedia.org/wiki/Sandbox_(software_development)).

Este ambiente é completamente separado do ambiente de Produção. Nenhum dado é compartilhado entre os ambientes.

A versão do sistema no ambiente Sandbox é sempre a mesma versão do ambiente de Produção.

### Começando

Para começar a utilizar o ambiente Sandbox, é necessário criar uma conta neste ambiente, através do endereço [https://sandbox.boletosimples.com.br/users/sign_up](https://sandbox.boletosimples.com.br/users/sign_up).

Após criar a conta, você poderá utilizar o ambiente Sandbox da mesma forma que usará o ambiente de Produção. Leia sobre [autenticação](/authentication) para começar.

Nenhuma validação de conta é realizada neste ambiente e logo após a criação da conta, você já conseguirá utilizar a API.

 <div class="alert alert-info"><strong>ATENÇÃO</strong> O token de acesso da conta no ambiente Sandbox é diferente do token da sua conta no ambiente de Produção.</div>

### Endpoint do Sandbox

A URL Base do ambiente Sandbox é `https://sandbox.boletosimples.com.br/api/v1/`

Todas as requisições devem usar o schema `https` por questões de segurança.

### Restrições

O ambiente Sandbox não deve ser usado com o objetivo de gerar boletos bancários reais. Ele deve ser usado apenas para testar a integração de seu sistema com a API do Boleto Simples, sem afetar os dados da sua conta real.

Por esse motivo, este ambiente possui algumas restrições. São elas:

* Agência e Conta nos boletos gerados serão alterados para `1` e `2`.
* As instruções para o caixa no boleto gerado vão com a mensagem: **"SR(a) CAIXA, NÃO AUTORIZAMOS RECEBER ESTE BOLETO"**.
* Agência e Conta nas remessas geradas  serão alterados para `1` e `2`.
* Boletos e remessas não devem ser utilizados para fins de homologação junto ao banco.

### Limpeza do ambiente

Por motivos de segurança, todos os boletos são excluídos automaticamente no ambiente de Sandbox às segundas-feiras, quartas-feiras e sextas-feiras.

### Eventos

Você pode simular os eventos `paid` e `overdue` dos boletos usando os menus de Informar Pagamento e Marcar como Vencido, que somente são apresentados no ambiente Sandbox, na tela do boleto.

### Pagamento

Não pague um boleto gerado pelo ambiente Sandbox sob nenhuma hipótese.

Ao realizar login no Ambiente de Sandbox é possível emular o pagamento de um boleto.

### Fraude

Os boletos de teste gerados pelo ambiente Sandbox não são válidos e não devem ser pagos sob nenhuma hipótese.

O uso de boletos bancários gerados no ambiente de Sandbox é considerado fraude. Nenhum boleto bancário gerado neste ambiente pode ser divulgado ou enviado para terceiros.

É de responsabilidade do cliente evitar que o boleto bancário gerado neste ambiente seja divulgado em qualquer meio.
