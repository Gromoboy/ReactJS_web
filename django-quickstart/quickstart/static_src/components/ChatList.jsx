import React from 'react';
import {List, ListItem} from "material-ui";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";


class ChatList extends React.Component {
    handleChangeChat = (chatId) => {
        this.props.push(`/chat/${chatId}`);
    }

    render() {
        const chats = [];
        for (const chatId in this.props.messageLists) {
            chats.push(
                <ListItem
                    primaryText={'Чат №' + chatId}
                    secondaryText={this.props.messageLists[chatId].length || '0'}
                    onClick={() => this.handleChangeChat(chatId)}
                />
            )
        }
        return (
            <List>
                {chats}
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

