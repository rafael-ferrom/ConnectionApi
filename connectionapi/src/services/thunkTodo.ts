import { createAsyncThunk } from "@reduxjs/toolkit";
import { thunkURL } from "../utils/Url";
import { type toDo } from "../models/toDo";
import axios from "axios";
import type { CreateTodoDTO } from "../dtos/CreateTodoDTO";

export const getThunkTodo = createAsyncThunk<toDo[]>(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get<toDo[]>(thunkURL);
      return result.data;
    } catch {
      return rejectWithValue("Erro ao buscar usuários");
    }
  }
);

export const createThunkTodo = createAsyncThunk<toDo, CreateTodoDTO>(
  "todos/createTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const result = await axios.post<toDo>(thunkURL, todo);
      return result.data;
    } catch {
      return rejectWithValue("Erro ao criar usuário");
    }
  }
);

export const deleteThunkTodo = createAsyncThunk<number, number>(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${thunkURL}/${id}`);
      return id;
    } catch {
      return rejectWithValue("Erro ao deletar usuário");
    }
  }
);

export const editThunkTodo = createAsyncThunk<toDo, toDo>(
  "todos/editTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const result = await axios.put(`${thunkURL}/${todo.id}`, todo);
      return result.data;
    } catch {
      return rejectWithValue("Erro ao editar usuário");
    }
  }
);
