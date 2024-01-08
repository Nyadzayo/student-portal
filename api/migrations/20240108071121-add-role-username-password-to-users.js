
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'student' // default role
    });

    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'role');
    await queryInterface.removeColumn('Users', 'username');
    await queryInterface.removeColumn('Users', 'password');
  }
};