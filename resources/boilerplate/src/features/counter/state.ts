import { createSlice } from "@reduxjs/toolkit";

export interface State {
    count: number;
}

export const { actions, reducer } = createSlice({
    name: "counter",
    initialState: { count: 0 } as State,
    reducers: {
        increment: state => ({ ...state, count: state.count + 1 }),
        decrement: state => ({ ...state, count: state.count - 1 }),
    },
});

export const selectors = {
    getCount: (state: State) => state.count,
};
