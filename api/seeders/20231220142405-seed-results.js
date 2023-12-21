'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('results', [
      {
        student_id: 1,
        test_id: 1,
        score: 85,
        total_questions: 50,
        correct_answers: 43,
        incorrect_answers: 7,
        started_at: new Date(),
        finished_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 2,
        test_id: 2,
        score: 90,
        total_questions: 50,
        correct_answers: 45,
        incorrect_answers: 5,
        started_at: new Date(),
        finished_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 3,
        test_id: 3,
        score: 78,
        total_questions: 50,
        correct_answers: 39,
        incorrect_answers: 11,
        started_at: new Date(),
        finished_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 4,
        test_id: 4,
        score: 92,
        total_questions: 50,
        correct_answers: 46,
        incorrect_answers: 4,
        started_at: new Date(),
        finished_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 5,
        test_id: 5,
        score: 80,
        total_questions: 50,
        correct_answers: 40,
        incorrect_answers: 10,
        started_at: new Date(),
        finished_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      }
      // Add more sample result data as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('results', null, {});
  }
};
