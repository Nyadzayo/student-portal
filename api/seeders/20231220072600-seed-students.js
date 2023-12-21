'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Students', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more sample students as needed
    ]);
  },

  async down (queryInterface, Sequelize) {
    // Remove seeded data
    return queryInterface.bulkDelete('Students', null, {});
  }
};
