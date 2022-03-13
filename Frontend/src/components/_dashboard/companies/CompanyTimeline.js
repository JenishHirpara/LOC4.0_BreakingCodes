import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator } from '@mui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';
import mockData from '../../../utils/mock-data';
import Label from '../../Label';

// ----------------------------------------------------------------------

const TITLES = [
  '1983, orders, $4220',
  '12 Invoices have been paid',
  'Order #37745 from September',
  'New order placed #XF-2356',
  'New order placed #XF-2346'
];

const MOCK_TIMELINES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: TITLES[index],
  type: `order${index + 1}`,
  time: mockData.time(index)
}));

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

const returnColor = (score) => {
  if (score > 7.5) return 'success';
  if (score < 3.5) return 'error';
  return 'warning';
};

function OrderItem({ item, isLast }) {
  const { color, score, time } = item;
  // console.log(color);
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color={color} />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">
          Score -{' '}
          <Label color={returnColor(parseInt(score, 10))} variant="ghost">
            {score}
          </Label>
        </Typography>
        {/* <Typography variant="subtitle2">Score - {score}</Typography> */}
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time * 1000)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function CompanyTimeline(props) {
  function getColor(arr) {
    const result = arr.map((obj, index) => {
      // console.log(arr[index].score);
      if (index === 0) return 'info';
      if (arr[index].score > arr[index - 1].score) return 'success';
      if (arr[index].score < arr[index - 1].score) return 'error';
      return 'warning';
    });

    return result;
  }

  const colorArray = getColor(props.data);
  // console.log(colorArray);
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Historical Data" />
      <CardContent>
        <Timeline>
          {props.data.map((item, index) => (
            <OrderItem
              key={item.title}
              item={{ ...item, color: colorArray[index] }}
              isLast={index === props.data.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
