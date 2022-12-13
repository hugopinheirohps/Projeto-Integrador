const {Categorias} = require('../database/models');

async function teste(){
    let categoria = await Categorias.findAll()
    console.log(categoria.map(p=>p.toJSON())
        )}

teste();