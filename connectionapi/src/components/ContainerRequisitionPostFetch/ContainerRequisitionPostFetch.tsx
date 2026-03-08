import { Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import type { CreateUserDTO } from "../../dtos/CreateUserDTO";
import FormFieldsPostFetch from "./components/FormFieldsPostFetch";
import type { IinfoFieldsFormProps } from "../../types";

interface IContainerPostFetchProps {
  title: string;
  formData: CreateUserDTO;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePost: (e: React.FormEvent) => void
}

const ContainerRequisitionPostFetch = ({
  title,
  formData,
  handleChange,
  handlePost
}: IContainerPostFetchProps) => {

    
    const infoFieldsForm:IinfoFieldsFormProps[] =[{
        label:"nome",
        name: "name",
        value:formData.name,
        handleChange: handleChange
    },{
        label:"E-mail",
        name:"email",
        value:formData.email,
        handleChange: handleChange
    },{
        label:"username",
        name:"username",
        value: formData.username,
        handleChange: handleChange
    },{
        label:"Website",
        name:"website",
        value: formData.website,
        handleChange: handleChange
    },{
        label:"Phone",
        name:"phone",
        value: formData.phone,
        handleChange: handleChange
    }]
    

  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">{title}</Typography>
      <FormFieldsPostFetch infoFields={infoFieldsForm} handleSubmitPost={handlePost}>
      </FormFieldsPostFetch>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionPostFetch;
