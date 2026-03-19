import { Box } from "@mui/material";
import SectionFormFieldsPost from "./SectionFormFieldsPost";
import type { IinfoFieldsFormProps } from "../../../types";
import { StyledButtonRequisition } from "../../../style/StyledButtonRequisition";

interface IFormFieldPostFetch {
  handleSubmitPost: (e: React.FormEvent) => void;
  infoFields: IinfoFieldsFormProps[];
}

const FormFieldsPostFetch = ({
  handleSubmitPost,
  infoFields,
}: IFormFieldPostFetch) => {
  return (
    <Box component="form" onSubmit={handleSubmitPost}>
      <SectionFormFieldsPost infoFields={infoFields}></SectionFormFieldsPost>
      <StyledButtonRequisition type="submit" variant="contained">
        {"POST"}
      </StyledButtonRequisition>
    </Box>
  );
};

export default FormFieldsPostFetch;
