module.exports = (sequelize,DataType)=>{
    const categoria = sequelize.define("Categoria", {
        idCategoria:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        
    },{
        tableName:'Categorias',
        timestamps:false,
    })
    return categoria;
    
}