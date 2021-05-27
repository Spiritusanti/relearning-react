import "./expenseitem.style.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 30th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$265.98</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
