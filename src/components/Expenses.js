import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  let expenses = props.expenses;

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem    
            key={expense.title}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
