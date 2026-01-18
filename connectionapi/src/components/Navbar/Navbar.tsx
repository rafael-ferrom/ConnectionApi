import { Box, Link, Typography } from "@mui/material";
import { StyledNavbar } from "./style/Style";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {

  return (
    <StyledNavbar>
      <Typography sx={{ padding: "1rem" }} variant="h4">
        Requisition App
      </Typography>
      <Box sx={{display:"flex", justifyContent:"space-between", flexDirection:"row",alignItems: "center",width:"50%"}}>
        <Link sx={{color:"black"}} href="/">HOME</Link>
        <Link sx={{color:"black"}} href="/More">MORE</Link>
        <Link sx={{color:"black"}} href="/Fetch">FETCH</Link>
        <Link sx={{color:"black"}} href="/Axios"> AXIOS</Link>
        <Link sx={{color:"black"}} href="/Thunk">THUNK</Link>
        <Link sx={{color:"black"}} href="/RTK">RTK</Link>
      </Box>
      <HomeIcon sx={{ padding: "1rem" }}></HomeIcon>
    </StyledNavbar>
  );
};

export default Navbar;
