// src/components/StudentModal.js

import React from 'react';
import { Modal, Form, Button, Dropdown } from 'semantic-ui-react';
import useFetchCourses from '../hooks/useFetchCourses';  // Import the hook

const StudentModal = ({ isOpen, onClose, studentData, onSave }) => {
  const { courses, loading } = useFetchCourses();  // Fetch courses using the hook
  const [selectedCourses, setSelectedCourses] = React.useState([]);

  // Convert the fetched courses to options for the Dropdown component
  const courseOptions = courses.map(course => ({
    key: course.id,
    text: course.title,
    value: course.id,
  }));

  const handleSave = () => {
    const updatedStudent = {
      ...studentData,
      courses: selectedCourses,
    };
    onSave(updatedStudent);
  };

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>{studentData ? 'Edit Student' : 'Add Student'}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input label="Name" placeholder="Enter name" defaultValue={studentData?.name || ''} />
          {/* Add other fields as needed */}

          {/* Multi-select for courses */}
          <Form.Field>
            <label>Courses</label>
            <Dropdown
              placeholder="Select courses"
              fluid
              multiple
              selection
              options={courseOptions}
              value={selectedCourses}
              onChange={(e, { value }) => setSelectedCourses(value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={onClose}>
          Cancel
        </Button>
        <Button
          content="Save"
          labelPosition='right'
          icon='checkmark'
          onClick={handleSave}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default StudentModal;
