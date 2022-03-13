import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

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
  FormControlLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Search';
// components
import Scrollbar from '../../../Scrollbar';
import Label from '../../../Label';
import { MFab, MIconButton } from '../../../@material-extend';
//
import SortingSelectingHead from './SortingSelectingHead';
import SortingSelectingToolbar from './SortingSelectingToolbar';
import SvgIconStyle from '../../../SvgIconStyle';

// ----------------------------------------------------------------------

// function createData(name, companyName, industry, country, score, risk, publicIdentifier, TheSMCCode) {
//   return [{ name, companyName, industry, country, score, risk, publicIdentifier, TheSMCCode }];
// }

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '50%', height: '50%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking')
};
function createData(imageUrl, name, shelfQuantity, stockQuantity, uuid) {
  return { imageUrl, name, shelfQuantity, stockQuantity, uuid };
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
    id: 'Shelf Quantity',
    alignLeft: false,
    disablePadding: false,
    label: 'Shelf Quantity'
  },
  {
    id: 'Stock Quantity',
    alignLeft: false,
    disablePadding: false,
    label: 'Stock Quantity'
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

export default function SortingSelecting(props) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('Shelf Quantity');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const theme = useTheme();
  const { data } = props;
  console.log(data);
  let SORTING_SELECTING_TABLE = [];

  const getRisk = (score) => {
    if (score < 4) return 'High';
    if (score < 8) return 'Medium';
    return 'Low';
  };

  SORTING_SELECTING_TABLE = data.map((obj) =>
    createData(obj.url, obj.name, obj.shelf_quantity, obj.stock_quantity, obj._id)
  );
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty SORTING_SELECTING_TABLE.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - SORTING_SELECTING_TABLE.length) : 0;

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
                  console.log(row);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      // tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <img src={row.imageUrl} height="100" width="100" alt={row.name} />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>

                      <TableCell align="center">
                        <Typography>{row.shelfQuantity}</Typography>
                      </TableCell>
                      <TableCell align="center">{row.stockQuantity}</TableCell>
                      <TableCell align="right">
                        <Tooltip title="View">
                          <MIconButton
                            color="success"
                            to={`/dashboard/companies/view/${row.uuid}`}
                            component={RouterLink}
                          >
                            <Icon icon="carbon:analytics" />
                          </MIconButton>
                        </Tooltip>
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
