
import { createStore }              from 'redux';
import { applyMiddleware }          from 'redux';
import { compose }                  from 'redux';
import thunk                        from 'redux-thunk';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer                  from '../reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}

// Instructions were provided to add the 'applyMiddleware' bits, but no description 
// was provided for exactly what 'reduxImmutableStateInvariant' is or why it's needed 
// and in the subsequent video, the 'applyMiddleware' bits went missing. Further
// instruction was then provided to chedk out the 'react-slingshot' repository on 
// GitHub for this and other middle-ware configurations.
// 
// Much later, in the 'Add Thunk to Store', the 'applyMiddleware' bits came back, with Thunk, 
// and like before the 'reduxImmutableStateInvariant' broke the app: 
// 
//      Uncaught TypeError: (0 , _reduxImmutableStateInvariant.reduxImmutableStateInvariant) is not a function
//
// Then... looking at a version in 'Create Load Courses Thunk', the import to 'redux-immutable-state-invariant'
// went missing and a 'compose' was added. So... not sure if I wasn't paying attention and 
// missed something or if this was some kind of flaw in the course.
//
// Finally... now believe I may have had some kind of type-o. Went to the react-slingshot source on 
// github and did a copy-paste on the 'reduxImmutableStateInvariant' and the app started working.
// May want to do a source control compare to see if I can figure out the differences.

