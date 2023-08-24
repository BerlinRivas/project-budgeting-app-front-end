import { Link } from "react-router-dom";

function Transaction({ transaction }) {
  return (
    <div className="transaction">
    <tr>
      <td>
        {transaction.name ? (
          <span>-</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <h2 >
          {transaction.date} {transaction.name}: -{transaction.amount}
        </h2>
      </td>
      <td>
        <Link className="change-btn" to={`/transactions/${transaction.id}`}>Change</Link>
      </td>
    </tr>
    </div>
  );
}

export default Transaction;