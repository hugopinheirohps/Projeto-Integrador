    
module.exports = (sequelize,DataType)=>{
    const pedido = sequelize.define("Pedido", {
        idPedidos:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Status:{type:DataType.STRING}
        //Completar os dados de acordo com coluna da tabela
    },{
        tableName:'Pedidos',
        timestamps:false,
    }
    );


    // pedido.associate = (models) =>{
    //     pedido.belongsTo(models.Clientes,{
    //         as: 'cliente',
    //         foreignKey:'Clientes_idCliente',
    //         timestamps:false
    //     });
    // 
    // pedido.associate = (models) =>{
    //     pedido.belongsTo(models.Pagamentos,{
    //         as:'pagamneto',
    //         foreignKey:'Pagamentos_idPagamento',
    //         timestamps:false
    //     });
    // }

    return pedido;
    
}