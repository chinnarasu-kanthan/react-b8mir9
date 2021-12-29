import React, {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import {  useSelector } from 'react-redux';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
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


export const data = {
  datasets: [
    {
      label: 'Blue dataset',
      data:[],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BubbleChart() {
  const [chart,setChart] = useState(data);
 
  const chartData = useSelector((state) => state.chartData);
  
  useEffect(() => {
   
    data  = {
      datasets: [
        {
          label: 'Blue dataset',
          data:Array.from(chartData.chartList[0].datasets[0].data, (s) => ({
            x: s,
            y: s,
            r:20
          
          })),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    setChart(chartData.chartList[0])
  }, [data]);
  console.log(JSON.stringify(data)); 
  return <Bubble options={options} data={data} />;
}
