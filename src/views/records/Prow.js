import React , {useEffect} from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import {withStyles } from '@material-ui/core/styles';

export default function Prow(props) {
  const StyledTableCell = withStyles((theme) => ({
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

    const { prow , data} = props;
    const [open, setopen] = React.useState(false);
    // const [Practdetails, setPractdetails] = React.useState([]);
    var url;

    const [u_provider_code, set_u_provider_code] = React.useState([]);

    var pradet = data.filter(val => {
      if (val.Provider_code === prow.Provider_code) {
        return val;
      }  

    }
    )
    // console.log(pradet)
    return (
      <React.Fragment>
      {/* <Row row={data}/> */}
       <TableRow>
        <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={() => setopen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      {/* <StyledTableCell align="left" style={{width:"5%"}}></StyledTableCell> */}
      <StyledTableCell align="left" style={{width:"30%"}}><AccountBalanceIcon size={18}/>&nbsp;{prow.Provider_name}</StyledTableCell>
      <StyledTableCell align="left" style={{width:"25%"}}>{prow.Provider_code}</StyledTableCell>
      <StyledTableCell align="left" style={{width:"30%"}}>{prow.Provider_Address}</StyledTableCell>
      <StyledTableCell align="left" style={{width:"15%"}}>{prow.Provider_number}</StyledTableCell>
    </TableRow>
    <StyledTableRow>
      <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            {/* <a variant="h6" gutterBottom component="div" style={{fontSize:"20px", color:"#1890ff"}}>
              Patient Practdetails
            </a> */}
            <Table size="small" aria-label="provider">
              <TableHead style={{ fontWeight: 'bold', color:"blue", margin: "15px"}}>Practitioner Details:  </TableHead>
              <TableBody>
                <TableRow>
                   {/* <TableCell component="th" scope="row">{item.id}</TableCell> */}
                  <TableCell style={{ fontWeight: 'bold', width:"30%"}}>Practitioner Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold', width:"30%"}}>Specialisation</TableCell>
                  <TableCell style={{ fontWeight: 'bold', width:"40%"}}>Email ID</TableCell>
                </TableRow>
                {
                  pradet.map((item)=> <StyledTableRow key = {item.Practitioner_name} > 
                    <StyledTableCell style={{width:"30%"}}>{item.Practitioner_name}</StyledTableCell>
                    <StyledTableCell style={{width:"30%"}}>{item.Specialization}</StyledTableCell>
                    <StyledTableCell style={{width:"40%"}}>{item.Practitioner_Email}</StyledTableCell>
                  </StyledTableRow>)
                }
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </StyledTableCell>
    </StyledTableRow>
  </React.Fragment>
    );
  }
