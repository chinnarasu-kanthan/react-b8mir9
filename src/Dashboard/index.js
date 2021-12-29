import React, { Suspense, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Api } from '../Api';
import { useDispatch } from 'react-redux';
import ActionCreators from '../ActionCreators';
import Header from '../Components/Header';
const LineChart = React.lazy(() => import('../Components/Charts/LineChart'));
const BarChart = React.lazy(() => import('../Components/Charts/BarChart'));
const PieChart = React.lazy(() => import('../Components/Charts/PieChart'));
const DonutChart = React.lazy(() => import('../Components/Charts/DonutChart'));
const StackedChart = React.lazy(() =>
  import('../Components/Charts/StackedChart')
);
const BubbleChart = React.lazy(() =>
  import('../Components/Charts/BubbleChart')
);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Item>
          <LineChart />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <BarChart />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <PieChart />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <DonutChart />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <StackedChart />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <BubbleChart />
        </Item>
      </Grid>
    </React.Fragment>
  );
}
const Dashboard = () => {
  const dispatch = useDispatch();
  const char = Api;

  useEffect(() => {
    ActionCreators.setChartData(dispatch, char);
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid container item spacing={2}>
              <FormRow />
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </div>
  );
};

export default Dashboard;
