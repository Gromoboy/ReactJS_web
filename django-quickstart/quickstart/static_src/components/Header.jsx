import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Header extends React.Component {
    // static propTypes = {
    //     messagesCount: PropTypes.number,
    // };
    // static defaultProps = {
    //     messagesCount: 0,
    // };

    render() {
        return (
            <div className="header">Сообщение №{this.props.allMessCount}: {this.props.data}</div>
        );
    };
}

const mapStateToProps = ({countReducer}) => ({
    data: countReducer.data,
    allMessCount: countReducer.allMessCount,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

