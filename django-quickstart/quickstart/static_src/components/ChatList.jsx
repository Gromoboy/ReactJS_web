import React from 'react';
import {List, ListItem} from "material-ui";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


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
                <div>Сообщение №{this.props.allMessCount}: {this.props.data}</div>
            </List>
        );
    }
}

const mapStateToProps = ({ countReducer}) => ({
    data: countReducer.data,
    allMessCount: countReducer.allMessCount,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ChatList);

