const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('Servidor com a rota da Atividade 3.');
});

// Rota com path param para operação e query params para números
app.get('/operacao/:tipo', (req, res) => {
  const { tipo } = req.params;
  const { numUm, numDois } = req.query;

  const n1 = parseInt(numUm);
  const n2 = parseInt(numDois);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).send('Erro: Os parâmetros numUm e numDois devem ser números válidos.');
  }

  let resultado;

  switch (tipo) {
    case 'soma':
      resultado = n1 + n2;
      break;
    case 'subtracao':
      resultado = n1 - n2;
      break;
    case 'multiplicacao':
      resultado = n1 * n2;
      break;
    case 'divisao':
      if (n2 === 0) {
        return res.status(400).send('Erro: Divisão por zero não é permitida.');
      }
      resultado = n1 / n2;
      break;
    default:
      return res.status(400).send('Erro: Tipo de operação inválida na URL. Use soma, subtracao, multiplicacao ou divisao.');
  }

  res.send(`Resultado da ${tipo}: ${resultado}`);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});