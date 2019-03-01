import React from 'react';
import {List, ListItem} from "material-ui";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";


class ChatList extends React.Component{
    handleChangeChat = (chatId) => {
        this.props.push(`/chat/${chatId}`);
    }
    render() {
        return (
            <List>

                <ListItem
                    primaryText='Чат №1'
                    secondaryText={this.props.messageLists[1].length || '0'}
                    onClick={() => this.handleChangeChat(1)}
                />
                <NavLink to='/chat/2' activeStyle={{color: 'red',fontWeight:'bold'}}>
                    <ListItem primaryText="Чат №2 " secondaryText={this.props.messageLists[2].length || '0'}/>
                </NavLink>

                <NavLink to='/chat/3' activeStyle={{color: 'red', fontWeight:'bold'}}>
                    <ListItem primaryText="Чат №3 " secondaryText={this.props.messageLists[3].length || '0'}/>
                </NavLink>
            </List>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.countReducer.data,
    allMessCount: state.countReducer.allMessCount,
    messageLists: state.messageReducer.messageLists,
});

const mapDispatchToProps = dispatch => bindActionCreators({push}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ChatList);

