import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: '#Companies1', data: [0, 0, 1, 2, 6, 2, 2, 3, 4, 0, 0] },
  { name: '#Companies2', data: [1, 2, 1, 2, 8, 2, 0, 3, 5, 2, 0] }
];

export default function ChartArea(props) {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      type: 'Timing',
      categories: ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm ', '5 pm', '6 pm', '7 pm', '8 pm']
    },
    tooltip: { x: { format: 'score:' }, marker: { show: false } }
  });

  // const data = [
  //   { name: 'current', data: props.data.current },
  //   { name: 'previous quarter', data: props.data['previous-quarter'] },
  //   { name: '2 previous quarter', data: props.data['2-previous-quarter'] }
  // ];

  const { data } = props;

  // return <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={320} />;
  return <ReactApexChart type="area" series={data} options={chartOptions} height={320} />;
}
