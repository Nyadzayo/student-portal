// models/student.js
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    // Add other fields as required
  });

  Student.associate = (models) => {
    Student.belongsTo(models.User,{
      through: 'User',
      as: 'student',
      foreignKey: 'id',
    }); // A student is associated with a user
    Student.belongsToMany(models.Course, {
      through: 'StudentCourse',
      as: 'enrolledCourses',
      foreignKey: 'id',
    });
  };

  return Student;
};
