const { Result } = require('../models');
const { Student } = require('../models')
const { Test } = require('../models')

exports.getAllResults = async () => {
  try {
    const results = await Result.findAll(
      {
       include:[
        { model: Student},
        { model: Test },
           
       ]
      }
    );
    return results;
  } catch (error) {
    throw new Error(`Error fetching results from database ${error.message}`);
  }
};

exports.createResult = async (resultData) => {
  return await Result.create(resultData);
};

exports.getResultById = async (id) => {
  return await Result.findByPk(id);
};
exports.getResultsByStudentId = async (studentId) => {
  try {
    const results = await Result.findAll({
      where: { id: studentId }, // Filter by the provided studentId
      include: [
        { 
          model: Student, 
        },
        {
          model: Test,
        }
      ]
    });

    return results;
  } catch (error) {
    throw new Error(`Error fetching results for student ID ${studentId}: ${error.message}`);
  }
};

exports.updateResult = async (id, updatedData) => {
  const result = await Result.findByPk(id);
  if (result) {
    return await result.update(updatedData);
  }
  return null;
};

exports.deleteResult = async (id) => {
  const result = await Result.findByPk(id);
  if (result) {
    await result.destroy();
    return true;
  }
  return false;
};
