import { StyledButtonPostFetch } from "../../../style/StyledButtonRequisition";

interface IButtonDeleteProps{
    nameRequisition: string
}

const ButtonDelete = ({nameRequisition}:IButtonDeleteProps) => {
  return (
    <StyledButtonPostFetch
      type="submit"
      variant="contained"
      sx={{ width: "80%", height: "4rem", backgroundColor: "yellow" }}
    >
      {nameRequisition}
    </StyledButtonPostFetch>
  );
};

export default ButtonDelete;
