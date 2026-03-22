import { Typography } from "@mui/material";
import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import FormFieldDeleteFetch from "./components/FormFieldEditFetch";
import { useState } from "react";
import type { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { updateUser } from "../../services/fetchUsers";

interface IContainerRequisitionFetchProps{
    name: string
    email: string
    setName: (value: string) => void
    setEmail: (value: string) => void
}

const ContainerRequisitionEditFetch = ({name,email,setName,setEmail}:IContainerRequisitionFetchProps) => {
  const [userId, setUserId] = useState<number>(1);

  const handleSubmitPut = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: UpdateUserDTO = {
      name,
      email,
    };

    try {
      await updateUser(userId, payload);
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
    }
  };
  return (
    <StyledContainerRequistion
      size={3}
    >
      <Typography variant="h4">PUT</Typography>
      <FormFieldDeleteFetch
        handleSubmit={handleSubmitPut}
        email={email}
        name={name}
        userId={userId}
        setEmail={setEmail}
        setName={setName}
        setUserId={setUserId}
      ></FormFieldDeleteFetch>
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionEditFetch;
