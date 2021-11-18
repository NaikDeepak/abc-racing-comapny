import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
};

const ATHLETE_API = "https://api.jsonserve.com/3Hr5Hu";

export const getAthletes = createAsyncThunk(
  "athletes/getAthletes",
  async () => {
    const res = await fetch(ATHLETE_API).then((data) => data.json());
    return res;
  }
);

export const athleteSlice = createSlice({
  name: "athletes",
  initialState,
  reducers: {},
  extraReducers: {
    [getAthletes.pending]: (state) => {
      state.loading = true;
    },
    [getAthletes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload?.rankings[0]?.competitor_rankings;
    },
    [getAthletes.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const athleteReducer = athleteSlice.reducer;
