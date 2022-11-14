const produtos = require('express').Router();

produtos.get('/produtos', (req,res)=>{
    let carros = 4;
    res.render('produtos', {carros});

} )

module.exports = produtos;