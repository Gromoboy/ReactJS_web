import React from 'react'
import Message from './Message'

class MessageField extends React.Component {
  state = {
    curId: 1,
    messageList: [],
    messages: {},
    input: '',

  };

  handleSendMess = () => {

    this.addMessage(this.state.input, 'me');
  };

  addMessage = (msg, sender, doResetInput = true) => {
    const messages = { ...this.state.messages };
    messages[this.state.curId] = { sender: sender, message: msg, time: new Date().toString().slice(16,24) };
    const messageList = this.state.messageList.slice();
    messageList.push(this.state.curId);

    const curId = this.state.curId + 1;
    if (doResetInput) this.setState({input:''});
    this.setState({ messageList, messages, curId });
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleEnter = e => {
    if (e.ctrlKey && e.keyCode === 13) {
      e.preventDefault();
      document.getElementById('sendBtn').click();
    }
  }

  render() {
    const messages = this.state.messageList.map((messageId) => {
      const msg = this.state.messages[messageId].message;
      const sender = this.state.messages[messageId].sender;
      const mesTime = this.state.messages[messageId].time;
      return <Message message={msg} key={messageId + msg} sender={sender} time={mesTime} />
    });
    return (
      <div>
        {this.state.messages.length === 0 && <div style={{ opacity: 0.5 }}>Пока нет ни одного сообщения</div>}
        {messages}
        <form action="#">
        
          <input value={this.state.input} onChange={this.handleInput} onKeyUp={this.handleEnter} />
          <button id="sendBtn" onClick={this.handleSendMess}>Отправить сообщение</button>
        </form>
      </div>
    )
  }


  componentDidUpdate(prevProps, prevState) {
    const lastMessage = this.state.messageList.slice(-1)[0];
    const sender = this.state.messages[lastMessage] ? this.state.messages[lastMessage].sender : '';
    if (prevState.messageList.length < this.state.messageList.length && sender === 'me') {

      setTimeout(() => this.addMessage("Отвали, кожанный", 'бот', false), 2000);
    }
  }
}

export default MessageField;