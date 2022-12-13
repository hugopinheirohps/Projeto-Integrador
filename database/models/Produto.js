module.exports = (sequelize,DataTypes)=>{
    const produto = sequelize.define("Produtos", {
        idProdutos:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Valor:{
            type: DataTypes.FLOAT,
        },
        Modelo:{
            type: DataTypes.STRING,
        },
        Placa:{
            type: DataTypes.STRING,
        },
        Ano:{
            type: DataTypes.STRING,
        },
        Ano:{
            type: DataTypes.STRING,
        }
    })
    return produto;
}