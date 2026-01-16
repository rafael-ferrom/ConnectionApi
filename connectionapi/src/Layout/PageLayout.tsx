import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PageLayout = () => {

  return (
    <Box 
  sx={{ 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column' 
  }}
>
  
  <Box sx={{ 
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    position: 'relative', 
    width: '100%',
  }}>
    <Navbar></Navbar>
    <Outlet>
      
    </Outlet>
    <Footer></Footer>
  </Box>
  
</Box>
  );
};

export default PageLayout;