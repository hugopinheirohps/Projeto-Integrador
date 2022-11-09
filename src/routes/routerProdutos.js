const produtos = require('express').Router();

produtos.get('/produtos', (req,res)=>{
    res.render('produtos')
} )

module.exports = produtos;