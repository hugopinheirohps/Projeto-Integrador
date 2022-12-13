module.exports = (sequelize,DataTypes)=>{
    const produto = sequelize.define("Produtos", {
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
        }
    },{ 
        tableName:'produtos',
        timestamps:false,
    }
    );

    produto.associate = (models) =>{
        produto.belongsTo(models.Categorias,{
            as: 'categoria',
            foreignKey:'Categorias_idCategorias',
            timestamps:false
        })
        
        produto.belongsTo(models.Pedidos,{
            as: 'pedido',
            foreignKey:'Pedidos_idPedidos',
            timestamps:false
        })
        produto.belongsTo(models.Marcas,{
            as: 'marca',
            foreignKey:'Marcas_idMarcas',
            timestamps:false
        })
       
    }

    

    return produto;
}