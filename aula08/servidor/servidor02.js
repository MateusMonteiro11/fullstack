var http = require('http') ;
var express = require ('express') ;
var colors = require('colors') ;
var bodyParser = require ('body-parser') ;

var app = express () ;
app.use (express.static('./public') );
app.use (bodyParser. urlencoded({ extended: false} ) )
app.use (bodyParser. json () )
app.set ('view engine', 'ejs')
app.set ('views', './views') ;

var server = http.createServer (app);
server.listen (3000);

console.log('Servidor rodando'.rainbow)

app.get ('/', function (requisicao, resposta) {
resposta.redirect ('home.html')

})

app.get ('/inicio', function (requisicao, resposta) {
    var usuario = requisicao.query.info;
    var senha = requisicao.query.info;
    console.log(nome);

})

app.get('/cadastro', function (requisicao, resposta) {
    var usuario = requisicao.query.usuario;
    var senha = requisicao.query.senha;

    resposta.render('resposta_cadastro', { usuario, senha });
});