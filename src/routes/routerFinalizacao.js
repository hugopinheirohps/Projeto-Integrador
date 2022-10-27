const finalizacaodecompra = require('express').Router();

finalizacaodecompra.get('/finalizacaodecompra', (req,res)=>{
    res.render('finalizacao')
} )

module.exports = finalizacaodecompra;