const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('Servidor com as rotas da Atividade 1.');
});

// 1. Rota de Soma
app.get('/soma/:numUm/:numDois', (req, res) => {
  const numUm = parseFloat(req.params.numUm);
  const numDois = parseFloat(req.params.numDois);
  
  if (isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Erro: Um dos parâmetros não é um número válido.');
  }

  const resultado = numUm + numDois;
  res.send(`Resultado da soma: ${resultado}`);
});

// 2. Rota de Subtração
app.get('/subtracao/:numUm/:numDois', (req, res) => {
  const numUm = parseFloat(req.params.numUm);
  const numDois = parseFloat(req.params.numDois);

  if (isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Erro: Um dos parâmetros não é um número válido.');
  }

  const resultado = numUm - numDois;
  res.send(`Resultado da subtração: ${resultado}`);
});

// 3. Rota de Multiplicação
app.get('/multiplicacao/:numUm/:numDois', (req, res) => {
  const numUm = parseFloat(req.params.numUm);
  const numDois = parseFloat(req.params.numDois);
  
  if (isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Erro: Um dos parâmetros não é um número válido.');
  }

  const resultado = numUm * numDois;
  res.send(`Resultado da multiplicação: ${resultado}`);
});

// 4. Rota de Divisão
app.get('/divisao/:numUm/:numDois', (req, res) => {
  const numUm = parseFloat(req.params.numUm);
  const numDois = parseFloat(req.params.numDois);
  
  if (isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Erro: Um dos parâmetros não é um número válido.');
  }

  if (numDois === 0) {
    return res.status(400).send('Erro: Divisão por zero não é permitida.');
  }

  const resultado = numUm / numDois;
  res.send(`Resultado da divisão: ${resultado}`);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});