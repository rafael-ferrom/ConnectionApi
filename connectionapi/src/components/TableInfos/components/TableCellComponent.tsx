import { Checkbox, TableCell } from "@mui/material";

interface ITableCellComponentProps {
  value: boolean;
  key:string
}
const TableCellComponent = ({
  value,
  key
}: ITableCellComponentProps) => {
  return (
    <TableCell key={key}>
      <Checkbox disabled checked={Boolean(value)} />
    </TableCell>
  );
};

export default TableCellComponent;
