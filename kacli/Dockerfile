# Estágio de Build (Exemplo usando Maven)
# Quando você criar o pom.xml, basta descomentar as linhas abaixo
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# COPY pom.xml .
# RUN mvn dependency:go-offline

# COPY src ./src
# RUN mvn clean package -DskipTests

# Estágio de Execução
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# COPY --from=build /app/target/*.jar app.jar
# EXPOSE 8000
# ENTRYPOINT ["java", "-jar", "app.jar"]

# Comando temporário para manter o container vivo enquanto o código Java não é adicionado
CMD ["tail", "-f", "/dev/null"]
