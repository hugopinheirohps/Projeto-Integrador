const produtoController ={
    produto:(req,res) =>{

        let carros = 4;
        res.render('produtos.ejs', {carros});
    
    },

    carrinho:(req,res) => {
        let carros = 4;
        res.render('carrinho.ejs', {carros});
    }


}

module.exports = produtoController;