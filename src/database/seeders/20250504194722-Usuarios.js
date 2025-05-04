"use strict";
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@gmail.com",
          name: "Admin",
          surname: "SportDevs",
          password: bcrypt.hashSync("123123", 10),
          userName: "SportDevsAdmin",
          rolId: 1,
          subscribed: false,
          address: "Siempre viva 1234",
          city: "Sprinfield",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "user@gmail.com",
          name: "User",
          surname: "SportDevs",
          password: bcrypt.hashSync("123123", 10),
          userName: "SportDevsUser",
          rolId: 2,
          subscribed: true,
          address: "Siempre viva 1234",
          city: "Sprinfield",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
