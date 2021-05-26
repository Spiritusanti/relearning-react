import React from "react";
import "./expenseitem.style.css";

const ExpenseItem = () => {
  return (
    <div className="expense_item--container">
      <div>March 30th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$265.98</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
