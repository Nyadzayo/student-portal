// src/components/CardExampleCard.js

import React, { useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import useStudentActions from '../hooks/useStudentActions';
import FilterNavBar from './FilterNavBar';
import StudentModal from './StudentModal';  // Import the StudentModal component

const CardExampleCard = () => {
  const { students, loading, error, addStudent, editStudent, deleteStudent, addSubjectToStudent } = useStudentActions();
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  // This useEffect ensures that when 'students' changes (like on mount), we update 'filteredStudents' to display them all.
  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const handleSearch = (searchTerm) => {
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const handleOpenModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleSaveStudent = (studentData) => {
    if (selectedStudent) {
      editStudent({ id: selectedStudent.id, ...studentData });
    } else {
      addStudent(studentData);
    }
    handleCloseModal();
  };

  return (
    <div>
      <FilterNavBar onSearch={handleSearch} onAddStudent={() => setIsModalOpen(true)} />
      
      {/* StudentModal for adding/editing students */}
      <StudentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        studentData={selectedStudent} 
        onSave={handleSaveStudent} 
      />

      <Card.Group doubling stackable centered>
        {filteredStudents.map((student, index) => (
          <Card key={index}>
            {/* Your card rendering logic */}
            <Card.Content>
              <Card.Header>{student.name}</Card.Header>
              {/* ... other card content */}
            </Card.Content>

            {/* Edit Button */}
            <Button onClick={() => handleOpenModal(student)}>Edit</Button>
            {/* Add more buttons if needed, e.g., deleteStudent, addSubjectToStudent */}
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default CardExampleCard;
