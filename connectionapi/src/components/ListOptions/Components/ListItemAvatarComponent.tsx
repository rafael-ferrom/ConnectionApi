import { Avatar, ListItemAvatar } from "@mui/material"

interface IListItemAvatarComponentProps{
    img:string
}

const ListItemAvatarComponent = ({img}:IListItemAvatarComponentProps) => {
  return (
    <ListItemAvatar>
          <Avatar src={img} alt="Imagem" />
    </ListItemAvatar>
  )
}

export default ListItemAvatarComponent
