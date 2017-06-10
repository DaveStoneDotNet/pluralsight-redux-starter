import 'babel-polyfill';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import React              from 'react';
import { render }         from 'react-dom';
import { Router }         from 'react-router';
import { browserHistory } from 'react-router';

import routes             from './routes';

render(
    <Router history={ browserHistory } routes={ routes } />, document.getElementById('app')
);

