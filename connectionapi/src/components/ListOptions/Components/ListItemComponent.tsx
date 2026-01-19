import { StyledListItem } from "../Styled/Style"
import ListItemAvatarComponent from "./ListItemAvatarComponent"
import ListItemTextComponent from "./ListItemTextComponent"

interface IListItemComponentProps{
    img: string
    subtitle:string
    route: string
    title:string
}

const ListItemComponent = ({img, route, subtitle, title}:IListItemComponentProps) => {
  return (
    <StyledListItem>
        <ListItemAvatarComponent img={img}/>
        <ListItemTextComponent TitleRequisition={title} route={route} secondary={subtitle}/>
    </StyledListItem>
  )
}

export default ListItemComponent
