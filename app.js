// importando o express
const express = require('express');

//chamando a biblioteca express
const app = express();

//importando o roteador 
const login = require('./src/routes/routerlogin');
const finalizacaodecompra = require('./src/routes/routerFinalizacao');
const sucessodacompra = require('./src/routes/routerSucesso');
const produtos = require('./src/routes/routerProdutos');
const produtoInterno = require('./src/routes/routerProdutoInterno')


// qual view engine vamos usar
app.set('view engine', 'ejs');

//onde está localizado a engine
app.set('views','./views');

//Onde vai ficar os recursos estáticos, na pasta public.
app.use(express.static('public'));

// receber requisição do corpo do formulario
app.use(express.urlencoded({extended:false}))

// receber requisição do tipo json
app.use(express.json())

// usando o roteador
app.use(login)
app.use(finalizacaodecompra)
app.use(sucessodacompra)
<<<<<<< HEAD
app.use(produtos)
=======
app.use(produtoInterno)
>>>>>>> da83e7a7970cf3ca3ba8c8267a2e7c0132df64c1




//chamando o servidor
app.listen(3000,(console.log("Servidor rodando na porta 3000")));











