import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const newExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.floor(Math.random() * 1000)
    }
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={newExpenseHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
