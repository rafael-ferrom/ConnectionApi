import { Box, styled } from "@mui/material";
import img from "../../../assets/img.jpg";

export const StyledContainerStartCard = styled(Box)({
  minHeight: "60vh",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  height: "16rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});
