const express = require('express');

const { check:checar, body, validationResult } = require("express-validator");

const validar =[
    checar('email').isEmail(),
    checar('password').isLength({min:6})
]

module.exports = validar;