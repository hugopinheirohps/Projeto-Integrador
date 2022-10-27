// importando o express
const express = require('express');

//chamando a biblioteca express
const app = express();

//importando o roteador loginCadastro
const loginCadastro = require('./src/routes/routerloginCadastro');
const finalizacao = require('./src/routes/routerFinalizacao');
const finalizacaodecompra = require('./src/routes/routerFinalizacao');
const sucessodacompra = require('./src/routes/routerSucesso');


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
app.use(loginCadastro)
app.use(finalizacaodecompra)
app.use(sucessodacompra)




//chamando o servidor
app.listen(3000,(console.log("Servidor rodando na porta 3000")));











