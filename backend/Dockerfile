# Usa imagem oficial do Node.js
FROM node:18

# Instala o netcat (necessário para wait-for.sh)
RUN apt-get update && apt-get install -y netcat-openbsd

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Dá permissão de execução ao wait-for.sh
RUN chmod +x wait-for.sh

# Expõe a porta 3000
EXPOSE 3000

# Comando de inicialização (aguarda o MySQL antes de rodar)
CMD ["./wait-for.sh", "mysql:3306", "--", "npm", "start"]
