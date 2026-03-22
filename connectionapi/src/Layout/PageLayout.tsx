import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PageLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, py: 4, position: "relative",
          "&::before": { content: '""', position: "fixed", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 },
          "&::after": { content: '""', position: "fixed", bottom: "-20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 },
      }}>
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageLayout;