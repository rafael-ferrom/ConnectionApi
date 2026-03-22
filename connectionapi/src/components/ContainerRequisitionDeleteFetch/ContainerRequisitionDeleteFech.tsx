import { Box, Typography } from "@mui/material"
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition"
import InputDeleteFetch from "./components/InputDeleteFetch"
import ButtonDeleteFetch from "./components/ButtonDeleteFetch"

interface IContainerRequisitionDeleteFetchProps{
    userId: number
    setUserId: (value: number) => void
    message: string
    handleDelete: () => void
}

const ContainerRequisitionDeleteFech = ({userId, setUserId, message, handleDelete}: IContainerRequisitionDeleteFetchProps) => {
  return (
    <StyledContainerRequistion size={3}>
        <Typography variant="h4">DELETE</Typography>
          <Box>
            <InputDeleteFetch setUserId={setUserId} userId={userId}/>
            <ButtonDeleteFetch handleDelete={handleDelete}/>
            {message && <Typography>{message}</Typography>}
          </Box>
    </StyledContainerRequistion>
  )
}

export default ContainerRequisitionDeleteFech
