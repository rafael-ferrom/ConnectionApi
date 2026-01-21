import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



  const PageLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1,
          width: "100%",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default PageLayout;