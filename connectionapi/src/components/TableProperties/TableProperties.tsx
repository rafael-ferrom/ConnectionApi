import { Box, Paper, TableContainer,  Typography } from '@mui/material'
import TableComponent from './Components/TableComponent'
import { ColumnTable, RowsTable } from '../../utils/Consts'

const TableProperties = () => {

    

  

  return (
    <Box>
        <Typography sx={{margin:"3rem 0 3rem 0", textAlign:"center"}} variant="h3">Vantagens e desvantagens</Typography>
        <TableContainer component={Paper} sx={{marginBottom:"1rem"}}>
          <TableComponent columns={ColumnTable} rows={RowsTable}/>
        </TableContainer>
      </Box>
  )
}

export default TableProperties
