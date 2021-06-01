import { useState } from "react";
import "./ExpenseForm.style.css";

const ExpenseForm = ({ onSaveExpenseData, toggle }) => {
  /* using multiple state slices */
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  /* using a single state object */
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    /* options for using a single state object */
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    /* Use the following function syntax whenever your state depends on the prevState  */
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    /* options for using a single state object */
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    /* Use the following function syntax whenever your state depends on the prevState  */
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    /* options for using a single state object */
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    /* Use the following function syntax whenever your state depends on the prevState  */
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    toggle();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={toggle}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
