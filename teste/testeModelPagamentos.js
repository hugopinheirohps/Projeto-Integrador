const {Pagamentos} = require('../database/models');

async function teste(){

    let pagamento= await Pagamentos.findAll();
    console.log(pagamento.map(p=>p.toJSON())
        )};

teste();