import React from 'react';
import { Modal, Header, List ,Button} from 'semantic-ui-react'; // Assuming you are using Semantic UI React

const ResultsModal = ({isOpen, onClose, results }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Modal open={isOpen} onClose={handleClose}> {/* Assuming you want the modal to always be open when this component is rendered */}
      <Modal.Header>Results Details</Modal.Header>
      <Modal.Content>
        {results.map((result) => (
          <div key={result.id}>
            <Header as="h3">{result.Test.title}</Header>
            <p>Score: {result.score}</p>
            <p>Total Questions: {result.total_questions}</p>
            <p>Correct Answers: {result.correct_answers}</p>
            <p>Incorrect Answers: {result.incorrect_answers}</p>
            
            {/* Display student details */}
            <Header as="h4">Student Details</Header>
            <List>
              <List.Item>Name: {result.Student.name}</List.Item>
              <List.Item>Email: {result.Student.email}</List.Item>
              {/* Add other student details if needed */}
            </List>
            
            {/* Display test details */}
            <Header as="h4">Test Details</Header>
            <List>
              <List.Item>Description: {result.Test.description}</List.Item>
              <List.Item>Time Limit: {result.Test.time_limit} minutes</List.Item>
              {/* Add other test details if needed */}
            </List>
          </div>
        ))}
      </Modal.Content>
      <Modal.Actions>
      <Button color='black' onClick={handleClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ResultsModal;
