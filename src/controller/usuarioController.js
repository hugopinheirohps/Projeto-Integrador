const {cliente} = require('../../database/models');

let mensagem = "";
let logado = "";

const usuarioController = {
  login: (req, res) => {    
    if(logado != "")
    {
      res.redirect("/usuarios");
    }
    return res.render("login.ejs", {mensagem});
  },

  entrarLogin: async (req, res) => {

    //console.log(JSON.stringify(req.body.email));
    //console.log(JSON.stringify(req.body.senha));

    let usuarios = await cliente.findAll(
      {
        where: {
            Email: [req.body.email],
            Senha: [req.body.senha]
        },
        attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
      }
    );

    let usuario = usuarios[0];   
    if(usuario == null){
      let mensagem = "Erro no login, verifique email e senha digitados.";
      res.render('login.ejs', {mensagem});
    }
    else{
      logado = req.body.email;
      res.render('usuario.ejs', {usuario});
    }   

  },
 
  painel: async (req, res) => {
    //console.log(logado);
    if(logado == "")
    {
      res.redirect("/usuarios/login");
    }
    
    let usuarios = await cliente.findAll(
      {
        where: {
            Email: [String(logado)],
        },
        attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
      }
    );

    let usuario = usuarios[0]; 
    res.render('usuario.ejs', {usuario});
    
  },

  pedidos:(req,res)=>{res.render("pedidos.ejs")},

  cadastrar: async (req, res) => {
    const usuario = await cliente.create
    (
      {
        Nome:req.body.nome,
        Email:req.body.email,
        Telefone:req.body.telefone,
        Senha:req.body.senha
      }
    )
    console.log(usuario)
        
      /*if (!req.file) {
        res.send("Você não enviou nenhuma imagem!");
      } else {
        res.send("Usuario cadastrado com sucesso!");
      }
    }*/
  }


///final do usuariocontroller
}

module.exports = usuarioController;
