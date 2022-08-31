import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const newExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const cancelHandler = () => {
    setShowForm(false);
  };

  const newExpenseButtonHandler = (event) => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpense={newExpenseHandler} onCancel={cancelHandler}></ExpenseForm>
      ) : (
        <button onClick={newExpenseButtonHandler}>Add new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
