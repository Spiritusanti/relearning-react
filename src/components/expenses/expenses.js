import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/card";
import "./expenses.style.css";
import ExpensesList from "./expensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList  filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
