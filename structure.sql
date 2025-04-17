CREATE DATABASE SportDevs;
USE SportDevs;

-- Tabla de Roles
CREATE TABLE Roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipoRol VARCHAR(40) NOT NULL
);

-- Tabla de Usuarios
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(200) NOT NULL UNIQUE,
    username VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    address VARCHAR(200),
    city INT,
    rol_id INT,
    FOREIGN KEY (rol_id) REFERENCES Roles(id)
);

-- Tabla de Categorías
CREATE TABLE Categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    typeCategory VARCHAR(40),
    subCategory_id INT,
    FOREIGN KEY (subCategory_id) REFERENCES Categories(id)
);

-- Tabla de Productos
CREATE TABLE Products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    title VARCHAR(500),
    description VARCHAR(500),
    price DECIMAL(15,2),
    discount DECIMAL(5,2),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

-- Tabla de Carrito de compras
CREATE TABLE Shopping_Cart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

-- Tablas auxiliares para relaciones M:N
CREATE TABLE Brands (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand_name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE Colors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    color_name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE Sizes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    size_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Product_Brands (
    product_id INT,
    brand_id INT,
    PRIMARY KEY (product_id, brand_id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    FOREIGN KEY (brand_id) REFERENCES Brands(id)
);

CREATE TABLE Product_Colors (
    product_id INT,
    color_id INT,
    PRIMARY KEY (product_id, color_id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    FOREIGN KEY (color_id) REFERENCES Colors(id)
);

CREATE TABLE Product_Sizes (
    product_id INT,
    size_id INT,
    PRIMARY KEY (product_id, size_id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    FOREIGN KEY (size_id) REFERENCES Sizes(id)
);