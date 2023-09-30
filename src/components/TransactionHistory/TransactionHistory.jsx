// import transactions from './transactions.json';
import styles from './TransactionHistory.module.css'


export const TransactionHistiry = (props) => {
  return (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map(transaction => {
        return (
          <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}