import { Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import BodyRequisition from "./components/BodyRequisition";

interface IContainerRequisitionDeleteAxios {
  handleDelete: (e: React.FormEvent) => void;
}

const ContainerRequisitionDeleteAxios = ({
  handleDelete,
}: IContainerRequisitionDeleteAxios) => {
  return (
    <StyledContainerRequistion>
      <Typography variant="h4">Delete</Typography>
      <BodyRequisition handleDelete={handleDelete} />
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionDeleteAxios;
