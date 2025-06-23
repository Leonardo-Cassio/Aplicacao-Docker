# Usa imagem oficial do Node.js
FROM node:18

# Instala o netcat-openbsd (necessário para aguardar o MySQL)
RUN apt-get update && apt-get install -y netcat-openbsd

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando de inicialização (aguarda o MySQL antes de rodar)
CMD ["sh", "-c", "while ! nc -z leo-mysql 3306; do echo 'Aguardando MySQL...'; sleep 2; done; npm start"]
