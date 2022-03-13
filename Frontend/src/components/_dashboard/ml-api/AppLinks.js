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
    category: 'Machine Learnign APIs',
    label: 'Carbon Emission',
    icon: DeveloperModeSharpIcon,
    catergoryColor: 'error',
    link: '/dashboard/mlapi/carbonEmission',
    key: 'carbon-emission'
  },
  {
    category: 'Machine Learnign APIs',
    label: 'Gender Diversity',
    icon: DeveloperModeSharpIcon,
    catergoryColor: 'error',
    link: '/dashboard/mlapi/genderDiversity',
    key: 'gender-diversity'
  }
];

// ----------------------------------------------------------------------

export default function AppLinks() {
  return (
    <>
      {BUTTON_OPTIONS.map((option) => (
        <Grid item xs={12} md={3} key={option.key}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 3, boxShadow: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <option.icon fontSize="small" color={option.catergoryColor} />
                <Typography variant="subtitle2">&nbsp;{option.category}</Typography>
              </div>
              <br />

              <Typography variant="h5" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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
