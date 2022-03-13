import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

export default function ChartArea(props) {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      type: 'category',
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    tooltip: { x: { format: 'score:' }, marker: { show: false } }
  });

  const data = [
    { name: 'company standard scores', data: props.data },
    { name: 'company portfolio scores', data: props.portfolioScoreData }
  ];

  // return <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={320} />;
  return <ReactApexChart type="area" series={data} options={chartOptions} height={320} />;
}
