const {Produto} =  require('../../database/models');

const inicialController = {
    paginaHome: async (req, res)=>{
        const produtos = await Produto.findAll();
        
        return res.render('inicial.ejs',{produtos});
    } 
}

module.exports = inicialController;