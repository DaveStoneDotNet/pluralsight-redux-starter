
// The Root Reducer

// All the other reducers define a 'slice' or sub-section of the entire state which is combined here.

import { combineReducers } from 'redux';
import courses             from './courseReducer';
import authors             from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// The property names assigned here affects the way state is accessed throughout the application. 
// For example, you could change the name 'courses' below to 'monkey' and it would be referenced as 'state.monkey' instead of 'state.courses'.
// Similarly, you could call it 'courseReducer', but then you would have to reference it as 'state.courseReducer', which could be considered awkward.

const rootReducer = combineReducers({
                                        courses:             courses, 
                                        authors:             authors, 
                                        ajaxCallsInProgress: ajaxCallsInProgress
                                    });

export default rootReducer;