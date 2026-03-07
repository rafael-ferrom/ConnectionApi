import { createSlice } from "@reduxjs/toolkit";
import type { toDo } from "../models/toDo";
import {
  createThunkTodo,
  deleteThunkTodo,
  editThunkTodo,
  getThunkTodo,
} from "../services/thunkTodo";

interface todoState {
  todos: toDo[];
  loading: boolean;
  error: string | null;
}

const initialState: todoState = {
  todos: [],
  error: null,
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getThunkTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getThunkTodo.fulfilled, (state, actiom) => {
        state.loading = false;
        state.todos = actiom.payload;
      })
      .addCase(getThunkTodo.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Error ao retornar  os toDo";
      })

      .addCase(createThunkTodo.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createThunkTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(createThunkTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Erro na criação";
      })

      .addCase(editThunkTodo.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(editThunkTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id,
        );

        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(editThunkTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Erro na edição";
      })
      .addCase(deleteThunkTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteThunkTodo.fulfilled, (state, action) => {
        state.loading = false;

        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })

      .addCase(deleteThunkTodo.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Erro ao deletar todo";
      });
  },
});

export default todoSlice.reducer
