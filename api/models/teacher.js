// models/teacher.js
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
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

  Teacher.associate = (models) => {
    Teacher.hasMany(models.Course, {
      foreignKey: 'id', // This should match the foreign key you've set in the 'Course' model
    });
  };

  return Teacher;
};
