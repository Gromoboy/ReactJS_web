import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <App param={'Hello Anton from Metro'}/>
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
