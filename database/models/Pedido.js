
require('dotenv').config()
module.exports = (sequelize,DataType)=>{
    const pedido = sequelize.define("pedido", {
        idPedidos:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Clientes_idCliente:{type: DataType.INTEGER,},
        Status:{type:DataType.STRING},
        Pagamentos_idPagamentos:{
            type: DataType.INTEGER,
            foreignKey: true,
          },
        //Completar os dados de acordo com coluna da tabela
    },{
        tableName:'pedidos',
        timestamps:false,
    }
    );

    pedido.associate = (models) =>{
        pedido.belongsTo(models.cliente,{
            as: 'cliente',
            foreignKey:'Clientes_idCliente',
            timestamps:false
        });
    
    pedido.associate = (models) =>{
        pedido.belongsTo(models.pagamento,{
            as:'pagamento',
            foreignKey:'Pagamentos_idPagamento',
            timestamps:false
        });
    }
    }
    return pedido;
    
}