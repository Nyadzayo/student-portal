const resultService = require('../services/resultsService');

exports.getAllResults = async (req, res) => {
  try {
    const results = await resultService.getAllResults();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results', error: error.message });
  }
};

// Create a new result
exports.createResult = async (req, res) => {
  try {
    const newResult = await resultService.createResult(req.body);
    res.status(201).json(newResult);
  } catch (error) {
    res.status(500).json({ message: 'Error creating result', error: error.message });
  }
};

// Get a result by ID
exports.getResultById = async (req, res) => {
  try {
    const result = await resultService.getResultById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'Result not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving result', error: error.message });
  }
};

// Update a result by ID
exports.updateResult = async (req, res) => {
  try {
    const updatedResult = await resultService.updateResult(req.params.id, req.body);
    if (updatedResult) {
      res.json({ message: 'Result updated successfully', result: updatedResult });
    } else {
      res.status(404).json({ message: 'Result not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating result', error: error.message });
  }
};

// Delete a result by ID
exports.deleteResult = async (req, res) => {
  try {
    const result = await resultService.deleteResult(req.params.id);
    if (result) {
      res.json({ message: 'Result deleted successfully' });
    } else {
      res.status(404).json({ message: 'Result not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting result', error: error.message });
  }
};
