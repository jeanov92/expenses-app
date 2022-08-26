import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  let expenses = props.expenses;

  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
