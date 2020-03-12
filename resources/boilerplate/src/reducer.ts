import { AnyAction } from "redux";

export type State = ReturnType<typeof reducer>;

export const reducer = (state = {}, action: AnyAction) => state;
