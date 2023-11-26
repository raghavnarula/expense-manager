import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const TableComponent = ({transactions})=> {
    return (
      <TableContainer component={Paper} sx={{maxWidth:1000}}>
        <Table sx={{ minWidth: 250}} aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {transactions.map((item,index) => (
              <StyledTableRow
              key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row" align="center" sx={{mx: 'auto'}}>
                  {item.description}
                </StyledTableCell>
                <StyledTableCell align="center">{item.transactionAmount}</StyledTableCell>
                <StyledTableCell align="center">{item.transactionType}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
export default TableComponent