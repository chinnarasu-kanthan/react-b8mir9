import React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../Components/Header';
import LineChart from '../Components/Charts/LineChart';
import BarChart from '../Components/Charts/BarChart';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
