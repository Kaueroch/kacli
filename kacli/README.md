# ⚙️ KaWeb Back-end

O back-end do **KaWeb** é construído utilizando **Java 17 Puro**, fugindo intencionalmente das amarras de frameworks como o Spring. O objetivo é criar um servidor HTTP nativo para consolidar o aprendizado em **DDD (Domain-Driven Design)**, **Arquitetura Limpa (Clean Code)** e princípios **SOLID**.

Isso permite um entendimento profundo das abstrações e resulta em um código extremamente resiliente e focado na regra de negócio.

---

## 🏗️ Arquitetura e Estrutura de Pastas

A separação de responsabilidades foi desenhada cuidadosamente para manter o domínio isolado de dependências externas:

- 📂 `usecase` / `command` ⚙️: Casos de uso da aplicação (orquestrando as requisições web e as regras).
- 📂 `domain` 🧱: Domínios e *records* para entidades (ex: Record de Livro contendo nome, ISBN).
- 📂 `controller` 🎮: Handlers REST nativos para receber requisições HTTP do front-end e retornar JSON.
- 📂 `service` ⚙️: Regras de negócio essenciais do sistema (Domain Services).
- 📂 `infra` 🌐: Comunicação externa (HTTP Client, Web Scraping com Jsoup, envio de e-mails, persistência).
- 📂 `dao` 🗄️: Interfaces que cuidarão da interação com o banco de dados.
- 📂 `config` 🛠️: Inicialização do servidor HTTP, conexões e injeção manual de dependências.
- ☕ `App.java` 🚀: O *Entrypoint* que inicializa a API.

---

## 🚀 Funcionalidades Principais (Em Desenvolvimento)

O back-end fornecerá endpoints para suportar as seguintes *core features* do KaWeb:
1. **Busca Automatizada / Web Scraping (Jsoup):** Extração de livros e metadados.
2. **Histórico de Preços:** Checagem de URLs da Amazon/Udemy via rotinas agendadas.
3. **Gestão de Leituras:** Controle de acervo e progresso via Obsidian.
4. **Criação de Artigos e Interação:** API para blog/posts e comentários.
5. **Automação de Newsletters:** Envio de e-mails orquestrados utilizando HttpClient nativo.

---

## 🧪 Vitrine de Testes

Os testes (JUnit) documentam e garantem as regras da aplicação.
- Foco em cenários felizes e de exceções no Domínio.
- Nomes descritivos (ex: `deveRetornarLivroQuandoBuscaPorNomeForValida()`).
