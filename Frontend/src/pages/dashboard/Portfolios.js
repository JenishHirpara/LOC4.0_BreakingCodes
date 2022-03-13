import { orderBy } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
// material
import {
  Box,
  Grid,
  Skeleton,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getPostsInitial, getMorePosts } from '../../redux/slices/blog';
// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AppLinks, PortfolioTimeline } from '../../components/_dashboard/portfolios';
import SortingSelecting from '../../components/_dashboard/portfolios/sorting-selecting';
import LoadingScreen from '../../components/LoadingScreen';
import axios from '../../axios';
import { PURCHASED_DATA } from '../../data/data';

// ----------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getDashboardData = async () => {
      const response = await axios.get('https://loc-breaking-codes.herokuapp.com/api/orders/');
      console.log(response.data);
      setData(response.data);
    };
    getDashboardData();
  }, []);


  return (
    <>
      <Page title="The SCM | Orders">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Orders"
            links={[{ name: 'Home', href: PATH_DASHBOARD.root }, { name: 'Orders List' }]}
          />
          <Grid Container>
            <Grid xs={12}>
              <SortingSelecting data={data} />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
}
