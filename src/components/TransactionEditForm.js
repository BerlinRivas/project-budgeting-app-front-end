import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function TransactionEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();
  
    const [transaction, setTransaction] = useState({
      date: "",
      name: "",
      amount: "",
      source: "",
    });

    useEffect(() => {
      axios.get(`${API}/transactions/${id}`).then(
        (response) => {console.log(response.data)
          setTransaction(response.data)},
        
        (error) => navigate(`/not-found`)
      );
    }, [id, navigate]);
  
    const updateTransaction = (updatedTransaction) => {
      axios
        .put(`${API}/transactions/${id}`, updatedTransaction)
        .then(
          () => {
            navigate(`/transactions/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      updateTransaction(transaction, id);
    };
    return (
        <div className="Edit">
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
              placeholder="Ex: John Doe"
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
              placeholder="Ex: Kevin Mitnick"
              onChange={handleTextChange}
            />
    
            <br />
    
            <input type="submit" />
          </form>
          <Link to={`/transactions/${id}`}>
            <button className="back-btn">Back</button>
          </Link>
        </div>
      );
}

export default TransactionEditForm;