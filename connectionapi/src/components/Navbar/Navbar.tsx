import { Box, Button, Link, Typography } from "@mui/material";
import { StyledNavbar } from "./style/Style";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <StyledNavbar>
      <Typography sx={{ padding: "1rem" }} variant="h4">
        Requisition App
      </Typography>
      <Box sx={{display:"flex", justifyContent:"space-between", flexDirection:"row",alignItems: "center",width:"50%"}}>
        <Link underline="hover" sx={{color:"black"}} href="/">HOME</Link>
        <Link underline="hover" sx={{color:"black"}} href="/More">MORE</Link>
        <Link underline="hover" sx={{color:"black"}} href="/Fetch">FETCH</Link>
        <Link underline="hover" sx={{color:"black"}} href="/Axios"> AXIOS</Link>
        <Link underline="hover" sx={{color:"black"}} href="/Thunk">THUNK</Link>
        <Link underline="hover" sx={{color:"black"}} href="/RTK">RTK</Link>
      </Box>
      <Button onClick={() => navigate("/")}><HomeIcon sx={{ padding: "1rem" }}></HomeIcon></Button>
    </StyledNavbar>
  );
};

export default Navbar;
