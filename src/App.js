import React from 'react';
import './style.css';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './Dashboard';
function App() {
  return (
    <React.Fragment>
      <Container className="container-dashboard" maxWidth="100%">
        <CssBaseline />
        <Dashboard />
      </Container>
    </React.Fragment>
  );
}

export default App;
