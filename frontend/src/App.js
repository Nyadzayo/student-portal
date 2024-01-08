// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import "semantic-ui-css/semantic.min.css";
import "./components/style.css";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MessageExampleAttached from './components/StudentList';
import CourseComponent from './components/CourseComponent';
import Results from './components/Results';
import axios from 'axios';

function App() {
  const [toggleBtn, setToggleBtn] = useState(true);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [userAuth, setUserAuth] = useState(() => {
    const storedUser = localStorage.getItem('user');
    try {
      return storedUser ? JSON.parse(storedUser) : null; // Parse only if storedUser is not null or undefined
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null; // Return null if parsing fails
    }
  });
  

  const user = localStorage.getItem('user');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = (token, user) => {
    localStorage.setItem('token', token); // Store token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Store user information in local storage as a JSON string
    setIsAuthenticated(true);
    setUserAuth(user); // Update the userAuth state with the user information
    navigate('/'); 
  };
    console.log(userAuth)
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teachersResponse, studentsResponse, coursesResponse] = await Promise.all([
          axios.get('http://localhost:3001/api/teachers'),
          axios.get('http://localhost:3001/api/students'),
          axios.get('http://localhost:3001/api/courses'),
        ]);

        setTeachers(teachersResponse.data);
        setStudents(studentsResponse.data);
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="top-wrapper">
        {isAuthenticated && (
          <>
            <Navbar setToggle={setToggleBtn} onLogout={handleLogout} />
            <Sidebar toggleBtn={toggleBtn} user ={userAuth} />
          </>
        )}
        <Content className="top-wrapper" toggleBtn={toggleBtn}>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Dashboard students={students} user={userAuth} /> : <Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/students"
              element={isAuthenticated ? <MessageExampleAttached students={students} /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/teachers"
              element={isAuthenticated ? <MessageExampleAttached students={teachers} /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/courses"
              element={isAuthenticated ? <CourseComponent courses={courses} /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/results"
              element={isAuthenticated ? <Results /> : <Navigate to="/login" replace />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </div>
  );
}

export default App;
