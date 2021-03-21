CREATE DATABASE sample;
USE sample;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password CHAR(36) NOT NULL
);