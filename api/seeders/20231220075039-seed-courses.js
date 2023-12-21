'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [
      {
        title: 'Mathematics',
        description: 'Level One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'History',
        description: 'Level One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more sample courses as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
