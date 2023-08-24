import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
    let navigate = useNavigate();
  
    const addTransaction = (newTransaction) => {
      console.log(newTransaction)
      console.log(`${API}/transactions`)
      axios
        .post(`${API}/transactions`, newTransaction)
        .then(
          () => {
            navigate(`/transactions`);
            
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const [transaction, setTransaction] = useState({
      date: "",
      name: "",
      amount: "",
      source: "",
    });
  
    const handleTextChange = (event) => {
      setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction(transaction);
    };

    return (
  
        <div className="New">
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              value={transaction.date}
              type="text"
              onChange={handleTextChange}
              placeholder="xx/xx/xxxx"
              required
            />
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              required
              value={transaction.name}
              placeholder="Ex: Rent, Groceries..."
              onChange={handleTextChange}
            />
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="text"
              name="amount"
              value={transaction.amount}
              placeholder="0"
              onChange={handleTextChange}
            />
            <label htmlFor="source">Source:</label>
            <input
              id="source"
              type="text"
              name="source"
              value={transaction.source}
              placeholder="Ex: Checking Acc, Savings Acc"
              onChange={handleTextChange}
            />
      
            <br />
            <input type="submit" />
          </form>
        </div>
      );

}

export default TransactionNewForm;