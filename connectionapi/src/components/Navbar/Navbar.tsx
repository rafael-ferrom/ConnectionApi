import { Box, Typography } from "@mui/material";
import { StyledNavbar } from "./style/Style";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Typography sx={{ padding: "1rem" }} variant="h4">
        Requisition App
      </Typography>
      <Box sx={{display:"flex", justifyContent:"space-between", flexDirection:"row",alignItems: "center",width:"50%"}}>
        <Typography sx={{backgroundColor:"red"}}>HOME</Typography>
        <Typography>MORE</Typography>
        <Typography>FETCH</Typography>
        <Typography>AXIOS</Typography>
        <Typography>THUNK</Typography>
        <Typography>RTK</Typography>
      </Box>
      <HomeIcon sx={{ padding: "1rem" }}></HomeIcon>
    </StyledNavbar>
  );
};

export default Navbar;
