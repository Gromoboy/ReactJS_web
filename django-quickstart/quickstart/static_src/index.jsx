import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import initStore from './utils/store';

import {routerMiddleware} from "react-router-redux";
import {ConnectedRouter} from "react-router-redux";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleWare = routerMiddleware(history);

ReactDOM.render(
    <Provider store={initStore([middleWare])}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <App param={'Hello Anton from Metro'}/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
