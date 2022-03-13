// material
import { Box, Grid, Container, Typography } from '@mui/material';
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
  const singleData = [{ name: 'Forecast', data: [1, 2, 1, 2, 8, 2, 0, 3, 5, 2, 0] }];
  const multiData = [{ name: '#Forecast1', data: [2, 3, 5, 5, 9, 3, 2, 7, 6, 1, 2] }];
  return (
    <Page title="General: Analytics | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid padding={2} spacing={1}>
          <Typography variant="h3" style={{ marginBottom: '25px' }}>
            Chart 1
          </Typography>
          <ChartArea data={singleData} />
        </Grid>
        <Grid padding={2} spacing={1}>
          <Typography variant="h3" style={{ marginBottom: '25px' }}>
            Chart 2
          </Typography>
          <ChartArea data={multiData} />
        </Grid>
      </Container>
    </Page>
  );
}
