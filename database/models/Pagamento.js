const {Pagamentos} = require("sequelize");

module.exports = (sequelize,DataType)=>{
    const pagamento = sequelize.define("Pagamento", {
        idPagamentos:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        
    },{
        tableName:'Pagamentos',
        timestamps:false,
    });


    return pagamento;
    
}