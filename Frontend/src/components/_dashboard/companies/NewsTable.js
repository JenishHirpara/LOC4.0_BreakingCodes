import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// axios
import axios from 'axios';
// utils
import { fToNow } from '../../../utils/formatTime';
import mockData from '../../../utils/mock-data';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    content: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    }),
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string
  })
};

function NewsItem({ news }) {
  //   const { image, title, description, postedAt } = news;
  const { content, author, description, source, url, urlToImage, publishedAt, title } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={`${title.slice(0, 5)}...`}
        src={urlToImage}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <a href={url} style={{ color: 'black' }} target="_blank" rel="noreferrer">
          <Typography variant="subtitle2">{title}</Typography>
        </a>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>
      <br />
    </Stack>
  );
}

export default function NewsTable(props) {
  const [data, setData] = useState([]);
  const { companyName } = props;
  let name = companyName.split(' ');
  name = name.join('%20');
  useEffect(() => {
    const getNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${name}&language=en&sortBy=publishedAt&apiKey=cc20898809b44b64b6e63982b82d7639`;
        const response = await axios.get(url);
        setData(response.data.articles);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    getNews();
  }, []);
  return (
    <Card>
      <CardHeader title="News Update" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {data.slice(0, 5).map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="/dashboard/news"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
