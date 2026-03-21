import { Button, Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";

interface IContainerRequisitionDeleteThunkProps{
  handleDelete: (value: number) => void
}

const ContainerRequisitionDeleteThunk = ({handleDelete}:IContainerRequisitionDeleteThunkProps) => {
  return (
    <StyledContainerRequistion>
      <Typography variant="h4">Delete</Typography>
      <Button
        onClick={() => handleDelete(5)}
        sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
      >
        Delete
      </Button>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionDeleteThunk;
