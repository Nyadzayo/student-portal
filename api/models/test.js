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
    tableName: 'tests'
  });

  Test.associate = (models) => {
    Test.belongsTo(models.Course, { foreignKey: 'course_id' });
    Test.hasMany(models.Result, { foreignKey: 'test_id' });
  };

  return Test;
};
