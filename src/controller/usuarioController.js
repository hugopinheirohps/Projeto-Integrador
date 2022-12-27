const {cliente} = require('../../database/models');

const usuarioController = {
  login: (req, res) => {
    return res.render("login.ejs");
  },

  entrarLogin: async (req, res) => {

    console.log(req.body.email);  
    console.log(req.body.senha);  

    let usuarios = await cliente.findAll(
      {
        where: {
            Email: ["teste@gmail.com"],
            Senha: ["DH@20262"]

            //Email: [String(req.body.email)],
            //Senha: [String(req.body.senha)]

        },
        attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
      }
    );

    console.log(usuarios.map(p=>p.toJSON()));  

    

    for(let user of usuarios) {
      if(user !== undefined){
        console.log("Cheio"); 
      }
      else{
        console.log("Vazio"); 
      }
    }

   
    if(usuarios[1]){
      res.send("Usuario não cadastrado.");
    }
    else
    {
      res.render('usuario.ejs', {usuarios});
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
