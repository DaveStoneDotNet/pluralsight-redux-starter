
import { createStore }                  from 'redux';
import { applyMiddleware }              from 'redux';
import { reduxImmutableStateInvariant } from 'redux-immutable-state-invariant';

import rootReducer                      from '../reducers';

export default function configureStore(initialState) {
    //return createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant()));
    return createStore(rootReducer, initialState);
}

// Instructions were provided to add the 'applyMiddleware' bits, but no description 
// was provided for exactly what 'reduxImmutableStateInvariant' is or why it's needed 
// and in the subsequent video, the 'applyMiddleware' bits went missing. Further
// instruction was then provided to chedk out the 'react-slingshot' repository on 
// GitHub for this and other middle-ware configurations.