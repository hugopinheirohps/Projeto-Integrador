const carrinho = require('express').Router();

carrinho.get('/carrinho', (req,res)=>{
    let carros = 4;
    res.render('carrinho', {carros});

} )

module.exports = carrinho;