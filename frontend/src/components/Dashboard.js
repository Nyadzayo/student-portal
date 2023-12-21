// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { Grid,Button, Sidebar, Menu, Segment ,Icon, Header,Image} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StudentList from './StudentList';
import axios from 'axios';
const Home = () => <div>Home Page</div>;
const Students = () => <div>Students Page</div>;
const Teacher = () => <div>Teacher Page</div>;
const Course = () => <div>Course Page</div>;
const HorizontalSidebar = ({ visible }) => (
    <Sidebar as={Segment} visible={visible}>
      <Header as='h3'>New Content Awaits</Header>
      <Image src='/images/wireframe/media-paragraph.png' />
    </Sidebar>
  );
  
  const VerticalSidebar = ({ visible }) => (
    <Sidebar
      as='div'
      visible={visible}
      icon='labeled'
      inverted
      vertical
      width='thin'
    style={{ height: '100vh', overflowY: 'auto' }}
    >
      <Menu vertical inverted>
      <Menu.Item as={Link} to="/">
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/dashboard">
        <Icon name='users' />
        Students
      </Menu.Item>
      <Menu.Item as={Link} to="/teacher">
        <Icon name='user' />
        Teacher
      </Menu.Item>
      <Menu.Item as={Link} to="/course">
        <Icon name='book' />
        Course
      </Menu.Item>
    </Menu>
    </Sidebar>
  );
  

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [visible, setVisible] = useState(false);
  

  useEffect(() => {
    // Fetch students from the API
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
  const toggleSidebar = () => {
    setVisible(!visible);
  };


  return (<div>
    dashboard notes here 
  </div>
  );
};


export default Dashboard;
