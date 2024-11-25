const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const professorRoutes = require('./routes/professorRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', professorRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

 
