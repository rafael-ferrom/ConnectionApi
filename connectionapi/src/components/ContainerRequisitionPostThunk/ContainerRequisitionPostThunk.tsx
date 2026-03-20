import { Button, Typography } from "@mui/material"
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition"

interface IContainerRequisitionPostThunkProps{
    handleCreate: () => void
}

const ContainerRequisitionPostThunk = ({handleCreate}:IContainerRequisitionPostThunkProps) => {
  return (
    <StyledContainerRequistion>
        <Typography variant="h4">Post</Typography>
          <Button
            onClick={handleCreate}
            sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
          >
            Post
          </Button>
    </StyledContainerRequistion>
  )
}

export default ContainerRequisitionPostThunk
