const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.render('produtos')
}),

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