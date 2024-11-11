import React from "react";

function ExpenseOverview({totalExpenses, remainingExpense}){
    return(
        <div className="expense-overveiw">
                <h2>overveiw Of Your Monthly Expense</h2>
                <p>Total Expense: Rs.{totalExpenses}</p>
                <p>Remaining Budget: Rs.{remainingExpense}</p>
        </div>
    );
}

export default ExpenseOverview;