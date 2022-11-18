// importando o express
const express = require('express');

//chamando a biblioteca express
const app = express();

const path = require('path')

//importando o roteador 
const routerUsuario = require('./routes/routerUsuario');
const routerProdutos = require('./routes/routerProdutos');

// qual view engine vamos usar
app.set('view engine', 'ejs');

//onde está localizado a engine
app.set('views',path.resolve('./src/views'));

//Onde vai ficar os recursos estáticos, na pasta public.
app.use(express.static('public'));

// receber requisição do corpo do formulario
app.use(express.urlencoded({extended:false}))

// receber requisição do tipo json
app.use(express.json())

// usando o roteador
app.use('/usuarios',routerUsuario);
app.use('/produtos',routerProdutos)





//chamando o servidor
app.listen(3000,(console.log("Servidor rodando na porta 3000")));











