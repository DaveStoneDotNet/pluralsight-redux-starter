
import { createStore }     from 'redux';
import { applyMiddleware } from 'redux';
import { compose }         from 'redux';
import thunk               from 'redux-thunk';

import rootReducer         from '../reducers';

// Varies from the DEV version by removing the 'redux-immutable-state-invariant' bits.

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
