const {Categoria} = require('../database/models');

async function teste(){
    let categorias = await Categoria.findAll()
    console.log(categorias.map(p=>p.toJSON())
        )};

teste();