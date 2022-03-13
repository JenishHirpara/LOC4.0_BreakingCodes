import { orderBy } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
// material
import {
  Box,
  Grid,
  Card,
  Button,
  Container,
  Typography,
  LinearProgress,
  CardContent,
  FormControlLabel,
  Switch,
  CardHeader,
  TextField,
  Chip
} from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getPostsInitial, getMorePosts } from '../../redux/slices/blog';
// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AppLinks, ChartDonut, CompanyTimeline, Block, NewsTable } from '../../components/_dashboard/companies';
import SortingSelecting from '../../components/_dashboard/companies/comparative-table';
import { ChartArea } from '../../components/_dashboard/general-home';
import AuthGuard from '../../guards/AuthGuard';
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

//
import { COMPANY_DATA, DASHBOARD_COMPANY_DATA } from '../../data/data';
import LoadingScreen from '../../components/LoadingScreen';

// import axios from '../../axios';
import axios from 'axios'

// ----------------------------------------------------------------------

// --------------------------------------------------------

export default function CompaniesView() {
  const { themeStretch } = useSettings();
  const { code } = useParams();
  const [data, setData] = useState({});
  const [envData, setEnvData] = useState({});
  const [socData, setSocData] = useState({});
  const [govData, setGovData] = useState({});
  const [dense, setDense] = useState(false);

  // const company = COMPANY_DATA['bmw-group'];

  // console.log(COMPANY_DATA);
  // console.log(company);
  // const data = DASHBOARD_COMPANY_DATA;

  // const envData = data['esg-score'].children[0];
  // const socData = data['esg-score'].children[2];
  // const govData = data['esg-score'].children[1];

  function capitalize(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i += 1) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
  }


  const chartData = {
    '622d000ab930f285fc749b21': {
      singleData: [{ name: 'Sales Data', data: [9, 10, 9, 8, 7, 5, 9, 6, 15, 12, 10, 8, 7] }],
      multiData: [
        { name: '75th Percentile', data: [10, 12, 11, 9, 8, 8, 7, 9, 9] },
        { name: 'Median Line', data: [8, 9, 10, 8, 7, 5, 6, 7, 8] },
        { name: '25th Percentile', data: [6, 6, 7, 6, 4, 4, 5, 6, 7] }
      ],
      CHART_DATA: [51, 23, 45]

    },
    '622d0018b930f285fc749b23': {
      singleData: [{ name: 'Sales Data', data: [15, 12, 14, 16, 18, 14, 12, 11, 10, 15, 12, 14, 18] }],
      multiData: [
        { name: '75th Percentile', data: [19, 15, 18, 18, 20, 17, 18, 19, 20, 22] },
        { name: 'Median Line', data: [18, 14, 16, 17, 19, 16, 17, 18, 19, 20] },
        { name: '25th Percentile', data: [15, 10, 12, 14, 12, 14, 15, 12, 14, 17] }
      ],
      CHART_DATA: [66, 33]

    },
    '622d0025b930f285fc749b25': {
      singleData: [{ name: 'Sales Data', data: [5, 6, 8, 7, 9, 5, 7, 6, 2, 7, 8, 9] }],
      multiData: [
        { name: '75th Percentile', data: [11, 13, 15, 16, 15, 13, 12, 14, 10, 11] },
        { name: 'Median Line', data: [9, 10, 12, 11, 13, 11, 10, 12, 7, 6] },
        { name: '25th Percentile', data: [6, 7, 4, 5, 2, 4, 6, 5, 6, 5] }
      ],
      CHART_DATA: [25, 40, 35]

    }
  }
  const [placed, setPlaced] = useState(false)

  const reOrder = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      console.log('hello')
      const res = await axios.post(`http://localhost:8020/api/orders/create/${code}`, { hello: 'f' }, config)
      console.log(res.data)

      if (res.data) {
        setPlaced(true)
        setTimeout(() => {
          setPlaced(false)
        }, 3000)
      }



    } catch (error) {
      console.log(error)
    }
  }

  const labelData = {
    '622d000ab930f285fc749b21': ['oreo', 'gems', 'diarymilk'],
    '622d0018b930f285fc749b23': ['masala munch', 'chilli chatpata'],
    '622d0025b930f285fc749b25': ['cream and onion', 'magic masala', 'sweet chilli'],
  }

  // useEffect(() => {
  //   const getCompanyData = async (uuid) => {
  //     const url = `/company/data/${uuid}`;
  //     const response = await axios.get(url);
  //     setData(response.data.data);
  //     setEnvData(response.data.data['esg-score'].children[0]);
  //     setSocData(response.data.data['esg-score'].children[2]);
  //     setGovData(response.data.data['esg-score'].children[1]);
  //   };

  //   getCompanyData(code);
  // }, [code]);

  const getRisk = (score) => {
    if (score < 4) return 'High';
    if (score < 8) return 'Medium';
    return 'Low';
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  return (
    <>
      <Page title="TheSMC | Analytics">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Analytics"
            links={[
              { name: 'Home', href: PATH_DASHBOARD.root },
              { name: 'Inventory', href: PATH_DASHBOARD.general.companies },
              { name: 'View' }
            ]}
          />
          <Grid padding={3} spacing={3}>
            <Grid padding={3} spacing={3}>
              <Card>
                <ChartArea data={chartData[code].singleData} />
              </Card>
            </Grid>
            <Grid>
              <Card>
                <ChartArea data={chartData[code].multiData} />
              </Card>
            </Grid>
          </Grid>
          <Grid padding={3} spacing={3}>
            <AnalyticsCurrentVisits data={chartData[code].CHART_DATA} labels={labelData[code]} />
          </Grid>
          <Grid padding={2} spacing={2}>
            <Card padding={3} spacing={2}>
              <FormControlLabel
                style={{ margin: '20px 0px 20px 20px' }}
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Auto Re-Order"
              />

              <Typography padding={1} spacing={2} style={{ marginLeft: '20px' }} variant="h3">
                Inventory Restock in: 16 days
              </Typography>
              <Typography padding={1} style={{ marginLeft: '20px' }} variant="h5">
                Last restocked on: 1st March, 2022.
              </Typography>
              <Button
                style={{ marginLeft: '25px', marginBottom: '35px', width: '150px', marginTop: '15px' }}
                variant="contained"
                onClick={reOrder}
              >
                Re-Order
              </Button>
              {placed && <Typography padding={1} style={{ marginLeft: '20px' }} variant="h6">
                Your order is successfully placed!
              </Typography>}
            </Card>
          </Grid>
        </Container>
      </Page>
    </>
  );
}
