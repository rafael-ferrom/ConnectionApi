import { Button, Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import type { toDo } from "../../models/toDo";

interface IContainerRequisitionEditThunkProps {
    handleEdit: (value: toDo) => void
    todo: toDo
}

const ContainerRequisitionEditThunk = ({handleEdit, todo}:IContainerRequisitionEditThunkProps) => {
  return (
    <StyledContainerRequistion>
      <Typography variant="h4">Put</Typography>
      <Button
        onClick={() => handleEdit(todo)}
        sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
      >
        Put
      </Button>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionEditThunk;
