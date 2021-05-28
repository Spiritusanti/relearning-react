import "./App.css";
import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./expense-data";
const App = () => {
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
