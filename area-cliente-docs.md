# Area do cliente API

## Methods

### loginAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senhaArea | String | Sim       | Senha da aplicação
senha     | String | Sim       | Senha da corretora para utilizar o WS
cpf       | String | Sim       | CPF do cliente
password  | String | Sim       | Senha do cliente
slug      | String | Sim       | Nome de identificação da corretora

#### Request

``` xml
```

#### Response

``` xml
```

---

### esqueceuSenhaAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senha     | String | Sim | Senha da corretora para utilizar o WS
senhaArea | String | Sim | Senha da aplicação
slug      | String | Sim | Nome de identificação da corretora
cpf       | String | Sim | CPF do cliente
uri       | String | Sim |
token     | String | Sim |

#### Request

``` xml
```

#### Response

``` xml
```

---

### resetSenhaAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senha     | String | Sim | Senha da corretora para utilizar o WS
senhaArea | String | Sim | Senha da aplicação
slug      | String | Sim | Nome de identificação da corretora
cpf       | String | Sim | CPF do cliente
novaSenha | String | Sim |
token     | String | Sim |

#### Request

``` xml
```

#### Response

``` xml
```

---

### listaCotacoesAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senha     | String | Sim | Senha da corretora para utilizar o WS
CodCorr   | Int    | Sim |
SenhaCorr | String | Sim |
ramo      | String | Sim |
CPF       | String | Sim | CPF do cliente
page      | Int    | Sim |
perpage   | Int    | Sim |

#### Request

``` xml
```

#### Response

``` xml
```

---

### listaPropostaAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senha     | String | Sim |
CodCorr   | Int    | Sim |
SenhaCorr | String | Sim |
ramo      | String | Sim |
CPF       | String | Sim | CPF do cliente
page      | Int    | Sim |
perpage   | Int    | Sim |

#### Request

``` xml
```

#### Response

``` xml
```

---

### ultimaPropostaAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
CPF          | String | Sim | CPF do cliente

### getPropostaAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
certificado  | Int    | Sim |

#### Request

``` xml
```

#### Response

``` xml
```

---

### listaApoliceAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
ramo         | String | Sim |
CPF          | String | Sim | CPF do cliente
page         | Int    | Sim |
perpage      | Int    | Sim |

#### Request

``` xml
```

#### Response

``` xml
```

---

### getApoliceAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
calculo      | Int    | Sim |

#### Request

``` xml
```

#### Response

``` xml
```
