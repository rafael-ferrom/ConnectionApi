import { Typography } from "@mui/material";
import { StyledBoxAxios } from "../../../style/StyledBoxAxios";
import { StyledBoxPostFetch } from "../../../style/StyledBoxRequisition";
import { StyledButtonRequisition } from "../../../style/StyledButtonRequisition";

interface IBodyRequisitionProps{
    handleUpdate: (e: React.FormEvent) => void
}

const BodyRequisition = ({handleUpdate}:IBodyRequisitionProps) => {
  return (
    <StyledBoxAxios onSubmit={handleUpdate}>
      <StyledBoxPostFetch>
        <Typography>Aqui temos um user mockado que sera enviado</Typography>
        <StyledButtonRequisition type="submit">
          Put
        </StyledButtonRequisition>
      </StyledBoxPostFetch>
    </StyledBoxAxios>
  );
};

export default BodyRequisition;
