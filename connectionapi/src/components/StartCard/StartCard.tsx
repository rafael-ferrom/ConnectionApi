import { Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { StyledContainerStartCard } from "./Styled/Style";

const StartCard = () => {
  const navigate = useNavigate();
  return (
    <StyledContainerStartCard>
      <Typography variant="h2" color="white">
        Requisition App
      </Typography>
      <Typography variant="h5" color="white" sx={{ marginTop: "1rem" }}>
        Essa aplicação busca mostrar formas de como consumir uma API e suas
        vantagens e desvantagens
      </Typography>
      <Button
        onClick={() => navigate("/More")}
        sx={{ color: "white", backgroundColor: "orange", marginTop: "2rem" }}
      >
        Learn more
      </Button>
    </StyledContainerStartCard>
  );
};

export default StartCard;
