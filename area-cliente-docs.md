# API SOAP - Area do cliente 


## Methods


### loginAreaCliente

Efetua o login na aplicação

Parâmetro | Tipo   | Requerido | Descrição
--------- | :----: | :-------: | ---------
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
            <cpf xsi:type="xsd:string">84726891740</cpf>
            <password xsi:type="xsd:string">1234</password>
            <slug xsi:type="xsd:string">sandbox</slug>
        </ns1:loginAreaCliente>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

#### [OK] Response

``` xml
<cliente>
    <codcorr>8</codcorr>
    <senhacorr>senha_da_corretora</senhacorr>
    <nome>John Doe</nome>
    <celular>11912341234</celular>
    <email>doe@textecnologia.com.br</email>
    <cpf>84726891740</cpf>
    <facebook>true</facebook>
    <iframe></iframe>
</cliente>
```

#### [ERROR] Response

```xml
<erro>Usuário não encontrado</erro>
```


---


### esqueceuSenhaAreaCliente

Dispara um email para o cliente com um link para o usuário alterar a senha

Parâmetro | Tipo   | Requerido | Descrição
--------- | :----: | :-------: | ---------
senha     | String | Sim       | Senha da corretora para utilizar o WS
senhaArea | String | Sim       | Senha da aplicação
slug      | String | Sim       | Nome de identificação da corretora
cpf       | String | Sim       | CPF do cliente
uri       | String | Sim       | URL da aplicação que será passado no email
token     | String | Sim       | Hash de identificação da requisição


#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body>
        <ns1:esqueceuSenhaAreaCliente>
            <senha xsi:type="xsd:string">senha_do_ws</senha>
            <senhaarea xsi:type="xsd:string">senha_da_area</senhaarea>
            <slug xsi:type="xsd:string">sandbox</slug>
            <cpf xsi:type="xsd:string">84726891740</cpf>
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

```xml
<success>false</success>
```


---


### resetSenhaAreaCliente

Altera senha do usuário

Parâmetro | Tipo   | Requerido | Descrição
--------  | :----: | :-------: | ---------
senha     | String | Sim       | Senha da corretora para utilizar o WS
senhaArea | String | Sim       | Senha da aplicação
slug      | String | Sim       | Nome de identificação da corretora
cpf       | String | Sim       | CPF do cliente
novaSenha | String | Sim       | Nova senha do cliente
token     | String | Sim       | Hash de identificação da requisição


#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body>
        <ns1:resetSenhaAreaCliente>
            <senha xsi:type="xsd:string">senha_do_ws</senha>
            <senhaarea xsi:type="xsd:string">senha_da_area</senhaarea>
            <slug xsi:type="xsd:string">sandbox</slug>
            <cpf xsi:type="xsd:string">84726891740</cpf>
            <novasenha xsi:type="xsd:string">1234</novasenha>
            <token xsi:type="xsd:string">85e1c9ab7788bacb481c8ed137c41840</token>
        </ns1:resetSenhaAreaCliente>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

#### [OK] Response

``` xml
<success>true</success>
```

#### [ERROR] Response

```xml
<success>false</success>
```

---


### listaCotacoesAreaCliente

Parâmetro | Tipo   | Requerido | Default    | Descrição
--------- | :----: | :-------: | :--------: | ---------
senha     | String | Sim       | -          | Senha da corretora para utilizar o WS
CodCorr   | Int    | Sim       | -          | Código da corretora
SenhaCorr | String | Sim       | -          | Senha da corretora
ramo      | String | Sim       | -          | Ramo do seguro (utilize `todos`)
CPF       | String | Sim       | -          | CPF do cliente
page      | Int    | Não       | 1          | Página atual
perpage   | Int    | Não       | 10         | Total de itens por página

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body>
        <ns1:listaCotacoesAreaCliente>
            <senha xsi:type="xsd:string">senha_do_ws</senha>
            <CodCorr xsi:type="xsd:int">8</CodCorr>
            <SenhaCorr xsi:type="xsd:string">senha_da_corretora</SenhaCorr>
            <ramo xsi:type="xsd:string">todos</ramo>
            <CPF xsi:type="xsd:string">84726891740</CPF>
            <page xsi:type="xsd:int">3</page>
            <perpage xsi:type="xsd:int">2</perpage>
        </ns1:listaCotacoesAreaCliente>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

