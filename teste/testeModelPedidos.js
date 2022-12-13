const {Pedidos} = require('../database/models');

async function teste(){
    
    let produto = await Pedidos.findAll()
    console.log(produto.map(p=>p.toJSON())
    );
}

teste();