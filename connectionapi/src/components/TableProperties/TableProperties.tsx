import { Box, Paper, TableContainer, Typography } from '@mui/material'
import TableComponent from './Components/TableComponent'
import { ColumnTable, RowsTable } from '../../utils/Consts'

const TableProperties = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{
        margin: "3rem 0",
        textAlign: "center",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        background: "linear-gradient(90deg, #38bdf8, #818cf8)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        Vantagens e desvantagens
      </Typography>

      <TableContainer component={Paper} sx={{
        marginBottom: "1rem",
        backgroundColor: "rgba(30, 41, 59, 0.7)",
        border: "1px solid rgba(56, 189, 248, 0.15)",
        backdropFilter: "blur(8px)",
        borderRadius: "14px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}>
        <TableComponent columns={ColumnTable} rows={RowsTable} />
      </TableContainer>
    </Box>
  )
}

export default TableProperties