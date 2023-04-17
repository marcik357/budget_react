import React from 'react';
import Balance from "../Balance/index.js";
import Transactions from "../Transactions/index.js";
import Transaction from "../Transaction/index.js";

let id = 0

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            balance: 0,
            transactions: [],
        }
    }

    onIncrease = () => {
        this.setState((state) => ({
            balance: state.balance + 1,
            transactions: [{
                label: 'increase',
                value:1,
                id: ++id,
            }, ...state.transactions],
        }))
    }

    onDecrease = () => {
        this.setState((state) => ({
            balance: state.balance + 1,
            transactions: [{
                label: 'decrease',
                value: -1,
                id: ++id,
            }, ...state.transactions],
        }))
    }

    render() {
        return (
            <div>
                <Balance balance={this.state.balance} />
                <button onClick={this.onIncrease}>Add 1</button>
                <button onClick={this.onDecrease}>Minus 1</button>
                <hr/>

                <Transactions transactions={this.state.transactions}/>
            </div>
        )
    }
}

export default App