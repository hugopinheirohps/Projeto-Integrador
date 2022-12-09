const {Combustiveis} = require('../database/models');

async function teste(){
    let combustivel = await Combustiveis.findAll()
    console.log(combustivel);
}

teste();