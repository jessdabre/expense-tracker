import React,{useState} from "react";

function ExpenseForm({addExpense}){
    const[category, setCategory]=useState('');
    const[amount, setAmount]=useState('');
    const[date, setDate]=useState('');

    const handleExpense=()=>{
        const expense={category, amount:parseFloat(amount), date};
    
    addExpense(expense);
    setCategory('');
    setAmount('');
    setDate('');
    };
    return(
        <div className="expense-form">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        <option value="food">Food</option>
        <option value="utilities">Utilities</option>
        <option value="transportation">Transportation</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleExpense}>Add Expense</button>
    </div>
    )
};


export default ExpenseForm;