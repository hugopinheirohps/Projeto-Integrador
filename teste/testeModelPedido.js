const {Pedido} = require('../database/models');

async function teste(){
    
    let produto = await Pedido.findAll()
    console.log(produto.map(p=>p.toJSON())
    );
}

teste();