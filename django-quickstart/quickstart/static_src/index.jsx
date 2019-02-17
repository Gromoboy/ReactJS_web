import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const elem = <div>Hello <b>bro</b></div>;
ReactDOM.render(
    <App param={'Hi Anto'} />,
//     elem,
    document.getElementById('root'),
);
