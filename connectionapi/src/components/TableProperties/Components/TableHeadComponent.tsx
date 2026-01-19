import { TableCell, TableHead, TableRow } from "@mui/material";
import type { ColumnItemHome } from "../../../types";

interface ITableHeadComponentProps{
    columns: ColumnItemHome[]
}

const TableHeadComponent = ({columns}:ITableHeadComponentProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
