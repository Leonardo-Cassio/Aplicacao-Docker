const express = require('express');
const path = require('path');
const sequelize = require('./database/db');
const Pessoa = require('./models/Pessoa');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas CRUD
app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar pessoas' });
  }
});

app.post('/pessoas', async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.json(pessoa);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar pessoa' });
  }
});

app.put('/pessoas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Pessoa.update(req.body, { where: { id } });
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar pessoa' });
  }
});

app.delete('/pessoas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Pessoa.destroy({ where: { id } });
    res.json({ mensagem: 'Deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar pessoa' });
  }
});

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
