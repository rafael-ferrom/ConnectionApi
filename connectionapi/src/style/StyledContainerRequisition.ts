import { Grid, styled } from "@mui/material";

export const StyledContainerRequistion = styled(Grid)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "1.5rem",
  borderRadius: "14px",
  backgroundColor: "rgba(30, 41, 59, 0.7)",
  border: "1px solid rgba(56, 189, 248, 0.15)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
  overflow: "hidden",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",

  // Barra colorida no topo de cada card
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    borderRadius: "14px 14px 0 0",
  },

  // Hover sutil
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
    borderColor: "rgba(56, 189, 248, 0.35)",
  },
});