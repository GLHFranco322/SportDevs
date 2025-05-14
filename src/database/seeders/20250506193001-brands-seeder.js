"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Brands",
      [
        {
          id: 1, // ID explícito para garantizar compatibilidad con claves foráneas
          name: "Nike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Adidas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Puma",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Reebok",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Under Armour",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6, // ID explícito para garantizar compatibilidad con claves foráneas
          name: "Nike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Adidas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Puma",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Reebok",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    // Reinicia el contador de IDs para evitar conflictos con futuros inserts
    await queryInterface.sequelize.query(
      "ALTER TABLE Brands AUTO_INCREMENT = 6;"
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};