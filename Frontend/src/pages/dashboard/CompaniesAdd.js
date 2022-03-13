import { useCallback, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { Grid, Container, Stack, TextField, Typography, FormHelperText, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
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
import { AppLinks } from '../../components/_dashboard/companies';
//
import { UploadMultiFile } from '../../components/upload';
//
import axios from '../../axios';
//
// import { COMPANY_DATA } from '../../data/data';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

// ----------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();
  const { enqueueSnackbar } = useSnackbar();

  // const companies = Object.keys(COMPANY_DATA).map((key) => COMPANY_DATA[key]);

  const NewFormSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    companyCode: Yup.string().required('Unique company code is required')
  });

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyCode: '',
      companyDocuments: []
    },
    validationSchema: NewFormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log(values);
        // await fakeRequest(1500);
        // const response = await axios.post('/add-company', values);
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('Submitted for review', { variant: 'warning' });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      const arr = [];
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = (fileLoadedEvent) => {
          const srcData = fileLoadedEvent.target.result; // <--- data: base64
          arr.push({ fileName: file.name, type: file.type, base64: srcData });
        };
        reader.readAsDataURL(file);
      });
      setFieldValue('companyDocuments', arr);
    },
    [setFieldValue]
  );

  return (
    <Page title="TheSMC | Companies">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Companies"
          links={[
            { name: 'Home', href: PATH_DASHBOARD.root },
            { name: 'Companies', href: PATH_DASHBOARD.general.companies },
            { name: 'Add' }
          ]}
        />
        <Grid container spacing={3}>
          <AppLinks />
        </Grid>
        <br />
        <br />
        <br />
        <Grid>
          <Typography variant="h5">Add a Company</Typography>
          <Typography variant="subtitle2">
            Provide the company name and code-identifier for review and additon
          </Typography>
        </Grid>
        <br />
        <FormikProvider value={formik}>
          <Form noValidate autoComplete="off" onSubmit={handleSubmit} encType="multipart/form-data">
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      {...getFieldProps('companyName')}
                      name="companyName"
                      error={Boolean(touched.companyName && errors.companyName)}
                      helperText={touched.companyName && errors.companyName}
                      required
                    />

                    <TextField
                      fullWidth
                      label="Company Code"
                      {...getFieldProps('companyCode')}
                      name="companyCode"
                      error={Boolean(touched.companyCode && errors.companyCode)}
                      helperText={touched.companyCode && errors.companyCode}
                      required
                    />

                    <div>
                      <LabelStyle>Optional Company Document</LabelStyle>
                      <UploadMultiFile
                        accept=".pdf, .txt, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        file={values.companyDocuments}
                        onDrop={handleDrop}
                        error={Boolean(touched.cover && errors.cover)}
                      />
                      {touched.cover && errors.cover && (
                        <FormHelperText error sx={{ px: 2 }}>
                          {touched.cover && errors.cover}
                        </FormHelperText>
                      )}
                    </div>
                    <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                      Submit
                    </LoadingButton>
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
