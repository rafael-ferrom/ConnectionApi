import { StyledBoxPostFetch } from '../../../style/StyledBoxRequisition'
import { Typography } from '@mui/material'
import { StyledButtonRequisition } from '../../../style/StyledButtonRequisition'

interface IBodyRequisitionProps{
  handlePost:(e: React.FormEvent) => void 
  postSubmited: boolean
}

const BodyRequisition = ({handlePost,postSubmited}:IBodyRequisitionProps) => {
  return (
    <StyledBoxPostFetch
            onSubmit={handlePost}
          >
            <StyledBoxPostFetch sx={{ margin: "1rem", textAlign: "center" }}>
              <Typography>
                Aqui temos um user mockado que sera enviado
              </Typography>
              <StyledButtonRequisition
                type="submit"
                variant="contained"
              >
                Submit
              </StyledButtonRequisition>
              {postSubmited ? (
                <Typography>Verifique o console</Typography>
              ) : (
                <></>
              )}
            </StyledBoxPostFetch>
          </StyledBoxPostFetch>
  )
}

export default BodyRequisition
