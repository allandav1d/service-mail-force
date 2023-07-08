# Use a imagem oficial do Node.js para a compilação em estágio de construção
FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

# Instalação dos pacotes
RUN yarn

# Copie todos os arquivos do projeto para a pasta do trabalho
COPY . .

# Compilação do projeto
RUN yarn build

# Use a imagem oficial do Node.js para o estágio de execução
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Instalação somente das dependências de produção
RUN yarn --production

# Copie os arquivos de construção do estágio de construção
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
