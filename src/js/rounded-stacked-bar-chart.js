import Chart from 'chart.js/auto';
import * as mockData from './mock/data-list';
if (Chart) console.log('chart.js is loaded!');

//  setup data block
//  config block
//  init render block
const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray'];

const mockDataChunked = mockData._chunk(mockData.withYOnly(), 6);

console.log('<<DEBUG>> mockDataChunked', mockDataChunked);

const data = {
  labels: labels,
  datasets: [
    {
      type: 'bar',
      label: 'First Dataset',
      data: mockDataChunked[0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        // 'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        // 'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)',
      ],
      borderRadius: 5,
      hoverOffset: 10,
    },
    {
      type: 'bar',
      label: 'Second Dataset',
      data: mockDataChunked[1],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        // 'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        // 'rgb(255, 99, 132)',
        // 'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)',
      ],
      borderRadius: 5,
      hoverOffset: 10,
    },
  ],
};

const config = {
  // type: 'bubble',
  data,
  options: { scales: { x: { stacked: true }, y: { stacked: true } } },
};

export const renderStackedBarChart = ctx => new Chart(ctx, config);
