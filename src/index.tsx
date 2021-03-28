import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index'
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {history} from './store/index'
import {ConnectedRouter} from 'connected-react-router'
import './style.css'

ReactDOM.render(
  <Provider store={store}><ConnectedRouter history={history}><Routes /></ConnectedRouter></Provider>, document.getElementById('root')
);
