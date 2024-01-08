import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Menu, Segment, Icon, Header, Image } from 'semantic-ui-react';

const nav = [
  { text: "Home", link: "/", icon: "home" },
  { text: "Student", link: "/students", icon: "box" },
  { text: "Teacher", link: "/teachers", icon: "tv", active: true },
  { text: "Course", link: "/courses", icon: "user" },
  { text: "Results", link: "/results", icon: "book" },
  { text: "About", link: "/about", icon: "book" }
];

const Sidebar = ({ toggleBtn, userRole }) => {
  const navigate = useNavigate(); // Get the navigate function
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified path
  };

  // Filter the nav items based on userRole
  const filteredNav = user.role === 'student' ? [nav.find(item => item.link === '/')] : nav;

  return (
    <div className={`${toggleBtn ? "sidebar collapse" : "sidebar"}`} data-simplebar>
      <ul>
        {filteredNav.map(item => (
          <li key={item.text}>
            {/* Use onClick to navigate programmatically */}
            <a href={`${item.link}`} onClick={() => navigateTo(item.link)} className={item.active ? "active" : ""}>
              <span className="icon">
                <i className={`fas fa-${item.icon}`} />
              </span>
              <span className="title">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
