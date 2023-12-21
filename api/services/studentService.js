const { Student } = require('../models');

exports.getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    throw new Error(`Error fetching students from database ${error.message}`);
  }
};

// Implement other CRUD operations similar to the getAllStudents function

// Create a new student
exports.createStudent = async (studentData) => {
  return await Student.create(studentData);
};

// Get a student by ID
exports.getStudentById = async (id) => {
  return await Student.findByPk(id);
};

// Update a student by ID
exports.updateStudent = async (id, updatedData) => {
  const student = await Student.findByPk(id);
  if (student) {
    return await student.update(updatedData);
  }
  return null;
};

// Delete a student by ID
exports.deleteStudent = async (id) => {
  const student = await Student.findByPk(id);
  if (student) {
    await student.destroy();
    return true;
  }
  return false;
};
