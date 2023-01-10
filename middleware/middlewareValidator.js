const {check: checar}  =  require('express-validator');

module.exports = [
  checar("nome").notEmpty().withMessage("Digite seu nome completo"),
  checar("email").isEmail().withMessage("Digite um email válido"),
  checar("endereco").notEmpty().withMessage("Digite o endereco corretamente"),
  checar("cpf").isString().isLength({
    min: 11, max: 11,
  }).withMessage("Digite um numero de CPF válido com 11 caracateres"),
  checar("telefone").isString().isLength({min:10, max:11}).withMessage("Digite um telefone válido fixo ou celular"),
  checar("senha").isLength({
    min: 6
  }).withMessage("A senha tem que ter no minimo 6 caracteres.")
];


