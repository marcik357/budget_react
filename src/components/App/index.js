import React from 'react';
import Balance from "../Balance/index.js";
import Transactions from "../Transactions/index.js";
import Form from "../Form/index.js";

import { Wrapper, GlobalStyle } from './style.js';

let id = 0

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            balance: 0,
            transactions: [],
        }
    }

    onChange = (value) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [{ value, label: 'change', id: ++id }, ...state.transactions]
        }))
    }

    render() {
        return (
            <Wrapper>
                <GlobalStyle/>
                <Balance balance={this.state.balance} />
                <Form onChange={this.onChange} />
                <hr />

                <Transactions transactions={this.state.transactions} />
            </Wrapper>
        )
    }
}

export default App