import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const newExpenseHandler = (expense) => {
    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={newExpenseHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
