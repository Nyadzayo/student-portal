const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/', studentController.getAllStudents);
// Implement other CRUD routes

module.exports = router;