import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{}
})

type RootState = ReturnType<typeof store.getState>
type Dispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<Dispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()