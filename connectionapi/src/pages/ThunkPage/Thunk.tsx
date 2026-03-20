import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { RowsTable } from "../../utils/Consts";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import {
  createThunkTodo,
  deleteThunkTodo,
  editThunkTodo,
  getThunkTodo,
} from "../../services/thunkTodo";
import type { CreateTodoDTO } from "../../dtos/CreateTodoDTO";
import type { toDo } from "../../models/toDo";
import TableInfos from "../../components/TableInfos/TableInfos";
import ContainerRequisitionFetchThunk from "../../components/ContainerRequisitionFetchThunk/ContainerRequisitionFetchThunk";
import ContainerRequisitionPostThunk from "../../components/ContainerRequisitionPostThunk/ContainerRequisitionPostThunk";
import ContainerRequisitionEditThunk from "../../components/ContainerRequisitionEditThunk/ContainerRequisitionEditThunk";

const Thunk = () => {
  const specifyRequisition = RowsTable.find((opt) => opt.name === "Thunk");
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  const todo: toDo = {
    id: 100,
    userId: 11,
    title: "New",
    completed: false,
  };

  const mockTodo: CreateTodoDTO = {
    userId: 11,
    title: "New mock",
    completed: true,
  };

  const handleDelete = (id: number) => {
    dispatch(deleteThunkTodo(id));
  };

  useEffect(() => {
    dispatch(getThunkTodo());
  }, []);

  const handleCreate = () => {
    dispatch(createThunkTodo(mockTodo));
  };

  const handleEdit = (todo: toDo) => {
    const updateTodo: toDo = {
      ...todo,
      title: "titulo atalizado",
    };
    dispatch(editThunkTodo(updateTodo));
  };

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
        <TableInfos specifyRequisition={specifyRequisition} />
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
        <ContainerRequisitionFetchThunk todos={todos}/>
        <ContainerRequisitionPostThunk handleCreate={handleCreate}/>
        <ContainerRequisitionEditThunk handleEdit={handleEdit} todo={todo}/>
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
          <Typography variant="h4">Delete</Typography>
          <Button
            onClick={() => handleDelete(5)}
            sx={{ backgroundColor: "blue", alignItems: "end", width: "10rem" }}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Thunk;
