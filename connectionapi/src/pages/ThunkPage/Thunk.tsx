import { Typography } from "@mui/material";
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
import ContainerRequisitionDeleteThunk from "../../components/ContainerRequisitionDeleteThunk/ContainerRequisitionDeleteThunk";
import { StyledBoxPage } from "../../style/StyledBoxPage";
import { StyledBoxPageTitle } from "../../style/StyledBoxPageTitle";
import { StyledBoxPageTable } from "../../style/StyledBoxPageTable";
import { StyledGridPage } from "../../style/StyledGridPage";

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
        <ContainerRequisitionFetchThunk todos={todos} />
        <ContainerRequisitionPostThunk handleCreate={handleCreate} />
        <ContainerRequisitionEditThunk handleEdit={handleEdit} todo={todo} />
        <ContainerRequisitionDeleteThunk handleDelete={handleDelete} />
      </StyledGridPage>
    </StyledBoxPage>
  );
};

export default Thunk;
