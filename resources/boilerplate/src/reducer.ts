import { combineReducers } from "@reduxjs/toolkit";
import { reducer as counter } from "./features/counter/state";

export type State = ReturnType<typeof reducer>;

const reducer = combineReducers({
    counter,
});

export default reducer;
