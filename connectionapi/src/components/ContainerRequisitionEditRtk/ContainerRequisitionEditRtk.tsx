import { Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import { StyledButtonRequisition } from "../../style/StyledButtonRequisition";

interface IContainerRequisitionEditRtkProps {
  handleEdit: () => void;
}

const ContainerRequisitionEditRtk = ({handleEdit}:IContainerRequisitionEditRtkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Put</Typography>
      <StyledButtonRequisition
        onClick={handleEdit}
      >
        Put
      </StyledButtonRequisition>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionEditRtk;
