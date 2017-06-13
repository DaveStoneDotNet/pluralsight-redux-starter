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

