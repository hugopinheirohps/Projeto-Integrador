const path = require("path");
const { check: checar, validationResult } = require("express-validator");

module.exports = [
  checar("senha")
    .isLength({ min: 6 })
    .withMessage("A senha tem que ter no minimo 6 caracteres."),
];
