import { Box, styled } from "@mui/material";

export const StyledFooter = styled(Box)({
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "rgba(15, 23, 42, 0.9)",
  borderTop: "1px solid rgba(56, 189, 248, 0.15)",
  backdropFilter: "blur(8px)",
  color: "#64748b",
});