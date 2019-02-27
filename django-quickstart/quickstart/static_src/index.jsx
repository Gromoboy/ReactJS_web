import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import initStore from './utils/store';

ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <MuiThemeProvider>
                <App param={'Hello Anton from Metro'}/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
