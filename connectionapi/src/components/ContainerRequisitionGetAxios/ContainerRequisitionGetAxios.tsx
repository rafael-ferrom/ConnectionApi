import { Typography } from "@mui/material"
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition"
import type { Post } from "../../models/Post"

interface IContainerRequisitionGetAxios{
    posts: Post[]
}

const ContainerRequisitionGetAxios = ({posts}:IContainerRequisitionGetAxios) => {
  return (
    <StyledContainerRequistion size={3}>
        <Typography variant="h4">GET</Typography>
          {posts?.slice(0, 15).map((post) => (
            <Typography>{post.title}</Typography>
          ))}
    </StyledContainerRequistion>
  )
}

export default ContainerRequisitionGetAxios
