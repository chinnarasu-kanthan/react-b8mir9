import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import faker from 'faker';

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
      alert();
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
      data: Array.from({ length: 50 }, () => ({
        x: [5],
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BubbleChart() {
  return <Bubble options={options} data={data} />;
}
