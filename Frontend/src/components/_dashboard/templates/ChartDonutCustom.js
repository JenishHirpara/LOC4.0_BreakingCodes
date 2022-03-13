import { useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//
import BaseOptionChart from './BaseOptionChart';
import { COMPANY_DATA, TEMPLATE_DATA } from '../../../data/data';

// ----------------------------------------------------------------------

export default function ChartDonutCustom(props) {
  const theme = useTheme();
  const { code, id } = useParams();

  const templateCode = id !== undefined ? id : code;

  const template = TEMPLATE_DATA[templateCode];

  let total = 0;

  const esg = props.data;
  Object.values(esg).forEach((x) => {
    total += x;
  });

  const CHART_DATA = [
    (esg.env / total).toFixed(4) * 100,
    (esg.gov / total).toFixed(4) * 100,
    (esg.soc / total).toFixed(4) * 100
  ];

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.primary.lighter, theme.palette.primary.main, theme.palette.primary.darker],
    labels: ['Environment', 'Social', 'Governance'],
    stroke: { show: false },
    legend: { horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '90%' } } }
  });

  return (
    <div>
      <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} width={400} />
    </div>
  );
}
