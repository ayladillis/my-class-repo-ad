-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS moviePlannerDB;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE moviePlannerDB;

USE moviePlannerDB;

-- Create the table plans.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES ('Avatar');