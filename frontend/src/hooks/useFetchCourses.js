// src/hooks/useFetchCourses.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/courses');
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to add a new course
  const addCourse = async (newCourse) => {
    try {
      const response = await axios.post('http://localhost:3001/api/courses', newCourse);
      setCourses([...courses, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  // Function to update a course
  const updateCourse = async (updatedCourse) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/courses/${updatedCourse.id}`, updatedCourse);
      setCourses(courses.map(course => (course.id === updatedCourse.id ? response.data : course)));
    } catch (err) {
      setError(err);
    }
  };

  // Function to edit a course
  const editCourse = async (editedCourse) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/courses/${editedCourse.id}`, editedCourse);
      setCourses(courses.map(course => (course.id === editedCourse.id ? response.data : course)));
    } catch (err) {
      setError(err);
    }
  };

  return {
    courses,
    loading,
    error,
    addCourse,
    updateCourse,
    editCourse,  // Add this function to the returned object
    // ... Other functions as needed
  };
};

export default useFetchCourses;
