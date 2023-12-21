

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tests', [
      {
        course_id: 1,
        title: 'Sample Test 1',
        description: 'This is a sample test',
        time_limit: 60,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 2,
        title: 'Sample Test 2',
        description: 'Another sample test for a different course',
        time_limit: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 3,
        title: 'Sample Test 3',
        description: 'Yet another sample test',
        time_limit: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 4,
        title: 'Sample Test 4',
        description: 'Test for advanced topics',
        time_limit: 90,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: 5,
        title: 'Sample Test 5',
        description: 'Test related to practical skills',
        time_limit: 50,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tests', null, {});
  }
};
