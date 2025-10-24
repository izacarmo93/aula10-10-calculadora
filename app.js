const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res)=>{
    res.send('Servidor Express Funcionando!');
});
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});