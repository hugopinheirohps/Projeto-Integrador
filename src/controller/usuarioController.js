const bcrypt = require("bcrypt");
const {validationResult } = require("express-validator");

const {
  cliente
} = require("../../database/models");

let mensagem = "";
let logado = "";

const usuarioController = {
  login: (req, res) => {
    if (logado != "") {
      res.redirect("/usuarios");
    }
    return res.render("login.ejs", {
      mensagem
    });
  },

  entrarLogin: async (req, res) => {
    let usuarios = await cliente.findAll({
      where: {
        Email: [req.body.email],
        Senha: [req.body.senha],
      },
      attributes: [
        "idCliente",
        "Nome",
        "Endereco",
        "Telefone",
        "Email",
        "Senha",
        "CPF",
      ],
    });

    let usuario = usuarios[0];
    if (usuario == null) {
      let mensagem = "Erro no login, verifique email e senha digitados.";
      res.render("login.ejs", {
        mensagem
      });
    } else {
      logado = req.body.email;
      res.render("usuario.ejs", {
        usuario
      });
    }
  },

  painel: async (req, res) => {
    //console.log(logado);
    if (logado == "") {
      res.redirect("/usuarios/login");
    }

    let usuarios = await cliente.findAll({
      where: {
        Email: [String(logado)],
      },
      attributes: [
        "idCliente",
        "Nome",
        "Endereco",
        "Telefone",
        "Email",
        "Senha",
        "CPF",
      ],
    });

    let usuario = usuarios[0];
    res.render("usuario.ejs", { usuario});
  },

  pedidos: (req, res) => {
    res.render("pedidos.ejs");
  },

  
  // logout:(req, res,next) => {
  //     req.logout()
  //     req.session = null;
  //     res.redirect('/inicial')
    
  // },

  cadastrar: async (req, res) => {
    const errors = validationResult (req);

    if(!errors.isEmpty()) {
      return res.render('login',{errors:errors.mapped()});
    }else{

    const novoUsuario = await cliente.create({
      Nome: req.body.nome,
      Email: req.body.email,
      Endereco: req.body.endereco,
      CPF: req.body.cpf,
      Telefone: req.body.telefone,
      Senha: req.body.senha,
    });
    console.log(novoUsuario);
  }
    /*if (!req.file) {
        res.send("Você não enviou nenhuma imagem!");
      } else {
        res.send("Usuario cadastrado com sucesso!");
      }
    }*/
  },

  
};

module.exports = usuarioController;