const {Produtos} = require('../database/models');

async function teste(){
    let produto = await Produtos.findAll()
    console.log(produto);
}

teste();