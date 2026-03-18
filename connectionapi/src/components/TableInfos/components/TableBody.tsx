import { TableBody, TableCell, TableRow } from "@mui/material";
import type { RownItemHome } from "../../../types";
import TableCellComponent from "./TableCellComponent";

interface ITableBodyComponentProps {
  specifyRequisition: RownItemHome | undefined;
}

const TableBodyComponent = ({
  specifyRequisition,
}: ITableBodyComponentProps) => {
  if (!specifyRequisition) return null;

  return (
    <TableBody>
      <TableRow key={specifyRequisition.id}>
        <TableCell>{specifyRequisition.name}</TableCell>

        {Object.entries(specifyRequisition)
          .filter(([key]) => key !== "id" && key !== "name")
          .map(([key, value]) => (
            <TableCellComponent key={key} value={value} />
          ))}
      </TableRow>
    </TableBody>
  );
};

export default TableBodyComponent;
