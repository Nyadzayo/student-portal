

'use strict';
const bcrypt = require('bcrypt');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const passwordHash = await bcrypt.hash('password', 10); // Hashing the password

    await queryInterface.bulkInsert('users', [
      // Sample Students
      { 
        name: 'Student One',
        email: 'student1@example.com',
        username: 'student1', 
        password: passwordHash, 
        role: 'student', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Student Two',
        email: 'student2@example.com',
        username: 'student2', 
        password: passwordHash, 
        role: 'student', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Student Three',
        email: 'student3@example.com',
        username: 'student3', 
        password: passwordHash, 
        role: 'student', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Student Four',
        email: 'student4@example.com',
        username: 'student4', 
        password: passwordHash, 
        role: 'student', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Student Five',
        email: 'student5@example.com',
        username: 'student5', 
        password: passwordHash, 
        role: 'student', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Student Six',
        email: 'student6@example.com',
        username: 'student6', 
        password: passwordHash, 
        role: 'student', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      // Teachers
      { 
        name: 'Teacher One',
        email: 'teacher1@example.com',
        username: 'teacher1', 
        password: passwordHash, 
        role: 'teacher', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Teacher Two',
        email: 'teacher2@example.com',
        username: 'teacher2', 
        password: passwordHash, 
        role: 'teacher', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      // Admin
      { 
        name: 'Admin User',
        email: 'admin@example.com',
        username: 'admin', 
        password: passwordHash, 
        role: 'admin', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     // Remove all data from the table
     await queryInterface.bulkDelete('users', null, {});
  }
};
