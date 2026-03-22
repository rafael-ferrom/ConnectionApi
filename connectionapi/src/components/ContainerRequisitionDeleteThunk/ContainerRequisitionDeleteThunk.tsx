import { Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import { StyledButtonRequisition } from "../../style/StyledButtonRequisition";

interface IContainerRequisitionDeleteThunkProps{
  handleDelete: (value: number) => void
}

const ContainerRequisitionDeleteThunk = ({handleDelete}:IContainerRequisitionDeleteThunkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Delete</Typography>
      <StyledButtonRequisition
        onClick={() => handleDelete(5)}
      >
        Delete
      </StyledButtonRequisition>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionDeleteThunk;
