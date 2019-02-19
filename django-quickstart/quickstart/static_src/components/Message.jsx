import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {

  static propTypes = {
    // id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  };
  static defaultProps = {
    message: 'Привет, кожанный',
  };

  render() {
    return (
      <div class={'msg ' + this.props.sender}>
        <p class='name'>{this.props.sender}:</p>
        <p class='msg-content'>{this.props.message}</p>
        <p class='msgTime'>{this.props.time}</p>
      </div>
    );
  }
}

export default Message;