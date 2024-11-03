const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Rota para mostrar o formulário
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve o arquivo HTML com o formulário
});

// Rota para processar o formulário
app.post('/submit', (req, res) => {
    const formData = req.body; // Pega os dados enviados pelo formulário
    res.send(`Dados recebidos: ${JSON.stringify(formData)}`); // Retorna os dados como resposta
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
