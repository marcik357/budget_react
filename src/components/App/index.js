import React from 'react';
import User from "../User/index.js";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Anton',
            date: Date.now(),
            age: 33
        }
    }

    render() {
        return (
            <div>
                <User name={this.state.name}
                    age={this.state.date} />
                <User name='Sonia' age='27' />
            </div>
        )
    }
}

export default App