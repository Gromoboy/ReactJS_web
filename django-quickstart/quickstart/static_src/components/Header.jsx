import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static propTypes = {
        messagesCount: PropTypes.number,
    };
    static defaultProps = {
        messagesCount: 0,
    };

    render() {
        return (
            <div>{this.props.messagesCount}</div>
        );
    };
}

export default Header;