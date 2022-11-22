const express = require("express");

const router = express.Router();

const path = require("path");

const usuarioController = require("../src/controller/usuarioController");

const middlewareValidator = require("../middleware/middlewareValidator");

const uploadFile = require("../middleware/middlewareMulter");

router.get("/login", usuarioController.login);

router.post("/login", middlewareValidator, usuarioController.salvarLogin);
router.post(
  "/cadastro",
  uploadFile.single("avatar"),
  usuarioController.cadastrar
);

module.exports = router;
