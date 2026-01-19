import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material"
import type { RownItemHome } from "../../../types"

interface ITableBodyComponentProps{
    rows: RownItemHome[]
}

const TableBodyComponent = ({rows}:ITableBodyComponentProps) => {
  return (
    <TableBody>
        {rows.map((row) =>(
            <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.hasExternalLib ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox> }</TableCell>
                <TableCell>{row.hasAutomaticCache ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                <TableCell>{row.hasLoading ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                <TableCell>{row.goodForBigProjects ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                <TableCell>{row.bigLearningCourve ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
            </TableRow>
        ))}
              
            </TableBody>
  )
}

export default TableBodyComponent
