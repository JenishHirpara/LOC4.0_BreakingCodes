// material
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { AppWelcome, AppLinks } from '../../components/_dashboard/general-home';

// ----------------------------------------------------------------------

export default function GeneralHome() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();

  return (
    <Page title="TheSMC | Home">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppWelcome displayName={user.displayName} />
          </Grid>

          <AppLinks />
          {/* <Grid item xs={12} md={12}>
            <AppCompaniesView />
          </Grid> */}

          {/* <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid> */}
          {/* 
          <Grid item xs={12} md={4}>
            <AppTotalActiveUsers />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppTotalInstalled />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppTotalDownloads />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidgets1 item md={6}/>
              <AppWidgets2 item md={6}/>
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
