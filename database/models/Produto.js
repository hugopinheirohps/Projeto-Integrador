require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const produto = sequelize.define("produto", {
        idProduto:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:{
            type: DataTypes.STRING,

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
<<<<<<< HEAD
        Imagem:{
            type: DataTypes.STRING,
        },
        Descricao:{
            type: DataTypes.TEXT,
        },
        Categorias_idCategorias:{
            type:DataTypes.INTEGER,
            foreignKey:true,
            
        },
        Pedidos_idPedidos:{
            type:DataTypes.INTEGER,
            foreignKey:true
        },
        Marcas_idMarcas:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }

        
=======
>>>>>>> 8deab714c10043d8d6fbb0aad366bb6000df4acd
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