import { Box, Typography } from "@mui/material";
import type { toDo } from "../../models/toDo";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";

interface IContainerRequisitionFetchThunkProps{
    todos: toDo[]
}

const ContainerRequisitionFetchThunk = ({todos}:IContainerRequisitionFetchThunkProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4"> Get </Typography>
      <Box>
        {todos.slice(0, 15).map((t) => (
          <Typography key={t.id}>{t.title}</Typography>
        ))}
      </Box>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionFetchThunk;
