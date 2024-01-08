// src/hooks/useFetchResults.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultsById, setResultsById] = useState([])
  const [error, setError] = useState(null);

  // Fetch results from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/results');
        setResults(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const fetchResultsByStudentId = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/results/${id}`);
      // Check if data was returned successfully
    if (response && response.data) {
        console.log(response.data); // Log the fetched result data
        return response.data; // Return the fetched result data if needed
      }
    } catch (err) {
      throw new Error(`Error fetching results for student ID ${id}: ${err.message}`);
    }
  };

  // Function to add a new result
  const addResult = async (newResult) => {
    try {
      const response = await axios.post('http://localhost:3001/api/results', newResult);
      setResults([...results, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  // Function to update a result
  const updateResult = async (updatedResult) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/results/${updatedResult.id}`, updatedResult);
      setResults(results.map(result => (result.id === updatedResult.id ? response.data : result)));
    } catch (err) {
      setError(err);
    }
  };

  // Function to edit a result
  const editResult = async (editedResult) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/results/${editedResult.id}`, editedResult);
      setResults(results.map(result => (result.id === editedResult.id ? response.data : result)));
    } catch (err) {
      setError(err);
    }
  };

  return {
    results,
    loading,
    error,
    resultsById,
    fetchResultsByStudentId,
    addResult,
    updateResult,
    editResult,  // Add this function to the returned object
    // ... Other functions as needed
  };
};

export default useFetchResults;
