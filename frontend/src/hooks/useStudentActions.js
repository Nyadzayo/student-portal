// src/hooks/useStudentActions.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useStudentActions = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/students');
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addStudent = async (newStudent) => {
    try {
      const response = await axios.post('http://localhost:3001/api/students', newStudent);
      setStudents([...students, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  const editStudent = async (editedStudent) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/students/${editedStudent.id}`, editedStudent);
      setStudents(students.map(student => (student.id === editedStudent.id ? response.data : student)));
    } catch (err) {
      setError(err);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:3001/api/students/${studentId}`);
      setStudents(students.filter(student => student.id !== studentId));
    } catch (err) {
      setError(err);
    }
  };

  const addSubjectToStudent = async (studentId, subject) => {
    try {
      // Assuming the backend API supports adding subjects to a student
      const response = await axios.post(`http://localhost:3001/api/students/${studentId}/subjects`, { subject });
      setStudents(students.map(student => (student.id === studentId ? response.data : student)));
    } catch (err) {
      setError(err);
    }
  };

  return {
    students,
    loading,
    error,
    addStudent,
    editStudent,
    deleteStudent,
    addSubjectToStudent,
  };
};

export default useStudentActions;
