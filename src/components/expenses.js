import "./expenses.style.css";
import ExpenseItem from "./expenseitem";

const Expenses = (props) => {
  const { expenses } = props;
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
