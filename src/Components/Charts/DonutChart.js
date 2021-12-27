import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: "",
  datasets: [],
};


export default function DonutChart() {
  const [chart,setChart] = useState(data);
  const chartData = useSelector((state) => state.chartData);
  
  useEffect(() => {
    setChart(chartData.chartList[0])
  }, [chart]);
  return <Doughnut data={chart} />;
}
