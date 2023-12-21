// src/components/FilterNavBar.js

import React, { useState } from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const FilterNavBar = ({ onSearch, onAddStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Trigger the search action from parent component
  };

  return (
    <Menu secondary>
      <Menu.Item>
        <Input
          icon="search"
          placeholder="Search students..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary onClick={onAddStudent}>Add Student</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default FilterNavBar;
