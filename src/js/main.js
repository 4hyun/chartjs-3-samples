import { renderBarLineComboChart } from './bar-line-combo-chart';
import { renderBubbleChart } from './bubble-chart';
import { renderPolarAreaChart } from './polar-area-chart';
import { renderRadarChart } from './radar-chart';
import { renderStackedBarChart } from './rounded-stacked-bar-chart';

const renderContexts = [
  document.getElementById('myChart-1'),
  document.getElementById('myChart-2'),
  document.getElementById('myChart-3'),
  document.getElementById('myChart-4'),
  document.getElementById('myChart-5'),
];

renderBubbleChart(renderContexts[0]);
renderBarLineComboChart(renderContexts[1]);
renderStackedBarChart(renderContexts[2]);
renderRadarChart(renderContexts[3]);
renderPolarAreaChart(renderContexts[4]);
