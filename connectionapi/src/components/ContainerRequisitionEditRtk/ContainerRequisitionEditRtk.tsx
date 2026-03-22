import { Button, Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";

interface IContainerRequisitionEditRtkProps {
  handleEdit: () => void;
}

const ContainerRequisitionEditRtk = ({handleEdit}:IContainerRequisitionEditRtkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Put</Typography>
      <Button
        onClick={handleEdit}
        sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
      >
        Put
      </Button>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionEditRtk;
