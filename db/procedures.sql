USE cv;

DELIMITER $$
USE `cv`$$

CREATE PROCEDURE `usersAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(50),
  IN _email VARCHAR(50),
  IN _type VARCHAR(50)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO users (name, email, type)
    VALUES (_name, _email, _type);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE users
    SET
    name = _name,
    email = _email,
    type = _type
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
