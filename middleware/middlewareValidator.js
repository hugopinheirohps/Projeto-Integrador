const { check: checar} = require("express-validator");

module.exports = [
  checar("nome").notEmpty().withMessage("Digite seu nome completo"),
  checar("email").isEmail().withMessage("Digite um email válido")
];
