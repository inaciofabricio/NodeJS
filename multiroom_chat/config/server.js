/* Importar o módulo do framework express */
var express = require('express');

/* Importar o módulo do consign */
var consign = require('consign');

/* Importar o módulo do body--parser */
var bodyParser = require('body-parser');

/* Importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* Iniciar o objeto do express */
var app = express();

/* setar as variaveis 'view engine' e 'views' do express */
app.set('view engine','ejs');
app.set('views','./app/views');

/* configurar o middleware express.static*/
app.use(express.static('./app/public'));

/* configurar o middleware border-parser*/
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator*/
app.use(expressValidator());

/* configurar o consign */
/* Efetua o autoload das rotas, dos models e dos controlles para o objeto app */
consign().include('app/routes')
 .then('app/models')
 .then('app/controllers')
 .into(app);

/* Exportar o objeto app */
module.exports = app;