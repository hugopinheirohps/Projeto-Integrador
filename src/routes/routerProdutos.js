const express = require('express');

<<<<<<< HEAD
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('produtos')
}),
=======
produtos.get('/produtos', (req,res)=>{
    let carros = 4;
    res.render('produtos', {carros});

} )
>>>>>>> 7f4e30c7797383145dd8da982a93afc126097d19

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