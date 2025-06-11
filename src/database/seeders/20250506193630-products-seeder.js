"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          img: "/images/products/airJordan/fireRed_1.jpg",
          title: "Air Jordan 4 Retro 'Fire Red' 2020",
          description: "Las Air Jordan 4 Retro 'Fire Red' 2020 son una reedición del colorway original de 1989. La silueta presenta una parte superior de cuero blanco con detalles en rojo",
          price: 200.00,
          categoryId: 1, // Asegúrate de que este ID exista en la tabla categories
          brandId: 1, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/products/productJson/producto-1.jpg",
          title: "Zapatillas Nike Air Max",
          description: "Zapatillas deportivas con tecnología Air Max para mayor comodidad y estilo. Ideales para correr o uso casual.",
          price: 129.99,
          categoryId: 1, // Asegúrate de que este ID exista en la tabla categories
          brandId: 1, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/products/productJson/producto-2.jpg",
          title: "Leggings de Entrenamiento",
          description: "Leggings de compresión para mujeres, diseñados para máxima flexibilidad y confort durante tus entrenamientos.",
          price: 49.99,
          categoryId: 2, // Asegúrate de que este ID exista en la tabla categories
          brandId: 2, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/products/productJson/producto-3.jpg",
          title: "Balón de Fútbol Profesional",
          description: "Balón de fútbol fabricado con materiales de alta calidad para una experiencia de juego profesional.",
          price: 59.99,
          categoryId: 3, // Asegúrate de que este ID exista en la tabla categories
          brandId: 3, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Audífonos Gaming RGB.png",
          title: "Audífonos Gaming RGB",
          description: "Audífonos gaming con iluminación RGB, micrófono ajustable y sonido envolvente para una experiencia inmersiva.",
          price: 89.99,
          categoryId: 4, // Asegúrate de que este ID exista en la tabla categories
          brandId: 4, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Mochila Escolar Deportiva.png",
          title: "Mochila Escolar Deportiva",
          description: "Mochila para niños con diseño ergonómico y amplio espacio para libros, ropa y accesorios.",
          price: 34.99,
          categoryId: 5, // Asegúrate de que este ID exista en la tabla categories
          brandId: 5, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Sudadera-de-Entrenamiento.png",
          title: "Sudadera de Entrenamiento",
          description: "Sudadera ligera y transpirable, perfecta para entrenamientos en clima frío.",
          price: 39.99,
          categoryId: 2, // Asegúrate de que este ID exista en la tabla categories
          brandId: 6, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Botas de Senderismo.jpg",
          title: "Botas de Senderismo",
          description: "Botas resistentes al agua, ideales para senderismo y actividades al aire libre.",
          price: 89.99,
          categoryId: 1, // Asegúrate de que este ID exista en la tabla categories
          brandId: 7, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Reloj Deportivo con GPS.jpg",
          title: "Reloj Deportivo con GPS",
          description: "Reloj inteligente con GPS integrado, monitor de ritmo cardíaco y resistencia al agua.",
          price: 199.99,
          categoryId: 3, // Asegúrate de que este ID exista en la tabla categories
          brandId: 8, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Edición Limitada de Camiseta Star Wars.jpg",
          title: "Edición Limitada de Camiseta Star Wars",
          description: "Camiseta temática de Star Wars en edición limitada, ideal para fanáticos.",
          price: 34.99,
          categoryId: 4, // Asegúrate de que este ID exista en la tabla categories
          brandId: 9, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/Set-de-Entrenamiento-Infantil.png",
          title: "Set de Entrenamiento Infantil",
          description: "Conjunto de camiseta y pantalón deportivo para niños, fabricado con materiales transpirables.",
          price: 29.99,
          categoryId: 5, // Asegúrate de que este ID exista en la tabla categories
          brandId: 2, // Asegúrate de que este ID exista en la tabla brands
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/images/sapo-pepe-peluche.png",
          title: "pepe",
          description: "ewoqieowqi",
          price: 20,
          categoryId: 4,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  }
};



