import { useState } from "react";
import ExpenseItem from "./expenseitem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/card";
import "./expenses.style.css";

const Expenses = (props) => {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState("2021");

  const filterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
    console.log(filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterHandler={filterHandler} />
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
      </Card>
    </div>
  );
};

export default Expenses;
