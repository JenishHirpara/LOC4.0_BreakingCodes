import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Skeleton,
  Card,
  Paper,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Container,
  Typography,
  Collapse,
  IconButton,
  LinearProgress,
  CardContent,
  CardHeader,
  TableContainer,
  TablePagination
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="center">{row.content}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Published at</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell align="center">Author</TableCell>
                    <TableCell align="center">Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.publishedAt}>
                    <TableCell component="th" scope="row">
                      {row.publishedAt}
                    </TableCell>
                    <TableCell>{row.source.name}</TableCell>
                    <TableCell align="center">{row.author}</TableCell>
                    <TableCell align="center">
                      {' '}
                      <a href={row.url}>Link</a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
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

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const url =
          'https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=cc20898809b44b64b6e63982b82d7639';
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
    <div>
      <Card sx={{ height: '100%' }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <Row key={row.url} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}

export default News;
