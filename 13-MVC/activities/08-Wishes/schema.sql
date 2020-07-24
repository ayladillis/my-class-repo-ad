-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS wish_DB;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wish_DB;

USE wish_DB;

-- Create the table tasks.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  wish varchar(500) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('good grades');

