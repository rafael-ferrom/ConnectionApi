import { Button, Typography } from "@mui/material";
import { StyledBoxAxios } from "../../../style/StyledBoxAxios";
import { StyledBoxPostFetch } from "../../../style/StyledBoxRequisition";

interface IBodyRequisitionProps{
    handleUpdate: (e: React.FormEvent) => void
}

const BodyRequisition = ({handleUpdate}:IBodyRequisitionProps) => {
  return (
    <StyledBoxAxios onSubmit={handleUpdate}>
      <StyledBoxPostFetch>
        <Typography>Aqui temos um user mockado que sera enviado</Typography>
        <Button sx={{ backgroundColor: "blue", width: "10rem" }} type="submit">
          Put
        </Button>
      </StyledBoxPostFetch>
    </StyledBoxAxios>
  );
};

export default BodyRequisition;
