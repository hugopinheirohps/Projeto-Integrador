const express = require("express");

const router = express.Router();

const path = require("path");

const usuarioController = require("../src/controller/usuarioController");


const uploadFile = require("../middleware/middlewareMulter");
const validarCadastro = require("../middleware/middlewareValidator");

router.get("/",usuarioController.painel);
router.get("/pedidos",usuarioController.pedidos);
router.get("/login", usuarioController.login);
router.get("/logout", usuarioController.logout);


router.post("/",validarCadastro,usuarioController.entrarLogin);
router.post("/cadastro",uploadFile.single("avatar"),validarCadastro,usuarioController.cadastrar);
router.post("/alterarCadastro",usuarioController.alterarCadastro);


module.exports = router;
