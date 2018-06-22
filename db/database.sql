CREATE DATABASE IF NOT EXISTS cv;

USE cv;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL,
  email VARCHAR(50) DEFAULT NULL,
  password VARCHAR(50) DEFAULT NULL,
  type VARCHAR(50) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE users;

INSERT INTO users values 
  (1, 'carlos', 'carlossas_97@hotmail.com', 'adminadmin123', 'admin');

SELECT * FROM users;
