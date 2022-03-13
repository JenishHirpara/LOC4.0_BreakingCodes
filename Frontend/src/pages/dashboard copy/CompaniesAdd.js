import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import {
  Grid,
  Container,
  Chip,
  Stack,
  Button,
  TextField,
  Typography,
  Autocomplete,
  FormHelperText,
  Box,
  Card,
  Switch,
  CardHeader,
  CardContent,
  FormControlLabel
} from '@mui/material';
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
import { UploadSingleFile } from '../../components/upload';

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

  const NewFormSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    companyCode: Yup.string().required('Unique company code is required')
  });

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyCode: '',
      companyDocument: null
    },
    validationSchema: NewFormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await fakeRequest(1500);
        resetForm();
        // handleClosePreview();
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
          <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Card sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      {...getFieldProps('companyName')}
                      error={Boolean(touched.companyName && errors.companyName)}
                      helperText={touched.companyName && errors.companyName}
                    />

                    <TextField
                      fullWidth
                      // multiline
                      // minRows={3}
                      // maxRows={5}
                      label="Company Code"
                      {...getFieldProps('companyCode')}
                      error={Boolean(touched.companyCode && errors.companyCode)}
                      helperText={touched.companyCode && errors.companyCode}
                    />

                    <div>
                      <LabelStyle>Optional Company Document</LabelStyle>
                      <UploadSingleFile
                        maxSize={3145728}
                        // accept="file"
                        file={values.cover}
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
