const express = require("express");

// check ou body são equivalentes, posso usar um ou outro
const { check: checar } = require("express-validator");

const validar = [
  checar("senha")
    .isLength({ min: 6 })
    .withMessage("A senha tem que ter no minimo 6 caracteres."),
];

module.exports = validar;
