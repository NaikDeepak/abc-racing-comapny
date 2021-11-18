import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
};

const RACE_API = "https://api.jsonserve.com/-_6spP";

export const getRaces = createAsyncThunk("races/getRaces", async () => {
  const res = await fetch(RACE_API).then((data) => data.json());
  return res;
});

export const raceSlice = createSlice({
  name: "races",
  initialState,
  reducers: {},
  extraReducers: {
    [getRaces.pending]: (state) => {
      state.loading = true;
    },
    [getRaces.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload?.stages;
    },
    [getRaces.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const raceReducer = raceSlice.reducer;
