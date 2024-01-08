import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      const { token, user } = response.data; // Destructure token and user from response.data
      console.log({ token, user });
      
      // Store token and user information in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Store user as a string
      
      onLogin(token, user); // Trigger the onLogin callback with token and user
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login to your account
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email address"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="ui negative message">{error}</div>}

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
