import {Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import { StyledButtonRequisition } from "../../style/StyledButtonRequisition";

interface IContainerRequisitionDeleteRtkProps {
  handleDelete: () => void;
}

const ContainerRequisitionDeleteRtk = ({
  handleDelete,
}: IContainerRequisitionDeleteRtkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Delete</Typography>
      <StyledButtonRequisition
        onClick={handleDelete}
      >
        Delete
      </StyledButtonRequisition>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionDeleteRtk;
