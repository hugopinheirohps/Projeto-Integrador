/*
--  ANTERIOR
-- Date: 2022-12-26 


INSERT INTO Categorias (nome) values ("SUV"), ("Moto"), ("Caminhão"), ("Sedan"), ("Hatch"), ("Caminhonete");
INSERT INTO Clientes (nome, endereco,telefone,email,senha,CPF) values ("Fulano", "Rua da Esquina", "011900000000", "teste@gmail.com","DH@2022","01234567891");
INSERT INTO Combustiveis (Tipo) values ("Gasolina"), ("Etanol"), ("GNV"), ("Diesel");
INSERT INTO Marcas (Nome) values ("Ford"), ("Volkswagen"), ("Renault"), ("Peugeot"), ("Kia"), ("CAOA Chery"), ("Chevrolet"), ("Volvo"), ("Honda"), ("Yamaha"), ("Harley-Davidson"), ("Suzuki"), ("Dafra"), ("Kawasaki");
INSERT INTO Pagamentos (nome) values ("Boleto"), ("PIX"), ("Cartão"), ("Cheque");
INSERT INTO pedidos (Clientes_idCliente, Status,Pagamentos_idPagamentos) values ("1", "Pago", "2");
INSERT INTO produtos (valor, modelo,placa,ano,Categorias_idCategorias, Pedidos_idPedidos, Marcas_idMarcas, Ativo,Oferta) values ("20000.00", "Megane", "BRA2E19", "2008","4", "1", "3", true, "10%")


*/


INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (1,'Sedã');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (2,'Conversivel');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (3,'SUV');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (4,'Picape');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (5,'Coupe');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (6,'Sport');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (7,'Rally');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (8,'NC');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (9,'CB');
INSERT INTO Categorias (`idCategoria`,`Nome`) VALUES (10,'Ninja');


INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (1,'Matheus Carvalho','Rua São Teodoro 945','11976331982','alunoDH@gmail.com','123456','00011122234');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (2,'Maristela Rosa','Av Brasil','1122334455','exemplo@gmail.com','654321','1112223344');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (3,'Ana Clara','Rua dos Bandeirantes','1199887766','ex@exemplo.com','77664422','44433322211');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (4,'Paulo Roberto','Av de Oliveira Carrasco','1599884422','alunoDH@outlook.com','132132','77766699920');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (5,'Ruan Figuereido','Estrada Pau Brasil','21977664420','alunoDH@ex.com.br','77788899','55544433322');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (6,'Hugo Figuereido','Rua Brasilia','14966553322','alunoDHG2@gmail.com','000001324','33344499900');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (7,'Lucas Wesley','Av Paulista','16933448820','alunoDH@g2.com.br','abcdefaaa','00099988810');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (8,'Sonicy','Rua de Alagoas','15966693312','alunoDH@g2.com','79879845','00022233312');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (9,'Sergio Moura','Rua Sebastiao Oliveira 14','11976331992','professorDH@g2.com.br','7976737472','22233344455');
INSERT INTO Clientes (`idCliente`,`Nome`,`Endereco`,`Telefone`,`Email`,`Senha`,`CPF`) VALUES (10,'Matheus Felix','Av Copa Cabana 3456','13933445253','profeDH@g2.com.br','4545454545','33233133412');

INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (1,'Gasolina Comum');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (2,'Gasolina Aditivada');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (3,'Gasolina Formulada');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (4,'Etanol');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (5,'Etanol Aditivado');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (6,'GNV');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (7,'Diesel');
INSERT INTO Combustiveis (`idCombustiveis`,`Tipo`) VALUES (8,'Alcool');


INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (1,'Toyota');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (2,'Volvo');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (3,'Honda');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (4,'Volkswagen');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (5,'Nissan');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (6,'Fiat');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (7,'Hyndai');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (8,'Triumph');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (9,'Kawasaki');
INSERT INTO Marcas (`idMarcas`,`Nome`) VALUES (10,'Yamaha');

INSERT INTO Pagamentos (`idPagamentos`,`Nome`) VALUES (1,'Pix');
INSERT INTO Pagamentos (`idPagamentos`,`Nome`) VALUES (2,'Cheques');
INSERT INTO Pagamentos (`idPagamentos`,`Nome`) VALUES (3,'Boleto');
INSERT INTO Pagamentos (`idPagamentos`,`Nome`) VALUES (4,'Debito');
INSERT INTO Pagamentos (`idPagamentos`,`Nome`) VALUES (5,'Credito');

INSERT INTO Pedidos (`idPedidos`,`Clientes_idCliente`,`Status`,`Pagamentos_idPagamentos`) VALUES (1,1,'Concluido',1);
INSERT INTO Pedidos (`idPedidos`,`Clientes_idCliente`,`Status`,`Pagamentos_idPagamentos`) VALUES (2,2,'Em andamento',2);
INSERT INTO Pedidos (`idPedidos`,`Clientes_idCliente`,`Status`,`Pagamentos_idPagamentos`) VALUES (3,3,'Cancelado',3);
INSERT INTO Pedidos (`idPedidos`,`Clientes_idCliente`,`Status`,`Pagamentos_idPagamentos`) VALUES (4,4,'Processo Inicial',4);
INSERT INTO Pedidos (`idPedidos`,`Clientes_idCliente`,`Status`,`Pagamentos_idPagamentos`) VALUES (5,5,'Processo Final',3);
INSERT INTO Pedidos (`idPedidos`,`Clientes_idCliente`,`Status`,`Pagamentos_idPagamentos`) VALUES (6,6,'Devolução',4);

INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (1,'Camry',30000.00,'Carro','BRA2E19','2008', 'São Luis', 'MA', '150000', '/img/img_Inicial/Camry.png','Base de preços: Brasília. O Preço público sugerido pode variar de acordo com a tributação e alíquotas específicas de cada Estado. Preço do veículo sugerido ao público em reais (R$) para pintura sólida',1,1,1);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (2,'C40',25000.00,'Carro','EUA3214','2012', 'Manaus', 'AM', '50000','/img/img_Inicial/Volvo.png','O C40 Recharge não o obriga a escolher entre potência e condução responsável. Sente-se no seu lugar, comece a viagem e desfrute do conforto da condução com o One Pedal Drive e da aceleração suave sem ',2,2,2);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (3,'Pulse',75000.00,'Carro','BRA1324','2016','Natal', 'RN', '10000','/img/img_Inicial/Pulse.png','Fundada em 1977 e adquirida pelo Banco Itaú S/A em 2003, a Fiat Administradora de Consórcios Ltda. Sinta o seu coração pulsar mais forte quando os seus olhos encontrarem cada detalhe do autêntico desi',2,6,6);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (4,'Sentra',92000.00,'Carro','PRR5522','2020','Salvador', 'BA', '2000','/img/img_Inicial/Sentra.png','Importado do México, o Sentra 2021 era encontrado nas versões de acabamento S, SV e SL. Todas elas saem de fábrica com um motor 2.0 litros flex de até 140 cavalos de potência, atrelado a uma transmiss',1,4,5);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (5,'Civic',55000.00,'Carro','ALG1123','2018','Teresina', 'PI', '80000','/img/img_Inicial/Civic.png','Do seu estilo elegante à sua cabine arejada, o Civic Sedan é uma alegria de se ver e ainda melhor de dirigir. Sua estrutura baixa e larga e amplas áreas envidraçadas criam uma aparência poderosa do la',4,3,3);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (6,'Gol',65000.00,'Carro','RJC6900','2020','São Paulo', 'SP', '10000','/img/img_Inicial/Gol.png','Seu Gol pode ser equipado com o motor 1.0l MPI de três cilindros Total Flex que proporciona um desempenho surpreendente com economia de combustível e eficiência energética para um Tipo dessa cilindr',4,2,4);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (8,'Nc 750X',60000.00,'Moto','ADD4040','2022','Curitiba', 'PR', '1000','/img/img_Inicial/Nc-750X.png','Com 802 mm, a altura do assento da nova NC 750X foi reduzida em 30 mm em relação à versão anterior e, combinada ao guidão mais elevado, garante uma posição de pilotagem mais vertical e confortável, al',8,4,3);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (9,'CB500X',99999.99,'Moto','WAS3232','2021','Belo Horizonte', 'MG', '20000','/img/img_Inicial/CB500.png','O design da nova CB 500X destaca-se da multidão com seu estilo compacto de crossover e um toque robusto e agressivo. Novas cores e gráficos vibrantes são o complemento perfeito para a nova e robusta s',9,1,3);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (10,'Ninja 300',55000.00,'Moto','MNM1023','2018','Recife', 'PB', '200000','/img/img_Inicial/Ninja.png','Quando se trata de desempenho, tecnologia e design, o Modelo “Ninja” representa o melhor que a Kawasaki tem a oferecer. No caso da  Ninja 300, significa um motor bicilíndrico de 296 cc com potência e to',10,4,9);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (11,'XMA',68000.00,'Moto','MES2020','2021','Vitória', 'ES', '10000','/img/img_Inicial/Xmax.png','Trabalhando em conjunto com os freios ABS para garantir uma pilotagem mais suave, o controle de tração impede a perda de tração da roda traseira em condições de baixa aderência, como em dias de chuva,',9,5,10);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (12,'MT09',72000.00,'Moto','LKS1478','2020','Belém', 'PA', '12000','/img/img_Inicial/MT09.png','Com apenas 193 kg, 115 cv e 8,92 kgf.m de torque, a MT-09 surpreende em todos os detalhes. Seu motor crossplane tricilíndrico de 847 cc proporciona acelerações e retomadas rápidas de uma autêntica Mas',9,3,10);
INSERT INTO Produtos (`idProduto`,`Modelo`,`Valor`,`Tipo`,`Placa`,`Ano`,`Cidade`,`Estado`,`Quilometragem`,`Imagem`,`Descricao`,`Categorias_idCategorias`,`Pedidos_idPedidos`,`Marcas_idMarcas`) VALUES (7,'Tiger 900',78000.00,'Moto','SSD2289','2019','Rio de Janeiro', 'RJ', '7000','/img/img_Inicial/Tiger.png','Um novo Modelo para uma geração: a família Tiger 900 representa um salto qualitativo em termos de funcionalidade, com duas séries que revelam um mundo de aventuras urbanas, jornadas de longa distância e',7,2,8);
