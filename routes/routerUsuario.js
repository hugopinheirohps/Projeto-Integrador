const express = require("express");

const router = express.Router();

const path = require("path");

const usuarioController = require("../src/controller/usuarioController");

const middlewareValidator = require("../middleware/middlewareValidator");

const uploadFile = require("../middleware/middlewareMulter");

router.get("/",usuarioController.painel);
router.get("/pedidos",usuarioController.pedidos);
router.get("/login", usuarioController.login);

router.post("/", middlewareValidator, usuarioController.entrarLogin);
router.post("/cadastro",middlewareValidator,uploadFile.single("avatar"),usuarioController.cadastrar);

module.exports = router;
