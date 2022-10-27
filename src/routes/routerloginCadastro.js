const loginCadastro = require('express').Router();

loginCadastro.get('/login',(req,res) =>{
    res.render('loginCadastro.ejs');
})

module.exports = loginCadastro;