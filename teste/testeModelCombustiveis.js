const {Combustivel} = require('../database/models');

async function teste(){
    let combustiveis = await Combustivel.findAll()
    console.log(combustiveis.map(p=>p.toJSON())
        )};

teste();