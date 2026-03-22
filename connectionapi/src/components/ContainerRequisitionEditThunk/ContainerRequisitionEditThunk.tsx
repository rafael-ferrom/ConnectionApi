import { Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import type { toDo } from "../../models/toDo";
import { StyledButtonRequisition } from "../../style/StyledButtonRequisition";

interface IContainerRequisitionEditThunkProps {
  handleEdit: (value: toDo) => void;
  todo: toDo;
}

const ContainerRequisitionEditThunk = ({
  handleEdit,
  todo,
}: IContainerRequisitionEditThunkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Put</Typography>
      <StyledButtonRequisition onClick={() => handleEdit(todo)}>
        Put
      </StyledButtonRequisition>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionEditThunk;
