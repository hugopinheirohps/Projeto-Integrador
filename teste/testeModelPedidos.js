const {Pedido} = require('../database/models');

async function teste(){
    let pedidos = await Pedido.findAll()
    console.log(pedidos.map(p=>p.toJSON())
        )};

teste();