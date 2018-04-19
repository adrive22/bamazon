DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
product_name VARCHAR (255) NOT NULL,
department_name VARCHAR (255) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INTEGER (10) UNSIGNED NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(
product_name,
department_name,
price,
stock_quantity
)

VALUES
("HighBall", "Grocery", 3.99, 300),
("Fitbit", "Technology", 49.99, 100),
("Roomba", "Technology", 499.99, 47),
("Pop Tarts", "Grocery", 2.99, 27),
("Macbook", "Technology", 1299, 38),
('Spicy Chicken Ramen", "Grocery", .79, 500);



