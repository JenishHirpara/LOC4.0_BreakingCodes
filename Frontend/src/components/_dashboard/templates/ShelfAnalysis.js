import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import roundVpnKey from '@iconify/icons-ic/round-vpn-key';
import peopleFill from '@iconify/icons-eva/people-fill';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Avatar, Typography, Paper, CardHeader, Button } from '@mui/material';
// utils
import { fDateTime } from '../../../utils/formatTime';
import mockData from '../../../utils/mock-data';
//
import Label from '../../Label';
import { CarouselControlsArrowsBasic1 } from '../../carousel';

// ----------------------------------------------------------------------

const MOCK_BOOKINGS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: index,
  cover: `/static/mock-images/rooms/room-${index + 1}.jpg`
}));

// ----------------------------------------------------------------------

BookingItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    bookdAt: PropTypes.instanceOf(Date),
    cover: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number
  })
};

function BookingItem({ item }) {
  const { name, cover, id, items } = item;

  return (
    <Paper sx={{ mx: 1.5, borderRadius: 2, bgcolor: 'background.neutral', height: '100%' }}>
      <Stack spacing={2.5} sx={{ p: 3, pb: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <div>
            <Typography variant="subtitle2">{`${name}`}</Typography>
          </div>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={3} sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center">
            {/* <Icon icon={roundVpnKey} width={16} height={16} /> */}
            <Button variant="outlined" size="small" href={`/dashboard/templates/view/${id}`}>
              View Analytics
            </Button>
          </Stack>
        </Stack>
        {items.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </Stack>

      <Box sx={{ p: 1, position: 'relative' }}>
        <Box component="img" src={cover} sx={{ borderRadius: 1.5, width: 1, height: '100%' }} />
      </Box>
    </Paper>
  );
}

export default function BookingCustomerReviews(props) {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const { data } = props;

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  // const { data } = props;
  return (
    <Box sx={{ py: 2 }}>
      <CardHeader
        title="Shelf Analysis"
        subheader="4 shelves"
        action={
          <CarouselControlsArrowsBasic1
            arrowLine
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              position: 'static',
              '& button': { color: 'text.primary' }
            }}
          />
        }
        sx={{
          p: 0,
          mb: 3,
          '& .MuiCardHeader-action': { alignSelf: 'center' }
        }}
      />

      <Slider ref={carouselRef} {...settings}>
        {data.map((item) => (
          <BookingItem key={item.id} item={item} />
        ))}
      </Slider>
    </Box>
  );
}
