# 🌐 KaWeb - O Knowledge OS

Bem-vindo ao repositório do **KaWeb**! O lema do projeto é a **exaltação e descentralização do conhecimento**.

Este repositório é um monorepo que contém o back-end e o front-end do projeto. O KaWeb é um projeto com foco profissional, criado para oferecer conhecimento gratuito para a comunidade técnica, servindo também como um ambiente avançado de aprendizado para aplicar **DDD (Domain-Driven Design)**, **Arquitetura Limpa (Clean Code)** e **SOLID**.

---

## 🎯 Visão Geral do Projeto

O objetivo do KaWeb é ser uma plataforma completa para desenvolvedores. As principais funcionalidades planejadas são:

- 📚 **Busca Automatizada (Acervo Tech):** Ferramenta de web scraping para encontrar obras técnicas, metadados e links de PDFs, salvando no banco de dados.
- 🛒 **Histórico de Preços (Radar Dev):** Monitoramento de variação de valores na Amazon e Udemy, criando um "radar de investimento".
- 📖 **Gestão de Leituras:** Dashboard moderno para organizar o acervo pessoal (Lendo, Concluído, Na fila).
- ✍️ **Criação de Artigos:** Espaço integrado para escrever e publicar artigos, criando um portfólio de conhecimento.
- ✉️ **Disparo de Newsletters:** Automação de envios de e-mails periódicos para seguidores (usando Java puro e integração com Resend).
- 🤝 **Comunidade e Interação:** Rede social segmentada tech (seguir autores, comentários, networking).
- 🔗 **Painel de Leitura & Sincronização com Obsidian:** Integração nativa aos cofres locais do Obsidian para extrair o progresso real de leitura.

O back-end é desenvolvido em **Java 17 puro** (sem o uso de frameworks como Spring) para entender a fundo o funcionamento interno de um servidor HTTP e garantir um código resiliente. A longo prazo, a plataforma também abrirá portas para se tornar um **mini SaaS** e ser monetizada via anúncios.

---

## ⚙️ Stack & Tecnologias

- **Back-end:** Java 17+ (Puro, utilizando servidor HTTP nativo)
- **Front-end:** React / Vite (Utilizando design premium focado em UI limpa)
- **Banco de Dados:** PostgreSQL
- **Integrações/Libs:** 
  - Jsoup (Web Scraping / DOM parsing)
  - HttpClient Nativo & Jackson (Processamento JSON / Records)
  - Disparo de E-mails via Java/Resend
- **Infraestrutura:** Docker e Docker Compose

---

## 🏗️ Estrutura do MonoRepo

- 📂 `kacli` (Back-end): API construída em Java Puro.
- 📂 `frontend` (Front-end): Aplicação web React.

---

## 🐳 Como executar com Docker (Local)

O Docker Compose está configurado para subir toda a stack: Frontend, Backend e Banco de Dados (PostgreSQL).

Na raiz do projeto, execute:
```bash
docker-compose up --build
```
- **Frontend** estará acessível em `http://localhost:8080`.
- **Backend** inicializará na sua respectiva porta configurada.
- **PostgreSQL** rodará na porta `5432`.
