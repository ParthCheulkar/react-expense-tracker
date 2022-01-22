import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const [count, setCount] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // lifting the state up, getting our form data
    setCount(false);
  };
  const stopEditingHandler = () => {
    setCount(false);
  };
  return (
    <div className="new-expense">
      {!count && (
        <button onClick={() => setCount(true)}>Add New Expense</button>
      )}
      {count && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
