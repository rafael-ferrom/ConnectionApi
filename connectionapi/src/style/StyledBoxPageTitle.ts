import { Box, styled } from "@mui/material";

export const StyledBoxPageTitle = styled(Box)({
  width: "60%",
  height: "auto",
  margin: "3rem 0 1.5rem",
  textAlign: "center",
  "& h1": {
    fontSize: "3rem",
    fontWeight: 800,
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
  },
});