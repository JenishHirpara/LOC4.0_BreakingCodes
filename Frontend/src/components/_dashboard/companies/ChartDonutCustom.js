import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Link as RouterLink, useParams } from 'react-router-dom';
//
import BaseOptionChart from './BaseOptionChart';
import { COMPANY_DATA, TEMPLATE_DATA } from '../../../data/data';

// ----------------------------------------------------------------------

const CHART_DATA = [
  Math.round((10 * 10000) / 30) / 100,
  Math.round((10 * 10000) / 30) / 100,
  Math.round((10 * 10000) / 30) / 100
];

export default function ChartDonutCustom() {
  const theme = useTheme();
  const { code, id } = useParams();

  const template = TEMPLATE_DATA[id];
  // console.log(template);

  let total = 0;

  Object.values(template.template).forEach((x) => {
    total += x.weight;
    // console.log(x);
  });

  // console.log(total);

  // console.log(template.template[0].weight);

  const CHART_DATA = [
    Math.round((template.template[0].weight * 10000) / total) / 100,
    Math.round((template.template[1].weight * 10000) / total) / 100,
    Math.round((template.template[2].weight * 10000) / total) / 100
  ];

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.primary.lighter, theme.palette.primary.main, theme.palette.primary.darker],
    labels: ['Environment', 'Social', 'Governance'],
    stroke: { show: false },
    legend: { horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '90%' } } }
  });

  return <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} width={400} />;
}
