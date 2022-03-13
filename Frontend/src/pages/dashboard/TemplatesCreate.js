import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { PropTypes } from 'prop-types';
// material
import {
  Grid,
  Container,
  Stack,
  Button,
  TextField,
  Typography,
  Autocomplete,
  FormHelperText,
  Box,
  Card,
  CardHeader,
  CardContent,
  Switch,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Paper,
  Slider,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton, TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { TreeView, TreeItem } from '@mui/lab';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// utils
import { fData } from '../../utils/formatNumber';
import fakeRequest from '../../utils/fakeRequest';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AppLinks, TemplateDonut, Block } from '../../components/_dashboard/templates';
//
import { DASHBOARD_TEMPLATE_DATA } from '../../data/data';
import { UploadSingleFile } from '../../components/upload';
import axios from '../../axios';
import Label from '../../components/Label';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const TreeViewStyle = styled(TreeView)({
  height: 240,
  flexGrow: 1,
  maxWidth: 400
});

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

function StyledTreeItem(props) {
  const { bgColor, color, coloured, labelInfo, labelText, tooltipInfo, ...other } = props;
  const returnColor = (score) => {
    if (score > 7.5) return 'success';
    if (score < 3.5) return 'error';
    return 'warning';
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          {labelInfo && (
            <Tooltip arrow title={tooltipInfo} sx={{ color: 'blue' }}>
              <Typography>
                <Label color={coloured ? 'primary' : 'default'} variant="ghost">
                  {labelInfo}
                </Label>
              </Typography>
            </Tooltip>
          )}
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

// ----------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();
  const { enqueueSnackbar } = useSnackbar();

  const NewFormSchema = Yup.object().shape({
    templateName: Yup.string().required('Template name is required'),
    templateCode: Yup.string().required('Unique template code is required'),
    templateWeights: Yup.object()
      .shape({ env: Yup.number(), soc: Yup.number(), gov: Yup.number() })
      .required('Unique template code is required')
    // templateWeights: Yup.string().required('Template weights is required')
  });

  const formik = useFormik({
    initialValues: {
      templateName: '',
      templateCode: '',
      templateWeights: { env: 100, soc: 100, gov: 100 }
    },
    validationSchema: NewFormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log(values);
        const res = await axios.post('/template/create', values);
        console.log(res);
        // await fakeRequest(1500);
        resetForm();
        // handleClosePreview();
        setSubmitting(false);
        // enqueueSnackbar('Submitted for review', { variant: 'warning' });
        enqueueSnackbar('Submitted for review', { variant: 'success' });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        enqueueSnackbar('Some error occured', { variant: 'error' });
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('cover', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  const steps = ['Template name', 'Add weights'];
  // const cols = ['Company Name', 'Company Code', 'Weight', 'Percentage'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSlider = (evt) => {
    const { name, value } = evt.target;
    setFieldValue('templateWeights', { ...formik.values.templateWeights, [name]: value });
  };
  const data = DASHBOARD_TEMPLATE_DATA;
  const envData = data['esg-weights'].children[0];
  const socData = data['esg-weights'].children[2];
  const govData = data['esg-weights'].children[1];

  function capitalize(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i += 1) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
  }
  return (
    <Page title="TheSMC | Scoring Templates">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Scoring Templates"
          links={[
            { name: 'Home', href: PATH_DASHBOARD.root },
            { name: 'Templates', href: PATH_DASHBOARD.general.templates },
            { name: 'Create' }
          ]}
        />
        <Grid container spacing={3}>
          <AppLinks />
        </Grid>
        <br />
        <br />
        <br />
        <Grid>
          <Typography variant="h5">Save a template</Typography>
          <Typography variant="subtitle2">
            Provide the template name, code-identifier and weights for review and additon
          </Typography>
        </Grid>
        <br />
        <FormikProvider value={formik}>
          <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <Stepper activeStep={activeStep}>
                      {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                          <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                    {activeStep === 0 && (
                      <>
                        <TextField
                          fullWidth
                          label="Template Name"
                          {...getFieldProps('templateName')}
                          error={Boolean(touched.templateName && errors.templateName)}
                          helperText={touched.templateName && errors.templateName}
                        />

                        <TextField
                          fullWidth
                          // multiline
                          // minRows={3}
                          // maxRows={5}
                          label="Template Code"
                          {...getFieldProps('templateCode')}
                          error={Boolean(touched.templateCode && errors.templateCode)}
                          helperText={touched.templateCode && errors.templateCode}
                        />

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                          </Button>
                          <Box sx={{ flex: '1 1 auto' }} />
                          <Button
                            onClick={handleNext}
                            disabled={formik.values.portfolioName === '' || formik.values.portfolioCode === ''}
                          >
                            Next
                          </Button>
                        </Box>
                      </>
                    )}
                    {activeStep === 1 && (
                      <>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={4}>
                            <Card>
                              <CardHeader title="ESG Score Composition" />
                              <br />
                              <br />
                              {/* <br /> */}
                              <Typography sx={{ width: '80%', marginLeft: '10%' }}>Environment</Typography>
                              <Slider
                                sx={{ width: '80%', marginLeft: '10%' }}
                                size="small"
                                defaultValue={100}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                name="env"
                                onChange={handleSlider}
                              />
                              <Typography sx={{ width: '80%', marginLeft: '10%' }}>Social</Typography>
                              <Slider
                                sx={{ width: '80%', marginLeft: '10%' }}
                                size="small"
                                defaultValue={100}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                name="soc"
                                onChange={handleSlider}
                              />
                              <Typography sx={{ width: '80%', marginLeft: '10%' }}>Governance</Typography>
                              <Slider
                                sx={{ width: '80%', marginLeft: '10%' }}
                                size="small"
                                defaultValue={100}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                name="gov"
                                onChange={handleSlider}
                              />
                            </Card>
                          </Grid>
                          <Grid item xs={12} md={8}>
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
                                <TemplateDonut data={formik.values.templateWeights} />
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={4} key="e-Component">
                            <Block title="Environment Component - weight" sx={{ overflow: 'auto', p: 3 }}>
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
                                    tooltipInfo="default"
                                    labelInfo={formik.values.templateWeights.env}
                                    color="#000"
                                    bgColor="#e8f0fe"
                                    coloured
                                  >
                                    {Object.keys(envData[x].children[0]).map((y) => (
                                      <StyledTreeItem
                                        nodeId={y}
                                        labelText={capitalize(y.replace(/-/g, ' '))}
                                        key={y}
                                        tooltipInfo={envData[x]['children-weight-type']}
                                        labelInfo={envData[x].children[0][y].weight}
                                        color="#000"
                                        bgColor="#e8f0fe"
                                      >
                                        {Object.keys(envData[x].children[0][y].children[0]).map((z) => (
                                          <StyledTreeItem
                                            nodeId={z}
                                            labelText={capitalize(z.replace(/-/g, ' '))}
                                            key={z}
                                            tooltipInfo={envData[x].children[0][y]['children-weight-type']}
                                            labelInfo={envData[x].children[0][y].children[0][z].weight}
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
                            <Block title="Social Component - weight" sx={{ overflow: 'auto', p: 3 }}>
                              <TreeViewStyle
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                                defaultEndIcon={null}
                              >
                                {Object.keys(socData).map((x) => (
                                  <StyledTreeItem
                                    nodeId={x}
                                    labelText={capitalize(x.replace(/-/g, ' '))}
                                    tooltipInfo="default"
                                    key={x}
                                    labelInfo={formik.values.templateWeights.soc}
                                    color="#000"
                                    bgColor="#e8f0fe"
                                    coloured
                                  >
                                    {Object.keys(socData[x].children[0]).map((y) => (
                                      <StyledTreeItem
                                        nodeId={y}
                                        labelText={capitalize(y.replace(/-/g, ' '))}
                                        key={y}
                                        tooltipInfo={socData[x]['children-weight-type']}
                                        labelInfo={socData[x].children[0][y].weight}
                                        color="#000"
                                        bgColor="#e8f0fe"
                                      >
                                        {Object.keys(socData[x].children[0][y].children[0]).map((z) => (
                                          <StyledTreeItem
                                            nodeId={z}
                                            labelText={capitalize(z.replace(/-/g, ' '))}
                                            key={z}
                                            tooltipInfo={socData[x].children[0][y]['children-weight-type']}
                                            labelInfo={socData[x].children[0][y].children[0][z].weight}
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
                            <Block title="Governence Component - weight" sx={{ overflow: 'auto', p: 3 }}>
                              <TreeViewStyle
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                                defaultEndIcon={null}
                              >
                                {Object.keys(govData).map((x) => (
                                  <StyledTreeItem
                                    nodeId={x}
                                    labelText={capitalize(x.replace(/-/g, ' '))}
                                    tooltipInfo="default"
                                    key={x}
                                    labelInfo={formik.values.templateWeights.gov}
                                    // labelInfo={govData[x].weight}
                                    color="#000"
                                    bgColor="#e8f0fe"
                                    coloured
                                  >
                                    {Object.keys(govData[x].children[0]).map((y) => (
                                      <StyledTreeItem
                                        nodeId={y}
                                        labelText={capitalize(y.replace(/-/g, ' '))}
                                        key={y}
                                        tooltipInfo={govData[x]['children-weight-type']}
                                        labelInfo={govData[x].children[0][y].weight}
                                        color="#000"
                                        bgColor="#e8f0fe"
                                      >
                                        {Object.keys(govData[x].children[0][y].children[0]).map((z) => (
                                          <StyledTreeItem
                                            nodeId={z}
                                            labelText={capitalize(z.replace(/-/g, ' '))}
                                            key={z}
                                            tooltipInfo={govData[x].children[0][y]['children-weight-type']}
                                            labelInfo={govData[x].children[0][y].children[0][z].weight}
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
                        </Grid>

                        <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                          Submit
                        </LoadingButton>
                      </>
                    )}
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
}
