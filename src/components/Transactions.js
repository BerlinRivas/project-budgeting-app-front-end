import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Transactions({ setTotalAmount }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);

        
        const totalAmount = response.data.reduce(
          (sum, transaction) => sum + parseFloat(transaction.amount || 0),
          0
        );

        setTotalAmount(totalAmount);
      })
      .catch((e) => console.error("catch", e));
  }, [setTotalAmount]);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              {/* ... */}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;

