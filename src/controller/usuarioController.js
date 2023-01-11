const bcrypt = require("bcrypt");
const {validationResult } = require("express-validator");

const {
  cliente
} = require("../../database/models");

let mensagem = "";
var session;

const usuarioController = {
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/inicial");
  },

  login: (req, res) => {
    session = req.session;
    if (session.userid) {
      res.redirect("/usuarios");
    }
    else
    {
      return res.render("login.ejs", {mensagem});
    }    
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
      mensagem = "Erro no login, verifique email e senha digitados.";
      res.render("login.ejs", {
        mensagem
      });
    } else {
      session = req.session;
      session.userid=req.body.email; 

      res.render("usuario.ejs", {
        usuario
      });
    }
  },

  painel: async (req, res) => {
    if (!session.userid) {
      res.redirect("/usuarios/login");
    }
    else
    {
      let usuarios = await cliente.findAll({
        where: {
          Email: [session.userid],
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
    }    
  },

  pedidos: (req, res) => {
    res.render("pedidos.ejs");
  },
  
  cadastrar: async (req, res) => {
    const errors = validationResult (req);

    if(!errors.isEmpty()) {
      return res.render('login',{errors:errors.mapped()}, mensagem);
    }else{

    const novoUsuario = await cliente.create({
      Nome: req.body.nome,
      Email: req.body.email,
      Endereco: req.body.endereco,
      CPF: req.body.cpf,
      Telefone: req.body.telefone,
      Senha: req.body.senha,
    });
    //console.log(novoUsuario);
    mensagem = "Usuário cadastrado com sucesso.";
    res.redirect("/usuarios/login");
  }
    /*if (!req.file) {
        res.send("Você não enviou nenhuma imagem!");
      } else {
        res.send("Usuario cadastrado com sucesso!");
      }
    }*/
  

  }
};

module.exports = usuarioController;