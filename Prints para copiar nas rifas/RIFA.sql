-- -----------------------------------------------------
-- Table `RIFA`.`PROMOCAO`
-- -----------------------------------------------------
CREATE TABLE `PROMOCAO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `TITULO` VARCHAR(45) NOT NULL,
  `DESCRICAO` VARCHAR(255) NULL,
  `DATA_INICIO` DATE NOT NULL,
  `DATA_FIM` DATE NOT NULL,
  `DATA_SORTEIO` DATE NOT NULL,
  `ARRECADACAO` DOUBLE NOT NULL,
  `VALOR_RIFA` DOUBLE NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`PREMIO`
-- -----------------------------------------------------
CREATE TABLE `PREMIO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(45) NOT NULL,
  `DESCRICAO` VARCHAR(255) NOT NULL,
  `VALOR` DOUBLE NOT NULL,
  `PROMOCAO_ID` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`TIPO`
-- -----------------------------------------------------
CREATE TABLE `TIPO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`VENDEDOR`
-- -----------------------------------------------------
CREATE TABLE `VENDEDOR` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(100) NOT NULL,
  `CELULAR` INT NOT NULL,
  `LOGIN` VARCHAR(16) NOT NULL,
  `SENHA` VARCHAR(255) NOT NULL,
  `TIPO_ID` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`COMPRADOR`
-- -----------------------------------------------------
CREATE TABLE `COMPRADOR` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(100) NOT NULL,
  `CELULAR` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`NUMEROS`
-- -----------------------------------------------------
CREATE TABLE `NUMEROS` (
  `ID` BIGINT NOT NULL AUTO_INCREMENT,
  `NUMERO` INT NOT NULL,
  `PROMOCAO_ID` INT NOT NULL,
  `VENDEDOR_ID` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`VENDA`
-- -----------------------------------------------------
CREATE TABLE `VENDA` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DATA_VENDA` DATE NOT NULL,
  `VALOR` DOUBLE NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`NUMEROS_COMPRADOS`
-- -----------------------------------------------------
CREATE TABLE `NUMEROS_COMPRADOS` (
  `COMPRADOR_ID` INT NOT NULL,
  `NUMEROS_ID` BIGINT NOT NULL,
  `VENDA_ID` INT NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`RESULTADO`
-- -----------------------------------------------------
CREATE TABLE `RESULTADO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DATA` DATE NOT NULL,
  `PROMOCAO_ID` INT NOT NULL,
  `NUMEROS_ID` BIGINT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;