import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitalState } from "../../utils/Types";

const initialState: AppTypeInitalState = {};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
})

export const {} = AppSlice.actions;
