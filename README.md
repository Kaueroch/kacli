# 🛠️ Kacli MonoRepo

Bem-vindo ao repositório do **Kacli**! Este repositório consiste em um projeto para suprir demandas pessoais e servirá de ambiente de aprendizado para aplicar e aprimorar habilidades em desenvolvimento de software. Aqui serão aplicados conceitos avançados como **DDD (Domain-Driven Design)**, **Arquitetura de Software**, **Clean Code** e **SOLID**.

O back-end do projeto é construído em **Java 17 (Puro)**, sem a utilização de frameworks (como Spring), com o objetivo de escrever um código resiliente a quebras por atualizações de bibliotecas e para entender a fundo as abstrações que os frameworks geralmente "escondem".

---

## 🎯 Funcionalidades Atuais & Planejadas

As funcionalidades ainda estão sendo pensadas, mas as principais planejadas são:

- 📚 **BaixaLivros**: Um buscador para encontrar e obter links de PDFs de livros (focado em livros tech e repositórios liberados), realizando *web scraping* de sites específicos utilizando a biblioteca `Jsoup`.
- 🛒 **VerificadorPrecos**: Uma ferramenta para comparar valores de livros nos maiores sites de vendas (como a Amazon e mercadoLivre) e retornar os principais dados da página (nome, preço, disponibilidade).

---

## ⚙️ Stack & Tecnologias

- **Back-end**: Java 17 (Puro)
- **Front-end**: React (construído com Vite)
- **Banco de Dados**: PostgreSQL
- **Infraestrutura**: Docker e Docker Compose

---

## 📁 Estrutura de Pastas (Back-end)

O back-end (`/kacli`) segue uma separação rigorosa de responsabilidades:

- 📂 `command` ⌨️: Comandos/casos de uso que encapsulam as ações da aplicação.
- 📂 `domain` 🧱: Domínios e *records* para entidades do banco de dados.
- 📂 `controller` 🎮: Controladores para receber e enviar requests via `HttpClient`.
- 📂 `service` ⚙️: Regras de negócio.
- 📂 `infra` 🌐: Comunicação externa (HTTP, arquivos, formatação de dados).
- 📂 `dao` 🗄️: Interação com o banco de dados.
- 📂 `config` 🛠️: Configurações gerais da aplicação.
- ☕ `App.java` 🚀: O *Entrypoint* da aplicação.

---

## 🐳 Como usar com Docker

Foram configurados `Dockerfiles` para cada projeto e um arquivo para orquestração na raiz.

### Executando tudo (via Docker Compose)

O Docker Compose está configurado para subir o **Frontend**, o **Backend** (Java) e o Banco de Dados **PostgreSQL**.

Na raiz do projeto, execute:
```bash
docker-compose up --build
```
- O **Frontend** estará acessível em `http://localhost:8080`.
- O **Backend** será inicializado em sua respectiva porta (ex: `8000`).
- O **PostgreSQL** estará rodando na porta `5432` com os dados configurados no `docker-compose.yml`.
