import React, {useState, useEffect} from 'react';
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
import   "chartjs-plugin-dragdata"
import { Bar } from 'react-chartjs-2';

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

const options = {
  tooltips: {enabled: true},
  
  legend:{
  display: false
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
};

export const data =   {
  "labels" : "",
  "datasets" : []
}


export default function BarChart() {
  const [chart,setChart] = useState(data);
  const chartData = useSelector((state) => state.chartData);
  
  useEffect(() => {
    setChart(chartData.chartList[0])
  }, [chart]);
  return (
    <Bar options={options} data={chart} />
  );
}
