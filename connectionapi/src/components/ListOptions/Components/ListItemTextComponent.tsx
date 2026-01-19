
import { StyledLink, StyledListItemText } from "../Styled/Style"

interface IListItemTextComponentProps{
    secondary: string
    TitleRequisition: string
    route: string
}

const ListItemTextComponent = ({secondary,TitleRequisition,route}: IListItemTextComponentProps) => {
  return (
    <StyledListItemText primary={
        <StyledLink  underline="hover" href={route}>{TitleRequisition}</StyledLink>
    }
    secondary={secondary}>
    </StyledListItemText>
  )
}

export default ListItemTextComponent
