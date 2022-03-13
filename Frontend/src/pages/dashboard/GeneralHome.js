import { useEffect, useState, useRef } from 'react';
// material
import { Container, Grid, Stack, Card, CardHeader, CardContent } from '@mui/material';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  AppWelcome,
  AppLinks,
  ChartArea,
  DashboardCompanyCount,
  DashboardPortfolioCount,
  DashboardSimulationCount,
  DashboardTemplateCount,
  SectorChart,
  NewsTable,
  ClusterMap
} from '../../components/_dashboard/general-home';
import SortingSelecting from '../../components/_dashboard/general-home/comparative-table';
import SortingSelecting2 from '../../components/_dashboard/general-home/sorting-selecting';
import LoadingScreen from '../../components/LoadingScreen';

import { AnalyticsCurrentSubject } from '../../components/_dashboard/general-analytics';

import { DASHBOARD_DATA, INVENTORY_DATA } from '../../data/data';
import axios from '../../axios';

// ----------------------------------------------------------------------

export default function GeneralHome() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const getDashboardData = async () => {
    const response = await axios.get('https://loc-breaking-codes.herokuapp.com/api/inventory');
    console.log(response.data);
    setData(response.data);
  };


  useEffect(() => {
    getDashboardData();
  }, []);
  // const invData = INVENTORY_DATA;
  setTimeout(getDashboardData, 5000);


  return (
    <>
      {data.length === 0 ? (
        <LoadingScreen />
      ) : (
        <Page title="TheSMC | Home">
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <AppWelcome displayName={user.displayName} />
              </Grid>

              <Grid item xs={12}>
                <Card>
                  {data.length !== 0 && < SortingSelecting2 data={data} />}
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </>
  );
}
