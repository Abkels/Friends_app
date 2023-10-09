import {configureStore} from "@reduxjs/toolkit";
import searchRobotsReducer from "./searchRobotsSlice"

export const store = configureStore({
    reducer: {
        searchRobots: searchRobotsReducer,
        // Add other reducers if you have them
    },
});