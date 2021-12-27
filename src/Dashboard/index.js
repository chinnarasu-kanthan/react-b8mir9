import React, { Suspense, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Api } from "../Api"
import { useDispatch, useSelector } from 'react-redux';
import ActionCreators from "../ActionCreators";
import Header from '../Components/Header';
const LineChart = React.lazy(() => import('../Components/Charts/LineChart'));const BarChart = React.lazy(() => import('../Components/Charts/BarChart'));const PieChart = React.lazy(() => import('../Components/Charts/PieChart'));const DonutChart = React.lazy(() => import('../Components/Charts/DonutChart'));
const StackedChart = React.lazy(() => import('../Components/Charts/StackedChart'));
const BubbleChart = React.lazy(() => import('../Components/Charts/BubbleChart'));

const Dashboard = () => {
  const dispatch = useDispatch();
  const char = Api;

useEffect(() => {
  ActionCreators.setChartData(dispatch,char);
}, [dispatch])
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Dashboard;

