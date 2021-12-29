import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {  useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: "",
  datasets: [],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Pie Chart',
    },
    dragData: false,
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

export default function PieChart() {
  const [chart,setChart] = useState(data);
  const chartData = useSelector((state) => state.chartData);
  
  useEffect(() => {
    setChart(chartData.chartList[0])
  }, [chart]);
  return <Pie options={options} data={chart} />;
}
