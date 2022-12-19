const {produto} = require('../database/models');

async function teste(){
    let produtos = await produto.findAll({include:['pedido','categoria', 'marca']})
    console.log(produtos.map(p=>p.toJSON())
        )};

teste();