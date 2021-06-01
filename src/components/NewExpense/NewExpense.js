import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.style.css";

const NewExpense = ({ onAddExpense }) => {
  const [formToggle, setFormToggle] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  // flip boolean based on current state
  const toggleHandler = () => {
    setFormToggle(!formToggle);
  };

  return (
    <div className="new-expense">
      {/* 
        render content based on formToggle state using ternary operator 
        pass down toggleHandler to children
      */}
      {formToggle ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggle={toggleHandler}
        />
      ) : (
        <button onClick={toggleHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
