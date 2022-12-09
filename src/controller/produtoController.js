const {Produtos} = require('../../database/models');

const produtoController ={
    produto:async (req,res) =>{

        let carros = await Produtos.findAll({include:'categoria'});
        res.render('produtos.ejs', {carros});
    
    },

    carrinho:(req,res) => {
        let carros = 4;
        res.render('carrinho.ejs', {carros});
    },

    produtoInterno:(req,res) => {
        
        res.render('produtoInterno.ejs');
    },
    
    finalizacao:(req,res) => {
        
        res.render('finalizacao.ejs');
    },

    sucesso:(req,res) => {
    
        res.render('sucesso.ejs');
    }


}

module.exports = produtoController;