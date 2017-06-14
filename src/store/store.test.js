import expect             from 'expect';
import { createStore }    from 'redux';

import rootReducer        from '../reducers/index';
import initialState       from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
    it('should handle creating courses', () => {

        // arrange - Start out with an 'empty' store via 'initialState'...
        const store = createStore(rootReducer, initialState);

        // act - Add one arbitrary course to the store - 'Clean Code'...
        const course = { title: 'Clean Code' };
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // assert - Get the first (and only) course added above from the store...
        const actual = store.getState().courses[0];
        const expected = { title: 'Clean Code' };
        expect(actual).toEqual(expected);
    });
});