import {
  Table,
  TableContainer,
} from "@mui/material";
import type { RownItemHome } from "../../types";
import TableHeader from "./components/TableHeader";
import TableBodyComponent from "./components/TableBody";

interface ITableInfoProps {
  specifyRequisition: RownItemHome | undefined;
}

const TableInfos = ({ specifyRequisition }: ITableInfoProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableBodyComponent specifyRequisition={specifyRequisition}/>
      </Table>
    </TableContainer>
  );
};

export default TableInfos;
