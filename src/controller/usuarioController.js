const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { pedido } = require("../../database/models");

const { cliente } = require("../../database/models");

let mensagem = "";

var session;

const usuarioController = {
  logout: (req, res) => {
    res.redirect("/produtos/logout");
  },

  login: (req, res) => {
    session = req.session;
    if (session.userid) {
      res.redirect("/usuarios");
    } else {
      return res.render("login.ejs", { mensagem });
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
        mensagem,
      });
    } else {
      session = req.session;
      session.userid=req.body.email; 
      session.idCliente=usuario.idCliente;
      
      //console.log(session.idCliente);

      res.redirect("/inicial",{usuario});
    }
  },

  painel: async (req, res) => {
    session = req.session;
    if (!session.userid) {
      res.redirect("/usuarios/login");
    } else {
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
      res.render("usuario.ejs", { usuario });
    }
  },

  pedidos: async (req, res) => {
    session = req.session;
    let pedidos;

    let consulta = await pedido.findAll({
      where: {
        Clientes_idCliente: [session.idCliente],
      },
    });

    if (consulta[0] == undefined) {
      pedidos = [];
    } else {
      pedidos = consulta;
    }

    res.render("pedidos.ejs", { pedidos });
  },

  // cadastrando usuario
  cadastrar: async (req, res) => {
    //criptografa a senha
    const hash = bcrypt.hashSync(req.body.senha, 12);
    
    //verica erros no formulario
    const errors = validationResult(req);
    
    // se tiver algum erro
    if (!errors.isEmpty()) {
      return res.render("login", { errors: errors.mapped() });
    } 
    
    // se não crie um novo usuario
    else {
      await cliente.create({
        Nome: req.body.nome,
        Email: req.body.email,
        Endereco: req.body.endereco,
        CPF: req.body.cpf,
        Telefone: req.body.telefone,
        Senha: hash,
        avatar:req.file.filename
      });
    }

    res.redirect("/usuarios/login");
  },

  //Alatera o cadastro do Usuário
  alterarCadastro: async (req, res) => {
    // console.log("alterarCadastro");
    // res.send(req.session);

    let email = req.session.userid;
    let clienteAlt = await cliente.findOne({ where: { Email: email } });
    clienteAlt.Endereco = req.body.endereco || clienteAlt.Endereco;
    clienteAlt.Telefone = req.body.telefone || clienteAlt.Telefone;
    clienteAlt.Nome = req.body.nome || clienteAlt.Nome;
    clienteAlt.Email = req.body.email || clienteAlt.Email;

    if (req.body.email) {
      session = req.session;
      session.userid = req.body.email;
    }

    clienteAlt.save();

    res.render("alterarCadastro.ejs");
  },
};

module.exports = usuarioController;
