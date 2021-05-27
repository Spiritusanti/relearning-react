import "./expenseitem.style.css";
import ExpenseDate from './expenseDate';

const ExpenseItem = (props) => {
  const { date, title, amount } = props;
  console.log(date, title, amount);
  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
