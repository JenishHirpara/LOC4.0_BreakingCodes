// material
import { useCallback, useState } from 'react';


import { Box, Grid, Container, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  AnalyticsTasks,
  AnalyticsNewUsers,
  AnalyticsBugReports,
  AnalyticsItemOrders,
  AnalyticsNewsUpdate,
  AnalyticsWeeklySales,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates
} from '../../components/_dashboard/general-analytics';

import { ChartArea } from '../../components/_dashboard/general-home';

// ----------------------------------------------------------------------

export default function GeneralAnalytics() {
  const { themeStretch } = useSettings();
  const { code } = useParams();

  const chartData = {
    0: {
      singleData: [{ name: 'Sales', data: [2, 1, 1, 1, 2, 0, 3] }],
      multiData: [{ name: 'Shelf stock', data: [5, 4, 3, 2, 4, 1, 6] }]

    },
    1: {
      singleData: [{ name: 'Sales', data: [2, 0, 1, 3, 0, 0, 1] }],
      multiData: [{ name: 'Shelf stock', data: [6, 4, 5, 2, 1, 5, 0] }]

    },
    2: {
      singleData: [{ name: 'Sales', data: [8, 5, 3, 5, 6, 8, 9] }],
      multiData: [{ name: 'Shelf stock', data: [3, 2, 3, 1, 0, 0, 0] }]

    },
    3: {
      singleData: [{ name: 'Sales', data: [8, 5, 3, 5, 6, 8, 9] }],
      multiData: [{ name: 'Shelf stock', data: [3, 2, 3, 1, 0, 0, 0] }]

    }
  }

  return (
    <Page title="General: Analytics | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid padding={2} spacing={1}>
          <Typography variant="h3" style={{ marginBottom: '25px' }}>
            Sales Chart
          </Typography>
          <ChartArea data={chartData[code].singleData} />
        </Grid>
        <Grid padding={2} spacing={1}>
          <Typography variant="h3" style={{ marginBottom: '25px' }}>
            Shelf Quantity
          </Typography>
          <ChartArea data={chartData[code].multiData} />
        </Grid>
      </Container>
    </Page>
  );
}
