const { produto } = require("../../database/models");

const inicialController = {
  paginaHome: async (req, res) => {
    const veiculos = await produto.findAll({raw:true})
    return res.render('inicial',{veiculos:veiculos})
  },
};

module.exports = inicialController;
