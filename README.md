## Guia de Perguntas

Este é um projeto simples de um site de perguntas e respostas desenvolvido em Node.js com Express. Projeto desenvolvido pelo curso Formaçao Nodejs da Udemy. Onde refatorei o código e usei o typescript.

## Pré-requisitos

- Node.js
- npm ou yarn
- MySQL

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/WigorCosta21/Guia-De-Perguntas
   cd Guia-De-Perguntas
   ```

## Inicialize o servidor:

npm install
ou
yarn install

## Configure as variáveis de ambiente:

## Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

<p>DB_HOST=seu-host</p> 
<p>DB_NAME=seu-banco-de-dados</p>
<p>DB_USER=seu-usuario</p>
<p>DB_PASSWORD=sua-senha</p>
<p>PORT=Porta em que o servidor irá rodar</p>

## Funcionalidades

Os usuários podem fazer perguntas.
Os usuários podem ver as perguntas existentes.
Os usuários podem responder às perguntas.

## Estrutura do Projeto

<ul>
  <li>
    src: Contém o código-fonte da aplicação.
    <ul> 
        <li>controllers: Controladores da aplicação.</li> 
        <li>database: Configuração e conexão com o banco de dados.</li>
        <li>models: Definições dos modelos do banco de dados.</li>
        <li>-routes: Rotas da aplicação.</li>
        <li> -views: Visualizações da aplicação.</li>
    </ul>
  </li>
  <li> public: Arquivos estáticos (CSS, JavaScript, imagens, etc.).</li>
  <li> README.md: Este arquivo de documentação.</li>
</ul>

Lembre-se de substituir os valores de `DB_HOST`, `DB_NAME`, `DB_USER` e `DB_PASSWORD` no arquivo `.env` com as configurações do seu banco de dados MySQL. Também, se necessário, atualize a porta no arquivo `.env` para a que você deseja que o servidor Express escute. Este é um exemplo básico, você pode adicionar mais detalhes à medida que o projeto evolui.
