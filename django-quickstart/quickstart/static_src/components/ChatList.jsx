import React from 'react';
import {List, ListItem} from "material-ui";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import ChatAdd from 'material-ui/svg-icons/content/add';
import {addChat} from "../actions/messageActions";
import {TextField} from "material-ui";


class ChatList extends React.Component {
    state = {
        isNewChatAdding: false,
    }
    handleChangeChat = (chatId) => {
        this.props.push(`/chat/${chatId}`);
    }
    handleAddChat = () => {
        let isNewChatAdding = true;
        this.setState({isNewChatAdding});
    }
    handleEnter = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            let isNewChatAdding = false;
            this.props.addChat(e.target.value);
            this.setState({isNewChatAdding});
        }
    }

    render() {
        const chats = [];
        let itr = 0;
        for (const chatId in this.props.messageLists) {
            itr++;
            chats.push(
                <ListItem
                    key={itr + ':' + chatId}
                    primaryText={chatId}
                    secondaryText={this.props.messageLists[chatId].length || '0'}
                    onClick={() => this.handleChangeChat(chatId)}
                    style={this.props.chatId === chatId ? {backgroundColor: 'lightskyblue',} : {}}
                />
            )
        }

        return (
            <List style={{padding:5, }}>
                <h3> Список чатов:</h3>
                <hr/>
                {chats}
                {
                    /* new chat add*/
                    this.state.isNewChatAdding ?
                        <TextField name='chat-name-input'
                                   hintText='Имя нового чата'
                                   fullWidth={true}
                                   onKeyDown={this.handleEnter}
                        /> :
                        <ListItem
                            primaryText='Добавить новый чат'
                            leftIcon={<ChatAdd/>}
                            onClick={this.handleAddChat}
                        />
                }
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

