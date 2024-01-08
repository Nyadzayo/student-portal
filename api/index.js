// index.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const studentController = require('./controllers/studentController'); // Adjust the import based on your directory structure
const courseController = require('./controllers/courseController'); // Adjust the path based on your directory structure
const teacherController = require('./controllers/teacherController'); // Adjust the path based on your directory structure
const testController = require('./controllers/testController'); // Adjust the path based on your directory structure
const resultController = require('./controllers/resultsController');
const { User } = require('./models/');

const { sequelize } = require('./models'); // Ensure the path is correct based on your directory structure

const app = express();
const cors = require('cors');
const PORT = 3001;
app.use(cors());
// Enable CORS with specific configuration
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these headers
  })
);
// Middleware to parse JSON requests
app.use(bodyParser.json());
// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch user from database based on the provided username
    const user = await User.findOne({ where: { username: username } });
    
    // If user doesn't exist, send 401 Unauthorized
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password from the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Generate JWT token
      const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' }); // Include user.id if needed
    

      // Return user information and token
      res.json({
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          // Include other user fields as needed
        },
        token: token,
      });
    } else {
      // Incorrect password
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define routes for students

app.get('/api/students', studentController.getAllStudents); // Adjust the method name based on your controller
app.post('/api/students', studentController.createStudent); // Adjust the method name based on your controller
app.get('/api/students/:id', studentController.getStudentById); // Adjust the method name based on your controller
app.put('/api/students/:id', studentController.updateStudent); // Adjust the method name based on your controller
app.delete('/api/students/:id', studentController.deleteStudent); // Adjust the method name based on your controller

// Course Routes
app.post('/api/courses', courseController.createCourse);
app.get('/api/courses', courseController.getAllCourses);
app.get('/api/courses/:id', courseController.getCourseById);
app.put('/api/courses/:id', courseController.updateCourse);
app.delete('/api/courses/:id', courseController.deleteCourse);

// Teacher Routes
app.post('/api/teachers', teacherController.createTeacher);
app.get('/api/teachers', teacherController.getAllTeachers);
app.get('/api/teachers/:id', teacherController.getTeacherById);
app.put('/api/teachers/:id', teacherController.updateTeacher);
app.delete('/api/teachers/:id', teacherController.deleteTeacher);



// Test Routes
app.post('/api/tests', testController.createTest);
app.get('/api/tests', testController.getAllTests);
app.get('/api/tests/:id', testController.getTestById);
app.put('/api/tests/:id', testController.updateTest);
app.delete('/api/tests/:id', testController.deleteTest);

// Result Routes
app.post('/api/results', resultController.createResult);
app.get('/api/results', resultController.getAllResults);
app.get('/api/results/:id', resultController.getResultById);
app.put('/api/results/:id', resultController.updateResult);
app.delete('/api/results/:id', resultController.deleteResult);
const SECRET_KEY = 'your_secret_key_here';


// Start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
