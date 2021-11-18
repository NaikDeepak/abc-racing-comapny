import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
};

const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=tour%20de@20france%20vuelta&key=AIzaSyBv5lXjN0s9YhFVLAjtBncs_wbg8A3aEEc";

export const getVideos = createAsyncThunk("videos/getVideos", async () => {
  const res = await fetch(VIDEO_API).then((data) => data.json());
  return res;
});

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.loading = true;
    },
    [getVideos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload.items;
    },
    [getVideos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const videoReducer = videoSlice.reducer;
