import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Menu, Segment, Icon, Header, Image } from 'semantic-ui-react';

const nav = [
  { text: "Home", link: "/", icon: "home" },
  { text: "Student", link: "/students", icon: "box" },
  { text: "Teacher", link: "/teachers", icon: "tv", active: true },
  { text: "Course", link: "/courses", icon: "user" },
  { text: "About", link: "/about", icon: "book" }
];

const Sidebar = ({ toggleBtn }) => {
  const navigate = useNavigate(); // Get the navigate function

  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className={`${toggleBtn ? "sidebar collapse" : "sidebar"}`} data-simplebar>
      <ul>
        {nav.map(item => (
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
