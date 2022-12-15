const {Pagamentos} = require("sequelize");

module.exports = (sequelize,DataType)=>{
    const pagamento = sequelize.define("Pagamentos", {
        idPagamentos:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        
    },{
        tableName:'pagamentos',
        timestamps:false,
    });


    return pagamento;
    
}