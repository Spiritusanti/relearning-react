import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/card";
import "./expenses.style.css";
import ExpensesList from "./expensesList";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filteredExpenses =
    filterYear !== "Select Year"
      ? expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filterYear
        )
      : expenses;

  const filterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterHandler={filterHandler} />
        <ExpensesList  filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
