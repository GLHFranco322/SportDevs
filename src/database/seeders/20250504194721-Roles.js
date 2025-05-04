'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Rols', [
      {
        type: 'Admin',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        type: 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Rols', null, {});
  }
};
