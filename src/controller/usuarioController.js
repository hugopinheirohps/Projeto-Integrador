const {cliente} = require('../../database/models');

let mensagem = "";

const usuarioController = {
  login: (req, res) => {    
    return res.render("login.ejs", {mensagem});
  },

  entrarLogin: async (req, res) => {

    

    let usuarios = await cliente.findAll(
      {
        where: {
            Email: ["exemplo@gmail.com"],
            Senha: ["654321"]

            //Email: [String(req.body.email)],
            //Senha: [String(req.body.senha)]

        },
        attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
      }
    );

    let usuario = usuarios[0];   
    if(usuario == null){
      let mensagem = "Erro no login, verifique email e senha digitados.";
      //res.redirect('/usuarios/login', {usuarios});
      res.render('login.ejs', {mensagem});
    }
    else
    {
      res.render('usuario.ejs', {usuario});
    }   

  },

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
