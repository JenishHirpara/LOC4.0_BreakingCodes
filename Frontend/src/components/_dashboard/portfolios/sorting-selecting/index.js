import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Table,
  Switch,
  Checkbox,
  Grid,
  Tooltip,
  TableRow,
  TableBody,
  Typography,
  TableCell,
  TableContainer,
  TablePagination,
  FormControlLabel,
  Button
} from '@mui/material';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Search';
// components
import Scrollbar from '../../../Scrollbar';
import Label from '../../../Label';
import PortfolioTimeline from '../PortfolioTimeline';
import { MFab, MIconButton } from '../../../@material-extend';
//
import SortingSelectingHead from './SortingSelectingHead';
import SortingSelectingToolbar from './SortingSelectingToolbar';
import { PORTFOLIO_DATA, PORTFOLIO_LIST } from '../../../../data/data';

// ----------------------------------------------------------------------

function createData(name, portfolioName, companyCount, description, TheSMCCode) {
  return [{ name, portfolioName, companyCount, description, TheSMCCode }];
}
function createData2(name, portfolioName, companyCount, description, TheSMCCode) {
  return { name, portfolioName, companyCount, description, TheSMCCode };
}
function createData3(imageUrl, name, quantity, uuid, invoice, paid) {
  return { imageUrl, name, quantity, uuid, invoice, paid };
}

const TABLE_HEAD = [
  {
    id: 'Image',
    alignLeft: true,
    disablePadding: true,
    label: 'Image'
  },
  {
    id: 'Name',
    alignLeft: false,
    disablePadding: false,
    label: 'Name'
  },
  {
    id: 'Quantity',
    alignLeft: false,
    disablePadding: false,
    label: 'Quantity'
  },
  {
    id: 'Track Order',
    alignLeft: false,
    disablePadding: false,
    label: 'Track Order'
  },
  {
    id: 'Invoice',
    alignLeft: false,
    disablePadding: false,
    label: 'Invoice'
  },
  {
    id: 'Paid',
    alignLeft: false,
    disablePadding: false,
    label: 'Paid'
  }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff'
};

export default function SortingSelecting(props) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('quantity');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [open, setOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const theme = useTheme();
  console.log(props.data);
  let SORTING_SELECTING_TABLE = [];
  const { data } = props;
  SORTING_SELECTING_TABLE = data.map((obj) => createData3(obj.url, obj.name, obj.quantity, 'hellos', obj.paid));

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = SORTING_SELECTING_TABLE.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty SORTING_SELECTING_TABLE.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - SORTING_SELECTING_TABLE.length) : 0;

  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js');
  });

  const displayRazorpay = async () => {
    // console.log('HI');
    // const data = await fetch('http://localhost:1337/razorpay', {
    //   method: 'POST'
    // }).then((t) => t.json());

    // console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: 'INR',
      amount: 10000,
      name: 'SCM 4.0',
      description: 'Wallet Transaction',
      // image: 'http://localhost:1337/logo.png',
      order_id: 'order_J6Kii5tRTv0xX1',
      handler: (response) => {
        // alert('PAYMENT ID ::' + response.razorpay_payment_id);
        // alert('ORDER ID :: ' + response.razorpay_order_id);
        console.log(response);
      },
      prefill: {
        name: 'Anirudh Jwala',
        email: 'anirudh@gmail.com',
        contact: '9999999999'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <SortingSelectingToolbar numSelected={selected.length} />

      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table size={dense ? 'small' : 'medium'}>
            <SortingSelectingHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              rowCount={SORTING_SELECTING_TABLE.length}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {stableSort(SORTING_SELECTING_TABLE, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  // console.log(row);
                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} />
                      </TableCell> */}
                      <TableCell component="th" id={labelId} scope="row" padding="5">
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <img src={row.imageUrl} height="80" width="80" alt={row.name} />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">
                        {' '}
                        <Grid item xs={12}>
                          <Typography>{row.name}</Typography>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">
                        <Button onClick={handleOpen}>Track Order</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Grid xs={12} md={12}>
                              <PortfolioTimeline />
                            </Grid>
                          </Box>
                        </Modal>
                      </TableCell>
                      <TableCell align="center">
                        <a
                          href="https://firebasestorage.googleapis.com/v0/b/loc-4-dc332.appspot.com/o/invoice.png?alt=media&token=19dd1fc2-d1fa-4249-b7f4-4813891827f3"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button>View Invoice</Button>
                        </a>
                      </TableCell>
                      <TableCell align="center">
                        <Button variant="outlined" onClick={displayRazorpay}>
                          Pay Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={SORTING_SELECTING_TABLE.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Box
          sx={{
            px: 3,
            py: 1.5,
            top: 0,
            position: { md: 'absolute' }
          }}
        >
          <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Compact view" />
        </Box>
      </Box>
    </>
  );
}
