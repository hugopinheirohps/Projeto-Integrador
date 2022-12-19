const { produto } = require("../../database/models");

const produtoController = {
  produto: async (req, res) => {
    let carros = await Produto.findAll({ include: "categoria" });
    res.render("produtos.ejs", { carros });
  },

  carrinho: (req, res) => {
    let carros = 4;
    res.render("carrinho.ejs", { carros });
  },

  produtoInterno: (req, res) => {
    const idProduto = req.params.idproduto;
    console.log(idProduto);
    produto.findOne({ where: { id: idProduto } }).then((p) => {
      if (p != undefined) {
        return res.render("produtoInterno");
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
};

module.exports = produtoController;
