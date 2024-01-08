// src/App.js
import React , { useEffect, useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MessageExampleAttached from "./components/StudentList";
import "semantic-ui-css/semantic.min.css";
import "./components/style.css";
import axios from 'axios';
import useFetchCourses from './hooks/useFetchCourses';
import CourseComponent from './components/CourseComponent';
import Results from './components/Results';

function App() {
  const [toggleBtn, setToggleBtn] = useState(true);
  const toggle = () => setToggleBtn(val => !val);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const { courses, loading: coursesLoading, error: coursesError } = useFetchCourses();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersResponse = await axios.get('http://localhost:3001/api/teachers');
        setTeachers(teachersResponse.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
  
    fetchTeachers();  // Make sure to call the function here
  }, []);  // Empty dependency array means this will only run once when the component mounts
  useEffect(() => {
    // Fetch students from the API
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);
  return (
    <Router>
      <div className="top-wrapper">
        <Navbar setToggle={toggle} />
        <Sidebar toggleBtn={toggleBtn} />
        <Content toggleBtn={toggleBtn}>
          <Routes>
            <Route path="/" element={<Dashboard students={students} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/students" element={<MessageExampleAttached  students={students} />} />
            <Route path="/teachers" element={<MessageExampleAttached students={teachers}/>}/>
            <Route 
              path="/courses" 
              element={<CourseComponent courses={courses} loading={coursesLoading} error={coursesError} />} 
            />
            <Route 
              path="/results" 
              element={<Results />} 
            />
            <Route path="*" element={<NotFound />} /> {/* This acts as a catch-all route */}
          </Routes>
        </Content>
      </div>
    </Router>
  );
}

export default App;