import { StyledButtonRequisition } from "../../../style/StyledButtonRequisition";

interface IButtonDeleteProps{
    nameRequisition: string
}

const ButtonDelete = ({nameRequisition}:IButtonDeleteProps) => {
  return (
    <StyledButtonRequisition
      type="submit"
      variant="contained"
      sx={{ width: "80%", height: "4rem", backgroundColor: "yellow" }}
    >
      {nameRequisition}
    </StyledButtonRequisition>
  );
};

export default ButtonDelete;
