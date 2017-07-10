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
ramo      | String | Sim | Ramo do seguro (utilize `todos`)
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

``` xml
<erro>Você não possui propostas em aberto</erro
```

---

### ultimaPropostaAreaCliente

Parâmetro    | Tipo   | Requerido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim | Código da corretora
SenhaCorr    | String | Sim | Senha da corretora
CPF          | String | Sim | CPF do cliente

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
	<Body>
		<ultimaPropostaAreaCliente>
			<senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
			<CodCorr xsi:type="xsd:int">8</CodCorr>
			<SenhaCorr xsi:type="xsd:string">z987$tex</SenhaCorr>
			<CPF xsi:type="xsd:string">21889781886</CPF>
		</ultimaPropostaAreaCliente>
	</Body>
</Envelope>
```

#### [OK] Response

``` xml
<?xml version="1.0"?>
<retorno>
	<colunas>
		<dados>{"proposta": "Proposta", "seguradora": "Seguradora", "ramo": "Ramo", "item": "Bem Segurado", "tipo": "Tipo de Seguro", "dataproposta": "Data da Contratação da Proposta", "iniciovigencia": "Início de Vigência", "situacao": "Situação"}</dados>
	</colunas>
	<proposta>
		<dados>
			<certificado>306157</certificado>
			<proposta>69286767</proposta>
			<seguradora>ITAU SEGUROS S/A</seguradora>
			<ramo>Automóvel</ramo>
			<item>ONIX LTZ 1.4 FLEX 4P AT</item>
			<tipo>Novo</tipo>
			<dataproposta>09/06/2017</dataproposta>
			<iniciovigencia>09/06/2017</iniciovigencia>
			<situacao>Em Emissão</situacao>
		</dados>
		<status>
			<gravacao>
				<label>Cotação Realizada</label>
				<flag>true</flag>
				<date>09/06/2017</date>
			</gravacao>
			<proposta>
				<label>Proposta Transmitida</label>
				<flag>true</flag>
				<date>09/06/2017</date>
			</proposta>
			<pagamento>
				<label>Pagamento</label>
				<flag>disabled</flag>
				<date></date>
			</pagamento>
			<vistoria>
				<label>Vistoria</label>
				<flag>disabled</flag>
				<date></date>
			</vistoria>
			<apolice>
				<label>Apólice</label>
				<flag>disable</flag>
				<date></date>
			</apolice>
		</status>
	</proposta>
</retorno>
```

#### [ERROR] Response

``` xml
<erro>Falha de autenticação.</erro>
```

### getPropostaAreaCliente

Parâmetro    | Tipo   | Requerido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim | Código da corretora
SenhaCorr    | String | Sim | Senha da corretora
certificado  | Int    | Sim | ID da proposta no TELEPORT

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
	<Body>
		<getPropostaAreaCliente>
			<senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
			<CodCorr xsi:type="xsd:int">8</CodCorr>
			<SenhaCorr xsi:type="xsd:string">z987$tex</SenhaCorr>
			<certificado xsi:type="xsd:int">306157</certificado>
		</getPropostaAreaCliente>
	</Body>
</Envelope>
```

#### [OK] Response

``` xml
<?xml version="1.0"?>
<retorno>
	<colunas>
		<dados>{"proposta": "Proposta", "seguradora": "Seguradora", "ramo": "Ramo", "item": "Bem Segurado", "tipo": "Tipo de Seguro", "dataproposta": "Data da Contratação da Proposta", "iniciovigencia": "Início de Vigência", "situacao": "Situação"}</dados>
	</colunas>
	<proposta>
		<dados>
			<certificado>306157</certificado>
			<proposta>69286767</proposta>
			<seguradora>ITAU SEGUROS S/A</seguradora>
			<ramo>Automóvel</ramo>
			<item>ONIX LTZ 1.4 FLEX 4P AT</item>
			<tipo>Novo</tipo>
			<dataproposta>09/06/2017</dataproposta>
			<iniciovigencia>09/06/2017</iniciovigencia>
			<situacao>Em Emissão</situacao>
		</dados>
		<status>
			<gravacao>
				<label>Cotação Realizada</label>
				<flag>true</flag>
				<date>09/06/2017</date>
			</gravacao>
			<proposta>
				<label>Proposta Transmitida</label>
				<flag>true</flag>
				<date>09/06/2017</date>
			</proposta>
			<pagamento>
				<label>Pagamento</label>
				<flag>disabled</flag>
				<date></date>
			</pagamento>
			<vistoria>
				<label>Vistoria</label>
				<flag>disabled</flag>
				<date></date>
			</vistoria>
			<apolice>
				<label>Apólice</label>
				<flag>disable</flag>
				<date></date>
			</apolice>
		</status>
	</proposta>
</retorno>
```

#### [ERROR] Response

``` xml
<erro>Falha de autenticação.</erro>
```

```xml
<ERRO>Esta proposta não esta em aberto</ERRO>
```

---

### listaApoliceAreaCliente

Parâmetro    | Tipo   | Requerido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim | Código da corretora
SenhaCorr    | String | Sim | Senha da corretora
ramo         | String | Sim | Ramo do seguro (utilize `todos`)
CPF          | String | Sim | CPF do cliente
page         | Int    | Sim | Página atual
perpage      | Int    | Sim | Total de itens por página

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
	<Body>
		<listaApoliceAreaCliente>
			<senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
			<CodCorr xsi:type="xsd:int">8</CodCorr>
			<SenhaCorr xsi:type="xsd:string">z987$tex</SenhaCorr>
			<ramo xsi:type="xsd:string">todos</ramo>
			<CPF xsi:type="xsd:string">21889781886</CPF>
			<page xsi:type="xsd:int">1</page>
			<perpage xsi:type="xsd:int">10</perpage>
		</listaApoliceAreaCliente>
	</Body>
