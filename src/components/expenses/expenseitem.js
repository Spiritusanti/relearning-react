import "./expenseitem.style.css";
import ExpenseDate from './expenseDate';
import Card from "../UI/card";

const ExpenseItem = (props) => {
  const { date, title, amount } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
