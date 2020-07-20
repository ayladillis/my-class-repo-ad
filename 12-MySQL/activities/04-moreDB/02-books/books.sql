DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;
USE library_db;

CREATE TABLE books(
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(100)
);

INSERT INTO books (id, title)
VALUES ("Percy Jackson and the Lightning Theif", 99);

CREATE TABLE authors(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
);

INSERT INTO authors (id, firstName, lastName)
VALUES (95, "Rick", "Rordan")

SELECT * FROM books;