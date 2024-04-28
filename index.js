const express = require('express');
const getAlunos = require('./utils/getAlunos');

const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/alunos', async (req, res) => {
    const alunos = await getAlunos();
    res.send(alunos);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});