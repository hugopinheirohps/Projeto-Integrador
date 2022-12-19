const {Cliente} = require('../database/models');

async function teste(){
    let clientes = await Cliente.findAll({raw:true})
    console.log(clientes)
        };

teste();