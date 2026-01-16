
import {  Typography } from "@mui/material"
import { StyledNavbar } from "./style/Style"
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <StyledNavbar>
        <Typography sx={{ padding: "1rem"}} variant="h4">Requisition App</Typography>
        <HomeIcon sx={{ padding: "1rem"}}></HomeIcon>
       
    </StyledNavbar>
  )
}

export default Navbar
