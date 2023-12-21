const testService = require('../services/testService');

exports.getAllTests = async (req, res) => {
  try {
    const tests = await testService.getAllTests();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
};

// Create a new test
exports.createTest = async (req, res) => {
  try {
    const newTest = await testService.createTest(req.body);
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error: error.message });
  }
};

// Get a test by ID
exports.getTestById = async (req, res) => {
  try {
    const test = await testService.getTestById(req.params.id);
    if (test) {
      res.json(test);
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving test', error: error.message });
  }
};

// Update a test by ID
exports.updateTest = async (req, res) => {
  try {
    const updatedTest = await testService.updateTest(req.params.id, req.body);
    if (updatedTest) {
      res.json({ message: 'Test updated successfully', test: updatedTest });
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating test', error: error.message });
  }
};

// Delete a test by ID
exports.deleteTest = async (req, res) => {
  try {
    const result = await testService.deleteTest(req.params.id);
    if (result) {
      res.json({ message: 'Test deleted successfully' });
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
};
