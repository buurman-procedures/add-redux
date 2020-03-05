import { createSelector } from "@reduxjs/toolkit";

export type Selector<TState, TResult> = (state: TState) => TResult;

export type SelectorMap<TState> = {
    [name: string]: Selector<TState, unknown>;
};

export type BoundSelectors<
    TRootState,
    TName extends keyof TRootState,
    TSelectors extends SelectorMap<TRootState[TName]>
> = {
    [P in keyof TSelectors]: Selector<TRootState, ReturnType<TSelectors[P]>>;
};

const ReduxUtil = <TRootState>() => ({
    createSelectors: <
        TName extends keyof TRootState = keyof TRootState,
        TSelectors extends SelectorMap<TRootState[TName]> = SelectorMap<
            TRootState[TName]
        >
    >(
        name: TName,
        selectors: TSelectors,
    ): BoundSelectors<TRootState, TName, TSelectors> =>
        Object.entries(selectors).reduce(
            (selectors, [key, selector]) => ({
                ...selectors,
                [key]: createSelector(
                    (state: TRootState) => state[name],
                    selector,
                ),
            }),
            {} as BoundSelectors<TRootState, TName, TSelectors>,
        ),
});

export default ReduxUtil;
