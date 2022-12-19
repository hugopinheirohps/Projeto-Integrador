const {Pagamento} = require('../database/models');

async function teste(){

    let pagamento= await Pagamento.findAll();
    console.log(pagamento.map(p=>p.toJSON())
        )};

teste();