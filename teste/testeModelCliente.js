const {cliente} = require('../database/models');

async function teste(){
    //Traz todos os produtos como SELECT FROM...
    //Se quiser filtrar usar {where:} dentro do findAll()
    let clientes = await cliente.findAll();
    console.log(clientes);
 
    
}
        
teste();
