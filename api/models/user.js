// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('student', 'teacher', 'admin'),
      defaultValue: 'student',
    },
  });

  User.associate = (models) => {
    if (User.role === 'student') {
      User.hasOne(models.Student); // If a user is a student
    } else if (User.role === 'teacher') {
      User.hasOne(models.Teacher); // If a user is a teacher
    }
    // Admin might have different associations or functionalities
  };

  return User;
};
