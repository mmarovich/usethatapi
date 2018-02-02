import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter as Router, } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store, { history } from './store/store';
import './index.css';
import App from './App';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>, 
    document.getElementById('root'));
registerServiceWorker();
