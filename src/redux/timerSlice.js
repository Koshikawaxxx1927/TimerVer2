import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        times: [
            {
                id: uuidv4(),
                min: "",
                sec: "",
            },
        ],
    },
    reducers: {
        addTimer: (state) => {
            state.times.push({ id: uuidv4(), min: "", sec: "" });
        },
        removeTimer: (state, { payload }) => {
            const { id } = payload;
            console.log("id " + id);
            if (state.times.length > 1) {
                state.times = state.times.filter((time) => {
                    return time.id !== id;
                });
            }
        },
        updateMin: (state, { payload }) => {
            const { id, min } = payload;
            state.times.filter((time) => time.id === id)[0].min = min;
        },
        updateSec: (state, { payload }) => {
            const { id, sec } = payload;
            state.times.filter((time) => time.id === id)[0].sec = sec;
        },
    },
});

export const { addTimer, removeTimer, updateMin, updateSec } =
    timerSlice.actions;
export default timerSlice.reducer;
