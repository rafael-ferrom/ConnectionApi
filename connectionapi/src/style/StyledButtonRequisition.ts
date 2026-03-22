import { Button, styled } from "@mui/material";

export const StyledButtonRequisition = styled(Button)({
  width: "80%",
  height: "3.2rem",
  margin: "1rem",
  borderRadius: "10px",
  fontWeight: 700,
  fontSize: "0.85rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
  color: "#0f172a",
  border: "none",
  boxShadow: "0 4px 16px rgba(56, 189, 248, 0.25)",
  transition: "all 0.2s ease",

  "&:hover": {
    background: "linear-gradient(135deg, #7dd3fc 0%, #a5b4fc 100%)",
    boxShadow: "0 6px 24px rgba(56, 189, 248, 0.4)",
    transform: "translateY(-2px)",
  },

  "&:active": {
    transform: "translateY(0px)",
    boxShadow: "0 2px 8px rgba(56, 189, 248, 0.2)",
  },
});