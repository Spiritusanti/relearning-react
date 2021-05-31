import {useState} from 'react';
import "./App.css";
import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import { expenses } from "./expense-data";
const App = () => {
  const [expenses, setExpenses] = useState([])
  const addExpensehandler = expense => {
    setExpenses((prevState) => {
     return [...prevState, expense]
    })
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
