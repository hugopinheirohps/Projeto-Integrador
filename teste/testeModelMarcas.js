const {Marca} = require('../database/models');

async function teste(){
    let marca = await Marca.findAll()
    console.log(marca.map(p=>p.toJSON())
        )};

teste();