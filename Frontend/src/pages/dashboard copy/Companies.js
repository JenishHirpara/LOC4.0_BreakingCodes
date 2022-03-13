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
import { AppLinks } from '../../components/_dashboard/companies';
import SortingSelecting from '../../components/_dashboard/companies/sorting-selecting';

// ----------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();

  // let sum = 0;
  // const key = '3m-inc';
  // const y = COMPANY_DATA[key];
  // const z = {};
  // Object.defineProperty(z, key, { value: y });
  // z = Object.assign(z, y);
  // ABC
  // <br />
  // fads
  // <br />
  // {y.companyName}
  // <br />
  // {z[key].companyName}
  // <br />
  // {Math.round(sum / 3)}
  // <br />

  // Object.values(COMPANY_DATA).forEach((x) => (sum += x.score));
  // console.log(sum)

  return (
    <Page title="TheSMC | Companies">
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
            <SortingSelecting />
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
