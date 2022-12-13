const {Produto} = require('../database/models');

async function teste(){
    let produtos = await Produto.findAll({include:['pedido','categoria', 'marca']})
    console.log(produtos.map(p=>p.toJSON())
        )};

teste();