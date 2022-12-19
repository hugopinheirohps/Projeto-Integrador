const {Categoria} = require('../database/models');

async function teste(){    
    let categoria = await Categoria.findAll()
    console.log(categoria.map(p=>p.toJSON())
    );
}

teste();