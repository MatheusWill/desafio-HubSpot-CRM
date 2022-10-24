<h1>Desafio de código de Integração</h1>

Desafio feito como teste técnico para prosseguimento da vaga.

<h2>Descrição</h2>

Criar uma integração entre as plataformas Google Sheets e HubSpot CRM, buscando os dados de contato na planilha do Google Sheets.

<h2>Instalação do projeto</h2>

`npm i` ou `yarn`

<h2>execução do projeto</h2>

`yarn server:dev` para rodar a API.<br/>
`yarn server:debug` para debugar a API.

<h2>Requisitos</h2>

Ter o **ACCESS_TOKEN HubSpot** (**_API Key_** da API na plataforma) [HubSpot](https://knowledge.hubspot.com/pt/integrations/how-do-i-get-my-hubspot-api-key#:~:text=Na%20sua%20conta%20da%20HubSpot,em%20Gerar%20chave%20de%20API.)<br/>
Possuir **URL base da API da HubSpot** no seu .env<br/>

<h2>Exemplo de requisição</h2>

Requisição via Postman para `http://localhost:3030/api/v1/hubspot` com o seguinte body: <br/>
**`spread_sheet_id`** = ID da tabela requerida. (Fica da url do seu navegador, após o _/d/_ (exemplo: docs.google.com/spreadsheets/d/**_1UfeKFjjAu0avPqw_bxhvdOnrVLTHxfmvuErzAxtwUWI_**/edit))<br/>
**`sheet_name`** = nome da tabela requerida
