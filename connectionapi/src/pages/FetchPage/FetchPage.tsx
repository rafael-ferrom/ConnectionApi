import { Typography } from "@mui/material";
import { RowsTable } from "../../utils/Consts";
import { useEffect, useState } from "react";

import { createUser, deleteUser, fetchData } from "../../services/fetchUsers";
import type { IUsersJPH } from "../../models/User";
import type { CreateUserDTO } from "../../dtos/CreateUserDTO";
import ContainerRequisitionGetFetch from "../../components/ContainerRequisitionGetFetch/ContainerRequisitionGetFetch";
import ContainerRequisitionPostFetch from "../../components/ContainerRequisitionPostFetch/ContainerRequisitionPostFetch";
import ContainerRequisitionEditFetch from "../../components/ContainerRequisitionEditFetch/ContainerRequisitionEditFetch";
import ContainerRequisitionDeleteFech from "../../components/ContainerRequisitionDeleteFetch/ContainerRequisitionDeleteFech";
import TableInfos from "../../components/TableInfos/TableInfos";
import { StyledBoxPage } from "../../style/StyledBoxPage";
import { StyledBoxPageTitle } from "../../style/StyledBoxPageTitle";
import { StyledBoxPageTable } from "../../style/StyledBoxPageTable";
import { StyledGridPage } from "../../style/StyledGridPage";

const FetchPage = () => {
  const [data, setData] = useState<IUsersJPH[]>([]);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<CreateUserDTO>({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
  });
  const [userId, setUserId] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUser(formData);

      setFormData({
        name: "",
        email: "",
        username: "",
        phone: "",
        website: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar usuário");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(userId);
      setMessage("Usuário removido");
    } catch {
      setMessage("Erro ao remover usuário");
    }
  };

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        const error = err as Error;
        setError(error.message || "Erro inesperado");
      }
    }

    loadData();
  }, []);

  const specifyRequisition = RowsTable.find((opt) => opt.name === "Fetch");

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <StyledBoxPage>
      <StyledBoxPageTitle>
        <Typography variant="h1">{specifyRequisition?.name}</Typography>
      </StyledBoxPageTitle>
      <StyledBoxPageTable>
        <TableInfos specifyRequisition={specifyRequisition} />
      </StyledBoxPageTable>
      <StyledGridPage
        container
        spacing={2}
      >
        <ContainerRequisitionGetFetch title="GET" data={data} />
        <ContainerRequisitionPostFetch
          title="POST"
          formData={formData}
          handleChange={handleChange}
          handlePost={handleSubmitPost}
        ></ContainerRequisitionPostFetch>
        <ContainerRequisitionEditFetch
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
        />
        <ContainerRequisitionDeleteFech
          handleDelete={handleDelete}
          message={message}
          setUserId={setUserId}
          userId={userId}
        />
      </StyledGridPage>
    </StyledBoxPage>
  );
};

export default FetchPage;
