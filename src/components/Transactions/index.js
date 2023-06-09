import PropTypes from 'prop-types'
import Transaction from '../Transaction/index.js'

const Transactions = ({ transactions = [] }) => transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)

Transactions.propTypes = {
    transactions: PropTypes.array
}

export default Transactions