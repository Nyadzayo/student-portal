const { Teacher } = require('../models');
exports.createTeacher = async (teacherData) => {
    return await Teacher.create(teacherData);
  };
  
  exports.getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
  };
  
  exports.updateTeacher = async (id, updatedData) => {
    const teacher = await Teacher.findByPk(id);
    if (teacher) {
      return await teacher.update(updatedData);
    }
    return null;
  };
  
  exports.deleteTeacher = async (id) => {
    const teacher = await Teacher.findByPk(id);
    if (teacher) {
      await teacher.destroy();
      return true;
    }
    return false;
  };
  // Get all teachers
exports.getAllTeachers = async () => {
    try {
      const teachers = await Teacher.findAll();
      return teachers;
    } catch (error) {
      throw new Error('Error fetching teachers from the database.');
    }
  };