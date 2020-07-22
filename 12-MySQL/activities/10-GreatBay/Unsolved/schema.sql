DROP DATABASE IF EXISTS greatbayDB;
CREATE DATABASE greatbayDB;

USE greatbayDB;


CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO auctions (item_name, category, starting_bid, highest_bid)
VALUES ("bed", "furniture", 50);

INSERT INTO auctions (item_name, category, starting_bid, highest_bid)
VALUES ("cake", "baked goods", 5);

INSERT INTO auctions (item_name, category, starting_bid, highest_bid)
VALUES ("painting lesson", "tutorial", 25);

