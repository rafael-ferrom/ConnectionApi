import { Button, Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";

interface IContainerRequisitionDeleteRtkProps {
  handleDelete: () => void;
}

const ContainerRequisitionDeleteRtk = ({
  handleDelete,
}: IContainerRequisitionDeleteRtkProps) => {
  return (
    <StyledContainerRequistion>
      <Typography variant="h4">Delete</Typography>
      <Button
        onClick={handleDelete}
        sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
      >
        Delete
      </Button>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionDeleteRtk;
