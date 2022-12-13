module.exports = (sequelize,DataType)=>{
    const combustivel = sequelize.define("Combustivel", {
        idCombustiveis:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Tipo:DataType.STRING,
    },{
        tableName:'Combustiveis',
        timestamps:false,
    });

    return combustivel;
    
}