-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema todoapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema todoapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todoapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `todoapp` ;

-- -----------------------------------------------------
-- Table `todoapp`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todoapp`.`tasks` (
  `taskid` INT NOT NULL AUTO_INCREMENT,
  `tasks` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`taskid`),
  UNIQUE INDEX `taskid_UNIQUE` (`taskid` ASC) VISIBLE,
  UNIQUE INDEX `tasks_UNIQUE` (`tasks` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 44
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
