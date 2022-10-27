const sucessodacompra = require('express').Router();

sucessodacompra.get('/sucessodacompra', (req,res)=>{
    res.render('sucesso')
} )

module.exports = sucessodacompra;