const {Marca} = require('../database/models');

async function teste(){
    let marcas = await Marca.findAll()
    console.log(marcas.map(p=>p.toJSON())
        )};

teste();