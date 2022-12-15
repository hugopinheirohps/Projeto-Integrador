module.exports = (sequelize,DataTypes)=>{
    const produto = sequelize.define("produto", {
        idProduto:{
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
    },{
        tableName:'produtos',
        timestamps:false,
    })
    produto.associate = (models) =>{
        produto.belongsTo(models.Categoria,{
            as: 'categoria',
            foreignKey:'Categorias_idCategorias',
            timestamps:false
        })
        produto.belongsTo(models.Pedido,{
            as: 'pedido',
            foreignKey:'Pedidos_idPedidos',
            timestamps:false
        })
        produto.belongsTo(models.Marca,{
            as: 'marca',
            foreignKey:'Marcas_idMarcas',
            timestamps:false
        })
    }
    return produto;
}