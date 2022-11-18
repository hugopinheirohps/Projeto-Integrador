const express = require('express');
const router = express.Router();

router.get('/produtos', (req,res)=>{
    let carros = 4;
    res.render('produtos', {carros});

} )

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