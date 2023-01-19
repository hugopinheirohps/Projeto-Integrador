/*const {check: checar}  =  require('express-validator');

module.exports = [
  checar("nome")
  .notEmpty().withMessage("Digite seu nome completo"),
  
  checar("email")
  .isEmail().withMessage("Digite um email válido").normalizeEmail(),

  checar("endereco")
  .notEmpty().withMessage("Coloque seu endereço"),

  checar("senha")
  .isLength({min:6}).withMessage("A senha não pode ter menos de 6 caracteres ")
  
  .matches(/\d/).withMessage("sua senha deve ter pelo menos um número")

  .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("sua senha deve ter pelo menos um caractere especial"),

  checar("cpf").isString().isLength({min:11,max:11}).withMessage("digite um cpf válido,sem pontos e traços")

];*/

const {check: checar}  =  require('express-validator');

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


