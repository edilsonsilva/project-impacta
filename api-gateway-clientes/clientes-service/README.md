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
git clone https://github.com/edilsonsilva/project-impacta.git

cd project-impacta
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

### Referências:

#### 1. Microsserviços
Artigos/Blogs:

Microservices by Martin Fowler: Um artigo seminal que introduziu e popularizou o conceito de microsserviços. Leitura obrigatória.
https://martinfowler.com/articles/microservices.html

Patterns for Microservices: Série de artigos do Nginx sobre padrões comuns de microsserviços (API Gateway, Service Discovery, Circuit Breaker, etc.).
https://www.nginx.com/blog/microservices-patterns/

The Twelve-Factor App: Metodologia para construir aplicações SaaS (Software como Serviço) que são robustas, escaláveis e de fácil implantação. Muitos de seus princípios se aplicam a microsserviços.
https://12factor.net/


Vídeos do YouTube:

Martin Fowler on Microservices (GOTO 2014): Uma das primeiras palestras de Martin Fowler sobre o assunto.
https://www.youtube.com/watch?v=wg_H-S4mXlU


Microservices Architecture Explained by IBM Technology: Uma introdução concisa e visual.
https://www.youtube.com/watch?v=ikx9J2R2K4M


Channel 9 - Microservices from the Ground Up: Uma série mais extensa para iniciantes.
(Procure por "Microservices from the Ground Up" no YouTube, pois o link direto pode mudar, mas é um recurso excelente).


Livros:

"Building Microservices" by Sam Newman: Um livro fundamental e amplamente respeitado para entender a arquitetura de microsserviços e seus desafios.
ISBN: 978-1491950357


"Microservices Patterns" by Chris Richardson: Aborda os padrões de design e as melhores práticas para microsserviços, cobrindo tópicos como Service Discovery, gerenciamento de dados e comunicação.


ISBN: 978-1617294549
"Monolith to Microservices" by Sam Newman: Foca na migração de arquiteturas monolíticas para microsserviços.
ISBN: 978-1492047728

---
#### 2. MySQL
Artigos/Blogs:

MySQL Official Documentation: A fonte mais completa e confiável para todas as versões do MySQL.
https://dev.mysql.com/doc/


DigitalOcean Community Tutorials (MySQL Tag): Muitos tutoriais práticos sobre instalação, configuração e uso básico/avançado do MySQL.
https://www.digitalocean.com/community/tags/mysql


Percona Blog (MySQL Tag): Artigos mais aprofundados sobre performance, otimização e gerenciamento de MySQL.
https://www.percona.com/blog/tag/mysql/


Vídeos do YouTube:

MySQL Tutorial for Beginners by Mosh Hamedani: Uma introdução sólida para quem está começando.
https://www.youtube.com/watch?v=7S_tz1z_5bA


Official MySQL Channel: Tutoriais, webinars e novidades diretamente da equipe MySQL.
https://www.youtube.com/@mysql


Advanced MySQL Tutorials: Procure por canais como "freeCodeCamp.org" ou "The Net Ninja" para tutoriais mais específicos sobre consultas avançadas, otimização, etc.


Livros:

"High Performance MySQL" by Baron Schwartz, Peter Zaitsev, and Vadim Tkachenko: Um guia essencial para otimização e escalabilidade do MySQL.
ISBN: 978-1491901618


"SQL in 10 Minutes a Day" by Ben Forta: Embora não seja exclusivo de MySQL, é um excelente livro para aprender SQL rapidamente.
ISBN: 978-0672337728

---

#### 3. TypeScript
Artigos/Blogs:

TypeScript Handbook (Official): O guia oficial e mais completo para aprender TypeScript, desde o básico até conceitos avançados.
https://www.typescriptlang.org/docs/handbook/intro.html


Basarat Ali Syed's TypeScript Deep Dive: Um recurso online muito detalhado e aprofundado sobre TypeScript.
https://basarat.gitbook.io/typescript/


Dev.to (TypeScript Tag): Muitos artigos da comunidade sobre dicas, truques e uso de TypeScript em diferentes contextos.
https://dev.to/t/typescript


Vídeos do YouTube:

TypeScript Course for Beginners by freeCodeCamp.org: Um curso completo e gratuito para iniciantes.
https://www.youtube.com/watch?v=gp5H0V39VaE


Official TypeScript Channel: Vídeos sobre novidades, tutoriais e palestras da equipe TypeScript.
https://www.youtube.com/@typescriptlang

Traversy Media (TypeScript Playlists): Muitos tutoriais práticos e projetos com TypeScript.
(Procure por "Traversy Media TypeScript" no YouTube).


Livros:

"Programming TypeScript" by Boris Cherny: Um guia abrangente que aborda TypeScript desde o básico até tópicos avançados.
ISBN: 978-1492037651

"TypeScript in 50 Lessons" by Stefan Baumgartner: Uma abordagem mais concisa e direta, ideal para quem já tem alguma experiência com JavaScript.
ISBN: 978-1617299384

---


#### 4. Docker
Artigos/Blogs:

Docker Official Documentation: Guia oficial para instalação, uso e referências. Essencial para qualquer nível.
https://docs.docker.com/


Docker Best Practices: Guia oficial com as melhores práticas para construir e usar imagens Docker eficientemente.
https://docs.docker.com/develop/develop-images/dockerfile_best-practices/


Docker Compose Documentation: Documentação para orquestrar múltiplos containers.
https://docs.docker.com/compose/


Vídeos do YouTube:

Docker Tutorial for Beginners by freeCodeCamp.org: Um ótimo ponto de partida para entender os conceitos básicos.
https://www.youtube.com/watch?v=fqMOX6VUhl8


Official Docker Channel: Webinars, tutoriais e notícias sobre o Docker.
https://www.youtube.com/@docker


Traversy Media (Docker Playlists): Projetos práticos que demonstram o uso do Docker e Docker Compose.
(Procure por "Traversy Media Docker" no YouTube).


Livros:

"Docker Deep Dive" by Nigel Poulton: Um livro muito popular e detalhado que cobre o Docker em profundidade. (Verifique se há edições mais recentes, pois a tecnologia evolui rapidamente).
ISBN: 978-0994966746 (Verifique versões mais recentes)


"Docker for Developers" by Michael P. E. Smith: Focado em como usar o Docker no ciclo de desenvolvimento de software.
ISBN: 978-1617294914


"The Docker Book" by James Turnbull: Outro clássico para iniciantes e usuários intermediários.
ISBN: 978-0321914917