import { Typography } from "@mui/material"
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition"
import BodyRequisition from "./components/BodyRequisition"

interface IContainerRequisitionEditAxiosProps{
    handleUpdate: (e: React.FormEvent) => void
}

const ContainerRequisitionEditAxios = ({handleUpdate}:IContainerRequisitionEditAxiosProps) => {
  return (
    <StyledContainerRequistion>
        <Typography variant="h4">PUT</Typography>
          <BodyRequisition handleUpdate={handleUpdate}/>
    </StyledContainerRequistion>
  )
}

export default ContainerRequisitionEditAxios
