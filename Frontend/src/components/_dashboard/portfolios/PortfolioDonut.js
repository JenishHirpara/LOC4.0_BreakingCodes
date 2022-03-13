import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  Math.round((10 * 10000) / 30) / 100,
  Math.round((10 * 10000) / 30) / 100,
  Math.round((10 * 10000) / 30) / 100
];

export default function ChartDonut(props) {
  const theme = useTheme();
  const { data } = props;
  const companies = data.map((company) => company.companyName);
  const weights = data.map((company) => parseInt(company.weight, 10));

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.primary.lighter, theme.palette.primary.main, theme.palette.primary.darker],
    labels: companies,
    // labels: ['Environment', 'Social', 'Governance'],
    stroke: { show: false },
    legend: { horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '90%' } } }
  });

  // const data = weights;

  return <ReactApexChart type="donut" series={weights} options={chartOptions} width={400} />;
}
