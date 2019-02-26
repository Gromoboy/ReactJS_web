import React from 'react';
import {List, ListItem} from "material-ui";
import {NavLink} from "react-router-dom";


class ChatList extends React.Component{
    render() {
        return (
            <List>
                <NavLink to='/chat/1' activeStyle={{color: 'red',}}>
                    <ListItem primaryText='Чат №1'/>
                </NavLink>
                <NavLink to='/chat/2' activeStyle={{color: 'red',}}>
                    <ListItem primaryText="Чат №2 "/>
                </NavLink>

                <NavLink to='/chat/3' activeStyle={{color: 'red',}}>
                    <ListItem primaryText="Чат №3 "/>
                </NavLink>
            </List>
        );
    }
}

export default ChatList;

