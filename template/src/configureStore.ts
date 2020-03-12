import { configureStore as createStore, DeepPartial } from "@reduxjs/toolkit";
import { reducer, State } from "./reducer";

export const configureStore = (preloadedState?: DeepPartial<State>) => {
    const store = createStore({
        reducer,
        preloadedState,
    });

    return store;
};
