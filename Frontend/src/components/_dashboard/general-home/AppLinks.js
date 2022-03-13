import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Button, IconButton, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CalendarTodaySharpIcon from '@mui/icons-material/CalendarTodaySharp';
import DeveloperModeSharpIcon from '@mui/icons-material/DeveloperModeSharp';

// ----------------------------------------------------------------------

const BUTTON_OPTIONS = [
  {
    category: 'Templates',
    label: 'Templates Builder',
    icon: CalendarTodaySharpIcon,
    catergoryColor: 'primary',
    link: '/dashboard/templates',
    key: 'saved-template'
  },
  {
    category: 'Portfolios',
    label: 'Tracked Portfolio',
    icon: AnalyticsOutlinedIcon,
    catergoryColor: 'warning',
    link: '/dashboard/portfolios',
    key: 'tracked-portfolio'
  },
  {
    category: 'Simulations',
    label: 'Score Simulation',
    icon: CalendarTodaySharpIcon,
    catergoryColor: 'primary',
    link: '/dashboard/templates/portfolios/select',
    key: 'saved-template'
  },
  {
    category: 'Companies',
    label: 'Tracked Companies',
    icon: AccountBalanceOutlinedIcon,
    catergoryColor: 'info',
    link: '/dashboard/companies',
    key: 'company-list'
  }
  // {
  //   category: 'Companies',
  //   label: 'Add Company',
  //   icon: AccountBalanceOutlinedIcon,
  //   catergoryColor: 'info',
  //   link: '/dashboard/companies/add',
  //   key: 'add-company'
  // },
  // {
  //   category: 'Portfolios',
  //   label: 'Create Portfolio',
  //   icon: AnalyticsOutlinedIcon,
  //   catergoryColor: 'warning',
  //   link: '/dashboard/portfolios/create',
  //   key: 'create-portfolio'
  // },
  // {
  //   category: 'Scoring Templates',
  //   label: 'Saved Templates',
  //   icon: CalendarTodaySharpIcon,
  //   catergoryColor: 'primary',
  //   link: '/dashboard/templates',
  //   key: 'saved-template'
  // },
  // {
  //   category: 'Scoring Templates',
  //   label: 'Create Templates',
  //   icon: CalendarTodaySharpIcon,
  //   catergoryColor: 'primary',
  //   link: '/dashboard/templates/create',
  //   key: 'create-template'
  // },
  // {
  //   category: 'Scoring Templates',
  //   label: 'Custom Company Score',
  //   icon: CalendarTodaySharpIcon,
  //   catergoryColor: 'primary',
  //   link: '/dashboard/templates/companies/select',
  //   key: 'company-score-custom'
  // },
  // {
  //   category: 'Scoring Templates',
  //   label: 'Custom Portfolio Score',
  //   icon: CalendarTodaySharpIcon,
  //   catergoryColor: 'primary',
  //   link: '/dashboard/templates/portfolios/select',
  //   key: 'portfolio-score-custom'
  // },
  // {
  //   category: 'AI/ML Demostration APIs',
  //   label: 'Demo Data Points',
  //   icon: DeveloperModeSharpIcon,
  //   catergoryColor: 'error',
  //   link: '/dashboard/mlapi/carbonEmission',
  //   key: 'carbon-emission'
  // }
];

// ----------------------------------------------------------------------

export default function AppLinks() {
  return (
    <>
      {/* <Grid item xs={12} md={3}>
        <Card sx={{ display: 'flex', alignItems: 'center', p: 3, boxShadow: 4 }}>
          <Box sx={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <AccountBalanceOutlinedIcon fontSize="small" color="info" />
              <Typography variant="subtitle2">&nbsp;Companies</Typography>
            </div>
            <br />

            <Typography variant="h4" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              Company List&nbsp;
              <Button to="/dashboard/booking" component={RouterLink} color="info">
                <ArrowForwardIcon />
              </Button>
            </Typography>
          </Box>
        </Card>
      </Grid> */}

      {BUTTON_OPTIONS.map((option) => (
        <Grid item xs={12} md={3} key={option.key}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 3, boxShadow: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <option.icon fontSize="small" color={option.catergoryColor} />
                <Typography variant="h5">&nbsp;{option.category}</Typography>
              </div>
              <br />

              <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                {option.label}&nbsp;
                <Button to={option.link} component={RouterLink} color={option.catergoryColor}>
                  <ArrowForwardIcon />
                </Button>
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
}
