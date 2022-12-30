module.exports = (sequelize, DataType) => {
    const produtoInterno = sequelize.define(
      "produtoInterno",
      {
        idProduto_Interno: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Cor: DataType.STRING,
      
        Imagem_Interna: {
            type: DataType.STRING,
        },
      
        Imagem_Cor:{
            type: DataType.STRING,
        },
        Produtos_idProduto: {
            type: DataType.INTEGER,
            foreignKey: true,
      },
    },
      {
        tableName: "produto_Interno",
        timestamps: false,
      }
    );

    produtoInterno.associate = (models) => {
        produtoInterno.belongsTo(models.produto, {
          as: "produto",
          foreignKey: "Produtos_idProduto",
          timestamps: false,
        });
    }

    // criar a tabela pelo model
    // produtoInterno.sync({force:true})

    return produtoInterno;
  }