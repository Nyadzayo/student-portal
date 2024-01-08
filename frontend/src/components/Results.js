// src/components/StudentResultsComponent.js

import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Modal } from 'semantic-ui-react';
import useFetchResults from '../hooks/useFetchResults';
import ResultsModal from './ResultsModal';

const Results = () => {
  const { results, loading, error } = useFetchResults();
  const { fetchResultsByStudentId } = useFetchResults();
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAndOpenModal = async (studentId) => {
    try {
      const results = await fetchResultsByStudentId(studentId);
      setSelectedResult(results);
      console.log(results);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };


  // Method to open modal and set selected result
  const openModal = (result) => {
    setSelectedResult(result);
    setIsModalOpen(true);
  };

  // Method to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResult(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching results: {error.message}</div>;
  }

  return (
    <div>
      <h1>Student Results</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Test</Table.HeaderCell>
            <Table.HeaderCell>Score</Table.HeaderCell>
            <Table.HeaderCell>Total Questions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {results.map((result) => (
            <Table.Row key={result.id}>
              <Table.Cell>{result.Student.name}</Table.Cell> {/* Assuming 'name' is the property in student details */}
              <Table.Cell>{result.Test.title}</Table.Cell>
              <Table.Cell>{result.score}</Table.Cell>
              <Table.Cell>{result.total_questions}</Table.Cell>
              <Table.Cell>
                    <Button onClick={() => fetchAndOpenModal(result.id)}>View</Button>
            </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
       {selectedResult && (
        <ResultsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          results={selectedResult}
        />
      )}
    </div>
  );
};

export default Results;
