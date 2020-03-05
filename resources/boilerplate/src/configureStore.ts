import { configureStore as createStore, DeepPartial } from "@reduxjs/toolkit";
import reducer, { State } from "./reducer";

const configureStore = (preloadedState?: DeepPartial<State>) => {
    const store = createStore({
        reducer,
        devTools: process.env.NODE_ENV !== "production" && {
            name: require("../../../package.json").name,
        },
        preloadedState,
    });

    return store;
};

export default configureStore;
