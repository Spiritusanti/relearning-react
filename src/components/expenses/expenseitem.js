import { useState } from "react";
import "./expenseitem.style.css";
import ExpenseDate from "./expenseDate";
import Card from "../UI/card";

const ExpenseItem = (props) => {
  const [state, setstate] = useState(props);

  const clickHandler = () => {
    setstate({ date: state.date, title: "HamaKabula!", amount: state.amount });
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={state.date} />
      <div className="expense-item__description">
        <h2>{state.title}</h2>
        <div className="expense-item__price">{`$${state.amount}`}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
