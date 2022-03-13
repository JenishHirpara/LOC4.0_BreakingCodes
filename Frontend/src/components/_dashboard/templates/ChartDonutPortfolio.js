import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Link as RouterLink, useParams } from 'react-router-dom';
//
import BaseOptionChart from './BaseOptionChart';
import { COMPANY_DATA, PORTFOLIO_DATA } from '../../../data/data';

// ----------------------------------------------------------------------

export default function ChartDonutPortfolio() {
  const theme = useTheme();
  const { code, id } = useParams();

  const portfolio = PORTFOLIO_DATA[code];

  let CHART_DATA = [];
  let CHART_LABEL = [];

  Object.values(portfolio.portfolio).forEach((x) => {
    CHART_DATA = [...CHART_DATA, ...[x.weight]];
    CHART_LABEL = [...CHART_LABEL, ...[COMPANY_DATA[x.companyCode].companyName]];
    // console.log(x);
  });

  // const CHART_DATA = [
  //   Math.round((10 * 10000) / 30) / 100,
  //   Math.round((10 * 10000) / 30) / 100,
  //   Math.round((10 * 10000) / 30) / 100,
  //   Math.round((10 * 10000) / 30) / 100
  // ];

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.info.lighter,
      theme.palette.info.light,
      theme.palette.info.main,
      theme.palette.info.dark,
      theme.palette.info.darker
    ],
    labels: CHART_LABEL,
    stroke: { show: false },
    legend: { horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '90%' } } }
  });

  return <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} width={400} />;
}
