const produtoInterno = require('express').Router();

produtoInterno.get('/produtoInterno', (req,res)=>{
    res.render('produto_interno')
} )

module.exports = produtoInterno;