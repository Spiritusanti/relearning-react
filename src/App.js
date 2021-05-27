import "./App.css";
import Expenses from "./components/expenses";
import { expenses } from "./expense-data";
function App() {
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
