const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  departamento: { type: String, required: true },
  titulo: { type: String, required: true },
});

module.exports = mongoose.model('Professor', professorSchema);