</Envelope>
```

#### [OK] Response

``` xml
<?xml version="1.0"?>
<retorno>
	<pagination>
		<total>16</total>
		<page>1</page>
		<pages>2</pages>
		<perpage>10</perpage>
	</pagination>
	<colunas>
		<cotacoes>{"apolice": "Apólice", "seguradora": "Seguradora", "ramo": "Ramo", "item": "Bem Segurado", "tipo": "Tipo de Seguro", "dataproposta": "Data da Contratação da Proposta", "iniciovigencia": "Início de Vigência", "situacao": "Situação"}</cotacoes>
	</colunas>
	<cotacoes>
		<cotacao>
			<certificado>306261</certificado>
			<ci></ci>
			<apolice></apolice>
			<seguradora>PORTO SEGURO CIA DE SEGUROS GERAIS</seguradora>
			<ramo>Automóvel</ramo>
			<item>ONIX LTZ 1.4 FLEX 4P AT</item>
			<tipo>Novo</tipo>
			<dataproposta>30/06/2017</dataproposta>
			<iniciovigencia>30/06/2017</iniciovigencia>
			<situacao>Vigente</situacao>
		</cotacao>
		<cotacao>
			<certificado>306260</certificado>
			<ci></ci>
			<apolice></apolice>
			<seguradora>PORTO SEGURO CIA DE SEGUROS GERAIS</seguradora>
			<ramo>Automóvel</ramo>
			<item>ONIX LTZ 1.4 FLEX 4P AT</item>
			<tipo>Novo</tipo>
			<dataproposta>30/06/2017</dataproposta>
			<iniciovigencia>30/06/2017</iniciovigencia>
			<situacao>Vigente</situacao>
		</cotacao>
	</cotacoes>
</retorno>
```

#### [ERROR] Response

``` xml
<erro>Falha de autenticação.</erro>
```

``` xml
<erro>Esta apolice não esta emitida</erro>
```

---

### getApoliceAreaCliente

Parâmetro    | Tipo   | Requerido | Descrição
:-------     | :--:   | :-------: | :-------
senha        | String | Sim | Senha da corretora para utilizar o WS
CodCorr      | Int    | Sim | Código da corretora
SenhaCorr    | String | Sim | Senha da corretora
calculo      | Int    | Sim | ID da proposta no TELEPORT

#### Request

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:uTeleport-Teleport" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
	<Body>
		<getApoliceAreaCliente>
			<senha xsi:type="xsd:string">G580r$fW$$$@@fhOt%5029#fZZZs%8jQp.nX*tf86.T%gAgp</senha>
			<CodCorr xsi:type="xsd:int">8</CodCorr>
			<SenhaCorr xsi:type="xsd:string">z987$tex</SenhaCorr>
			<certificado xsi:type="xsd:int">2</certificado>
		</getApoliceAreaCliente>
	</Body>
</Envelope>
```

### [OK] Response

``` xml
<?xml version="1.0"?>
<retorno>
	<colunas>
		<dados>{"apolice": "Apolice", "ci": "Código de Identificação", "seguradora": "Seguradora", "ramo": "Ramo", "item": "Bem Segurado", "tipo": "Tipo de Seguro", "dataproposta": "Data da Contratação da Proposta", "iniciovigencia": "Início de Vigência", "situacao": "Situação"}</dados>
		<parcelas>{"numero_parcela": "Parcela", "vencimento": "Vencimento", "valor": "Valor", "status": "Status", "pagamento": "Data do Pagamento"}</parcelas>
	</colunas>
	<apolice>
		<dados>
			<certificado>306261</certificado>
			<ci></ci>
			<apolice></apolice>
			<seguradora>PORTO SEGURO CIA DE SEGUROS GERAIS</seguradora>
			<ramo>Automóvel</ramo>
			<item>ONIX LTZ 1.4 FLEX 4P AT</item>
			<tipo>Novo</tipo>
			<dataproposta>30/06/2017</dataproposta>
			<iniciovigencia>30/06/2017</iniciovigencia>
			<situacao>Vigente</situacao>
		</dados>
		<parcelas titulo="Pagamento">
			<parcela>
				<numero_parcela>1</numero_parcela>
				<vencimento>30/06/2017</vencimento>
				<valor>875,58</valor>
				<pago>0</pago>
				<pagamento></pagamento>
			</parcela>
		</parcelas>
		<status>
			<gravacao>
				<label>Cotação Realizada</label>
				<flag>true</flag>
				<date>30/06/2017</date>
			</gravacao>
			<proposta>
				<label>Proposta Transmitida</label>
				<flag>true</flag>
				<date>30/06/2017</date>
			</proposta>
			<pagamento>
				<label>Pagamento Realizado</label>
				<flag>true</flag>
				<date>30/06/2017</date>
			</pagamento>
			<apolice>
				<label>Apólice Emitida</label>
				<flag>true</flag>
				<date>10/07/2017</date>
			</apolice>
		</status>
	</apolice>
</retorno>
```

#### [ERROR] Response

``` xml
<erro>Falha de autenticação.</erro>
```

``` xml
<erro>Esta apolice não esta emitida</erro>
```
