DROP DATABASE IF EXISTS tao_deportes;
CREATE DATABASE tao_deportes;
USE tao_deportes;

CREATE TABLE genders (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    gender_name VARCHAR (15),
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE categories (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    category_name VARCHAR (45),
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE products (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT null,
    product_price INT (6) NOT null,
    product_discount INT (3) NOT null,
    product_description VARCHAR (200) NOT null,
    product_image VARCHAR (500) NOT null,
    product_gender_id INT UNSIGNED NOT null,
    product_category_id INT UNSIGNED NOT null,
    PRIMARY KEY (id),
    FOREIGN KEY (product_gender_id) REFERENCES genders(id),
    FOREIGN KEY (product_category_id) REFERENCES categories(id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    encripted VARCHAR(500) NOT NULL,
    user_fullname VARCHAR (50) NOT null,
    user_birthdate DATE NOT null,
    user_profileimage VARCHAR(500),
    user_adress VARCHAR (100) NOT null,
    user_gender_id INT UNSIGNED NOT null,
    user_email VARCHAR (100) NOT null,
    user_password VARCHAR (100) NOT null,
    PRIMARY KEY (id),
    FOREIGN KEY (user_gender_id) REFERENCES genders(id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE kits (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    kit_name VARCHAR (50),
    category_id INT UNSIGNED NOT NULL,
    producto1 INT UNSIGNED NULL,
    producto2 INT UNSIGNED NULL,
    producto3 INT UNSIGNED NULL,
    producto4 INT UNSIGNED NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (producto1) REFERENCES products(id),
    FOREIGN KEY (producto2) REFERENCES products(id),
    FOREIGN KEY (producto3) REFERENCES products(id),
    FOREIGN KEY (producto4) REFERENCES products(id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE sells (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    buyer_id INT UNSIGNED NOT NULL,
    products_id VARCHAR(50) NOT NULL,
    sell_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (buyer_id) REFERENCES users(id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

INSERT INTO `tao_deportes`.`genders` (`id`, `gender_name`) VALUES ('1', 'Male');
INSERT INTO `tao_deportes`.`genders` (`id`, `gender_name`) VALUES ('2', 'Female');
INSERT INTO `tao_deportes`.`genders` (`id`, `gender_name`) VALUES ('3', 'Unisex');

INSERT INTO `tao_deportes`.`users` (`id`, `encripted`, `user_fullname`, `user_birthdate`, `user_profileimage`, `user_adress`, `user_gender_id`, `user_email`, `user_password`) VALUES ('1', '2b$04$6tOLfoVU', 'Tano Abratti', '1999-08-23', 'user_profileimage-1623247152052.png', 'micasa 123', '1', 'abrattitano@gmail.com', '$2b$10$MC3PZNdCxEjtY7zPA.Vu5e/gn83VYihcWZlPteLzkmkCgdogViwSi');
INSERT INTO `tao_deportes`.`users` (`id`, `encripted`, `user_fullname`, `user_birthdate`, `user_profileimage`, `user_adress`, `user_gender_id`, `user_email`, `user_password`)VALUES(2, '2b$04$hwhL12PU', 'Renzo Cagnola', '1999-09-11', 'user_profileimage-1623247467973.jpg', 'calle falsa 123', 1, 'rencagnola99@gmail.com', '$2b$10$wzJjq2ZBYcLE./1EgOYjaeXBOcF87TPGHG0iPYyIESubFaYGDNWka');
INSERT INTO `tao_deportes`.`users` (`id`, `encripted`, `user_fullname`, `user_birthdate`, `user_profileimage`, `user_adress`, `user_gender_id`, `user_email`, `user_password`) VALUES ('3', '2b$04$eTcIE1pU', 'Depende', '2021-05-31', 'user_profileimage-1623253864613.jpg', 'micasa 123', '1', 'depende@pablo.com', '$2b$10$tbE3L0pr8w7pPV5FNizLke3ogvlsd/eJdNXS5z9ROQGOelCrar1m6');
INSERT INTO `tao_deportes`.`users` (`id`, `encripted`, `user_fullname`, `user_birthdate`, `user_profileimage`, `user_adress`, `user_gender_id`, `user_email`, `user_password`) VALUES ('4', '2b$04$4frpYN81', 'Sr. Pepito', '2021-06-01', 'user_profileimage-1623253975570.jpg', 'sucasa 123', '3', 'pepito@pepitoInc.com', '$2b$10$k16oL7lxyILShu37mvvBKeVOMCarKr2OFIf2wq6cgIi4QgQe5wK0u');
INSERT INTO `tao_deportes`.`users` (`id`, `encripted`, `user_fullname`, `user_birthdate`, `user_profileimage`, `user_adress`, `user_gender_id`, `user_email`, `user_password`) VALUES ('5', '2b$04$UL7NFbYh', 'Ruleta', '2021-06-02', 'user_profileimage-1623254033107.jpg', 'sucasa 123', '2', 'ruleta@porFavorAMiNo.com', '$2b$10$39yvM43yW2ahDnWegHaQTuCAh6rLDjAOH.9mGfEQcSavUNw0qFupm');
INSERT INTO `tao_deportes`.`users` (`id`, `encripted`, `user_fullname`, `user_birthdate`, `user_profileimage`, `user_adress`, `user_gender_id`, `user_email`, `user_password`) VALUES ('6', '2b$04$pmpp/ITE', 'Enie', '2021-06-08', 'user_profileimage-1623254122627.PNG', 'sucasa 123', '1', 'enie@enie.com', '$2b$10$rF6pboYXHlfwR156XmhzY.0yxQ9aFLtH73RMtlF5B4IZ2IKi9gLL2');

INSERT INTO `tao_deportes`.`categories` (`id`, `category_name`) VALUES ('1', 'Futbol');
INSERT INTO `tao_deportes`.`categories` (`id`, `category_name`) VALUES ('2', 'Basketball');
INSERT INTO `tao_deportes`.`categories` (`id`, `category_name`) VALUES ('3', 'Volleyball');

INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('0', 'Remera Deportiva Hombre', '1000', '50', 'Remera generica hombre', 'place-holder-male-t-shirt0.jpg', '1', '1');
UPDATE `tao_deportes`.`products` SET `id` = '0' WHERE (`id` = '1');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('1', 'Remera Deportiva Mujer', '1000', '50', 'Remera generica mujer', 'place-holder-woman-t-shirt0.jpg', '2', '1');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('2', 'Accesorio Deportivo', '1000', '50', 'Accesorio Deportivo', 'place-holder-accesories0.jpg', '3', '2');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('3', 'Remera Deportiva Hombre', '2000', '50', 'Remera generica hombre', 'place-holder-male-t-shirt1.jpg', '1', '1');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('4', 'Remera Deportiva Mujer', '2000', '50', 'Remera generica mujer', 'place-holder-woman-t-shirt1.jpg', '2', '1');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('5', 'Accesorio Deportivo', '2000', '50', 'Accesorio Deportivo', 'place-holder-accesories1.jpg', '3', '2');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('6', 'Remera Deportiva Verde Hombre', '2500', '0', 'Remera generica hombre', 'place-holder-male-t-shirt2.jpg', '1', '3');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('7', 'Remera Deportiva Verde Mujer', '2500', '0', 'Remera generica mujer', 'place-holder-woman-t-shirt2.jpg', '2', '3');
INSERT INTO `tao_deportes`.`products` (`id`, `product_name`, `product_price`, `product_discount`, `product_description`, `product_image`, `product_gender_id`, `product_category_id`) VALUES ('8', 'Accesorio Verde Deportivo', '2500', '0', 'Accesorio Deportivo', 'place-holder-accesories2.jpg', '3', '3');

INSERT INTO `tao_deportes`.`sells` (`id`, `buyer_id`, `products_id`, `sell_date`) VALUES ('1', '1', '0-1-1-2-2-3-4-4-4-5', '2020-01-01');
INSERT INTO `tao_deportes`.`sells` (`id`, `buyer_id`, `products_id`, `sell_date`) VALUES ('2', '2', '0-3-6', '1999-08-23');
INSERT INTO `tao_deportes`.`sells` (`id`, `buyer_id`, `products_id`, `sell_date`) VALUES ('3', '4', '1-2-3-4-5-6-7-8', '2020-10-01');
INSERT INTO `tao_deportes`.`sells` (`id`, `buyer_id`, `products_id`, `sell_date`) VALUES ('4', '5', '2-2-2-8-7-7', '2000-08-06');
INSERT INTO `tao_deportes`.`sells` (`id`, `buyer_id`, `products_id`, `sell_date`) VALUES ('5', '6', '6-8-7-4-1', '2021-06-06');
INSERT INTO `tao_deportes`.`sells` (`id`, `buyer_id`, `products_id`, `sell_date`) VALUES ('6', '3', '8-5-2', '2000-08-06');
