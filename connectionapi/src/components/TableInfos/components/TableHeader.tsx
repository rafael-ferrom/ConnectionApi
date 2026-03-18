import { TableCell, TableHead, TableRow } from "@mui/material";
import { ColumnTable } from "../../../utils/Consts";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {ColumnTable.map((col) => (
          <TableCell key={col.id}>{col.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
