const express = require('express');
const router = express.Router();
const Professor = require('../models/Professor');


router.post('/professores', async (req, res) => {
  try {
    const professor = new Professor(req.body);
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/professores', async (req, res) => {
  try {
    const professores = await Professor.find();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/professores/:id', async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id);
    if (!professor) return res.status(404).json({ message: 'Professor não encontrado' });
    res.json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/professores/:id', async (req, res) => {
  try {
    const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!professor) return res.status(404).json({ message: 'Professor não encontrado' });
    res.json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/professores/:id', async (req, res) => {
  try {
    const professor = await Professor.findByIdAndDelete(req.params.id);
    if (!professor) return res.status(404).json({ message: 'Professor não encontrado' });
    res.json({ message: 'Professor removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
