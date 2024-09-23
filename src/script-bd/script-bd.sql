
CREATE DATABASE node_arturolas;

USE node_arturolas;

CREATE TABLE usuario(
	idUsuario INT(11) PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL,
	genero VARCHAR(2) NOT NULL,
	correo VARCHAR(100) NOT NULL,
	password VARCHAR(250) NOT NULL,
	eliminado TINYINT(1) NOT NULL
);

CREATE TABLE producto(
	idProducto INT(11) PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(200) NOT NULL,
	precio DECIMAL(12,4) NOT NULL,
	eliminado TINYINT(1) NOT NULL
);

CREATE TABLE comprobante(
	idComprobante INT(11) PRIMARY KEY AUTO_INCREMENT,
	idUsuario INT(11) NOT NULL,
	fechaCreacion DATETIME,
	fechaCierre DATETIME,
	total DECIMAL(12,4),
	eliminado TINYINT(1) NOT NULL,
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE comprobanteItem(
	idComprobanteItem INT(11) PRIMARY KEY AUTO_INCREMENT,
	idComprobante INT(11) NOT NULL,
	idProducto INT(11) NOT NULL,
	nombreItem VARCHAR(200) NOT NULL,
	cantidad DECIMAL(12,4) NOT NULL,
	precioUnitario DECIMAL(12,4) NOT NULL,
	total DECIMAL(12,4) NOT NULL,
	eliminado TINYINT(1) NOT NULL,
	FOREIGN KEY (idComprobante) REFERENCES comprobante(idComprobante),
	FOREIGN KEY (idProducto) REFERENCES producto(idProducto)
);

INSERT INTO usuario(nombre, genero, correo, PASSWORD, eliminado) VALUES ('ARTURO', 'H', 'arturo@email.com', '123123', 0);
INSERT INTO usuario(nombre, genero, correo, PASSWORD, eliminado) VALUES ('MARIA', 'M', 'maria@email.com', '123123', 0);
INSERT INTO usuario(nombre, genero, correo, PASSWORD, eliminado) VALUES ('ANDREA', 'M', 'andrea@email.com', '123123', 1);
INSERT INTO usuario(nombre, genero, correo, PASSWORD, eliminado) VALUES ('NOMBRE USUARIO', 'H', 'nombreusuario@email.com', '123123', 1);

INSERT INTO producto(nombre, precio, eliminado) VALUES ('LAPTOP', 1200.00, 0);
INSERT INTO producto(nombre, precio, eliminado) VALUES ('MONITOR', 200.00, 0);
INSERT INTO producto(nombre, precio, eliminado) VALUES ('MOUSE', 50, 1);
INSERT INTO producto(nombre, precio, eliminado) VALUES ('TECLADO', 90, 0);

INSERT INTO comprobante(idUsuario, fechaCreacion, fechaCierre, total, eliminado) VALUES ( 2, NOW(), NOW(), 90, 1);
INSERT INTO comprobante(idUsuario, fechaCreacion, fechaCierre, total, eliminado) VALUES ( 1, NOW(), NOW(), 1200, 0);

INSERT INTO comprobanteItem(idComprobante, idProducto, nombreItem, cantidad, precioUnitario, total, eliminado) VALUES (2, 3, 'LAPTOP', 1, 1200, 1200, 0);
INSERT INTO comprobanteItem(idComprobante, idProducto, nombreItem, cantidad, precioUnitario, total, eliminado) VALUES (1, 1, 'MOUSE', 1, 50, 50, 0);
