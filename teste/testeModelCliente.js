const {cliente} = require('../database/models');

async function teste(){
    //Traz todos os produtos como SELECT FROM...
    //Se quiser filtrar usar {where:} dentro do findAll()
    let clientes = await cliente.findAll();
    console.log(clientes);
 
    //Traz todo produto com ID pelo Primary Key
    //Codigo de como dar um UPDATE na tabela webVeiculos.cliente
    // let clientes = await cliente.findByPk(7)
    
    //Altera o nome da tabela com nome da variavel pelo comando await clientes.findByPk()
    //Depois nome da coluna desejada que quer alterar em seguida sinal de = e entre aspas simples ''
    //Colocar o nome que deseja...

    //Por fim colocar nome da variavel usada no model e em seguida .save(); usado para salvar...

    // clientes.Nome = 'Fernando Silva';
    // clientes.save();
    //     };
}
        
teste();