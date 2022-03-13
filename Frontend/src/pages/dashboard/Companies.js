// import { orderBy } from 'lodash';
// import { Icon } from '@iconify/react';
// import plusFill from '@iconify/icons-eva/plus-fill';
// import { Link as RouterLink } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
// material
import { Grid, Card, Button, Container, Typography } from '@mui/material';
// redux
// import { useDispatch, useSelector } from '../../redux/store';
// import { getPostsInitial, getMorePosts } from '../../redux/slices/blog';
// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AppLinks } from '../../components/_dashboard/companies';
import SortingSelecting from '../../components/_dashboard/companies/sorting-selecting';
import LoadingScreen from '../../components/LoadingScreen';
import axios from '../../axios';
// ----------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getAllCompanies = async () => {
      const url = '/company/list';
      const response = await axios.get(url);
      setCompanies(response.data.data);
    };
    getAllCompanies();
  }, []);

  return (
    <>
      {companies.length === 0 ? (
        <LoadingScreen />
      ) : (
        <Page title="TheSMC | Companies">
          {console.log(companies)}
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <HeaderBreadcrumbs
              heading="Companies"
              links={[{ name: 'Home', href: PATH_DASHBOARD.root }, { name: 'Companies List' }]}
            />
            <Grid container spacing={3}>
              <AppLinks />
            </Grid>
            <br />
            <br />
            <br />
            <Grid>
              <Typography variant="h5">List of Companies</Typography>
              <Typography variant="subtitle2">Complete of list of companies currently being tracked</Typography>
            </Grid>
            <br />
            <Grid>
              <Card>
                <SortingSelecting data={companies} />
              </Card>
            </Grid>
          </Container>
        </Page>
      )}
    </>
  );
}
