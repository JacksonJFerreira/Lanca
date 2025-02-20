# Lança IDF

<div align="center">
	<br>
	<br>
	<p>
		<img src="src/images/icon/icon.png"/>
	</p>

</div>

[[_TOC_]]

O Lança IDF é uma ferramenta híbrida (desktop com front-end web vinculada ao Portal SSUB) de automatização da avaliação do fornecedor no SAP (ambiente Web Dynpro). A atividade é realizada pela equipa da PGDO/GCEM, gerência de contratos de embarcações de SSUB.

>Web Dynpro é uma tecnologia de aplicativo da web desenvolvida pela SAP SE que se concentra no desenvolvimento de aplicativos de negócios do lado do servidor.

O Lança IDF é possível ser baixado no Portal SSUB, na área de Aplicações, aba Home, e conteúdo Lança IDF.

Acessando a página pelo navegador é somente habilitado para visualizar os campos, e o link de download.

Ao realizar o download e executar o programa localmente, o Lança IDF acessará o Portal SSUB para autenticação, verificação da versão (caso esteja em uma versão diferente aparecerá um popup informando para realizar o download da nova versão), e a tela (front-end) para o usuário utilizar da ferramenta.
 
Para mais informações de usabilidade consultar [Manual Lança IDF](https://petrobrasbr.sharepoint.com/:b:/r/teams/bdoc_SUB-SSUB-PGDO-PMF/Documentos%20Compartilhados/07.%20Inova%C3%A7%C3%A3o/02.%20Tecnologia/03.%20Projetos%20em%20Desenvolvimento/LAN%C3%87A%20IDF/Tutorial%20do%20Lan%C3%A7a%20IDF%20-%20V3.pdf?csf=1&web=1&e=NxWRlB). Este manual é gerido pela PGDO/GCEM.

**Observação**: A versão do Manual do Lança IDF é uma copia enviada pela PGDO/GCEM, portanto, para consultar a versão mais atualizada do documento é aconselhável consultar a GCEM para obter a última versão.

## Selenium e Gecko Driver

O Lança IDF utiliza o Selenium e o GeckoDriver (driver do firefox) para manipular de forma automática a execução de tarefas no navegador do usuário.

[Documentação do Selenium para JavaScript](https://www.selenium.dev/selenium/docs/api/javascript/index.html)

[Documentação do ElectronJS](https://www.electronjs.org/)
 
## Preparação do projeto no micro local

Para preparar o ambiente local do Lança IDF deve ser realizado a configuração do nodeJS para trabalhar com o ReactJS e o ElectronJS.

Para instalar o nodeJS basta acessar o Portal da Empresa e pesquisa por NodeJS, ou acessar o link para [instalar o Portal da Empresa e instalar o NodeJS](companyportal:ApplicationId=7a2db017-d553-4400-9a57-649362e35d51).

Outra forma de realizar a configuração do nodeJS é seguir as orientações conforme seguinte documento (aconselho utilizar o Portal da Empresa) [configuração nodeJS](https://petrobrasbr.sharepoint.com/:b:/r/teams/bdoc_SUB-SSUB-PGDO-PMF/Documentos%20Compartilhados/07.%20Inova%C3%A7%C3%A3o/02.%20Tecnologia/03.%20Projetos%20em%20Desenvolvimento/PORTAL%20SSUB/Material%20T%C3%A9cnico%20do%20Portal%20SSUB/Instalar%20NodeJS.pdf?csf=1&web=1&e=mLLRlE).

Para instalar os pacotes deve rodar o comando `npm install`

Caso o ElectronJS esteja lento, ou não seja possível ser baixado pelo `npm`, então faça o download do arquivo [electron.zip](https://petrobrasbr.sharepoint.com/teams/Download732/Shared%20Documents/General/electron.zip), e posteriormente faça a extração para dentro do projeto, na pasta `node_modules/`.

Caso esteja dando erro no electron (`'electron' não é reconhecido como um comando interno`), a solução é realizar a instalação através globalmente `npm i -g electron`. 

  Lembrando, como citado inicialmente a parte do front-end do Lança IDF roda no servidor e pode ser alterado através do código fonte do Portal SSUB webserver que se encontra no [Gitlab da PMF](https://git.ep.petrobras.com.br/PMF/portal-ssub-webserver), especificamente no diretório `src\pages\Robo`.

Por fim, para testar o Lança IDF basta rodar o script `npm run` 

## Configurando o Debug do Lança IDF

No arquivo `launch.json` deve ser inserido o seguinte script para rodar o build do Lança IDF com a biblioteca electronJS.

**.vscode/launch.json**
```
{
  "version": "0.2. ",
  "configurations": [
    {
      "name": "Depurar processo principal",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": [
        "."
      ],
      "outputCapture": "std"
    }
  ]
}
```

## Build do Projeto Lança IDF

O processo de build do Lança IDF é possível ser realizado através do seguinte passo à passo disponibilizado no manual abaixo.
[Passo à Passo do Processo de Build e Disponibilização do Lança IDF para Download](https://petrobrasbr.sharepoint.com/:w:/r/teams/bdoc_SUB-SSUB-PGDO-PMF/Documentos%20Compartilhados/07.%20Inova%C3%A7%C3%A3o/02.%20Tecnologia/03.%20Projetos%20em%20Desenvolvimento/LAN%C3%87A%20IDF/Passo%20%C3%A0%20Passo%20do%20Processo%20de%20Build%20e%20Disponibiliza%C3%A7%C3%A3o%20do%20Lan%C3%A7a%20IDF%20para%20Download.docx?d=w24c06a32c2654d3cba2b5e46c191ba6a&csf=1&web=1&e=J5z4Ma)

## Verificação de versão do Lança IDF

A verificação da versão do Lança IDF é realizado através de um DE x PARA da versão tagueada no código do Lança IDF em comparação com a versão tagueada do Portal SSUB webserver.
No Lança IDF a versão fica localizada no arquivo `electron\versao.js` e no [Portal SSUB webserver](https://git.ep.petrobras.com.br/PMF/portal-ssub-webserver) fica localizado no `src\pages\Robo\versao.js`.

Quando o usuário acessar o Lança IDF por uma versão diferente da versão tagueada no `src\pages\Robo\versao.js` automaticamente é disparado um popup informando para o usuário que versão do Lança IDF está desatualizado e pede para realizar o download da nova versão.

## Etapa de Testes do Projeto Lança IDF

Algumas etapas dos testes do Lança IDF foram possível ser realizados através de acesso ao [Ambiente de Desenvolvimento PED,  Mandante 220](http://vhpedas01.petrobras.com.br:8027/sap/bc/webdynpro/sap/yswd_comp_graph_21_ajustada?CLASSE=YSMM_CL_PGBF_MONITOR_REL&sap-client=220&sap-language=PT#), acessando a transação YSAVFOR_MONITORES. E partes dos testes foram realizados em parceria com os fiscais da PGDO/GCEM, pois somente fiscal e gerente de contrato podem ter acesso a transição YSAVFOR_MONITORES.

Como no ambiente de desenvolvimento os registros de contratos são antigos e as informações são muito diferente comparado ao ambiente de produção, assim que o Lança IDF chegou a etapa de testes à um nível mais avançado os testes foram realizados no [ambiente de produção](http://aravir.petrobras.com.br:8027/sap/bc/webdynpro/sap/yswd_comp_graph_21_ajustada?CLASSE=YSMM_CL_PGBF_MONITOR_REL&sap-language=PT#), junto com a supervisão da PGDO/GCEM.
