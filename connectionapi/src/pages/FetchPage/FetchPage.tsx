import {
  Box,
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ColumnTable, RowsTable } from "../../utils/Consts";
import { useEffect, useState } from "react";

import { createUser, deleteUser, fetchData, updateUser } from "../../services/fetchUsers";
import type { IUsersJPH } from "../../models/User";
import type { CreateUserDTO } from "../../dtos/CreateUserDTO";
import type { UpdateUserDTO } from "../../dtos/UpdateUserDTO";

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
  const [message, setMessage] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUser(formData);

      // Limpar o formulário após sucesso
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
    await deleteUser(userId)
    setMessage("Usuário removido")
  } catch {
    setMessage("Erro ao remover usuário")
  }
}

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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          backgroundColor: "green",
          width: "40%",
          height: "8rem",
          margin: "2rem",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography variant="h1">{specifyRequisition?.name}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "blue",
          width: "80%",
          height: "8rem",
          margin: "2rem",
        }}
      >
        <TableContainer sx={{ border: "2px solid red" }}>
          <Table>
            <TableHead>
              <TableRow>
                {ColumnTable.map((col) => (
                  <TableCell key={col.id}>{col.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={specifyRequisition?.id}>
                <TableCell>{specifyRequisition?.name}</TableCell>
                <TableCell>
                  {specifyRequisition?.hasExternalLib ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.hasAutomaticCache ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.hasLoading ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.goodForBigProjects ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.bigLearningCourve ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Grid
        sx={{
          width: "80%",
          height: "40rem",
          marginBottom: "2rem",
          textAlign: "center",
          backgroundColor: "gray",
        }}
        container
        spacing={2}
      >
        <Grid
          size={3}
          sx={{
            border: "1px solid #ddd",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Divisao 3</Typography>
          {data?.map((dt) => (
            <Typography>{dt.name}</Typography>
          ))}
          <Button
            sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
          >
            Get
          </Button>
        </Grid>
        <Grid
          size={3}
          sx={{
            border: "1px solid #ddd",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Divisao 3</Typography>
          <Box component="form" onSubmit={handleSubmitPost}>
            <Box>
              <TextField
                label="nome"
                name="name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              ></TextField>
            </Box>
            <Box>
              <TextField
                label="E-mail"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              ></TextField>
            </Box>
            <Box>
              <TextField
                label="username"
                name="username"
                type="username"
                variant="outlined"
                fullWidth
                value={formData.username}
                onChange={handleChange}
              ></TextField>
            </Box>
            <Box>
              <TextField
                label="Website"
                name="website"
                type="website"
                variant="outlined"
                fullWidth
                value={formData.website}
                onChange={handleChange}
              ></TextField>
            </Box>
            <Box>
              <TextField
                label="Phone"
                name="phone"
                type="phone"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
              ></TextField>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "80%", height: "4rem", backgroundColor: "yellow" }}
            >
              AAAAAA
            </Button>
          </Box>
          <Button
            sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
          >
            Post
          </Button>
        </Grid>
        <Grid
          size={3}
          sx={{
            border: "1px solid #ddd",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Divisao 3</Typography>
          <Box component="form" onSubmit={handleSubmitPut}>
            <Box>
              <TextField
                type="number"
                value={userId}
                label="ID"
                onChange={(e) => setUserId(Number(e.target.value))}
              ></TextField>
            </Box>
            <Box>
              <TextField
                type="text"
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </Box>
            <Box>
              <TextField
                type="email"
                value={email}
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </Box>
            <Button type="submit"
              sx={{ width: "80%", height: "4rem", backgroundColor: "yellow" }}
            >
              Put
            </Button>
          </Box>
          <Button
            sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
          >
            Put
          </Button>
        </Grid>
        <Grid
          size={3}
          sx={{
            border: "1px solid #ddd",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Divisao 3</Typography>
          <Box>
            <TextField type="number" value={userId} onChange={e => setUserId(Number(e.target.value))} label="ID do usuário">

            </TextField>
            <Button onClick={handleDelete} sx={{ width: "80%", height: "4rem", backgroundColor: "yellow" }}>
              Delete
            </Button>
            {message && <Typography>{message}</Typography>}
          </Box>
          <Button
            sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FetchPage;
