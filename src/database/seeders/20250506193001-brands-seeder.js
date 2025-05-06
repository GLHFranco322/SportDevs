"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Nike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adidas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puma",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reebok",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Under Armour",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};