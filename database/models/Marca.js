module.exports = (sequelize,DataType)=>{
    const marca = sequelize.define( "Marcas", {
        idMarcas:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:DataType.STRING,
        
    },{
        tableName: 'marcas',
        timestamps:false,
    });
    
    return marca;
    
}