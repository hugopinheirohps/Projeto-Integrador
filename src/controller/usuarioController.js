const usuarioController = {
  login: (req, res) => {
    return res.render("login.ejs");
  },
  salvarLogin: (req, res) => {},

  cadastrar: (req, res) => {
    if (!req.file) {
      res.send("Você não enviou nenhuma imagem!");
    } else {
      res.send("Usuario cadastrado com sucesso!");
    }
  },
};

module.exports = usuarioController;
