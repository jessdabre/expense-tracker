import React, {useState} from 'react';
import BugdetSetter from './BugdetSetter';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseOverview from './ExpenseOverview';
import './App.css';

function App() {
 const [budget, setBudget] = useState(0);
 const [expenses, setExpenses] = useState([]);

 const addExpense = (expense) => {
  setExpenses([...expenses, expense]);
};
const calculateTotalExpenses=()=>{
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};
const totalExpenses = calculateTotalExpenses();
const remainingBudget = budget - totalExpenses;
return(
  <div className="App">
  <h1>Personal Budget Tracker</h1>
  <BugdetSetter setBudget={setBudget} />
  <ExpenseForm addExpense={addExpense} />
  <ExpenseOverview totalExpenses={totalExpenses} remainingBudget={remainingBudget} />
  <ExpenseList expenses={expenses} />
  </div>
)
}
export default App;
