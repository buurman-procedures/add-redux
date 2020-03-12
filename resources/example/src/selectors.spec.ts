import { State } from "./reducer";
import { getCount } from "./selectors";

const state: State = {
    counter: { count: 10 },
};

describe(`selectors`, () => {
    describe(`counter`, () => {
        describe(`getCount`, () => {
            it(`should get the count`, () => {
                expect(getCount(state)).toBe(state.counter.count);
            });
        });
    });
});
