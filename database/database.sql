-- MySQL Script generated by MySQL Workbench
-- Thu Mar 23 02:44:59 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema softia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema softia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `softia` DEFAULT CHARACTER SET utf8 ;
USE `softia` ;

-- -----------------------------------------------------
-- Table `softia`.`agreements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softia`.`agreements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `hours` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softia`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softia`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `agreement_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_students_agreements_idx` (`agreement_id` ASC) VISIBLE,
  CONSTRAINT `fk_students_agreements`
    FOREIGN KEY (`agreement_id`)
    REFERENCES `softia`.`agreements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softia`.`certificates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softia`.`certificates` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` TEXT NOT NULL,
  `student_id` INT NOT NULL,
  PRIMARY KEY (`id`, `student_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_certificates_students1_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `fk_certificates_students1`
    FOREIGN KEY (`student_id`)
    REFERENCES `softia`.`students` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
