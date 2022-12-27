require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const cliente = sequelize.define("cliente", {
        idCliente:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        Endereco:DataType.STRING,
        Telefone:DataType.STRING,
        CPF:DataType.CHAR,
        Email:{
            type:DataType.STRING,
            allowNull:true,
        },
        Senha:DataType.STRING,
        //Completar os dados de acordo com coluna da tabela
    },{
        tableName:'clientes',
        timestamps:false,
    })
    return cliente;
    
}