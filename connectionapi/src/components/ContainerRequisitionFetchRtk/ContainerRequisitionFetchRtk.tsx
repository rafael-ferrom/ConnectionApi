import type { Comment } from "../../models/Comment";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import { Box, Typography } from "@mui/material";

interface IContainerRequisitionFetchRtkProps{
    data: Comment[] | undefined
}

const ContainerRequisitionFetchRtk = ({data}:IContainerRequisitionFetchRtkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Get</Typography>
      {data?.slice(0, 7).map((c) => (
        <Box key={c.id}>
          <Typography>{c.name}</Typography>
        </Box>
      ))}
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionFetchRtk;
