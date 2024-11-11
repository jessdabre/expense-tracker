import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>Rs.{expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
