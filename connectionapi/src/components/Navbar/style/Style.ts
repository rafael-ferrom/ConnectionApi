import { Box, styled } from "@mui/material";

export const StyledNavbar = styled(Box)({
  width: "100%",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem",
  background: "rgba(15, 23, 42, 0.85)",
  borderBottom: "1px solid rgba(56, 189, 248, 0.15)",
  backdropFilter: "blur(12px)",
  position: "sticky",
  top: 0,
  zIndex: 100,
  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
});