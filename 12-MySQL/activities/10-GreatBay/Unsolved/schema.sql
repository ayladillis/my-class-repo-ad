DROP DATABASE IF EXISTS greatbayDB;
CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  category VARCHAR(45) NULL,
  highBid INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (title, category, highBid)
VALUES ("bed", "furniture", 50);

INSERT INTO items (title, category, highBid)
VALUES ("cake", "baked goods", 5);

INSERT INTO items (title, category, highBid)
VALUES ("painting lesson", "tutorial", 25);

