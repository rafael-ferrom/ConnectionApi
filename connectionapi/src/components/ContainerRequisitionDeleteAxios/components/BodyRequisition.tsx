import { Typography } from "@mui/material"
import { StyledBoxAxios } from "../../../style/StyledBoxAxios"
import { StyledBoxPostFetch } from "../../../style/StyledBoxRequisition"
import { StyledButtonRequisition } from "../../../style/StyledButtonRequisition"

interface IBodyRequisitionProps{
    handleDelete: (e: React.FormEvent) => void
}

const BodyRequisition = ({handleDelete}:IBodyRequisitionProps) => {
  return (
    <StyledBoxAxios
            onSubmit={handleDelete}
          >
            <StyledBoxPostFetch>
              <Typography>
                Aqui temos um user mockado que sera enviado
              </Typography>
              <StyledButtonRequisition
                type="submit"
              >
                Delete
              </StyledButtonRequisition>
            </StyledBoxPostFetch>
          </StyledBoxAxios>
  )
}

export default BodyRequisition
