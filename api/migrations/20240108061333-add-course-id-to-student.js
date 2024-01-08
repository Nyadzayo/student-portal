
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Students', 'course_ids', {
      type: Sequelize.STRING,
      defaultValue: JSON.stringify([1,2,3]), // default value as an empty array
      allowNull: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Students', 'course_ids');
  }
};