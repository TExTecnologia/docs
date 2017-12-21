Olá Felype

Verifiquei o comportamento da carga e irei falar abaixo sobre alguns pontos:


### A carga só pode ser realizada no início da cotação

O `cliente.autofill` só executado no Nimble se nenhuma caixa estiver respondida.


### Evitar que uma nova cotação seja iniciado via Nimble

Tem uma opção de passar `menu=0` via querystring, isso irá esconder o botão de iniciar uma nova cotação, dessa forma vocês controlam


### Veiculo na carga

Os dados do veículo estão encadeados, ou seja, é necessário passar todos os campos para que o `cliente.autofill` possa bloqueá-los:

 - fipe
 - ano_fabr
 - ano_modelo
 - cod_car
 - classe_car
 - marca
 - descricao_car

Veja na documentação: https://github.com/TExTecnologia/docs/wiki/Campos-da-cota%C3%A7%C3%A3o#valores-poss%C3%ADveis


### Bloquear

Para bloquear os campos passados é necessário adicionar o item: `block: true`

https://github.com/TExTecnologia/docs/wiki/PostMessage---Nimble#exemplo-de-autopreenchimento

```js
function _nimbleAutofill() {
	if (_pmSource && _pmOrigin) {
		_pmSource.postMessage({
			type: 'cliente.autofill',
			data: _carga,
			block: true
		}, _pmOrigin)
	}
}
```

Irei subir hoje a noite a feature de block, estamos fazendo testes e passando pela QA.

