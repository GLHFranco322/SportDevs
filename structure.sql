-- Crear base de datos
CREATE DATABASE sportdevs;
-- Usa Base de datos
USE sportdevs;
-- Tabla de Usuarios
CREATE TABLE Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Surname VARCHAR(200) NOT NULL,
    UserName VARCHAR(200) NOT NULL,
    Email VARCHAR(250) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
	Rol VARCHAR(200) NOT NULL,
    Address VARCHAR(200) NOT NULL,
    City INT NOT NULL,
    Country int NOT NULL
);

-- Tablas Secundarias
CREATE TABLE Categorias (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NameCategory VARCHAR(100) NOT NULL
);

CREATE TABLE Marcas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreMarca VARCHAR(100) NOT NULL
);

CREATE TABLE Colores (
    ColorID INT AUTO_INCREMENT PRIMARY KEY,
    NombreColor VARCHAR(50) NOT NULL
);

CREATE TABLE Size (
    SizeID INT AUTO_INCREMENT PRIMARY KEY,
    NameSize VARCHAR(50) NOT NULL
);

-- Tabla de Productos
CREATE TABLE Productos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Img VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    Discount DECIMAL(10, 2) NOT NULL,
    Category INT,
    Subcategory INT,
    MarcaID INT,
    ColorID INT,
    SizeID INT,
    FOREIGN KEY (Category) REFERENCES Categorias(ID),
    FOREIGN KEY (Subcategory) REFERENCES Categorias(ID),
    FOREIGN KEY (MarcaID) REFERENCES Marcas(ID),
    FOREIGN KEY (ColorID) REFERENCES Colores(ColorID),
    FOREIGN KEY (SizeID) REFERENCES Size(SizeID)
);


-- Tabla de Carrito de Compras
CREATE TABLE CarritoCompras (
    CarritoID INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioID INT NOT NULL,
    FechaCompra DATETIME DEFAULT CURRENT_TIMESTAMP,
    CantidadItems INT NOT NULL,
    PrecioTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (UsuarioID) REFERENCES Users(ID)
);

-- Detalles de Productos en el Carrito de Compras (opcional)
CREATE TABLE CarritoProductcarritocompras (
    CarritoProductoID INT AUTO_INCREMENT PRIMARY KEY,
    CarritoID INT NOT NULL,
    ProductID INT NOT NULL,
    Cant INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CarritoID) REFERENCES CarritoCompras(CarritoID),
    FOREIGN KEY (ProductID) REFERENCES Productos(ID)
);