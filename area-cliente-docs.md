# Area do cliente API

## Methods

### loginAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------:
senhaArea | String | Sim       | Senha da aplicação
senha     | String | Sim       | Senha da corretora para utilizar o WS
cpf       | String | Sim       | cpf do cliente
password  | String | Sim       | senha do cliente
slug      | String | Sim       | nome de identificação da corretora

---

### esqueceuSenhaAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------:
senha     | String | Sim |
senhaArea | String | Sim |
slug      | String | Sim |
cpf       | String | Sim |
uri       | String | Sim |
token     | String | Sim |

---

### resetSenhaAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------:
senha     | String | Sim |
senhaArea | String | Sim |
slug      | String | Sim |
cpf       | String | Sim |
novaSenha | String | Sim |
token     | String | Sim |

---

### listaCotacoesAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------:
senha     | String | Sim |
CodCorr   | Int    | Sim |
SenhaCorr | String | Sim |
ramo      | String | Sim |
CPF       | String | Sim |
page      | Int    | Sim |
perpage   | Int    | Sim |

---

### listaPropostaAreaCliente

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------:
senha     | String | Sim |
CodCorr   | Int    | Sim |
SenhaCorr | String | Sim |
ramo      | String | Sim |
CPF       | String | Sim |
page      | Int    | Sim |
perpage   | Int    | Sim |

---

### ultimaPropostaAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------:
senha        | String | Sim |
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
CPF          | String | Sim |

### getPropostaAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------:
senha        | String | Sim |
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
certificado  | Int    | Sim |

---

### listaApoliceAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------:
senha        | String | Sim |
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
ramo         | String | Sim |
CPF          | String | Sim |
page         | Int    | Sim |
perpage      | Int    | Sim |

---

### getApoliceAreaCliente

Argumento    | Tipo   | Requirido | Descrição
:-------     | :--:   | :-------: | :-------:
senha        | String | Sim |
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
calculo      | Int    | Sim |