#### [OK] Response

Link para o [XML](https://link.do/arquivo.xml) completo

``` xml
<?xml version="1.0"?>
<retorno>
    <pagination>
        <total>114</total>
        <page>3</page>
        <pages>57</pages>
        <perpage>2</perpage>
    </pagination>
    <colunas>
        <cotacoes>{"calcn": "Cálculo","ramo": "Ramo", "item": "Bem Segurado", "tipo": "Tipo de Seguro", "datacalculo": "Data do Cálculo", "iniciovigencia": "Início de Vigência"}</cotacoes>
    </colunas>
    <cotacoes>
        <cotacao>
            <token>/OzVsOrGnptqri7I1fY=</token>
            <calcn>15606</calcn>
            <ramo>Automóvel</ramo>
            <item>ONIX LTZ 1.4 FLEX 4P AT</item>
            <tipo>Novo</tipo>
            <datacalculo>30/06/2017</datacalculo>
            <iniciovigencia>30/06/2017</iniciovigencia>
        </cotacao>
        <cotacao>
            <token>/OzWaGosfLzuF4uaWlhhCUmtY+S73dpNxwnNcpAzibWbaHcDnLWrLSQrefQ3</token>
            <calcn>15583</calcn>
            <ramo>Automóvel</ramo>
            <item>CITY EX 1.5 4P AT</item>
            <tipo>Novo</tipo>
            <datacalculo>29/06/2017</datacalculo>
            <iniciovigencia>29/06/2017</iniciovigencia>
        </cotacao>
    </cotacoes>
</retorno>
```

#### [ERROR] Response

```xml
<erro>Falha de autenticação.</erro>
```

```xml
<erro>Você não possui cotações em aberto</erro>
```


---


### listaPropostaAreaCliente

Parâmetro | Tipo   | Requerido | Descrição
:-------  | :--:   | :-------: | :-------
senha     | String | Sim | Senha da corretora para utilizar o WS
CodCorr   | Int    | Sim | Código da corretora
SenhaCorr | String | Sim | Senha da corretora
ramo      | String | Sim | Ramo do seguro (utilize todos)
CPF       | String | Sim | CPF do cliente
page      | Int    | Sim | Página atual
perpage   | Int    | Sim | Total de itens por página

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
	<Body>
		<listaCotacoesAreaCliente>
			<senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
			<CodCorr xsi:type="xsd:int">8</CodCorr>
			<SenhaCorr xsi:type="xsd:string">z987$tex</SenhaCorr>
			<ramo xsi:type="xsd:string">todos</ramo>
			<CPF xsi:type="xsd:string">21889781886</CPF>
			<page xsi:type="xsd:int">1</page>
			<perpage xsi:type="xsd:int">10</perpage>
		</listaCotacoesAreaCliente>
	</Body>
</Envelope>
```

#### [OK] Response

Link para o [XML](https://link.do/arquivo.xml) completo

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
		<cotacao>
			<token>/OzVtEVc1RHQe3lXwLoA1/nzfxfc9h5iykorKZ/yVBPSiLddNnOdnQGKrDGK</token>
			<calcn>15647</calcn>
			<ramo>Automóvel</ramo>
			<item>ONIX LT 1.4 FLEX 4P AT</item>
			<tipo>Novo</tipo>
			<datacalculo>06/07/2017</datacalculo>
			<iniciovigencia>06/07/2017</iniciovigencia>
		</cotacao>
	</cotacoes>
</retorno>
```

#### [ERROR] Response

``` xml
<erro>Falha de autenticação.</erro>
```

---

### ultimaPropostaAreaCliente

Parâmetro    | Tipo   | Requerido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim |
SenhaCorr    | String | Sim |
CPF          | String | Sim | CPF do cliente

### getPropostaAreaCliente

Parâmetro    | Tipo   | Requerido | Descrição
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

Parâmetro    | Tipo   | Requerido | Descrição
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

Parâmetro    | Tipo   | Requerido | Descrição
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
