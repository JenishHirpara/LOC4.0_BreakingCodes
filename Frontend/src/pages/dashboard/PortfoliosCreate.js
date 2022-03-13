import { useCallback, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
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
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// utils
// import { fData } from '../../utils/formatNumber';
import fakeRequest from '../../utils/fakeRequest';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AppLinks, PortfolioDonut } from '../../components/_dashboard/portfolios';
//
import { UploadSingleFile } from '../../components/upload';
//
import { COMPANY_DATA } from '../../data/data';
import axios from '../../axios';
import LoadingScreen from '../../components/LoadingScreen';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.heading1,
  padding: theme.spacing(1),
  textAlign: 'right'
  // color: theme.palette.text.secondary
}));

// ----------------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();
  const { enqueueSnackbar } = useSnackbar();

  const NewFormSchema = Yup.object().shape({
    portfolioName: Yup.string().required('Portfolio name is required'),
    portfolioCode: Yup.string().required('Unique portfolio code is required'),
    portfolioCompanies: Yup.array().required('Please add companies'),
    cover: Yup.object()
  });

  const formik = useFormik({
    initialValues: {
      portfolioName: '',
      portfolioCode: '',
      portfolioCompanies: [],
      cover: {}
    },
    validationSchema: NewFormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log(values);
        const res = await axios('/portfolio/create', values);
        console.log(res);
        // await fakeRequest(1500);
        resetForm();
        // handleClosePreview();
        setSubmitting(false);
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
        const reader = new FileReader();
        if (file.path.slice(-4) === '.csv') {
          reader.onload = (e) => {
            const parseData = [];
            const newLinebrk = reader.result.split('\n');
            for (let i = 1; i < newLinebrk.length - 1; i += 1) {
              parseData.push(newLinebrk[i].split(','));
            }
            const comp = [];
            parseData.forEach((company) => {
              const obj = {
                companyName: company[0],
                companyCode: company[1],
                publicIdentifier: company[1],
                weight: company[2].trim('\r')
              };
              comp.push(obj);
            });
            setFieldValue('portfolioCompanies', comp);
          };
          reader.readAsText(file);
        } else {
          reader.onload = (evt) => {
            // evt = on_file_select event
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            /* Update state */
            const parseData = [];
            const newLinebrk = data.split('\n');
            for (let i = 1; i < newLinebrk.length - 1; i += 1) {
              parseData.push(newLinebrk[i].split(','));
            }
            const comp = [];
            parseData.forEach((company) => {
              const obj = {
                companyName: company[0],
                companyCode: company[1],
                publicIdentifier: company[1],
                weight: company[2].trim('\r')
              };
              comp.push(obj);
            });
            setFieldValue('portfolioCompanies', comp);
          };
          reader.readAsBinaryString(file);
        }
        setFieldValue('cover', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  const steps = ['Portfolio name', 'Add Companies', 'Add weights', 'Verify'];
  const cols = ['Company Name', 'Company Code', 'Weight', 'Percentage'];
  const [activeStep, setActiveStep] = useState(0);
  const [fileUpload, setFileUpload] = useState(false);
  const [comps, setComps] = useState([]);

  const handleNext = () => {
    if (Object.keys(formik.values.cover).length && activeStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 2);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (Object.keys(formik.values.cover).length && activeStep === steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 2);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const companies = Object.keys(COMPANY_DATA).map((key) => COMPANY_DATA[key]);

  const calcPercentage = (val, arr) => {
    const v = parseFloat(val);
    const total = arr.reduce((sum, current) => sum + parseFloat(current.weight), 0);
    if (!total) return 0;
    let percentage = (v / total).toFixed(4) * 100;
    percentage = percentage.toString().slice(0, 5);
    percentage += ' %';
    return percentage;
  };

  const toggleUpload = () => {
    setFileUpload(!fileUpload);
  };

  useEffect(() => {
    const getAllCompanies = async () => {
      const url = '/company/list';
      const response = await axios.get(url);
      setComps(response.data.data.companyData);
      console.log(response.data.data.companyData);
      console.log(companies);
    };
    getAllCompanies();
  }, []);

  return (
    <>
      {comps.length === 0 ? (
        <LoadingScreen />
      ) : (
        <Page title="TheSMC | Portfolios">
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <HeaderBreadcrumbs
              heading="Portfolios"
              links={[
                { name: 'Home', href: PATH_DASHBOARD.root },
                { name: 'Portfolios', href: PATH_DASHBOARD.general.portfolios },
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
              <Typography variant="h5">Create a Portfolio</Typography>
              <Typography variant="subtitle2">
                Provide the portfolio name, code-identifier and weights for review and additon
              </Typography>
            </Grid>
            <br />
            <FormikProvider value={formik}>
              <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Card sx={{ p: 3 }}>
                      <Stack spacing={3}>
                        <Box sx={{ width: '100%' }}>
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
                          <br />
                          <br />

                          {activeStep === 0 && (
                            <>
                              <TextField
                                fullWidth
                                label="Portfolio Name"
                                {...getFieldProps('portfolioName')}
                                error={Boolean(touched.portfolioName && errors.portfolioName)}
                                helperText={touched.portfolioName && errors.portfolioName}
                                required
                              />
                              <br />
                              <br />
                              <TextField
                                fullWidth
                                label="Portfolio Code"
                                {...getFieldProps('portfolioCode')}
                                error={Boolean(touched.portfolioCode && errors.portfolioCode)}
                                helperText={touched.portfolioCode && errors.portfolioCode}
                                required
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
                              <FormControlLabel
                                value={fileUpload}
                                checked={fileUpload}
                                control={<Switch color="primary" />}
                                label="Upload Excel/CSV File"
                                labelPlacement="end"
                                onChange={toggleUpload}
                              />
                              <br />
                              <br />
                              <Autocomplete
                                multiple
                                id="companyName"
                                options={comps}
                                getOptionLabel={(option) => option.companyName}
                                defaultValue={[]}
                                disabled={fileUpload}
                                filterSelectedOptions
                                onChange={(e, value) => {
                                  const arr = value.map((obj) => ({ ...obj, weight: 0 }));
                                  setFieldValue('portfolioCompanies', arr);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} label="Select Companies" placeholder="Companies" />
                                )}
                                style={{ display: fileUpload ? 'none' : '' }}
                              />
                              <div style={{ display: fileUpload ? '' : 'none' }}>
                                <LabelStyle>Excel / CSV File</LabelStyle>
                                <Link to="" target="_blank" download>
                                  Download Standard Template
                                </Link>
                                <br />
                                <br />
                                <UploadSingleFile
                                  maxSize={3145728}
                                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                  file={values.cover}
                                  onDrop={handleDrop}
                                  error={Boolean(touched.cover && errors.cover)}
                                  preview
                                />
                                {touched.cover && errors.cover && (
                                  <FormHelperText error sx={{ px: 2 }}>
                                    {touched.cover && errors.cover}
                                  </FormHelperText>
                                )}
                              </div>
                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                  Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                  onClick={handleNext}
                                  disabled={
                                    formik.values.portfolioCompanies.length === 0 &&
                                    Object.keys(formik.values.cover).length === 0
                                  }
                                >
                                  Next
                                </Button>
                              </Box>
                            </>
                          )}
                          {activeStep === 2 && (
                            <>
                              {formik.values.portfolioCompanies.length !== 0 && (
                                <Container>
                                  <Box>
                                    {formik.values.portfolioCompanies.map((company, index) => (
                                      <div key={company['company-uuid']}>
                                        <Grid
                                          container
                                          spacing={2}
                                          direction="row"
                                          justifyContent="space-between"
                                          alignItems="center"
                                        >
                                          <Grid xs={4}>
                                            <Typography>{company.companyName}</Typography>
                                          </Grid>
                                          <Grid xs={4} justifyContent="flex-start">
                                            <TextField
                                              placeholder="weight"
                                              value={formik.values.portfolioCompanies[index].weight}
                                              onChange={(e) => {
                                                const obj = {
                                                  ...[...formik.values.portfolioCompanies][index],
                                                  weight: e.target.value
                                                };
                                                const array = formik.values.portfolioCompanies;
                                                array[index] = obj;
                                                setFieldValue('portfolioCompanies', array);
                                              }}
                                            />
                                          </Grid>
                                          <Grid xs={4}>
                                            <Item>
                                              <Typography>
                                                {calcPercentage(company.weight, formik.values.portfolioCompanies)}
                                              </Typography>
                                            </Item>
                                          </Grid>
                                        </Grid>
                                        <br />
                                      </div>
                                    ))}
                                    <Grid container>
                                      <Grid item xs={4}>
                                        Total:{' '}
                                        {formik.values.portfolioCompanies.reduce(
                                          (sum, current) => sum + parseFloat(current.weight),
                                          0
                                        )}
                                      </Grid>
                                      <Grid item xs={4}>
                                        Total %: 100
                                      </Grid>
                                    </Grid>
                                  </Box>
                                </Container>
                              )}
                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                  Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext}>Next</Button>
                              </Box>
                            </>
                          )}
                          {activeStep === steps.length - 1 && (
                            <>
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={8}>
                                  <Card>
                                    <TableContainer component={Paper}>
                                      <Table stickyHeader>
                                        <TableHead>
                                          <TableRow>
                                            {cols.map((col) => (
                                              <TableCell key={col}>{col}</TableCell>
                                            ))}
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {formik.values.portfolioCompanies.map((company) => (
                                            <TableRow key={company['company-uuid']}>
                                              <TableCell>{company.companyName}</TableCell>
                                              <TableCell>{company.publicIdentifier}</TableCell>
                                              <TableCell>{company.weight}</TableCell>
                                              <TableCell>
                                                {calcPercentage(company.weight, formik.values.portfolioCompanies)}
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
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
                                      <PortfolioDonut data={formik.values.portfolioCompanies} />
                                    </CardContent>
                                  </Card>
                                </Grid>
                              </Grid>
                              <Grid justifyContent="flex-end" direction="row">
                                <Item xs={4}>
                                  Total:{' '}
                                  {formik.values.portfolioCompanies.reduce(
                                    (sum, current) => sum + parseFloat(current.weight),
                                    0
                                  )}
                                </Item>
                                <Item xs={4}>Total %: 100</Item>
                              </Grid>
                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                  Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                              </Box>
                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <LoadingButton
                                  fullWidth
                                  type="submit"
                                  variant="contained"
                                  size="large"
                                  loading={isSubmitting}
                                >
                                  Submit
                                </LoadingButton>
                              </Box>
                            </>
                          )}
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </Form>
            </FormikProvider>
          </Container>
        </Page>
      )}
    </>
  );
}
