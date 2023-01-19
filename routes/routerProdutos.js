const express = require('express');
const router = express.Router();
const produtoController = require('../src/controller/produtoController');


router.get('/', produtoController.produto);

router.get('/carrinho', produtoController.carrinho);

router.post('/carrinho', produtoController.carrinho);

router.get('/logout', produtoController.logout);

router.get('/finalizacao', produtoController.finalizacao);

router.post('/finalizacao', produtoController.gravarVenda);

router.get('/sucesso', produtoController.sucesso);

router.get('/:idProduto',produtoController.produtoInterno)

router.post('/', produtoController.produtofiltro);

router.get("/sucesso", produtoController.sucesso);

module.exports = router;