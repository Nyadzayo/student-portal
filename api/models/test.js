const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Test extends Model {}
  
  Test.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    time_limit: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Test',
    tableName: 'tests',
    timestamps: true, // Add this line to include createdAt and updatedAt fields
    createdAt: 'created_at', // Optionally rename the createdAt column if needed
    updatedAt: 'updated_at'
  });

  Test.associate = (models) => {
    Test.belongsTo(models.Course, { foreignKey: 'course_id' });
    Test.hasMany(models.Result, { foreignKey: 'test_id' });
  };

  return Test;
};
