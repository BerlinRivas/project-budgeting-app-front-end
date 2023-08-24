import React, { useState } from "react";
import Transactions from "../components/Transactions";

function Index() {
  const [totalAmount, setTotalAmount] = useState(0); 

  return (
    <div className="Index">
      <h1 className="index-txt">Total Amount Spent: -${totalAmount.toFixed(2)}</h1>
      <Transactions setTotalAmount={setTotalAmount} />
    </div>
  );
}

export default Index;

