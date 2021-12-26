import React from 'react';
import "./style.css";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './Dashboard';
function App() {
  return (
    <React.Fragment>
      <Container className="container-dashboard" maxWidth="100%" sx={{ pl: 0,pr:0 }}>
        <Box sx={{ display: 'block' }}>
          <CssBaseline />
          <Dashboard />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
