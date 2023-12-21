// src/components/CourseComponent.js

import React, { useState } from 'react';
import { Table, Button,Dimmer, Loader } from 'semantic-ui-react';
import CourseModal from './CourseModal'; // Assuming you have created a CourseModal component
import useFetchCourses from '../hooks/useFetchCourses'; // Import the hook

const CourseComponent = () => {
  const { courses, loading, error, addCourse, editCourse, deleteCourse } = useFetchCourses();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState(null);
  const handleCourseSubmit = (courseData) => {
    if (courseToEdit) {
      editCourse(courseData);
    } else {
      addCourse(courseData);
    }
    setIsModalOpen(false);
  };

  const handleEditCourse = (course) => {
    setCourseToEdit(course);
    setIsModalOpen(true);
  };

  const handleDeleteCourse = (id) => {
    deleteCourse(id); // Assuming deleteCourse function is available in useFetchCourses
  };

  return (
    <div>
      <Button primary onClick={() => setIsModalOpen(true)}>Add Course</Button>
      
      {/* Modal for adding/editing course */}
      <CourseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCourseSubmit} 
        courseToEdit={courseToEdit} 
      />

      {/* Course Table */}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Subject Availability Time</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {courses.map(course => (
            <Table.Row key={course.id}>
              <Table.Cell>{course.id}</Table.Cell>
              <Table.Cell>{course.title}</Table.Cell>
              <Table.Cell>{course.description}</Table.Cell>
              <Table.Cell>{course.subjectAvailabilityTime || 'N/A'}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleEditCourse(course)}>Edit</Button>
                <Button onClick={() => handleDeleteCourse(course.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CourseComponent;
