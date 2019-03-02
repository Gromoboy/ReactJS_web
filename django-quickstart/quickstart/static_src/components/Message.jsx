import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

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
      <Chip className={'msg ' + this.props.sender} style={{margin: 2,whiteSpace:'normal'}} >
        <span className='name'>{this.props.sender}:</span>
        {/*<hr/>*/}
        <span className='msg-content'>{this.props.message}</span>
        <span className='msgTime'>|{this.props.time}</span>
      </Chip>
    );
  }
}

export default Message;