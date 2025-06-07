const express = require('express');
const router = express.Router();
const Pessoa = require('../models/Pessoa');

// GET /pessoas
router.get('/', async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar pessoas' });
  }
});

// POST /pessoas
router.post('/', async (req, res) => {
  try {
    console.log('Recebido:', req.body); // <--- log adicionado
    const novaPessoa = await Pessoa.create(req.body);
    res.status(201).json(novaPessoa);
  } catch (error) {
    console.error(error);
    res.status(400).json({ erro: 'Erro ao cadastrar pessoa' });
  }
});

// PUT /pessoas/:id
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Pessoa.update(req.body, { where: { id } });
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar pessoa' });
  }
});

// DELETE /pessoas/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Pessoa.destroy({ where: { id } });
    res.json({ mensagem: 'Deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar pessoa' });
  }
});

module.exports = router;
