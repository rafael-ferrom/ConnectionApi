import { Box, Paper, TableContainer,  Typography } from '@mui/material'
import type { ColumnItemHome, RownItemHome } from '../../types'
import TableComponent from './Components/TableComponent'

const TableProperties = () => {

    const ColumnTable: ColumnItemHome[] = [
    {id:1, label:""},
    {id:2, label:"Biblioteca externa"},
    {id:3, label:"Cache automatico"},
    {id:4, label:"Gerenciamento de loading automatico"},
    {id:5, label:"Ideal para projetos grandes"},
    {id:6, label:"Curva de aprendizado alto"}
  ]

  const RowsTable: RownItemHome[] = [
    {id:1, name:"Fetch",hasExternalLib:false,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:false, bigLearningCourve:false},
    {id:2, name:"Axios",hasExternalLib:true,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:false, bigLearningCourve:false},
    {id:1, name:"CreateAsyncThunk",hasExternalLib:true,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:true, bigLearningCourve:true},
    {id:1, name:"RTK",hasExternalLib:true,hasAutomaticCache:true,hasLoading:true,goodForBigProjects:true, bigLearningCourve:true}
  ]

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
