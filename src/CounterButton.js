import React from 'react'
import './CounterButton.css'

class CounterButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (<div>
            <h1>{this.state.counter}</h1>
            <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Increment</button>
            <button onClick={() => { this.setState({ counter: 0 }) }}>Reset</button>
        </div>
        )
    }
}

export default CounterButton;