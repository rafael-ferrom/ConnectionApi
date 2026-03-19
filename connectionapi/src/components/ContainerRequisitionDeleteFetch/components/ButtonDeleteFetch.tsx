import { StyledButtonRequisition } from "../../../style/StyledButtonRequisition"

interface IButtonDeleteFetchProps{
    handleDelete: () => void
}

const ButtonDeleteFetch = ({handleDelete}:IButtonDeleteFetchProps) => {
  return (
    <StyledButtonRequisition onClick={handleDelete} variant="contained"/>
  )
}

export default ButtonDeleteFetch
