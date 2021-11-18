import { configureStore } from '@reduxjs/toolkit';
import { athleteReducer } from '../reducerSlice/athleteSlice';
import { raceReducer } from '../reducerSlice/raceSlice';
import { videoReducer } from '../reducerSlice/videoSlice';

export const store = configureStore({
  reducer: {
    athletes: athleteReducer,
    videos: videoReducer,
    races: raceReducer,
  },
});
