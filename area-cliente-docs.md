# API SOAP - Area do cliente 


## Methods


### loginAreaCliente

Efetua o login na aplicação

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senhaArea | String | Sim       | Senha da aplicação
senha     | String | Sim       | Senha da corretora para utilizar o WS
cpf       | String | Sim       | CPF do cliente
password  | String | Sim       | Senha do cliente
slug      | String | Sim       | Nome de identificação da corretora

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body>
        <ns1:loginAreaCliente>
            <senhaArea xsi:type="xsd:string">senha_da_area</senhaArea>
            <senha xsi:type="xsd:string">senha_do_ws</senha>
            <cpf xsi:type="xsd:string">21889781886</cpf>
            <password xsi:type="xsd:string">1234</password>
            <slug xsi:type="xsd:string">sandbox</slug>
        </ns1:loginAreaCliente>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

#### [OK] Response

Link para o [[OK] Response]() completo

``` xml
<cliente>
    <codcorr>8</codcorr>
    <senhacorr>senha_da_corretora</senhacorr>
    <nome>John Doe</nome>
    <celular>11912341234</celular>
    <email>doe@textecnologia.com.br</email>
    <cpf>21889781886</cpf>
    <facebook>true</facebook>
    <iframe></iframe>
</cliente>
```

#### [ERROR] Response

Link para o [[ERROR] Response](https://link.do/arquivo.xml) completo

```xml
<erro>Usuário não encontrado</erro>
```


---



### esqueceuSenhaAreaCliente

Dispara um email para o cliente com um link contendo um **token** para o usuário alterar a senha

Argumento | Tipo   | Requirido | Descrição
:-------  | :--:   | :-------: | :-------
senha     | String | Sim | Senha da corretora para utilizar o WS
senhaArea | String | Sim | Senha da aplicação
slug      | String | Sim | Nome de identificação da corretora
cpf       | String | Sim | CPF do cliente
uri       | String | Sim | URL da aplicação que será passado no email
token     | String | Sim | Hash de identificação da requisição

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body>
        <ns1:esqueceuSenhaAreaCliente>
            <senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
            <senhaarea xsi:type="xsd:string">FFCC00FF!!GO$</senhaarea>
            <slug xsi:type="xsd:string">sandbox</slug>
            <cpf xsi:type="xsd:string">21889781886</cpf>
            <uri xsi:type="xsd:string">https://sua.aplicacao/esqueceu-a-senha/85e1c9ab7788bacb481c8ed137c41840</uri>
            <token xsi:type="xsd:string">85e1c9ab7788bacb481c8ed137c41840</token>
        </ns1:esqueceuSenhaAreaCliente>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

#### [OK] Response

``` xml
<success>true</success>
```

#### [ERROR] Response

Link para o [[ERROR] Response](https://link.do/arquivo.xml) completo

```xml
<success>false</success>
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


``` xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body>
        <ns1:listaCotacoesAreaCliente>
            <senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
            <CodCorr xsi:type="xsd:int">8</CodCorr>
            <SenhaCorr xsi:type="xsd:string">z987$tex</SenhaCorr>
            <ramo xsi:type="xsd:string">todos</ramo>
            <CPF xsi:type="xsd:string">21889781886</CPF>
            <page xsi:type="xsd:int">1</page>
            <perpage xsi:type="xsd:int">10</perpage>
        </ns1:listaCotacoesAreaCliente>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

#### Response

``` xml
<?xml version="1.0"?>
<retorno>
    <pagination>
        <total>114</total>
        <page>1</page>
        <pages>12</pages>
        <perpage>10</perpage>
    </pagination>
    <colunas>
        <cotacoes>{"calcn": "Cálculo","ramo": "Ramo", "item": "Bem Segurado", "tipo": "Tipo de Seguro", "datacalculo": "Data do Cálculo", "iniciovigencia": "Início de Vigência"}</cotacoes>
    </colunas>
    <cotacoes>
        <cotacao>
            <token>/OzVtEpLV4LBqjE93NsJg2fhyNG/autZKfdYz/yRcPl1iYTxDMTQVBRHWZUd</token>
            <calcn>15648</calcn>
            <ramo>Automóvel</ramo>
            <item>ONIX LT 1.4 FLEX 4P AT</item>
            <tipo>Novo</tipo>
            <datacalculo>06/07/2017</datacalculo>
            <iniciovigencia>06/07/2017</iniciovigencia>
        </cotacao>
        <!--- ... -->
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
