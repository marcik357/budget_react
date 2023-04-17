import Transaction from '../Transaction/index.js'

const Transactions = (props) => (
    <div>
        {
            props.transactions.map((transaction,index) => <Transaction key={index} transaction={transaction} />)
        }
    </div>
)

export default Transactions