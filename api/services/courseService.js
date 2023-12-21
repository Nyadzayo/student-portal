const { Course } = require('../models');
exports.createCourse = async (courseData) => {
    return await Course.create(courseData);
  };
  
  exports.getCourseById = async (id) => {
    return await Course.findByPk(id);
  };
  
  exports.updateCourse = async (id, updatedData) => {
    const course = await Course.findByPk(id);
    if (course) {
      return await course.update(updatedData);
    }
    return null;
  };
  
  exports.deleteCourse = async (id) => {
    const course = await Course.findByPk(id);
    if (course) {
      await course.destroy();
      return true;
    }
    return false;
  };
  // Get all courses
exports.getAllCourses = async () => {
    try {
      const courses = await Course.findAll();
      return courses;
    } catch (error) {
      throw new Error(`Error fetching courses from the database.  ${error.message}`);
    }
  };