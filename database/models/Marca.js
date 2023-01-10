require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const marca = sequelize.define( "marca", {
        idMarcas:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        
    },{
        tableName: 'Marcas',
        timestamps:false,
    });
    
    return marca;
    
}