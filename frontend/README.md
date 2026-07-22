# 🎨 KaWeb Front-end

Este é o front-end do projeto **KaWeb**, que servirá como a interface principal da plataforma (Knowledge OS).
O foco atual do projeto está no desenvolvimento do back-end em Java Puro. O front-end, assim como a Landing Page, será desenvolvido **apenas quando as funcionalidades do back-end estiverem prontas e funcionando perfeitamente**.

---

## 🌟 Visão do Produto e Design

Quando o momento de focar no front-end chegar, o objetivo será:

- **Landing Page Impactante:** Criar um site que "exalte o conhecimento", apresentando claramente o propósito do KaWeb. Deverá contar com uma *Waitlist*, listagem de funcionalidades, possíveis planos futuros (mini SaaS) e uma seção de contato.
- **Design Moderno:** Utilizar referências sofisticadas (como o [Cosmic by Shadcn UI](https://cosmic.shadcnuikit.com/) ou similares) para uma interface limpa, premium e voltada à conversão e excelente experiência do usuário.
- **Comunicação com o Back-end:** Toda a integração será feita consumindo as APIs REST construídas nativamente no back-end Java.
- **Dashboard de Leitura:** Interface visual para gerenciar as leituras, interagir com artigos da comunidade e acompanhar a evolução dos estudos (integrado aos dados do Obsidian do usuário).

---

## 🛠️ Tecnologias Base

O projeto foi inicializado utilizando:
- **React + Vite**
- Conexão nativa com a API Java rodando no mesmo ambiente (via Docker).

## 🚀 Como Executar

Para iniciar o servidor de desenvolvimento localmente (quando houver implementação e for o foco da etapa):

```bash
npm install
npm run dev
```

*(Lembrando: você também pode rodar toda a stack com o `docker-compose` na raiz do repositório).*
