CREATE SCHEMA IF NOT EXISTS `webVeiculos` DEFAULT CHARACTER SET utf8 ;
USE `webVeiculos` ;
-- -----------------------------------------------------
-- Table `mydb`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Clientes` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  `Endereco` VARCHAR(250) NOT NULL,
  `Telefone` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Senha` VARCHAR(128) NOT NULL,
  `CPF` CHAR(11) NOT NULL,
  PRIMARY KEY (`idCliente`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Categorias` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Pagamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Pagamentos` (
  `idPagamentos` INT NOT NULL,
  `Nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idPagamentos`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Pedidos` (
  `idPedidos` INT NOT NULL,
  `Clientes_idCliente` INT NOT NULL,
  `Status` VARCHAR(45) NULL,
  `Pagamentos_idPagamentos` INT NOT NULL,
  PRIMARY KEY (`idPedidos`, `Pagamentos_idPagamentos`),
  INDEX `fk_Pedidos_Clientes1_idx` (`Clientes_idCliente` ASC),
  INDEX `fk_Pedidos_Pagamentos1_idx` (`Pagamentos_idPagamentos` ASC),
  CONSTRAINT `fk_Pedidos_Clientes1`
    FOREIGN KEY (`Clientes_idCliente`)
    REFERENCES `webVeiculos`.`Clientes` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pedidos_Pagamentos1`
    FOREIGN KEY (`Pagamentos_idPagamentos`)
    REFERENCES `webVeiculos`.`Pagamentos` (`idPagamentos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Marcas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Marcas` (
  `idMarcas` INT NOT NULL,
  `Nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idMarcas`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Produtos` (
  `idProduto` INT NOT NULL,
  `Valor` DECIMAL(6,2) NOT NULL,
  `Modelo` VARCHAR(45) NOT NULL,
  `Placa` VARCHAR(45) NOT NULL,
  `Ano` VARCHAR(45) NOT NULL,
  `Categorias_idCategorias` INT NOT NULL,
  `Pedidos_idPedidos` INT NOT NULL,
  `Marcas_idMarcas` INT NOT NULL,
  PRIMARY KEY (`idProduto`),
  INDEX `fk_Produtos_Categoria_idx` (`Categorias_idCategorias` ASC) ,
  UNIQUE INDEX `Placa_UNIQUE` (`Placa` ASC),
  INDEX `fk_Produtos_Pedidos1_idx` (`Pedidos_idPedidos` ASC),
  INDEX `fk_Produtos_Marcas1_idx` (`Marcas_idMarcas` ASC),
  CONSTRAINT `fk_Produtos_Categoria`
    FOREIGN KEY (`Categorias_idCategorias`)
    REFERENCES `webVeiculos`.`Categorias` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produtos_Pedidos1`
    FOREIGN KEY (`Pedidos_idPedidos`)
    REFERENCES `webVeiculos`.`Pedidos` (`idPedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produtos_Marcas1`
    FOREIGN KEY (`Marcas_idMarcas`)
    REFERENCES `webVeiculos`.`Marcas` (`idMarcas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Combustiveis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Combustiveis` (
  `idCombustiveis` INT NOT NULL,
  `Tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCombustiveis`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `webVeiculos`.`Produtos_has_Combustiveis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webVeiculos`.`Produtos_has_Combustiveis` (
  `Produtos_idProduto` INT NOT NULL,
  `Combustiveis_idCombustiveis` INT NOT NULL,
  PRIMARY KEY (`Produtos_idProduto`, `Combustiveis_idCombustiveis`),
  INDEX `fk_Produtos_has_Combustiveis_Combustiveis1_idx` (`Combustiveis_idCombustiveis` ASC),
  INDEX `fk_Produtos_has_Combustiveis_Produtos1_idx` (`Produtos_idProduto` ASC),
  CONSTRAINT `fk_Produtos_has_Combustiveis_Produtos1`
    FOREIGN KEY (`Produtos_idProduto`)
    REFERENCES `webVeiculos`.`Produtos` (`idProduto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produtos_has_Combustiveis_Combustiveis1`
    FOREIGN KEY (`Combustiveis_idCombustiveis`)
    REFERENCES `webVeiculos`.`Combustiveis` (`idCombustiveis`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

select * from produtos;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

drop database webVeiculos;