import { Button, Typography } from "@mui/material"
import { StyledBoxAxios } from "../../../style/StyledBoxAxios"
import { StyledBoxPostFetch } from "../../../style/StyledBoxRequisition"

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
              <Button
                type="submit"
                sx={{ backgroundColor: "blue", width: "10rem" }}
              >
                Delete
              </Button>
            </StyledBoxPostFetch>
          </StyledBoxAxios>
  )
}

export default BodyRequisition
