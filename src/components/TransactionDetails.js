import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  const deleteTransaction = (id) => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = () => {
    deleteTransaction(id);
  };

  useEffect(() => {
    console.log("requesting transaction")
    console.log(id)
    console.log(API)
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => {
        console.log(response.data);
        setTransaction(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, [id, API]);

  return (
    <article>
      <h3 className="transaction-detail">
       
        {transaction.name}: -${transaction.amount}
        
      </h3>
      <h5>
        <span>
          <h1 className="transaction-detail">{transaction.date}-{transaction.source}</h1>
        </span>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {transaction.url} */}
      </h5>
      {/* <h6>{transaction.genre}</h6> */}
      {/* <p>{transaction.description}</p> */}
      <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            <button className="detail-btn">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${id}/edit`}>
            <button className="detail-btn">Edit</button>
          </Link>
        </div>
        <div>
          <button className="detail-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;
