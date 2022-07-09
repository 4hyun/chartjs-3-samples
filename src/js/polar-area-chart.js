import Chart from 'chart.js/auto';

const data = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132, 0.4)',
        'rgb(75, 192, 192, 0.4)',
        'rgb(255, 205, 86, 0.4)',
        'rgb(201, 203, 207, 0.4)',
        'rgb(54, 162, 235, 0.4)',
      ],
    },
  ],
};

const config = {
  type: 'polarArea',
  data,
  options: { scales: { r: { beginAtZero: true } } },
};

export const renderPolarAreaChart = ctx => new Chart(ctx, config);
