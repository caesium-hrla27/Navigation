-- ---
-- Globals
-- ---

DROP DATABASE `nikesearch`;

CREATE DATABASE `nikesearch`;

USE `nikesearch`;

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Product'
-- 
-- ---

DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product`
(`id` INTEGER AUTO_INCREMENT DEFAULT NOT NULL,
  `name` VARCHAR
(50) DEFAULT NOT NULL,
  `type` VARCHAR
(50) DEFAULT NOT NULL,
  `price` DECIMAL
(65) DEFAULT NOT NULL,
  `img_url` VARCHAR
(1000) DEFAULT NOT NULL,
  `description` VARCHAR
(1000) DEFAULT NOT NULL,
  PRIMARY KEY
(`id`)
);
-- CREATE TABLE `Product`
-- (`id` INTEGER AUTO_INCREMENT DEFAULT NOT NULL,
--   `name` VARCHAR (50) DEFAULT NOT NULL,
--   `type` VARCHAR (50) DEFAULT NOT NULL,
--   `price` DECIMAL (65) DEFAULT NOT NULL,
--   `img_url` VARCHAR (1000) DEFAULT NOT NULL,
--   `description` VARCHAR (1000) DEFAULT NOT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Product` (`id`,`name`,`type`,`price`,`img_url`,`description`) VALUES
-- ('','','','','','');