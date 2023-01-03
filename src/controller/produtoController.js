const { produto } = require("../../database/models");
const {marca} = require('../../database/models');
const {categoria} = require('../../database/models');

//somente para poder usar o carrinho
const {cliente} = require('../../database/models');

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

  produtofiltro:async (req,res) =>{
    const filtrar = req.body.
    res.send("Falta pegar os dados do Post");

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

    let usuarios = await cliente.findAll(
      {
        where: {
            Email: ["exemplo@gmail.com"],

        },
        attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
      }
    );


    let valorTotal = 0;        
    for(let veic of veiculos)
    {
        valorTotal = valorTotal + parseFloat(veic.Valor);
    }

    let usuario = usuarios[0];
    res.render('carrinho.ejs', {veiculos, marcas, categorias, valorTotal, usuario});

  },

  produtoInterno: async (req, res) => {
    const id = req.params.idProduto;

    await produto.findOne({ where: { idProduto: id } }).then((veic) => {
      if (veic != undefined) {
        return res.render("produtoInterno", {veic:veic});
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
