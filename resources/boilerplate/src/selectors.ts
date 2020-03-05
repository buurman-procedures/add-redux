import ReduxUtil from "./core/utils/ReduxUtil";
import { selectors as counter } from "./features/counter/state";
import { State } from "./reducer";

const { createSelectors } = ReduxUtil<State>();

export const { getCount } = createSelectors("counter", counter);
