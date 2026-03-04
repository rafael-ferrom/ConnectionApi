import { createAsyncThunk } from "@reduxjs/toolkit";
import { thunkURL } from "../utils/Url";
import { type toDo } from "../models/toDo";
import axios from "axios";
import type { CreateTodoDTO } from "../dtos/CreateTodoDTO";

export const getThunkTodo = createAsyncThunk<toDo[]>( thunkURL, async(_, {rejectWithValue}) => {
    try{
        const result = await axios.get<toDo[]>(thunkURL) 
        return result.data
    }
    catch{
        return rejectWithValue("Erro ao buscar usuários");
    }
})

export const createThunkTodo = createAsyncThunk<toDo, CreateTodoDTO>(thunkURL, async ( toDo, {rejectWithValue}) => {
    try{
        const result = await axios.post<toDo>(thunkURL, toDo)
        return result.data
    }
    catch{
        return rejectWithValue("Erro ao criar usuário");
    }
}) 
