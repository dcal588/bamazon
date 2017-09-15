DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item1", "Department1", 10,50),
	   ("Item2", "Department1", 100,25),
       ("Item3", "Department2", 5, 100),
       ("Item4", "Department2", 150, 10),
       ("Item5", "Department3", 15, 30),
       ("Item6", "Department3", 10, 200),
       ("Item7", "Department4", 50, 80),
       ("Item8", "Department4", 200, 35),
       ("Item9", "Department5", 500, 5),
       ("Item10", "Department5", 60, 50);
