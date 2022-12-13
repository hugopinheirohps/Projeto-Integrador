const usuarioController = {
  login: (req, res) => {
    return res.render("login.ejs");
  },
  salvarLogin: (req, res) => {},

  painel: (req, res) => {res.render("usuario.ejs")},

  pedidos:(req,res)=>{res.render("pedidos.ejs")},

  cadastrar: (req, res) => {
    if (!req.file) {
      res.send("Você não enviou nenhuma imagem!");
    } else {
      res.send("Usuario cadastrado com sucesso!");
    }
  }
};

module.exports = usuarioController;
