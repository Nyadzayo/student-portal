const { Test } = require('../models');

exports.getAllTests = async () => {
  try {
    const tests = await Test.findAll();
    return tests;
  } catch (error) {
    throw new Error(`Error fetching tests from database ${error.message}`);
  }
};

exports.createTest = async (testData) => {
  return await Test.create(testData);
};

exports.getTestById = async (id) => {
  return await Test.findByPk(id);
};

exports.updateTest = async (id, updatedData) => {
  const test = await Test.findByPk(id);
  if (test) {
    return await test.update(updatedData);
  }
  return null;
};

exports.deleteTest = async (id) => {
  const test = await Test.findByPk(id);
  if (test) {
    await test.destroy();
    return true;
  }
  return false;
};
