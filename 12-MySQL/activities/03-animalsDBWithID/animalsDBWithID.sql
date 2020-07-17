-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER(10),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jerome", TRUE, "Farley", 5);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Stephon", TRUE, "Fluffy", 06);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Brad", TRUE, "Lil' Violet",08);

INSERT INTO people (name, has_pet)
VALUES ("Poppe", FALSE);

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Fluffy McFluff Fluff", pet_age = 2
WHERE id = 4;

SELECT * FROM people;


SELECT pet_name FROM people;

SELECT pet_name FROM people
WHERE name = "Jerome";
