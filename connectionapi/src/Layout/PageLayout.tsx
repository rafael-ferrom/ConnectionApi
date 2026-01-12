import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

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
    width: '100%'
  }}>
    <Outlet></Outlet>
  </Box>
  
</Box>
  );
};

export default PageLayout;