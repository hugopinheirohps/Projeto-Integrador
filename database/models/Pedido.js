
module.exports = (sequelize,DataType)=>{
    const pedido = sequelize.define("Pedidos", {
        idPedidos:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Status:{type:DataType.STRING}
        //Completar os dados de acordo com coluna da tabela
    },{
        tableName:'pedidos',
        timestamps:false,
    }
    );

    pedido.associate = (models) =>{
        pedido.belongsTo(models.Cliente,{
            as: 'cliente',
            foreignKey:'Clientes_idCliente',
            timestamps:false
        });
    
    pedido.associate = (models) =>{
        pedido.belongsTo(models.Pagamento,{
            as:'pagamneto',
            foreignKey:'Pagamentos_idPagamento',
            timestamps:false
        });
    }
    }
    return pedido;
    
}