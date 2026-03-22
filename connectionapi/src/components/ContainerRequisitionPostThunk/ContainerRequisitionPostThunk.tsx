import { Typography } from "@mui/material"
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition"
import { StyledButtonRequisition } from "../../style/StyledButtonRequisition"

interface IContainerRequisitionPostThunkProps{
    handleCreate: () => void
}

const ContainerRequisitionPostThunk = ({handleCreate}:IContainerRequisitionPostThunkProps) => {
  return (
    <StyledContainerRequistion size={3}>
        <Typography variant="h4">Post</Typography>
          <StyledButtonRequisition
            onClick={handleCreate}
            
          >
            Post
          </StyledButtonRequisition>
    </StyledContainerRequistion>
  )
}

export default ContainerRequisitionPostThunk
