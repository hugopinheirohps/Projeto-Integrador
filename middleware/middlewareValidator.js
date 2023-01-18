const {check:checar} = require('express-validator');

module.exports = [
  
  checar("nome").notEmpty().withMessage("Digite seu nome completo"),

  checar("email").notEmpty().isEmail().withMessage("Digite um email válido").normalizeEmail(),

  checar("endereco").notEmpty().withMessage("Digite o endereco corretamente"),

  checar("cpf").notEmpty().isString().isLength({
    min: 11, max: 11,
  }).withMessage("Digite um numero de CPF válido com 11 números"),

  checar("telefone").notEmpty().isString().isLength({min:10, max:11}).withMessage("Digite um telefone válido fixo ou celular"),
  
  checar("senha").notEmpty().isString().isLength({
    min: 6, notEmpty: "null",
  }).withMessage("A senha tem que ter no minimo 6 caracteres.")
];


