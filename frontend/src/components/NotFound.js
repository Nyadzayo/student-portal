// src/components/NotFound.js

import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Not Found</h2>
      <p style={styles.message}>The page you are looking for does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  message: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default NotFound;
