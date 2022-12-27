module.exports = (sequelize, DataType) => {
  const produto = sequelize.define(
    "produto",
    {
      idProduto: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nome: {
        type: DataType.STRING,
      },
      Valor: {
        type: DataType.FLOAT,
      },
      Modelo: {
        type: DataType.STRING,
      },
      Placa: {
        type: DataType.STRING,
      },
      Ano: {
        type: DataType.STRING,
      },
      Imagem: {
        type: DataType.STRING,
      },
      Descricao: {
        type: DataType.TEXT,
      },
      Categorias_idCategorias: {
        type: DataType.INTEGER,
        foreignKey: true,
      },
      Pedidos_idPedidos: {
        type: DataType.INTEGER,
        foreignKey: true,
      },
      Marcas_idMarcas: {
        type: DataType.INTEGER,
        foreignKey: true,
      },
    },
    {
      tableName: "produtos",
      timestamps: false,
    }
  );
  produto.associate = (models) => {
    produto.belongsTo(models.categoria, {
      as: "categoria",
      foreignKey: "Categorias_idCategorias",
      timestamps: false,
    });
    produto.belongsTo(models.pedido, {
      as: "pedido",
      foreignKey: "Pedidos_idPedidos",
      timestamps: false,
    });
    produto.belongsTo(models.marca, {
      as: "marca",
      foreignKey: "Marcas_idMarcas",
      timestamps: false,
    });
    
  }; 

  return produto;
};
