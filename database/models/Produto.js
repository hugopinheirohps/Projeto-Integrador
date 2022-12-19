<<<<<<< HEAD
module.exports = (sequelize,DataTypes)=>{
    const produto = sequelize.define("Produto", {
=======
require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const produto = sequelize.define("produto", {
>>>>>>> 13dbb0db8d89406e59aaca767571ba1db13986eb
        idProduto:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:{
            type: DataType.STRING,

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
        Imagem:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        Descricao:{
            type: DataTypes.TEXT,
        }
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
    produto.sync({ alter: true })
    return produto;
}