import React, { useEffect, useState } from 'react';
import { Container, Header, Card, Table } from 'semantic-ui-react';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [studentDetails, setStudentDetails] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
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

  useEffect(() => {
    if (user.role === 'student') {
      const fetchStudentById = async (studentId) => {
        try {
          const response = await axios.get(`http://localhost:3001/api/students/${studentId}`);
          setStudentDetails(response.data);
          const resultsResponse = await axios.get(`http://localhost:3001/api/results/${studentId}`);
          setResults(resultsResponse.data);
        } catch (error) {
          console.error('Error fetching student details or results:', error);
        }
      };
      fetchStudentById(user.id); // Assuming user.id is the student ID
    }
  }, [user]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format date as per the locale
  };


  return (
    <Container style={{ paddingTop: '20px', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      <Header as='h2'>Dashboard</Header>
      {user.role === 'admin' || user.role === 'teacher' ? (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              {/* Add more headers as needed */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {students.map((student, index) => (
              <Table.Row key={index}>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                {/* Display results in a cell if needed */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : user.role === 'student' && studentDetails ? (
        <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{studentDetails.name}</Card.Header>
            <Card.Meta>ID: {studentDetails.id}</Card.Meta>
            <Card.Description>
              {results.map((result, index) => (
                <div key={index}>
                  <strong>Test Title:</strong> {result.Test.title}<br />
                  <strong>Score:</strong> {result.score}<br />
                  <strong>Total Questions:</strong> {result.total_questions}<br />
                  <strong>Correct Answers:</strong> {result.correct_answers}<br />
                  <strong>Incorrect Answers:</strong> {result.incorrect_answers}<br />
                  <strong>Started At:</strong> {formatDate(result.started_at)}<br />
                  <strong>Finished At:</strong> {formatDate(result.finished_at)}<br />
                  <strong>Created At:</strong> {formatDate(result.created_at)}<br />
                  <strong>Updated At:</strong> {formatDate(result.updated_at)}<br />
                  <hr />
                </div>
              ))}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      ) : null}
    </Container>
  );
};

export default Dashboard;
