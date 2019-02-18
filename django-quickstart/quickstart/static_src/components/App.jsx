import React from 'react';
import '../styles.css';

export default class App extends React.Component {
    componentDidMount () {
        console.log('It works!');
    }

    constructor() {
        super();
        this.state = {
            date: 'Date:'
        }
        this.onClick = () => {
            let now = new Date();

            this.setState({date: `Today is ${now.toDateString()}` });
        };
    }


    render() {
        return (
            <div className="test-class">
                {this.state.date}
                <br/>
                { this.props.param }
                <br/>
                <button onClick={this.onClick}>Какой сегодня день?</button>
            </div>
        )
    }
}
