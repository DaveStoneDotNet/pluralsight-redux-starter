
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {

    switch (action.type) {

        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];

        case types.UPDATE_COURSE_SUCCESS:
            
            // Confusing but accurate. You want to make a copy of the entire 'courses' array EXCLUDING (!==) 
            // the course you're updating. You then want to add a copy of the course being updated to the 
            // array. This is all in an effort to avoid mutating state.
            
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)];

        default:
            return state;    
    }
}