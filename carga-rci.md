A estrutura é a seguinte:

```
O site da RCI
	Iframe (Nimble)
	JavaScript
		Carga (JSON)
		PostMessage
		Snippet (Nimble)
```

Se estiver tudo configurado corretamente, o Nimble sempre irá enviar um postMessage dizendo `nimble.preparado`.  
Esse é o momento de enviar a carga:

```js
// Manipulador do postMessage
switch (message.type) {
	case 'nimble.preparado':
		_nimbleAutofill()
		break
//...		
```

Se existir carga, o site da RCI envia um postMessage dizendo `cliente.autofill` e passa a carga...

```js
// Envia os dados para o Nimble preencher as perguntas via postMessage
function _nimbleAutofill() {
	if (_pmSource && _pmOrigin && _carga) {
		_pmSource.postMessage({
			type: 'cliente.autofill',
			data: _carga,
			block: true
		}, _pmOrigin)
	}
}
```

Exemplo de uma carga:

```js
var _carga = {
	fipe: '025181-0',
	cod_car: 22422,
	classe_car: 5,
	marca: 49,
	descricao_car: 'DUSTER 1.6 FLEX',
	ano_fabr: 2014,
	ano_modelo: 2014,
	portas: 4,
	placa: 'DYG0925',
	placa_uf: 'SP',
	is_zerokm: 1,
	condutor_cpf: '323.170.218-60',
	condutor_cep_veiculo: '04653-055',
	Condutores: [{
		nome: 'Nicole Sampaio da Silva',
		sexo: 'F',
		nascimento: '01/09/1981',
		idade_habilitacao: 18,
		dias_dirige: 7,
		estado_civil: 'C',
		possui_veiculo: '0'
	}]
}
```

**Atenção!**

Os itens...

	fipe: '025181-0',
	cod_car: 22422,
	classe_car: 5,
	marca: 49,
	descricao_car: 'DUSTER 1.6 FLEX',
	ano_fabr: 2014,
	ano_modelo: 2014,

...são obrigatórios para que o bloqueio dos campos do veículo ocorram
