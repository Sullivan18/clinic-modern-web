const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware para permitir o envio de JSON no corpo das requisições
app.use(bodyParser.json());

// Endpoint para receber o agendamento
app.post('/api/agendar', (req, res) => {
  const agendamentoData = req.body; // Dados enviados do front-end
  
  // Gera um nome de arquivo único
  const fileName = `agendamento_${Date.now()}.json`;

  // Caminho do arquivo na pasta 'agendamentos'
  const filePath = path.join(__dirname, '../agendamentos', fileName);

  // Salva os dados no arquivo
  fs.writeFile(filePath, JSON.stringify(agendamentoData, null, 2), (err) => {
    if (err) {
      console.error('Erro ao salvar o agendamento:', err);
      return res.status(500).send('Erro ao salvar o agendamento');
    }
    res.status(200).send('Agendamento salvo com sucesso');
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
