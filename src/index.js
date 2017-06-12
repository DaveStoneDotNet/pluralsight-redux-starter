import 'babel-polyfill';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import React              from 'react';
import { render }         from 'react-dom';
import { Router }         from 'react-router';
import { browserHistory } from 'react-router';
import { Provider }       from 'react-redux'
;
import routes             from './routes';
import configureStore     from './store/configureStore.js';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

