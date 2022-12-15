const {Produtos} = require('../database/models');

async function teste(){    
    let produto = await Produtos.findAll({include:['categoria','pedido','marca']})
    console.log(produto.map(p=>p.toJSON())
    );
}

teste();