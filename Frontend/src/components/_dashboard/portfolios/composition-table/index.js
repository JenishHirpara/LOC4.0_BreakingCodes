import { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
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
  avatarGroupClasses
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Search';
// components
import Scrollbar from '../../../Scrollbar';
import Label from '../../../Label';
import { MFab, MIconButton } from '../../../@material-extend';
//
import SortingSelectingHead from './SortingSelectingHead';
import SortingSelectingToolbar from './SortingSelectingToolbar';
import { COMPANY_DATA } from '../../../../data/data';

// ----------------------------------------------------------------------

let SORTING_SELECTING_TABLE = [];

const TABLE_HEAD = [
  {
    id: 'type',
    alignLeft: true,
    disablePadding: true,
    label: 'Company Name'
  },
  {
    id: 'score',
    alignLeft: false,
    disablePadding: false,
    label: 'Score'
  },
  {
    id: 'portfolio-score',
    alignLeft: false,
    disablePadding: false,
    label: 'Portfolio Score'
  },
  {
    id: 'Abs',
    alignLeft: false,
    disablePadding: false,
    label: 'Absolute Weight'
  },
  {
    id: 'perc',
    alignLeft: false,
    disablePadding: false,
    label: 'Percentage Weight'
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
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const theme = useTheme();
  const { code, id } = useParams();

  function createData(
    name,
    uuid,
    symbol,
    code,
    score,
    portfolioScore,
    risk,
    portfolioScoreRisk,
    weight,
    percentageWeight
  ) {
    return { name, uuid, symbol, code, score, portfolioScore, risk, portfolioScoreRisk, weight, percentageWeight };
  }

  const company = COMPANY_DATA[code];

  const getRisk = (score) => {
    if (score < 4) return 'High';
    if (score < 8) return 'Medium';
    return 'Low';
  };

  const calcTotal = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i += 1) {
      total += arr[i].weight;
    }
    return total;
  };
  const total = calcTotal(props.data.active);

  SORTING_SELECTING_TABLE = props.data.active.map((company) =>
    createData(
      company.name,
      company.uuid,
      company.symbol,
      company.code,
      company['esg-score'],
      company['portfolio-esg-score'],
      getRisk(company['avg-esgscore']),
      getRisk(company['portfolio-esg-score']),
      company.weight,
      (company.weight / total) * 100
    )
  );
  SORTING_SELECTING_TABLE = [
    ...SORTING_SELECTING_TABLE,
    ...props.data['under-review'].map((company) =>
      createData(
        company.name,
        company.uuid,
        company.symbol,
        company.code,
        company['esg-score'],
        company['portfolio-esg-score'],
        getRisk(company['avg-esgscore']),
        getRisk(company['portfolio-esg-score']),
        company.weight,
        'NA'
      )
    )
  ];

  console.log(SORTING_SELECTING_TABLE);

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
                  const isItemSelected = isSelected(row.type);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.type}
                      selected={isItemSelected}
                    >
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="center">
                        <div>
                          <Typography variant="h6">{row.score}</Typography>
                        </div>
                        {row.score !== 'NA' && (
                          <Label
                            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                            color={
                              (row.risk === 'High' && 'error') ||
                              (row.risk === 'Medium' && 'warning') ||
                              (row.risk === 'Low' && 'success') ||
                              'error'
                            }
                          >
                            {`${row.risk} Risk`}
                          </Label>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <div>
                          <Typography variant="h6">{row.portfolioScore}</Typography>
                        </div>
                        {row.portfolioScore !== 'NA' && (
                          <Label
                            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                            color={
                              (row.portfolioScoreRisk === 'High' && 'error') ||
                              (row.portfolioScoreRisk === 'Medium' && 'warning') ||
                              (row.portfolioScoreRisk === 'Low' && 'success') ||
                              'error'
                            }
                          >
                            {`${row.portfolioScoreRisk} Risk`}
                          </Label>
                        )}
                      </TableCell>

                      <TableCell align="center">{row.weight}</TableCell>
                      <TableCell align="center">
                        {Math.round((row.percentageWeight + Number.EPSILON) * 100) / 100}
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
