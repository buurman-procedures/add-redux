import { configureStore as createStore, DeepPartial } from "@reduxjs/toolkit";
import { reducer, State } from "./reducer";

export const configureStore = (preloadedState?: DeepPartial<State>) => {
    const store = createStore({
        reducer,
        preloadedState,
        ${{
            !inputs.devtools
                ? ``
                : `devtools: ` + [
                    !inputs.devtoolsInProduction && `process.env.NODE_ENV !== "production"`,
                    `{ name: require("../../../package.json").name }`,
                ].filter(Boolean)
                .join(" && ")
        }}
    });

    return store;
};
