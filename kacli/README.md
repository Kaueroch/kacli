# 🛠️ Kacli

Esse Repositorio consiste em ser algo que irá suprir demandas pessoais, e irá servir de aprendizado para desenvolver e aprender minhas habilidades em desenvolvimento. Irei aplicar todas as coisa que estou estudando como DDD,Arquitetura de Software, CLEAN CODE, SOLID.

Será algo feito em java 17 sem a utilização de framework justamente pra escrever um codigo que não só posso quebrar um dia caso alguma versão de qualquer que seja a lib atualizar, como para eu entender as abstrações que o spring "esconde" de mim.

---

## 🎯 Funcionalidades Atuais & Planejadas

As funcionalidades ainda estão sendo pensadas, mas a principal são essas abaixo

- 📚 **BaixaLivros**: Um buscador para encontrar e obter links de PDFs de livros (focado em livros tech, repositórios liberados e *web scraping* de sites específicos usando a biblioteca `Jsoup`).
- 🛒 **VerificadorPrecos**: Uma ferramenta para buscar produtos nos maiores sites de vendas (como a Amazon) e retornar os principais dados da página (nome, preço, disponibilidade).

---
## EndPoints
Irá conter os endpoints da aplicacao

## ⚙️ Stack & Tecnologias

- **Back-end: Java (Puro)
- Front-end: React
- Banco de dados:PostgreSQL.

### Estrutura de Pastas (Back-end)
- 📂 `command` ⌨️: Comandos/casos de uso que encapsulam as ações da aplicação.
- 📂 `domain` 🧱: Domínios e *records* para entidades do banco de dados.
- 📂 `controller` 🎮: Controladores para receber e enviar requests via `HttpClient`.
- 📂 `service` ⚙️: Regras de negócio.
- 📂 `infra` 🌐: Comunicação externa (HTTP, arquivos, formatação de dados).
- 📂 `dao` 🗄️: Interação com o banco de dados.
- 📂 `config` 🛠️: Configurações gerais da aplicação.
- ☕ `App.java` 🚀: O *Entrypoint*.
