const express = require('express');
const router = express.Router();
const produtoController = require('../src/controller/produtoController');

router.get('/', produtoController.produto);

router.get('/carrinho', produtoController.carrinho);

router.get('/interno',(req,res) =>{
    res.render('produtoInterno')
}),

router.get('/finalizacao',(req,res) =>{
    res.render('finalizacao')
}),

router.get('/sucesso',(req,res) =>{
    res.render('sucesso')
})

module.exports = router;