import { orderBy } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
// material
import {
  Box,
  Grid,
  Skeleton,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal
} from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getPostsInitial, getMorePosts } from '../../redux/slices/blog';
// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AppLinks, ShelfAnalysis } from '../../components/_dashboard/templates';
import SortingSelecting from '../../components/_dashboard/templates/sorting-selecting';
import LoadingScreen from '../../components/LoadingScreen';
import axios from '../../axios';
import { SHELF_ANALYSIS_DATA } from '../../data/data';

// ----------------------------------------------------------------------

export default function Companies() {
  const { themeStretch } = useSettings();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 520,
    // height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px'
  };

  const [templates, setTemplates] = useState([]);
  const [open, setOpen] = useState(false);
  const data = SHELF_ANALYSIS_DATA;
  // useEffect(() => {
  //   const getAllTemplates = async () => {
  //     const url = '/template/list';
  //     const response = await axios.get(url);
  //     setTemplates(response.data.data);
  //   };
  //   getAllTemplates();
  // }, []);

  const toggleModal = () => {
    setOpen(!open);
  };

  const images = [

    'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/bounded2.png?alt=media&token=00091658-875e-4057-a30a-964c7e2e6925',
    'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/bounded3.png?alt=media&token=46d4eee7-c26f-4775-8397-b2c38cd12462',
    'https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/bounded1.png?alt=media&token=2a7757b8-0e8c-4668-9a80-877fc9fbc105'
  ];

  return (
    <>
      {' '}
      <Page title="The SCM | Shelf Analysis">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Shelf Analysis"
            links={[{ name: 'Home', href: PATH_DASHBOARD.root }, { name: 'Shelf Analysis' }]}
          />
          <Grid style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={toggleModal}>
              Misplaced Items
            </Button>
          </Grid>
          <Modal
            open={open}
            onClose={toggleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <Grid xs={12}>
                <Typography variant="h5">Misplaced Items</Typography>
              </Grid> */}
              <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={160} gap={4}>
                {images.map((item, index) => (
                  <>
                    <ImageListItem key={item}>
                      <img
                        src={`${item}`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item}
                        loading="lazy"
                        height="160px"
                      />
                      <ImageListItemBar
                        title={`Shelf: ${index + 1}`}
                        // subtitle={<span>Shelf: {index + 1}</span>}
                        position="below"
                      />
                    </ImageListItem>
                  </>
                ))}
              </ImageList>
            </Box>
          </Modal>
          <Grid>
            <ShelfAnalysis data={data} />
          </Grid>
        </Container>
      </Page>
    </>
  );
}
