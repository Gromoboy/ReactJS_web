import React from 'react';
import {List, ListItem} from "material-ui";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import ChatAdd from 'material-ui/svg-icons/content/add';
import {addChat} from "../actions/messageActions";


class ChatList extends React.Component {
    handleChangeChat = (chatId) => {
        this.props.push(`/chat/${chatId}`);
    }
    handleAddChat = () => {
        this.props.addChat();
    }

    render() {
        const chats = [];
        for (const chatId in this.props.messageLists) {
            chats.push(
                <ListItem
                    primaryText={chatId}
                    secondaryText={this.props.messageLists[chatId].length || '0'}
                    onClick={() => this.handleChangeChat(chatId)}
                    style={this.props.chatId === chatId ? {backgroundColor:'lightskyblue',} :''}
                />
            )
        }

        return (
            <List>
                <h3> Список чатов:</h3>
                <hr/>
                {chats}
                <ListItem
                    primaryText='Добавить новый чат'
                    leftIcon={<ChatAdd/>}
                    onClick={this.handleAddChat}
                />
            </List>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.countReducer.data,
    allMessCount: state.countReducer.allMessCount,
    messageLists: state.messageReducer.messageLists,
});

const mapDispatchToProps = dispatch => bindActionCreators({push, addChat}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ChatList);

