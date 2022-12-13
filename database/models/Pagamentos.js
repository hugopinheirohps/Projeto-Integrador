const {Pagamentos} = require("sequelize");

module.exports = (sequelize,DataType)=>{
    const pagamento = sequelize.define("Pagamentos", {
        idpagamnetos:{
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