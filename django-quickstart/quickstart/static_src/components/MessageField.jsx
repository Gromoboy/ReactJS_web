import React from 'react'
import Message from './Message'
import TextField from 'material-ui/TextField'
import SendBtn from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/MessageField.sass';
import {countAll} from "../actions/countActions";
// import PropTypes from ''

import {sendMessage, replayMessage} from "../actions/messageActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class MessageField extends React.Component {
    // static propTypes = {
    //   chatId: PropTypes.string.isRequired,
    //   sendMessage: PropTypes.func.isRequired,
    //   replayMessage: PropTypes.func.isRequired,
    //   messageLists: PropTypes.shape.isRequired,
    //   messages: PropTypes.shape.isRequired
    // }

    state = {

        input: '',

    };

    getCurTime = () => {
        return new Date().toLocaleTimeString();
    }

    handleSendMess = () => {
        let {input} = this.state;
        // if(input !== '') this.addMessage( input,'me');
        this.props.sendMessage(this.props.chatId, input, this.getCurTime());
        this.setState({input: ''});
        this.props.countAll(input);
    };

    handleInput = e => {
        this.setState({input: e.target.value});
    };
    // использование горячей клавиши Enter для ввода сообщения пользователя
    handleEnter = e => {
        if (e.keyCode === 13) {
            //e.ctrlKey &&
            e.preventDefault();
            document.getElementById('send-btn').click();
        }
    }

    render() {
        const {messageLists, messages, chatId} = this.props;
        const messagesComponents = messageLists[chatId].map((messageId) => {
            const {message, sender, time, chatId} = messages[messageId];

            return <Message
                key={messageId + '-' + time}
                message={message}
                sender={sender}
                time={time}
                chatId={chatId}
            />
        });
        return (
            <div className="chat-container">
                {
                    messageLists[chatId].length === 0
                    && <div style={{opacity: 0.5}}>
                        Пока нет ни одного сообщения
                    </div>
                }
                <div className="message-field">
                    {messagesComponents}
                </div>
                <form action="#" className="send-mess-form">

                    <TextField name="input"
                               hintText="Написать сообщение"
                               value={this.state.input}
                               onChange={this.handleInput}
                               onKeyDown={this.handleEnter}
                    />
                    <SendBtn mini={true}
                             disabled={this.state.input === '' ? true : false}
                             id="send-btn"
                             onClick={this.handleSendMess}>
                        <SendIcon/>
                    </SendBtn>
                </form>
            </div>
        )
    };


    componentDidUpdate(prevProps) {}
}

// прокид в Redux
//можно передавать внутрь весь state (state) тогда обращение внутри
//state.messageReducer.messages, если нужен один объект можно
// записать как ниже
const mapStateToProps = ({messageReducer}) => ({
    messageLists: messageReducer.messageLists,
    messages: messageReducer.messages,
});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage, replayMessage, countAll}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);