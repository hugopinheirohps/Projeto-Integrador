require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const produto = sequelize.define("produto", {
        idProduto:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Valor:{
            type: DataType.FLOAT,
        },
        Modelo:{
            type: DataType.STRING,
        },
        Placa:{
            type: DataType.STRING,
        },
        Ano:{
            type: DataType.STRING,
        },
    },{
        tableName:'produtos',
        timestamps:false,
    })
    produto.associate = (models) =>{
        produto.belongsTo(models.categoria,{
            as: 'categoria',
            foreignKey:'Categorias_idCategorias',
            timestamps:false
        })
        produto.belongsTo(models.pedido,{
            as: 'pedido',
            foreignKey:'Pedidos_idPedidos',
            timestamps:false
        })
        produto.belongsTo(models.marca,{
            as: 'marca',
            foreignKey:'Marcas_idMarcas',
            timestamps:false
        })
    }
    return produto;
}