const { produto } = require("../../database/models");
const {marca} = require('../../database/models');
const {categoria} = require('../../database/models');
const { pedido } = require("../../database/models");

//somente para poder usar o carrinho e vendas
const {cliente} = require('../../database/models');

const {validationResult } = require("express-validator");


let carrinho = [];
let mensagem = "";

var session;

const produtoController = {
  produto:async (req,res) =>{

    mensagem = "";
        
    let veiculos = await produto.findAll()

    let marcas = await marca.findAll(
        {
            order: [
                ['idMarcas', 'ASC'],
            ]
        }
    ); 
    let categorias = await categoria.findAll(
        {
            order: [
                ['idCategoria', 'ASC'],
            ]
        }
    );

    res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});

    //console.log(veiculos.map(p=>p.toJSON()));        
    //console.log(marcas.map(p=>p.toJSON()));    
    //console.log(categorias.map(p=>p.toJSON()));  

  },

  produtofiltro: async (req,res) =>{

    mensagem = "";
        
    //console.log("---------");  
    //console.log(req.body.estados);
    //console.log(req.body.cidade);  
    //console.log(req.body.marca);  
    //console.log(req.body.modelo);  
    //console.log(req.body.ordenar);  
    //console.log("---------");   

    if(req.body.pesquisa != undefined){

      let veiculos = await produto.findAll()
      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});

      if((await produto.findAll({where: { Estado: [req.body.pesquisa],}}))[0] != undefined)
      {
        veiculos = await produto.findAll({where: { Estado: [req.body.pesquisa],}})
        res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
      }
      else if((await produto.findAll({where: { Cidade: [req.body.pesquisa],}}))[0] != undefined)
      {
        veiculos = await produto.findAll({where: { Cidade: [req.body.pesquisa],}})
        res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
      }
      else if((await marca.findAll({where: { Nome: [req.body.pesquisa],}}))[0] != undefined)
      {
        marcas = await marca.findAll(
          {
            where:{ 
              Nome: [req.body.pesquisa],
            },
            attributes: ['idMarcas', 'Nome']
          }
        ); 
        res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
      }
      else if((await produto.findAll({where: { Modelo: [req.body.pesquisa],}}))[0] != undefined)
      {
        veiculos = await produto.findAll({where: { Modelo: [req.body.pesquisa],}})
        res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
      }      
      else
      {
        veiculos = [];
        marcas = [];
        categorias = [];
        mensagem = "Não existem produtos com os critérios digitados.";
        res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
      }

    }

    if(req.body.estados != undefined)
    {
      let veiculos = await produto.findAll({where: { Estado: [req.body.estados],}})
      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});
      res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});

    }   

    if(req.body.cidade != undefined)
    {
      let veiculos = await produto.findAll({where: { Cidade: [req.body.cidade],}})
      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});
      res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
    }

    if(req.body.marca != undefined)
    {
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});
      
      let marcas = await marca.findAll(
        {
          where:{ 
            Nome: [req.body.marca],
          },
          attributes: ['idMarcas', 'Nome']
        }
      ); 
      
      //console.log(marcas[0].Nome);  
      //console.log(marcas[0].idMarcas);  

      let veiculos = await produto.findAll(
        {
          where: {
            Marcas_idMarcas: [marcas[0].idMarcas],
          },
          attributes: ['Modelo', 'Valor',  'Ano', 'Cidade', 'Estado', 'Quilometragem', 'Marcas_idMarcas','Imagem']
        }
      ); 

      let marc = marcas[0].Nome;
      //console.log(marc);  
      //console.log(marc);  

      res.render('produtos.ejs', {veiculos, marcas,categorias, mensagem});
    }

    if(req.body.modelo != undefined)
    {
      let veiculos = await produto.findAll({where: { Modelo: [req.body.modelo],}})
      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});
      res.render('produtos.ejs', {veiculos, marcas,categorias,mensagem});
    }

    if(req.body.ordenar != undefined)
    {
      //console.log(req.body.ordenar);
      let veiculos;

      switch (req.body.ordenar) {
        case 'menorpreco':
          veiculos = await produto.findAll({order: [['Valor', 'ASC'],]});
          break;
        case 'maiorpreco':
          veiculos = await produto.findAll({order: [['Valor', 'DESC'],]}); 
          break;
        case 'menorkm':
          veiculos = await produto.findAll({order: [['Quilometragem', 'ASC'],]});  
          break;
        case 'maiorkm':
          veiculos = await produto.findAll({order: [['Quilometragem', 'DESC'],]});    
          break;
        case 'menorano':
          veiculos = await produto.findAll({order: [['Ano', 'ASC'],]});  
          break;
        case 'maiorano':
          veiculos = await produto.findAll({order: [['Ano', 'DESC'],]}); 
          break;
        default:
          veiculos = await produto.findAll()
      }
               
      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});
      res.render('produtos.ejs', {veiculos, marcas,categorias, mensagem});
      
    }
    //fim filtro produtos    
  },
  //Usar a função também no logout

  logout: (req,res) => {
    req.session.destroy();
    carrinho = [];
    res.redirect("/inicial");
  },

  carrinho: async (req,res) => {

    mensagem = "";

    let adicionar = req.body.idProduto;
    let veiculos;
    let valorTotal = 0;   

    if(carrinho[0] == null){mensagem = "Carrinho vazio. Que tal adicionar alguns produtos?";}   
    
    if(adicionar == 0)
    {
      carrinho = [];
      res.redirect("/produtos/carrinho");
    }
    else if(adicionar > 0)
    {
      veiculos = await produto.findAll({where: {idProduto: [adicionar],},attributes: ['Modelo', 'Valor',  'Ano', 'Cidade', 'Estado', 'Quilometragem', 'Imagem', 'Marcas_idMarcas']});
      carrinho.push(veiculos[0]);
      veiculos = carrinho;

      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});
     
      let usuario;
      session = req.session;
      if (!session.userid) {
        usuario = {Nome: "Fulano ",Endereco: "",}
      }
      else
      {
        usuario = await cliente.findAll(
          {
            where: {
                Email: [session.userid],
  
            },
            attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
          }
        );  
        usuario = usuario[0];
      } 
           
      for(let veic of veiculos)
      {
          valorTotal = valorTotal + parseFloat(veic.Valor);
      }     

      mensagem = "";
      
      res.render('carrinho.ejs', {veiculos, marcas, categorias, valorTotal, usuario,mensagem});
    }
    else
    {
      veiculos = carrinho;
      let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
      let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});

      for(let veic of veiculos)
      {
          valorTotal = valorTotal + parseFloat(veic.Valor);
      }  

      let usuario;
      session = req.session;
      if (!session.userid) {
        usuario = {Nome: "Fulano ",Endereco: "",}
      }
      else
      {
        usuario = await cliente.findAll(
          {
            where: {
                Email: [session.userid],
  
            },
            attributes: ['idCliente', 'Nome', 'Endereco', 'Telefone', 'Email', 'Senha', 'CPF']
          }
        );  
        usuario = usuario[0];
      }    
          
      res.render('carrinho.ejs', {veiculos, marcas, categorias, valorTotal, usuario,mensagem});
      
    }

    
  },

  produtoInterno: async (req, res) => {

    mensagem = "";
    
    const id = req.params.idProduto;

    let marcas = await marca.findAll({order: [['idMarcas', 'ASC'],]}); 
    let categorias = await categoria.findAll({order: [['idCategoria', 'ASC'],]});

    await produto.findOne({ where: { idProduto: id } }).then((veic) => {
      if (veic != undefined) {
        return res.render("produtoInterno", {veic:veic,marcas, categorias});
      } else {
        res.status(404).render("404-page");
      }
    });
  },

  finalizacao: (req, res) => {

    if(carrinho[0] == null){res.redirect("/produtos/carrinho");}  
     
    session = req.session;
    if (session.userid) {
      
      res.render("finalizacao.ejs");
    }
    else
    {
      mensagem = "Faça login ou cadastro.";
      return res.render("login.ejs", {
        mensagem
      });
    } 
  },


  gravarVenda: async (req, res) => {
    
    const errors = validationResult (req);
    session = req.session;

    if(!errors.isEmpty()) {
      return res.render('login',{errors:errors.mapped()}, mensagem);
    }else
    {

      let usuarios = await cliente.findAll(
        {
          where: {
              Email: [session.userid],
          },
          attributes: ['idCliente', 'Nome']
        }
      );  
      usuario = usuarios[0];

      let pagamento;

      
      if(req.body.pix="on"){
        pagamento = 1;
      }
      else if(req.body.debito="on"){
        pagamento = 4;
      }
      else if(req.body.credito="on"){
        pagamento = 5;
      }

      const novaVenda = await pedido.create({ 
        Clientes_idCliente: usuario.idCliente,
        Status: "Em andamento",
        Pagamentos_idPagamentos: pagamento,
      });
    }
  
    veiculos = [];
    marcas = [];
    categorias = [];
    valorTotal = 0;
    // mensagem = "Compra efetuada com sucesso, obrigado!";
    carrinho = [];
    // res.render('carrinho.ejs', {veiculos, marcas, categorias, valorTotal, usuario,mensagem});
    res.render("sucesso.ejs");
  },

  sucesso: (req, res) => {
    res.render("sucesso.ejs");
  },
};

module.exports = produtoController;
