// controllers/teacherController.js

const teacherService = require('../services/teacherService');

// Create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const newTeacher = await teacherService.createTeacher(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: 'Error creating teacher', error: error.message });
  }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await teacherService.getTeacherById(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving teacher', error: error.message });
  }
};

// Update a teacher by ID
exports.updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await teacherService.updateTeacher(req.params.id, req.body);
    if (updatedTeacher) {
      res.json({ message: 'Teacher updated successfully', teacher: updatedTeacher });
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating teacher', error: error.message });
  }
};

// Delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
  try {
    const result = await teacherService.deleteTeacher(req.params.id);
    if (result) {
      res.json({ message: 'Teacher deleted successfully' });
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting teacher', error: error.message });
  }
};
// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
      const teachers = await teacherService.getAllTeachers();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching teachers', error: error.message });
    }
  };