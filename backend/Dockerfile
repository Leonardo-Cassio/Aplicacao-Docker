# Usa imagem oficial do Node.js
FROM node:18

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta 3000 (ou a que seu app usa)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
