-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`customer` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `age` INT(11) NULL,
  `gender` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `mydb`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`address` (
  `id` INT NOT NULL,
  `address_details` VARCHAR(45) NULL,
  `customer_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_address_customer_id_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `mydb`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_address_customer_id_1_idx` ON `mydb`.`address` (`customer_id` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
