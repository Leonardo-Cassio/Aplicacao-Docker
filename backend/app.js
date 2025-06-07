const express = require('express');
const path = require('path');
const sequelize = require('./database/db');
const Pessoa = require('./models/Pessoa');
const pessoasRouter = require('./routes/pessoas');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pessoas', pessoasRouter); // usa corretamente o router

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco com sucesso!');
    await sequelize.sync();
    console.log('Tabelas sincronizadas!');
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar o banco:', error);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
