# Guia de Perguntas

Este é um projeto simples de um site de perguntas e respostas desenvolvido em Node.js com Express. Projeto desenvolvido pelo curso Formaçao Nodejs da Udemy. Onde refatorei o código e usei o typescript.

## Pré-requisitos

- Node.js
- npm ou yarn
- MySQL

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/WigorCosta21/Guia-De-Perguntas
   cd seu-projeto
   ```

####Inicialize o servidor:

npm install
# ou
yarn install

###Configure as variáveis de ambiente:

####Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

DB_HOST=seu-host
DB_NAME=seu-banco-de-dados
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
PORT=3000 # Porta em que o servidor irá rodar

###Funcionalidades
Os usuários podem fazer perguntas.
Os usuários podem ver as perguntas existentes.
Os usuários podem responder às perguntas.


###Estrutura do Projeto
src: Contém o código-fonte da aplicação.
 -controllers: Controladores da aplicação.
 -database: Configuração e conexão com o banco de dados.
 -models: Definições dos modelos do banco de dados.
 -routes: Rotas da aplicação.
 -views: Visualizações da aplicação.
public: Arquivos estáticos (CSS, JavaScript, imagens, etc.).
README.md: Este arquivo de documentação.




Lembre-se de substituir os valores de `DB_HOST`, `DB_NAME`, `DB_USER` e `DB_PASSWORD` no arquivo `.env` com as configurações do seu banco de dados MySQL. Também, se necessário, atualize a porta no arquivo `.env` para a que você deseja que o servidor Express escute. Este é um exemplo básico, você pode adicionar mais detalhes à medida que o projeto evolui.
