# API do Boleto Simples

A API do [Boleto Simples](http://boletosimples.com.br) está documentada em [http://api.boletosimples.com.br](http://api.boletosimples.com.br)

Se você deseja ter acesso a documentação offline, siga os seguintes passos:

1. Baixe a documentação

	```sh
	git clone https://github.com/BoletoSimples/boletosimples-docs.git
	```

1. Atualize as dependências

	```sh
	cd boletosimples-docs
	bundle install
	```

1. Rode o servidor

	```sh
	foreman start
	```

1. Acesse pelo navegador

	[http://localhost:4000](http://localhost:4000)

1. Para atualizar o Header e Footer

	```sh
	CONFIRM=true LOCAL=true ./update-header-footer && foreman start
	```
