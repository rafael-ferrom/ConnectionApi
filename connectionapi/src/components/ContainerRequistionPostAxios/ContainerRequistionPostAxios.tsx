import { Typography } from "@mui/material"
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition"
import BodyRequisition from "./components/BodyRequisition"

interface IContainerRequistionPostAxiosProps{
  handlePost:(e: React.FormEvent) => void 
  postSubmited: boolean
}

const ContainerRequistionPostAxios = ({handlePost, postSubmited}:IContainerRequistionPostAxiosProps) => {
  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">Post</Typography>
          <BodyRequisition handlePost={handlePost} postSubmited={postSubmited}/>
    </StyledContainerRequistion>
  )
}

export default ContainerRequistionPostAxios
