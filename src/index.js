
/* eslint-disable import/default */

// Linting rules exist which indicate you can't import a file which doesn't have a default export.
// The 'index.js' file dynamically 'imports' the 'configureStore' bits, however, dynamic imports aren't supported by ES6.
// Because of this, the  'index.js' file uses 'require' instead of 'import' which would cause a linting error here.
// The 'eslint-disable import/default' above is used to prevent this linting error.

import 'babel-polyfill';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';

import React              from 'react';
import { render }         from 'react-dom';
import { Router }         from 'react-router';
import { browserHistory } from 'react-router';
import { Provider }       from 'react-redux';

import routes             from './routes';
import configureStore     from './store/configureStore.js';
import { loadCourses }    from './actions/courseActions';
import { loadAuthors }    from './actions/authorActions';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

