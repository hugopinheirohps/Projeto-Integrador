module.exports = (sequelize,DataTypes)=>{
    const produto = sequelize.define("produto", {
        idProduto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nome:{
            type: DataTypes.STRING,

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
    produto.sync({ alter: true })
    return produto;
}