import {Table} from "@mui/material"
import type { ColumnItemHome, RownItemHome } from "../../../types"
import TableHeadComponent from "./TableHeadComponent"
import TableBodyComponent from "./TableBodyComponent"

interface ITableComponentProps{
    columns: ColumnItemHome[]
    rows: RownItemHome[]
}

const TableComponent = ({columns, rows}:ITableComponentProps) => {
  return (
    <Table sx={{border:"1px solid black"}}>
            <TableHeadComponent columns={columns}/>
            <TableBodyComponent rows={rows}/>
    </Table>
  )
}

export default TableComponent
