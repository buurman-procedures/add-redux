import { actions, reducer, selectors } from "./state";

describe("counter state", () => {
    describe(`actions`, () => {
        describe(`increment`, () => {
            it(`should increment the count by 1`, () => {
                const action = actions.increment();
                expect(action.type).toBe("counter/increment");
            });
        });

        describe(`decrement`, () => {
            it(`should decrement the count by 1`, () => {
                const action = actions.decrement();
                expect(action.type).toBe("counter/decrement");
            });
        });
    });

    describe(`reducer`, () => {
        describe(`initial state`, () => {
            it(`should have the correct initial state`, () => {
                const expectedState = { count: 0 };
                const state = reducer(undefined, { type: "@@INIT" });
                expect(state).toEqual(expectedState);
            });
        });

        describe(`increment`, () => {
            it(`should increment the count by 1`, () => {
                const action = { type: "counter/increment" };
                const state = reducer({ count: 0 }, action);
                expect(state.count).toBe(1);
            });
        });
        describe(`decrement`, () => {
            it(`should decrement the count by 1`, () => {
                const action = { type: "counter/decrement" };
                const state = reducer({ count: 0 }, action);
                expect(state.count).toBe(-1);
            });
        });
    });

    describe(`selectors`, () => {
        describe(`getCount`, () => {
            it(`should get the count`, () => {
                const expectedCount = 23;
                const count = selectors.getCount({ count: expectedCount });
                expect(count).toBe(expectedCount);
            });
        });
    });
});
