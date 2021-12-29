import React, {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {  useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Stacked Chart',
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
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      "data": [33, 53, 85, 41, 44, 65],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      "data": [33, 53, 85, 41, 44, 65],
      borderColor: 'white',
      borderWidth: 2,
    }
  ],
};

export default function StackedChart() {
  const [chart,setChart] = useState(data);
  const chartData = useSelector((state) => state.chartData);
  
  useEffect(() => {
    setChart(chartData.chartList[0])
  }, [chart]);
  return <Bar options={options} data={data} />;
}
