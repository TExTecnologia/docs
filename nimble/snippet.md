# Nimble - Snippet & Tracking

O Nimble é uma aplicação que roda em um iframe e, para que haja comunicação entre **pai** e **filho** utilizamos o `postMessage`, desta forma você configura, por exemplo, o tracking em sua página.

## Configuração

Na página, onde o iframe será aplicado, devemos colocar o seguinte **snippet**:

```html
<!-- Folha de estilo do iframe -->
<style>
#nimbleAppPlace {
    width: 100%;
    position: relative;
    padding-bottom: 20px;
    display: block;
}
#nimbleApp {
    width: 100%;
    min-height: 400px;
    display: block;
    margin: 0 auto;
    background: white;
}
</style>

<!-- Local onde iframe será adicionado -->
<div id="nimbleAppPlace"></div>

<!-- Script de tracking e load -->
<script>
var CLIENTE_NIMBLE = 'https://nome-cliente.nimble.com.br';

function trackingNimble(event) {
    var n;
    var origin = event.origin || event.originalEvent.origin;

    try {
        n = JSON.parse(event.data);
    } catch (e) {
        n = false;
    }

    // Load
    if (event.data === 'trackingOk' && origin === CLIENTE_NIMBLE) {
        var load = document.querySelector('.nimble-load');
        if (load) {
            load.parentElement.removeChild(load);
        }
    }

    // Tracking
    if (n && n.token === 'tracking-nimble' && origin === CLIENTE_NIMBLE) {
        // coloque aqui o seu de tracking
        console.log(n); // exemplo: {code: 1, msg: 'Nova cotação'}
    }
}
window.addEventListener('message', trackingNimble, false);
</script>

<!-- Nimble Iframe Snippet -->
<script src="https://assets.nimble.com.br/snippet/iframeResizer/3.5.5/iframeResizer.min.js"></script>
<script src="https://nome-cliente.nimble.com.br/fn.053.js"></script>
<script>texNimbleSnippet('nimbleAppPlace', 'nimbleApp', CLIENTE_NIMBLE, window.location.search, '#FFCC00');</script>
```

**Obs.:** Troque todas as urls `https://nome-cliente.nimble.com.br` pela sua. 

### Snippet

O método `texNimbleSnippet`


##### Parâmetros

Nome         | Tipo     | Default               | Descrição
------------ | -------- | --------------------- | -----------
placeID      | string   | -                     | ID do elemento onde será adicionado o iframe
iframeID     | string   | -                     | ID do iframe
baseUrl      | string   | ''                    | URL do Nimble ex.: `'https://nome-cliente.nimble.com.br'`
qs           | string   | ''                    | Query string para passar para o Nimble
loadingColor | string   | '#FFCC00'             | Cor do loading


##### Parâmetro `qs`

Nome         | Tipo     | Valores               | Descrição
------------ | -------- | --------------------- | -----------
usoFB        | int      | 0 ou 1                | Liga e desliga o Facebook Connect
nome         | string   | -                     | Nome do cliente para utilizar no autofill
email        | string   | -                     | Email do cliente para utilizar no autofill
sexo         | string   | M ou F                | Sexo do cliente para utilizar no autofill
nascimento   | string   | YYYY-MM-DD            | Data de nascimento do cliente para utilizar no autofill
telefone     | string   | 11 12345678 ou 9      | Telefone do cliente para utilizar no autofill

**Obs.:** o **telefone** pode ter **8** ou **9** números.

**Exemplo:**

```
usoFB=0&nome=Thiago&sexo=M&nascimento=1981-09-01&email=me@lagden.in&telefone=11%20923456789
```

## Tracking

No código de tracking acima, o valor de `n` pode ser `false` ou um `JSON`.  
Quando for um `JSON`, os possíveis valores são:

```
n.code = 0
n.message = 'Loading'

n.code = 1
n.message = 'Nova cotação'

n.code = 2
n.message = 'Gravou'

n.code = 3
n.message = 'Recebeu prêmio'

n.code = 4
n.message = 'Falha no prêmio'

n.code = 5
n.message = 'Fechou proposta'

n.code = 6
n.message = 'Falha ao fechar proposta'

n.code = 7
n.message = 'Proposta'
```
