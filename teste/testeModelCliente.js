const {Cliente} = require('../database/models');

async function teste(){
    let clientes = await Cliente.findAll()
    console.log(clientes)
        };

teste();