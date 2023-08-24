import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate()
  
    const handleDelete = () => {
      deleteTransaction();
    };
  
    const deleteTransaction = () => {
      axios
        .delete(`${API}/transactions/${id}`)
        .then(
          () => {
            navigate(`/transactions`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    useEffect(() => {
      axios
        .get(`${API}/transactions/${id}`)
        .then((response) => {
          console.log(response.data);
          setTransaction(response.data);
        })
        .catch((c) => {
          console.warn("catch", c);
        });
    }, [id, API]);


    return (
        <article>
        <h3><span>⭐️</span>{transaction.name}</h3>
        <h5>
          <span>
            <h1>{transaction.name}</h1>
          </span>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {transaction.url} */}
        </h5>
        {/* <h6>{transaction.genre}</h6> */}
        {/* <p>{transaction.description}</p> */}
        <div className="showNavigation">
          <div>
            <Link to={`/transactions`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/transactions/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      );
}
export default TransactionDetails;