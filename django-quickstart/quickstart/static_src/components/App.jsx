import React from 'react';
import '../styles.css';
import Layout from './Layout'
import {Switch, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Layout}/>
                <Route exact path='/chat/:chatId'
                       render={obj => <Layout chatId={obj.match.params.chatId}/>}
                />
            </Switch>
        );
    }
}

export default App;
