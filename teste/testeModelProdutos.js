const {Produtos} = require('../database/models');

async function teste(){
                                        //Colocar um array de string para associar maisd e um   
    // let produto = await Produtos.findAll({include:['categoria','pedido','marca']})
    
    let produto = await Produtos.findAll({include:'categoria'})
    console.log(produto.map(p=>p.toJSON())
    );
}

teste();