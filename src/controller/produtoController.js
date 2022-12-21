const { produto } = require("../../database/models");

const produtoController = {
  produto: async (req, res) => {
    let carros = await produto.findAll({ include: "categoria" });
    res.render("produtos.ejs", { carros });
  },

  carrinho: (req, res) => {
    let carros = 4;
    res.render("carrinho.ejs", { carros });
  },

  produtoInterno: (req, res) => {
    const id = req.params.idProduto;
    produto.findOne({ where: { idProduto: id } }).then((p) => {
      if (p != undefined) {
        return res.render("produtoInterno", { p: p });
      } else {
        res.send("Produto não encontrado!");
      }
    });
  },

  finalizacao: (req, res) => {
    res.render("finalizacao.ejs");
  },

  sucesso: (req, res) => {
    res.render("sucesso.ejs");
  },
  produtoInterno: (req, res) => {
    res.render("produtoInterno.ejs");
  },
};

module.exports = produtoController;
