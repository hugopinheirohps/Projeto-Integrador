const {categoria} = require('../database/models');

async function teste(){
    let categorias = await categoria.findAll()
    console.log(categorias.map(p=>p.toJSON())
        )}

teste();