// src/components/CourseModal.js

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

const CourseModal = ({ isOpen, onClose, onSubmit, courseToEdit }) => {
  const [courseDetails, setCourseDetails] = useState({
    id: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    if (courseToEdit) {
      setCourseDetails({
        id: courseToEdit.id,
        title: courseToEdit.title,
        description: courseToEdit.description
      });
    } else {
      setCourseDetails({
        title: '',
        description: ''
      });
    }
  }, [courseToEdit]);

  const handleSubmit = () => {
    onSubmit(courseDetails);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>{courseToEdit ? 'Edit Course' : 'Add Course'}</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input 
              value={courseDetails.title} 
              onChange={e => setCourseDetails(prev => ({ ...prev, title: e.target.value }))} 
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input 
              value={courseDetails.description} 
              onChange={e => setCourseDetails(prev => ({ ...prev, description: e.target.value }))} 
            />
          </Form.Field>
          {/* Add ID field if you want to display or edit the ID */}
          {/* <Form.Field>
            <label>ID</label>
            <input 
              value={courseDetails.id} 
              onChange={e => setCourseDetails(prev => ({ ...prev, id: e.target.value }))} 
            />
          </Form.Field> */}
          <Button type="submit">{courseToEdit ? 'Update' : 'Submit'}</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default CourseModal;
