import { StyledButtonPostFetch } from "../../../style/StyledButtonRequisition"

interface IButtonDeleteFetchProps{
    handleDelete: () => void
}

const ButtonDeleteFetch = ({handleDelete}:IButtonDeleteFetchProps) => {
  return (
    <StyledButtonPostFetch onClick={handleDelete} variant="contained"/>
  )
}

export default ButtonDeleteFetch
