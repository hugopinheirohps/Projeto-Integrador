const {Cliente} = require('../../database/models')

const usuarioController = {
  login: (req, res) => {
    return res.render("login.ejs");
  },
  salvarLogin: (req, res) => {},

  painel: (req, res) => {res.render("usuario.ejs")},

  pedidos:(req,res)=>{res.render("pedidos.ejs")},

  cadastrar: async (req, res) => {
    const cliente = await Cliente.create(
      
    {
     Nome:req.body.nome,
     Email:req.body.email,
      Telefone:req.body.telefone,
      Senha:req.body.senha
      
  }
)
console.log(cliente)
    
    /*if (!req.file) {
      res.send("Você não enviou nenhuma imagem!");
    } else {
      res.send("Usuario cadastrado com sucesso!");
    }
  }*/
}}

module.exports = usuarioController;
