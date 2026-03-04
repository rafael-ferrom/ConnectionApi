import { createAsyncThunk } from "@reduxjs/toolkit";
import { thunkURL } from "../utils/Url";
import { type toDo } from "../models/toDo";
import axios from "axios";

export const getThunkPost = createAsyncThunk<toDo[]>( thunkURL, async(_, {rejectWithValue}) => {
    try{
        const result = await axios.get<toDo[]>(thunkURL) 
        return result.data
    }
    catch{
        return rejectWithValue("Erro ao buscar usuários");
    }
})