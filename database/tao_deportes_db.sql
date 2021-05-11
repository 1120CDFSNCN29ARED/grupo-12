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
    user_fullname VARCHAR (50) NOT null,
    user_birthdate DATE NOT null,
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

INSERT INTO `tao_deportes`.`genders` (`id`, `gender_name`) VALUES ('1', 'Male');
INSERT INTO `tao_deportes`.`genders` (`id`, `gender_name`) VALUES ('2', 'Female');
INSERT INTO `tao_deportes`.`genders` (`id`, `gender_name`) VALUES ('3', 'Unisex');

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
