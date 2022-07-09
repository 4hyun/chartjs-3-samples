import Chart from 'chart.js/auto';
if (Chart) console.log('chart.js is loaded!');

//  setup data block
//  config block
//  init render block
const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray'];

const data = {
  labels: labels,
  datasets: [
    {
      type: 'bar',
      label: 'Bar Chart',
      data: [
        { x: 3, y: 12, r: 4 },
        { x: 6, y: 10, r: 8 },
        { x: 4.5, y: 3, r: 13 },
        { x: 1.5, y: 5, r: 4 },
        { x: 3.5, y: 2, r: 4 },
        { x: 3, y: 3, r: 4 },
      ],
      backgroundColor: [
        'rgba(255, 99, 132,1)',
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
      cutout: '90%',
      borderRadius: 5,
      hoverOffset: 10,
      order: 10,
    },
    {
      type: 'line',
      label: 'Line Chart',
      data: [
        { x: 13, y: 12, r: 4 },
        { x: 16, y: 10, r: 8 },
        { x: 14.5, y: 3, r: 13 },
        { x: 11.5, y: 5, r: 4 },
        { x: 13.5, y: 2, r: 4 },
        { x: 13, y: 3, r: 4 },
      ],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255,1)',
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
      cutout: '90%',
      borderRadius: 5,
      hoverOffset: 10,
      tension: 0.4,
      order: 1,
    },
  ],
};

const config = {
  // type: 'bar',
  data,
  options: {
    cutout: '90%',
    plugins: { tooltip: { yAlign: 'bottom' } },
  },
};

export const renderBarLineComboChart = ctx => new Chart(ctx, config);
