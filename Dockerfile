# Exemplo de Dockerfile na raiz do projeto (Monorepo)
# Pode ser utilizado para construir um ambiente unificado ou de CI/CD.

FROM alpine:latest

WORKDIR /workspace

# Copia todos os projetos para dentro da imagem
COPY . .

CMD ["echo", "Root Dockerfile for Kacli MonoRepo"]
