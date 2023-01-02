const { produto } = require("../../database/models");
const {marca} = require('../../database/models');
const {categoria} = require('../../database/models');

const produtoController = {
  produto:async (req,res) =>{
        
    let veiculos = await produto.findAll()

    let marcas = await marca.findAll(
        {
            order: [
                ['idMarcas', 'ASC'],
            ]
        }
    ); 
    let categorias = await categoria.findAll(
        {
            order: [
                ['idCategoria', 'ASC'],
            ]
        }
    );

    res.render('produtos.ejs', {veiculos, marcas,categorias});

    //console.log(veiculos.map(p=>p.toJSON()));        
    //console.log(marcas.map(p=>p.toJSON()));    
    //console.log(categorias.map(p=>p.toJSON()));  

  },

  carrinho: async (req,res) => {
        
    let veiculos = await produto.findAll()
    let marcas = await marca.findAll(
        {
            order: [
                ['idMarcas', 'ASC'],
            ]
        }
    ); 
    let categorias = await categoria.findAll(
        {
            order: [
                ['idCategoria', 'ASC'],
            ]
        }
    );


    let valorTotal = 0;        
    for(let veic of veiculos)
    {
        valorTotal = valorTotal + parseFloat(veic.Valor);
    }

    res.render('carrinho.ejs', {veiculos, marcas, categorias, valorTotal});

  },

  produtoInterno: async (req, res) => {
    const id = req.params.idProduto;

    await produto.findOne({ where: { idProduto: id } }).then((p) => {
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
};

module.exports = produtoController;
