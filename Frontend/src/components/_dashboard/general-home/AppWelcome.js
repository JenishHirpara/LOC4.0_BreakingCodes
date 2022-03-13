import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { SeoIllustration } from '../../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string
};

export default function AppWelcome({ displayName }) {
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800'
        }}
      >
        <Typography gutterBottom variant="h2" style={{ marginTop: '20px' }}>
          Welcome, to SCM 4.0!
        </Typography>

        {/* <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 720, mx: 'auto' }}>
          This is a complete platform to track and score
          <br /> companies and portfolios on Environment(E), Social(S) and Governance(G) parameters
        </Typography> */}
      </CardContent>
    </RootStyle>
  );
}
