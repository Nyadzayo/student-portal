// models/course.js
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    // Add other fields as required
  });

  Course.associate = (models) => {
    Course.belongsToMany(models.Student, {
      through: 'StudentCourse',
      as: 'enrolledStudents',
      foreignKey: 'id',
    });
    Course.belongsTo(models.Teacher,{
      foreignKey: 'id', // Use the existing 'id' column as the foreign key for Teacher
      as: 'teacher',   // Optional alias
      targetKey: 'id',
    }); // A course is associated with a teacher
  };

  return Course;
};
