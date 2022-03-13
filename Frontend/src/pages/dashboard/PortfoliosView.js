import { orderBy } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useRef, useState } from 'react';
import { object, PropTypes } from 'prop-types';
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
  LinearProgress,
  CardContent,
  TableContainer,
  TablePagination,
  CardHeader,
  Chip
} from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, { Source, Layer } from 'react-map-gl';

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
import {
  AppLinks,
  ChartDonut,
  ChartDonutPortfolio,
  PortfolioTimeline,
  PortfolioChartArea,
  SectorChart,
  Block,
  ClusterMap
} from '../../components/_dashboard/portfolios';
import Label from '../../components/Label';
import SortingSelecting from '../../components/_dashboard/portfolios/comparative-table';
import CompositionTable from '../../components/_dashboard/portfolios/composition-table';
//
import {
  COMPANY_DATA,
  PORTFOLIO_DATA,
  DASHBOARD_PORTFOLIO_DATA,
  TEMPLATE_DATA,
  ENVIRONMENT_DATA,
  SOCIAL_DATA,
  GOVERNENCE_DATA
} from '../../data/data';
import LoadingScreen from '../../components/LoadingScreen';
import axios from '../../axios';
// import { TEMPLATE_DATA, ENVIRONMENT_DATA, SOCIAL_DATA, GOVERNENCE_DATA } from '../../data/data';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvdXJ5YTk5IiwiYSI6ImNremUyamxsbjBkNnoycW5yYjllcWk1dHEifQ.bZJkViGLhqYviLVpnjI79Q';

// ----------------------------------------------------------------------

const TreeViewStyle = styled(TreeView)({
  height: 240,
  flexGrow: 1,
  maxWidth: 400
});

// -----------------------------------------------------------

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const returnColor = (score) => {
  if (score > 7.5) return 'success';
  if (score < 3.5) return 'error';
  return 'warning';
};

