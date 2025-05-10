const http = require('http');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://mateusmonteiro:Mateus3322@cluster0.s9w3yo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// Conectar ao MongoDB antes de rodar o servidor
client.connect().then(() => {
    const dbo = client.db("create_and_read");
    const biblioteca = dbo.collection("usuarios");

    // Rota GET para chamar os argumentos
    app.get ("/inicio", function(req, resp) {
        let titulo = req.body.titulo;
        let resumo = req.body.resumo;
        let conteudo = req.body.conteudo;

        console.log(titulo, resumo, conteudo)

        resp.render('resposta', { titulo, resumo, conteudo });
    })

    // Rota POST para criar um post
    // app.post("/inicio", function(req, resp) {
    //     let titulo = req.body.titulo;
    //     let resumo = req.body.resumo;
    //     let conteudo = req.body.conteudo;

    //     console.log(titulo, resumo, conteudo)
    //     var data = {
    //         db_titulo: req.body.titulo,
    //         db_resumo: req.body.resumo,
    //         db_conteudo: req.body.conteudo
    //     };

    //     biblioteca.insertOne(data, function(err) {
    //         if (err) {
    //             resp.render('resposta', { resposta: "Erro ao criar o post!" });
    //         } else {
    //             resp.render('resposta', { resposta: "Post criado com sucesso!" });
    //         }
    //     });
    // });

    // Rota GET raiz redireciona para home.html
    app.get('/', function(req, resp) {
        resp.redirect('home.html');
    });

    // Rota GET para exibir dados passados
    // app.get('/inicio', function(req, resp) {
    //     const { titulo, resumo, conteudo } = req.query;
    //     resp.render('resposta', { titulo, resumo, conteudo });
    // });

    // Iniciar servidor
    const server = http.createServer(app);
    server.listen(300, () => {
        console.log('Servidor rodando na porta 300'.rainbow);
    });

}).catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err);
});