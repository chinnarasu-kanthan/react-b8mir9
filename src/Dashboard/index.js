import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Header from '../Components/Header';
import LineChart from '../Components/Charts/LineChart';
import BarChart from '../Components/Charts/BarChart';
import PieChart from '../Components/Charts/PieChart';
import DonutChart from '../Components/Charts/DonutChart';
import StackedChart from '../Components/Charts/StackedChart';
import BubbleChart from '../Components/Charts/BubbleChart';
import { Api } from "../Api"
import { useDispatch, useSelector } from 'react-redux';
import ActionCreators from "../ActionCreators";



const Dashboard = () => {
  const dispatch = useDispatch();
  const char = Api;

useEffect(() => {
  ActionCreators.setChartData(dispatch,char);
}, [dispatch])
  return (
    <div>
      <Header />
      <Grid container spacing={12} sx={{ pl: 15,pr:15 }}>
        <Grid item xs={12} md={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart />
        </Grid>
        <Grid item sm={12} md={6}>
          <PieChart />
        </Grid>
        <Grid item sm={12} md={6}>
          <DonutChart />
        </Grid>
        <Grid item sm={12} md={6}>
          <StackedChart />
        </Grid>
        <Grid item sm={12} md={6}>
          <BubbleChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

