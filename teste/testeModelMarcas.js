const {Marcas} = require('../database/models');

async function teste(){
    let marca = await Marcas.findAll()
    console.log(marca.map(p=>p.toJSON())
        )};

teste();