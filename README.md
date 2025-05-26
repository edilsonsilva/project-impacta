# Projetos de Microsserviços e Service Mesh
## Bem-vindo ao repositório dos projetos desenvolvidos para a matéria de Microsserviços e Service Mesh!

Aqui você encontrará exemplos práticos e implementações de arquiteturas distribuídas. 
São projetos de microsservços vistos nas aulas. O projetos estão separados por diretórios.

___

Excelente! Transformei o README.md que criamos em um formato pronto para você copiar e colar diretamente no seu repositório do GitHub, com todos os comandos Markdown necessários para a formatação e os links.

Markdown

# Projetos de Microsserviços e Service Mesh

Bem-vindo ao repositório dos projetos desenvolvidos para a matéria de **Microsserviços e Service Mesh**!

Aqui você encontrará exemplos práticos e implementações de arquiteturas distribuídas, focadas na comunicação entre serviços, descoberta de serviços e gerenciamento de tráfego, essenciais para sistemas modernos e escaláveis.

---

## Estrutura do Repositório e Projetos

Este repositório está organizado para apresentar os diferentes projetos desenvolvidos, cada um explorando um aspecto da arquitetura de microsserviços e Service Mesh:

### [**`clientes/`**](clientes/)
Contém as aplicações **cliente** (front-end ou outros serviços) que consomem os microsserviços através do API Gateway. Isso demonstra como os clientes interagem com a arquitetura.


### [**`api-gateway-clientes/`**](api-gateway-clientes/)
Este projeto pode ser um **API Gateway** dedicado a servir múltiplos tipos de clientes (web, mobile, parceiros), possivelmente com diferentes regras de roteamento e segurança específicas para cada um. Ele foca na camada de entrada e na orquestração inicial.



### [**`service-discovery/`**](service-discovery/)
Um diretório dedicado a exemplos e configurações de **Service Discovery**, utilizando ferramentas como o **Consul**. Aqui você pode encontrar o código base para o registro e a descoberta de serviços.


### [**`seguranca-microsservicos/`**](seguranca-microsservicos/)
Este projeto explora diferentes abordagens para implementar **segurança em microsserviços**, como autenticação (JWT), autorização e comunicação segura (HTTPS/TLS) entre serviços.


### [**`microsservicos-completo/`**](microsservicos-completo/)
Este é o projeto central que reúne a implementação de microsserviços de ponta a ponta, incluindo:
* **Microsserviços de Negócio**: Exemplos de serviços focados em funcionalidades específicas (ex: produtos, usuários).
* **Service Discovery**: Integração com o Consul para permitir que os serviços se encontrem dinamicamente.
* **API Gateway**: O ponto de entrada unificado que roteia as requisições para os microsserviços, utilizando o Service Discovery.


### [**`service-mesh/`**](service-mesh/)
A seção sobre **Service Mesh** aprofunda-se em como plataformas como Istio ou Linkerd podem ser usadas para adicionar funcionalidades como roteamento avançado, resiliência (circuit breakers, retries), observabilidade (tracing, métricas) e segurança (mTLS) *sem modificar o código dos microsserviços*.

---

## Tecnologias Utilizadas

Os projetos foram desenvolvidos utilizando as seguintes tecnologias e conceitos:

* **Node.js**: Plataforma de execução JavaScript assíncrona.
* **Express.js**: Framework web minimalista e flexível para Node.js.
* **TypeScript**: Superset de JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e escalabilidade do código.

* **JavaScript**: Linguagem de script utilizada, tanto no front, como backend com nodejs.

* **Java com SpringBoot**: Linguagem Java utilizada para criar a estrutura de backend com a utiliazação do framework SpringBoot.

* **Docker**: Tecnologia de containers que serão utilizados para o deploy dos serviços, bem como a criação e utilização de banco de dados.

* **MySQL**: Sistema de gerenciamento de banco de dados relacional.
* **Consul (HashiCorp)**: Ferramenta para **Service Discovery**, Health Checking e Configuração Distribuída. Essencial para que os microsserviços se encontrem dinamicamente.
* **API Gateway**: Padrão de arquitetura que atua como um ponto de entrada unificado para todas as requisições de clientes, roteando-as para os microsserviços apropriados.

* **`http-proxy-middleware` / `express-http-proxy`**: Bibliotecas Node.js para criação de proxies HTTP.
* **Microsserviços**: Abordagem arquitetural para construir aplicações como um conjunto de serviços pequenos, independentes e fracamente acoplados.


* **Service Mesh**: Camada de infraestrutura que permite a comunicação segura, rápida e confiável entre microsserviços.

---

## Como Rodar os Projetos

Para rodar qualquer um dos projetos, siga as instruções específicas dentro de cada diretório. No geral, os passos comuns incluem:

1.  **Instalar dependências:** Use `npm install` na raiz de cada projeto.
2.  **Configurar variáveis de ambiente:** Crie um arquivo `.env` com as variáveis necessárias (ex: `PORT`, `DB_HOST`, `CONSUL_HOST`).
3.  **Configurar banco de dados:** Execute os scripts SQL fornecidos no MySQL.
4.  **Iniciar o Consul:** Abra um terminal separado e execute `consul agent -dev -ui`.
5.  **Compilar (para TypeScript):** Se o projeto for TypeScript, execute `npm run build` antes de iniciar.
6.  **Iniciar o serviço:** Use `npm run start` ou `npm run dev` (para desenvolvimento com `nodemon`).

Certifique-se de iniciar os microsserviços *antes* do API Gateway para que eles possam se registrar no Consul e o Gateway possa descobri-los. Para projetos de Service Mesh, pode haver passos adicionais para configurar a malha de serviço (ex: instalar o Istio em um cluster Kubernetes).

---

## Contribuição

Este repositório é uma demonstração dos conhecimentos adquiridos. 

---