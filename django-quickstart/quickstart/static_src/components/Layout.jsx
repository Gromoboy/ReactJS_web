import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './MessageField';
import ChatList from './ChatList';
import '../styles/layout.sass';
import Header from './Header';

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string.isRequired,
    }
    static defaultProps = {
        chatId: 'Общий',
    }



    render() {
        return (
            [
                <Header  />,

                <div className="layout">
                    <div className="layout-left-side">
                        {/*<Link to="/chat/10/">Список чатов</Link>*/}
                        <ChatList chatId={this.props.chatId}/>
                    </div>
                    <div className="layout-right-side">
                        <MessageField chatId={this.props.chatId}/>
                    </div>
                </div>
            ]

        )
    }
}

export default Layout;