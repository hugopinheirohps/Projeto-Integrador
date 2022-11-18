const express = require('express');

const router = express.Router();

const usuarioController = require('../src/controller/usuarioController');

router.get('/login', usuarioController.login) 
    


module.exports = router;