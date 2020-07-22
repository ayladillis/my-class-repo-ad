DROP DATABASE IF EXISTS popQuizDB;
CREATE DATABASE popQuizDB;

USE popQuizDB;

CREATE TABLE breakfast (
  -- Code Starts Here
id INT NOT NULL AUTO_INCREMENT, 
fruit VARCHAR(100),
grain VARCHAR(100),
drinks VARCHAR(100),
PRIMARY KEY (id)
  -- Code Ends Here
);

INSERT INTO breakfast (fruit, grain, drinks) VALUES ("banana", "cinnamon toast crunch", "coffee");
INSERT INTO breakfast (fruit, grain, drinks) VALUES ("strawberry", "toast", "green tea");
INSERT INTO breakfast (fruit, grain, drinks) VALUES ("blueberry", "cherrios", "orange juice");