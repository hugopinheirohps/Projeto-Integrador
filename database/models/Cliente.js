require("dotenv").config();
module.exports = (sequelize, DataType) => {
  const cliente = sequelize.define(
    "cliente",
    {
      idCliente: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome: DataType.STRING,
      Endereco: DataType.STRING,
      Telefone: DataType.STRING,
      CPF: {
        type: DataType.STRING,
      },
      Email: {
        type: DataType.STRING,
        allowNull: false,
      },

      Senha: {
        type: DataType.STRING,
        allowNull: false,

        //Completar os dados de acordo com coluna da tabela
      },
    },
    {
      tableName: "Clientes",
      timestamps: false,
    }
  );
  
  return cliente;
};
