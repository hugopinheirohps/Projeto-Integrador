const {produto} = require('../database/models');

async function teste(){
<<<<<<< HEAD
=======
    
>>>>>>> 8deab714c10043d8d6fbb0aad366bb6000df4acd
    let produtos = await produto.findAll({include:['pedido','categoria', 'marca']})
    console.log(produtos.map(p=>p.toJSON())
        )};

teste();



//////// OUTRO MODO

// criado o config.js

//const config = {
//    username: "root",
//    password: "",
//    host: "localhost",
//    port: 3306,
//    dialect: "mysql",
//    database: "osmaker"
//}
//module.exports = config;

// 1 - Importa sequelize
//const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
//const config = require('../config.js');

// 3 - Cria a conexão
//const conexao = new sequelize(config);

//async function teste(){
//    let produtos = await conexao.query("SELECT * FROM produtos");
//    console.log(produtos);
//};
//teste();