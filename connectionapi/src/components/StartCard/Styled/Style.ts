import { Box, styled } from "@mui/material";

export const StyledContainerStartCard = styled(Box)({
  minHeight: "60vh",
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-30%", left: "-10%",
    width: "500px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30%", right: "-10%",
    width: "600px", height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  },
});