CREATE DATABASE `chirpy`;
USE `chirpy`;

CREATE TABLE allchirps (
  -- TABLE CODE TO GO HERE
  `id` int NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(255) NOT NULL,
  `chirp` VARCHAR(255) NOT NULL,
  `time` int(255) NOT NULL,
  `created` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);