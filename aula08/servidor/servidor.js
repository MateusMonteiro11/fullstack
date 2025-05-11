const http = require('http');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

let usuarios = [];

server.listen(80, () => {
    console.log('Servidor rodando na porta 80'.rainbow);
});

app.get('/', (req, res) => {
    res.redirect('/home.html');
});

app.post('/cadastro', (req, res) => {
    const { usuario, senha } = req.body;

    const existente = usuarios.find(u => u.usuario === usuario);
    if (existente) {
        return res.send('Usuário já cadastrado. <a href="/cadastro.html">Voltar</a>');
    }

    usuarios.push({ usuario, senha });
    console.log('Usuários cadastrados:', usuarios);

    res.redirect('/home.html');
});

app.post('/inicio', (req, res) => {
    const { usuario, senha } = req.body;

    const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (encontrado) {
        res.render('resposta_cadastro', { usuario, senha });
    } else {
        res.send('Usuário ou senha inválidos. <a href="/home.html">Tentar novamente</a>');
    }
});
