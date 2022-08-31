const express = require('express');
const router = express.Router();
const produtoController = require('../src/controller/produtoController');



router.get('/', produtoController.produto);

router.get('/produto/:idProduto',produtoController.produtoInterno)

router.get('/carrinho', produtoController.carrinho);

router.get('/finalizacao', produtoController.finalizacao);

router.get('/sucesso', produtoController.sucesso);

module.exports = router;