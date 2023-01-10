module.exports = (sequelize, DataType) => {
  const categoria = sequelize.define(
    "categoria",
    {
      idCategoria: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nome: DataType.STRING,
    },
    {
      tableName: "Categorias",
      timestamps: false,
    }
  );
  return categoria;
};
