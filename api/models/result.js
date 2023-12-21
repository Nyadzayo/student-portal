const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Result extends Model {}
  
  Result.init({
    score: DataTypes.INTEGER,
    total_questions: DataTypes.INTEGER,
    correct_answers: DataTypes.INTEGER,
    incorrect_answers: DataTypes.INTEGER,
    started_at: DataTypes.DATE,
    finished_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Result',
    tableName: 'results'
  });

  Result.associate = (models) => {
    Result.belongsTo(models.Student, { foreignKey: 'student_id' });
    Result.belongsTo(models.Test, { foreignKey: 'test_id' });
  };

  return Result;
};
