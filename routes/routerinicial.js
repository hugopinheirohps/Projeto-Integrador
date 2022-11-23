var express = require('express');
var router = express.Router();

const inicialController = require('../src/controller/inicialController')

/* GET home page. */
router.get('/inicial',inicialController.paginaHome);

module.exports = router;
