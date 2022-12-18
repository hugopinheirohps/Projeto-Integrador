require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const categoria = sequelize.define("categoria", {
        idCategoria:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        
    },{
        tableName:'categorias',
        timestamps:false,
    })
    return categoria;
    
}