function StyledTreeItem(props) {
  const { bgColor, color, labelInfo, labelText, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          {/* <Chip label={labelInfo} size="small" color={returnColor(parseInt(labelInfo, 10))} /> */}
          <Label color={returnColor(parseInt(labelInfo, 10))} variant="ghost">
            {labelInfo}
          </Label>
          {/* <Chip label={labelInfo} ghost size="small" color={returnColor(parseInt(labelInfo, 10))} /> */}
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};

// ---------------------------

export default function CompaniesView() {
  const { themeStretch } = useSettings();
  const { code } = useParams();
  const [data, setData] = useState({});
  const [envData, setEnvData] = useState({});
  const [socData, setSocData] = useState({});
  const [govData, setGovData] = useState({});

  // console.log(code);
  // console.log(id);

  // const data = DASHBOARD_PORTFOLIO_DATA;

  // console.log(COMPANY_DATA);

  // let esgScore = 0;
  // let eScore = 0;
  // let sScore = 0;
  // let gScore = 0;
  // let esgRisk = '';
  // let eRisk = '';
  // let gRisk = '';
  // let sRisk = '';
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

  useEffect(() => {
    const getPortfolioData = async (uuid) => {
      const url = `/portfolio/data/${uuid}`;
      const response = await axios.get(url);
      setData(response.data.data);
      setEnvData(response.data.data['esg-score'].children[0]);
      setSocData(response.data.data['esg-score'].children[2]);
      setGovData(response.data.data['esg-score'].children[1]);
    };

    getPortfolioData(code);
  }, [code]);

  const getRisk = (score) => {
    if (score < 4) return 'High';
    if (score < 8) return 'Medium';
    return 'Low';
  };

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <LoadingScreen />
      ) : (
        <Page title="TheSMC | Portfolios">
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <HeaderBreadcrumbs
              heading="Portfolios"
              links={[
                { name: 'Home', href: PATH_DASHBOARD.root },
                { name: 'Portfolios', href: PATH_DASHBOARD.general.portfolios },
                { name: 'View' }
              ]}
            />
            <Grid container spacing={3}>
              <AppLinks />
              <Grid item xs={12} key="blank">
                &nbsp;
              </Grid>
              <Grid item xs={12} key="header">
                <Typography variant="h5">Portfolio View</Typography>
                <Typography variant="subtitle2">esgwise score details of the selected portfolio</Typography>
              </Grid>
              <Grid item xs={12} key="name">
                <Card dir="ltr" sx={{ p: 3 }}>
                  <Grid container>
                    <Grid item xs={12} key="Companyname">
                      <Typography variant="h3">{data['portfolio-name']}</Typography>
                    </Grid>
                    <Grid item xs={12} key="identifier">
                      <Typography variant="subtitle1" sx={{ color: 'text.disabled' }}>
                        {`Portfolio Description: ${data['portfolio-description']}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} key="main-score1">
                <Card>
                  <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="h5">ESG Score</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize="96px" sx={{ color: 'text.primary' }} align="center">
                          {/* {data['esg-score'].score} */}
                          {data['esg-score'].score}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize="32px" sx={{ color: 'text.primary' }}>
                          {getRisk(data['esg-score'].score)}
                          <br />
                          Risk
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress
                          variant="determinate"
                          value={data['esg-score'].score * 10}
                          color={
                            (data['esg-score'].score > 7.5 && 'success') ||
                            (data['esg-score'].score < 3.5 && 'error') ||
                            'warning'
                          }
                          sx={{ height: 12, bgcolor: 'grey.50016' }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} key="main-score2">
                <Card>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Typography variant="h6">ESG Score</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="30px" sx={{ color: 'text.primary' }} align="center">
                              {data['esg-score'].score}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="14px" sx={{ color: 'text.primary' }}>
                              {getRisk(data['esg-score'].score)}
                              <br />
                              Risk
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress
                              variant="determinate"
                              value={data['esg-score'].score * 10}
                              color={
                                (data['esg-score'].score > 7.5 && 'success') ||
                                (data['esg-score'].score < 3.5 && 'error') ||
                                'warning'
                              }
                              sx={{ height: 8, bgcolor: 'grey.50016' }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Typography variant="h6">Environment Score</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="30px" sx={{ color: 'text.primary' }} align="center">
                              {data['esg-score'].children[0]['environment-score'].score}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="14px" sx={{ color: 'text.primary' }}>
                              {getRisk(data['esg-score'].children[0]['environment-score'].score)}
                              <br />
                              Risk
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress
                              variant="determinate"
                              value={data['esg-score'].children[0]['environment-score'].score * 10}
                              color={
                                (data['esg-score'].children[0]['environment-score'].score > 7.5 && 'success') ||
                                (data['esg-score'].children[0]['environment-score'].score < 3.5 && 'error') ||
                                'warning'
                              }
                              sx={{ height: 8, bgcolor: 'grey.50016' }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Typography variant="h6">Social Score</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="30px" sx={{ color: 'text.primary' }} align="center">
                              {data['esg-score'].children[2]['social-score'].score}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="14px" sx={{ color: 'text.primary' }}>
                              {getRisk(data['esg-score'].children[2]['social-score'].score)}
                              <br />
                              Risk
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress
                              variant="determinate"
                              value={data['esg-score'].children[2]['social-score'].score * 10}
                              color={
                                (data['esg-score'].children[2]['social-score'].score > 7.5 && 'success') ||
                                (data['esg-score'].children[2]['social-score'].score < 3.5 && 'error') ||
                                'warning'
                              }
                              sx={{ height: 8, bgcolor: 'grey.50016' }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Typography variant="h6">Governance Score</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="30px" sx={{ color: 'text.primary' }} align="center">
                              {data['esg-score'].children[1]['governance-score'].score}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography fontSize="14px" sx={{ color: 'text.primary' }}>
                              {getRisk(data['esg-score'].children[1]['governance-score'].score)}
                              <br />
                              Risk
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress
                              variant="determinate"
                              value={data['esg-score'].children[1]['governance-score'].score * 10}
                              color={
                                (data['esg-score'].children[1]['governance-score'].score > 7.5 && 'success') ||
                                (data['esg-score'].children[1]['governance-score'].score < 3.5 && 'error') ||
                                'warning'
                              }
                              sx={{ height: 8, bgcolor: 'grey.50016' }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} key="donut1">
                <Card dir="ltr">
                  <CardHeader title="ESG Score Composition" />
                  <CardContent
                    sx={{
                      height: 420,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ChartDonut />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} key="donut2">
                <Card dir="ltr">
                  <SortingSelecting
                    data={[...data['country-data'], ...data['sector-data']]}
                    countryData={data['country-data']}
                    sectorData={data['sector-data']}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={8} key="donut2">
                <Card dir="ltr">
                  {/* <MapCluster /> */}
                  <ClusterMap data={data['country-data']} />
                </Card>
              </Grid>
              <Grid item xs={12} md={4} key="donut1">
                <Card dir="ltr">
                  <PortfolioTimeline data={data['historical-data']} />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card dir="ltr">
                  <CardHeader title="Portfolio Company Count by Score" />
                  <CardContent>
                    <PortfolioChartArea
                      data={data['histogram-data']}
                      portfolioScoreData={data['company-portfolio-score']}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} key="donut2">
                <Card dir="ltr">
                  <CompositionTable data={data['portfolio-company']} />
                </Card>
              </Grid>
              <Grid item xs={12} md={4} key="donut1">
                <Card dir="ltr">
                  <SectorChart data={data['sector-data']} />
                </Card>
              </Grid>
              <Grid item xs={12} md={4} key="e-Component">
                <Block title="Environment Component" sx={{ overflow: 'auto', p: 3 }}>
                  <TreeViewStyle
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    defaultEndIcon={null}
                  >
                    {Object.keys(envData).map((x) => (
                      <StyledTreeItem
                        nodeId={x}
                        labelText={capitalize(x.replace(/-/g, ' '))}
                        key={x}
                        labelInfo={envData[x].score}
                        color="#000"
                        bgColor="#e8f0fe"
                      >
                        {Object.keys(envData[x].children[0]).map((y) => (
                          <StyledTreeItem
                            nodeId={y}
                            labelText={capitalize(y.replace(/-/g, ' '))}
                            key={y}
                            labelInfo={envData[x].children[0][y].score}
                            color="#000"
                            bgColor="#e8f0fe"
                          >
                            {Object.keys(envData[x].children[0][y].children[0]).map((z) => (
                              <StyledTreeItem
                                nodeId={z}
                                labelText={capitalize(z.replace(/-/g, ' '))}
                                key={z}
                                labelInfo={envData[x].children[0][y].children[0][z].score}
                                color="#1a73e8"
                                bgColor="#e8f0fe"
                              />
                            ))}
                          </StyledTreeItem>
                        ))}
                      </StyledTreeItem>
                    ))}
                  </TreeViewStyle>
                </Block>
              </Grid>

              <Grid item xs={12} md={4} key="s-Component">
                <Block title="Social Component" sx={{ overflow: 'auto', p: 3 }}>
                  <TreeViewStyle
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    defaultEndIcon={null}
                  >
                    {Object.keys(socData).map((x) => (
                      <StyledTreeItem
                        nodeId={x}
                        labelText={capitalize(x.replace(/-/g, ' '))}
                        key={x}
                        labelInfo={socData[x].score}
                        color="#000"
                        bgColor="#e8f0fe"
                      >
                        {Object.keys(socData[x].children[0]).map((y) => (
                          <StyledTreeItem
                            nodeId={y}
                            labelText={capitalize(y.replace(/-/g, ' '))}
                            key={y}
                            labelInfo={socData[x].children[0][y].score}
                            color="#000"
                            bgColor="#e8f0fe"
                          >
                            {Object.keys(socData[x].children[0][y].children[0]).map((z) => (
                              <StyledTreeItem
                                nodeId={z}
                                labelText={capitalize(z.replace(/-/g, ' '))}
                                key={z}
                                labelInfo={socData[x].children[0][y].children[0][z].score}
                                color="#1a73e8"
                                bgColor="#e8f0fe"
                              />
                            ))}
                          </StyledTreeItem>
                        ))}
                      </StyledTreeItem>
                    ))}
                  </TreeViewStyle>
                </Block>
              </Grid>

              <Grid item xs={12} md={4} key="g-Component">
                <Block title="Governence Component" sx={{ overflow: 'auto', p: 3 }}>
                  <TreeViewStyle
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    defaultEndIcon={null}
                  >
                    {Object.keys(govData).map((x) => (
                      <StyledTreeItem
                        nodeId={x}
                        labelText={capitalize(x.replace(/-/g, ' '))}
                        key={x}
                        labelInfo={govData[x].score}
                        color="#000"
                        bgColor="#e8f0fe"
                      >
                        {Object.keys(govData[x].children[0]).map((y) => (
                          <StyledTreeItem
                            nodeId={y}
                            labelText={capitalize(y.replace(/-/g, ' '))}
                            key={y}
                            labelInfo={govData[x].children[0][y].score}
                            color="#000"
                            bgColor="#e8f0fe"
                          >
                            {Object.keys(govData[x].children[0][y].children[0]).map((z) => (
                              <StyledTreeItem
                                nodeId={z}
                                labelText={capitalize(z.replace(/-/g, ' '))}
                                key={z}
                                labelInfo={govData[x].children[0][y].children[0][z].score}
                                color="#1a73e8"
                                bgColor="#e8f0fe"
                              />
                            ))}
                          </StyledTreeItem>
                        ))}
                      </StyledTreeItem>
                    ))}
                  </TreeViewStyle>
                </Block>
              </Grid>
              <Grid item>
                <Button variant="contained" disabled style={{ marginRight: '20px' }}>
                  Archives
                </Button>
                <Button variant="contained" disabled>
                  Data Files
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </>
  );
}
