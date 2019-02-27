import React from 'react'
import Message from './Message'
import TextField from 'material-ui/TextField'
import SendBtn from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/MessageField.sass'

class MessageField extends React.Component {
  state = {
    lastId: 0,
    messageLists: {1: [], 2: [], 3: []},
    messages: {},
    input: '',

  };

  getCurTime = () => {
      return new Date().toLocaleTimeString();
  }

  handleSendMess = () => {
    let {input} = this.state;
    if(input !== '') this.addMessage( input,'me');
  };
  /**
   * обновление стэйта новым сообщением(пополнения списка сообщений)
   * @param msg - новое сообщение
   * @param sender - автор сообщения
   * @param doResetInput - обнуление поля ввода (бот посылает сообщение с задержкой
   *  - это запрет боту на стирание поля ввода пользователя)
   */
  addMessage = (msg, sender, doResetInput = true, chatId = this.props.chatId) => {
    const messages = { ...this.state.messages };//неглубокое копирование обЪекта
    const messageLists = {...this.state.messageLists};
    const messageList = [...messageLists[chatId]];//неглубокое коп-ие массива
    let {lastId} = this.state;

    lastId++;
    messageList.push(lastId);
    messageLists[chatId] = messageList;
    messages[lastId] = {
      sender: sender,
      message: msg,
      time: this.getCurTime(),
      chatId: chatId
    };

    if (doResetInput) this.setState({input:''});
    this.setState({ messageLists, messages, lastId});
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };
  // использование горячей клавиши Enter для ввода сообщения пользователя
  handleEnter = e => {
    if ( e.keyCode === 13) {
      //e.ctrlKey &&
      e.preventDefault();
      document.getElementById('send-btn').click();
    }
  }

  render() {
    const messagesComponents = this.state.messageLists[this.props.chatId].map((messageId) => {
      const {message, sender, time, chatId} = this.state.messages[messageId];

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
          this.state.messageLists[this.props.chatId].length === 0
            && <div style={{ opacity: 0.5 }}>
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
            <SendIcon />
          </SendBtn>
        </form>
      </div>
    )
  }


  componentDidUpdate(prevProps, prevState) {
    const lastMessage = this.state.messageLists[this.props.chatId].slice(-1)[0];
    const sender = this.state.messages[lastMessage] ? this.state.messages[lastMessage].sender : '';
    if (prevState.messageLists[this.props.chatId].length < this.state.messageLists[this.props.chatId].length && sender === 'me') {
      const chatId = this.props.chatId;
      setTimeout(() => this.addMessage("Отвали, кожанный", 'бот', false, chatId), 2000);
    }
  }
}

export default MessageField;