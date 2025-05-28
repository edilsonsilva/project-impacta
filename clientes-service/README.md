# 🚀 Microsserviço de Clientes (CRUD)

Este repositório contém um microsserviço desenvolvido para gerenciar o cadastro de clientes (operações CRUD: Criar, Ler, Atualizar, Deletar). Ele foi construído com foco em eficiência e escalabilidade, utilizando tecnologias modernas e Docker para facilitar o desenvolvimento e a implantação.

---

## 🌟 Tecnologias Utilizadas

* **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
    * Um superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e manutenibilidade ao código.
* **Banco de Dados**: [MySQL](https://www.mysql.com/)
    * Um dos sistemas de gerenciamento de banco de dados relacional mais populares do mundo, rodando em um container Docker para um ambiente de desenvolvimento isolado e portátil.
* **Containerização**: [Docker](https://www.docker.com/)
    * Utilizado para empacotar a aplicação e o banco de dados em containers, garantindo um ambiente consistente e facilitando a implantação.
* **Framework Web**: [Express.js](https://expressjs.com/)
    * Um framework minimalista e flexível para Node.js, usado para construir a API RESTful do microsserviço.
* **ORM/Driver de DB**: (Você pode adicionar aqui o que estiver usando, ex: `TypeORM`, `Sequelize`, `mysql2`)
    * *Exemplo: `TypeORM` para mapeamento objeto-relacional.*

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* [**Node.js**](https://nodejs.org/en/download/) (versão 18 ou superior recomendada)
* [**npm**](https://www.npmjs.com/) (gerenciador de pacotes do Node.js, geralmente vem com o Node.js)
* [**Docker**](https://docs.docker.com/get-docker/)

---

## ⚙️ Configuração e Execução do Projeto

Siga os passos abaixo para colocar o microsserviço em funcionamento.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/edilsonsilva/project-impacta.git](https://github.com/edilsonsilva/project-impacta.git)
cd seu-repositorio-clientes
```
---

Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```shell
    # Variáveis do Microsserviço
    MYSQL_HOST=127.0.0.1 #Local do banco de dados
    MYSQL_USER=root #Usuário do banco de dados
    MYSQL_PASSWORD=123456 #Senha de acesso ao banco de dados
    MYSQL_DATABASE=clientes_db #Banco de dados do cliente
    MYSQL_PORT=7801 #Porta de comunicação do banco e dados que foi exposta pelo docker
    HOST_ADDR=127.0.0.1 #Endereço do servidor do microsservico
    HOST_PORT=3001 # Porta que o microsserviço irá escutar
```

Instalar Dependências do Projeto
Com o container do MySQL rodando, instale as dependências Node.js:

```shell 
    npm install
```