"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Hombres",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mujeres",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deportes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gaming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Niños",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};