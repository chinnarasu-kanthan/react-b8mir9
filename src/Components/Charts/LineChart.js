import React, {useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material//Box';
import { useDispatch, useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};



export default function LineChart() {
  const [chart,setChart] = [];
  const chartData = useSelector((state) => state.chartData);
  console.log(data);
  useEffect(() => {
  
    chart=chartData.chartList[0]
  }, [chart]);
  return (
    <Box sx={{ my: 4 }}>
      <Line options={options} data={chart} />
    </Box>
  );
}
