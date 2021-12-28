import React, { useState, useEffect } from 'react';
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
import dragData from 'chartjs-plugin-dragdata';
import { Bar } from 'react-chartjs-2';

import { useDispatch, useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  dragData
);
export const data = {
  labels: '',
  datasets: [],
};

console.log(dragData + 'dragData');
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
    dragData: true,
    onDragStart: function (e) {
      console.log(e)
    },
    onDrag: function (e, datasetIndex, index, value) {
      console.log(datasetIndex, index, value)
    },
    onDragEnd: function (e, datasetIndex, index, value) {
      console.log(datasetIndex, index, value)
    }
  },
 
};
export default function BarChart() {
  const [chart, setChart] = useState(data);
  const chartData = useSelector((state) => state.chartData);

  useEffect(() => {
    setChart(chartData.chartList[0]);
  }, [chart]);
  return <Bar options={options} data={chart} />;
}
