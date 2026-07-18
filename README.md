# 🛠️ Kacli MonoRepo

Bem-vindo ao repositório do **Kacli**! Este repositório consiste em um projeto para suprir demandas pessoais e servirá de ambiente de aprendizado para aplicar e aprimorar habilidades em desenvolvimento de software. Aqui serão aplicados conceitos avançados como **DDD (Domain-Driven Design)**, **Arquitetura de Software**, **Clean Code** e **SOLID**.

O back-end do projeto é construído em **Java 17**, sem a utilização de frameworks (como Spring), com o objetivo de escrever um código resiliente a quebras por atualizações de bibliotecas e para entender a fundo o que cada anotacao do spring faz por baixo. 

---

## 🎯 Objetivo e Funcionalidades

A proposta do **Kacli** é ser uma ferramenta e biblioteca robusta para busca, análise e extração de dados. As principais funcionalidades planejadas/atuais são:

- 📚 **BaixaLivros**: Um buscador para encontrar e obter links de PDFs de livros (focado em livros tech e repositórios liberados), realizando *web scraping* de sites específicos utilizando a biblioteca `Jsoup`.
- 🛒 **VerificadorPrecos**: Uma ferramenta para comparar valores de livros nos maiores sites de vendas (como a Amazon e mercadoLivre) e retornar os principais dados da página (nome, preço, disponibilidade).

---

## 🚀 Como Importar (Instalação)

*(Em breve: dependência via Maven / Gradle quando a biblioteca for publicada)*

```xml
<!-- Exemplo de como ficará a dependência Maven -->
<dependency>
    <groupId>com.seudominio</groupId>
    <artifactId>kacli</artifactId>
    <version>1.0.0</version>
</dependency>
```

---

**Exemplo prático:**
```java
// Exemplo de uso da biblioteca Kacli
import com.seudominio.kacli.KacliFacade;
import com.seudominio.kacli.domain.Livro;

public class App {
    public static void main(String[] args) {
        KacliFacade kacli = new KacliFacade();
        
        // Buscando livros e verificando preços - O domínio já garante a validação
        Livro livro = kacli.buscarLivro("Clean Code");
        
        System.out.println("Livro encontrado: " + livro.getNome());
        System.out.println("Melhor preço: " + kacli.verificarMelhorPreco(livro));
    }
}
```

---

## 🧪 Vitrine de Testes (TDD e JUnit)

Testes bem construídos são essenciais não apenas para garantir qualidade, mas também como documentação para quem for ler o código e entender as regras de negócio em casos extremos. A suíte de testes (utilizando JUnit) foi desenhada para ilustrar o comportamento da aplicação.

- **Nomenclatura Descritiva:** Os métodos contam uma história clara sobre o que está sendo validado. 
  - *Exemplo:* `deveRetornarLivroQuandoBuscaPorNomeForValida()`
- **Cenários Válidos e Inválidos:** Além do "caminho feliz", aplicamos testes rigorosos nas exceções de Domínio.
  - *Exemplos:* `deveLancarExceptionQuandoNomeDoLivroForVazio()` ou `deveLancarExceptionQuandoPrecoForNegativo()`

---

## 🏷️ Versionamento Semântico (SemVer)

O Kacli adotará o Versionamento Semântico (SemVer) para garantir previsibilidade a quem utilizar a API pública da biblioteca.

- **`v1.0.0` (Estável):** Quando lançarmos a primeira versão estável, criaremos uma *release* no GitHub com a tag `v1.0.0`.
- **Alterações Menores ou Patches (`v1.1.0` / `v1.0.1`):** Usados para correções de bugs ou adições de funcionalidades (como novos módulos de busca) que não quebram o código de quem já está usando.
- **Breaking Changes (`v2.0.0`):** Alterações no contrato da interface principal (`KacliFacade`) ou mudanças de arquitetura que causem incompatibilidade exigirão obrigatoriamente o avanço para uma versão *Major*.

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
