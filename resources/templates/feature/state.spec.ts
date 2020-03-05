import { reducer } from "./state";

describe("${{ name }} state", () => {
    describe(`actions`, () => {});

    describe(`reducer`, () => {
        describe(`initial state`, () => {
            it(`should have the correct initial state`, () => {
                const expectedState = {};
                const state = reducer(undefined, { type: "@@INIT" });
                expect(state).toEqual(expectedState);
            });
        });
    });

    describe(`selectors`, () => {});
});
